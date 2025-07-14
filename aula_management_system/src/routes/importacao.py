from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from src.models.user import Aula, Reserva, User, db
from datetime import datetime
import csv
import io

importacao_bp = Blueprint('importacao', __name__)

@importacao_bp.route('/importar/reservas_csv', methods=['POST'])
@jwt_required()
def import_reservas_csv():
    """Endpoint para importar planilha CSV de dados das reservas (RF23, RF24)"""
    try:
        # Verificar se um arquivo foi enviado
        if 'file' not in request.files:
            return jsonify({'erro': 'Nenhum arquivo foi enviado'}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'erro': 'Nenhum arquivo selecionado'}), 400
        
        if not file.filename.lower().endswith('.csv'):
            return jsonify({'erro': 'Arquivo deve ser um CSV'}), 400
        
        # Ler o conteúdo do arquivo CSV
        stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
        csv_input = csv.DictReader(stream)
        
        # Contadores para relatório
        reservas_importadas = 0
        aulas_criadas = 0
        usuarios_criados = 0
        erros = []
        
        for row_num, row in enumerate(csv_input, start=2):  # Começar em 2 porque linha 1 é cabeçalho
            try:
                # Campos esperados no CSV (adaptar conforme necessário)
                # Exemplo de estrutura esperada:
                # usuario_nome, usuario_email, aula_nome, aula_tema, instrutor_email, data_hora, duracao_minutos, capacidade, primeira_aula
                
                required_fields = ['usuario_nome', 'usuario_email', 'aula_nome', 'aula_tema', 'instrutor_email', 'data_hora']
                
                # Verificar campos obrigatórios
                missing_fields = [field for field in required_fields if field not in row or not row[field].strip()]
                if missing_fields:
                    erros.append(f'Linha {row_num}: Campos obrigatórios ausentes: {", ".join(missing_fields)}')
                    continue
                
                # Processar usuário (aluno)
                usuario = User.query.filter_by(email=row['usuario_email'].strip()).first()
                if not usuario:
                    usuario = User(
                        nome=row['usuario_nome'].strip(),
                        email=row['usuario_email'].strip()
                    )
                    # Definir senha padrão para usuários importados
                    usuario.set_password('senha123')
                    db.session.add(usuario)
                    db.session.flush()  # Para obter o ID
                    usuarios_criados += 1
                
                # Processar instrutor
                instrutor = User.query.filter_by(email=row['instrutor_email'].strip()).first()
                if not instrutor:
                    instrutor = User(
                        nome=row.get('instrutor_nome', row['instrutor_email'].strip().split('@')[0]),
                        email=row['instrutor_email'].strip()
                    )
                    instrutor.set_password('senha123')
                    db.session.add(instrutor)
                    db.session.flush()
                    usuarios_criados += 1
                
                # Processar data e hora
                try:
                    data_hora = datetime.fromisoformat(row['data_hora'].strip())
                except ValueError:
                    try:
                        # Tentar outros formatos comuns
                        data_hora = datetime.strptime(row['data_hora'].strip(), '%d/%m/%Y %H:%M')
                    except ValueError:
                        erros.append(f'Linha {row_num}: Formato de data_hora inválido: {row["data_hora"]}')
                        continue
                
                # Processar aula
                aula = Aula.query.filter_by(
                    nome=row['aula_nome'].strip(),
                    data_hora=data_hora,
                    instrutor_id=instrutor.id
                ).first()
                
                if not aula:
                    aula = Aula(
                        nome=row['aula_nome'].strip(),
                        tema=row['aula_tema'].strip(),
                        instrutor_id=instrutor.id,
                        data_hora=data_hora,
                        duracao_minutos=int(row.get('duracao_minutos', 60)),
                        capacidade=int(row.get('capacidade', 20))
                    )
                    db.session.add(aula)
                    db.session.flush()
                    aulas_criadas += 1
                
                # Verificar se a reserva já existe
                reserva_existente = Reserva.query.filter_by(
                    usuario_id=usuario.id,
                    aula_id=aula.id
                ).first()
                
                if not reserva_existente:
                    # Criar reserva
                    primeira_aula = row.get('primeira_aula', '').strip().lower() in ['true', '1', 'sim', 'yes']
                    
                    reserva = Reserva(
                        usuario_id=usuario.id,
                        aula_id=aula.id,
                        primeira_aula=primeira_aula
                    )
                    
                    # Se houver data_reserva no CSV, usar ela
                    if 'data_reserva' in row and row['data_reserva'].strip():
                        try:
                            reserva.data_reserva = datetime.fromisoformat(row['data_reserva'].strip())
                        except ValueError:
                            try:
                                reserva.data_reserva = datetime.strptime(row['data_reserva'].strip(), '%d/%m/%Y %H:%M')
                            except ValueError:
                                pass  # Usar data padrão (agora)
                    
                    db.session.add(reserva)
                    reservas_importadas += 1
                
            except Exception as e:
                erros.append(f'Linha {row_num}: Erro ao processar: {str(e)}')
                continue
        
        # Commit das alterações
        db.session.commit()
        
        # Preparar relatório
        relatorio = {
            'status': 'success',
            'mensagem': 'Importação concluída',
            'estatisticas': {
                'reservas_importadas': reservas_importadas,
                'aulas_criadas': aulas_criadas,
                'usuarios_criados': usuarios_criados,
                'total_erros': len(erros)
            }
        }
        
        if erros:
            relatorio['erros'] = erros[:10]  # Limitar a 10 erros para não sobrecarregar a resposta
            if len(erros) > 10:
                relatorio['erros'].append(f'... e mais {len(erros) - 10} erros')
        
        return jsonify(relatorio), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': f'Erro durante a importação: {str(e)}'}), 500

@importacao_bp.route('/importar/template_csv', methods=['GET'])
@jwt_required()
def get_template_csv():
    """Endpoint para baixar template CSV para importação"""
    try:
        # Criar template CSV
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Cabeçalho do template
        headers = [
            'usuario_nome',
            'usuario_email',
            'aula_nome',
            'aula_tema',
            'instrutor_email',
            'instrutor_nome',
            'data_hora',
            'duracao_minutos',
            'capacidade',
            'primeira_aula',
            'data_reserva'
        ]
        
        writer.writerow(headers)
        
        # Linha de exemplo
        exemplo = [
            'João Silva',
            'joao@email.com',
            'Yoga Matinal',
            'Yoga',
            'maria@email.com',
            'Maria Instrutora',
            '2024-01-15T08:00:00',
            '60',
            '20',
            'true',
            '2024-01-10T10:00:00'
        ]
        
        writer.writerow(exemplo)
        
        # Criar resposta
        from flask import make_response
        response = make_response(output.getvalue())
        response.headers['Content-Type'] = 'text/csv'
        response.headers['Content-Disposition'] = 'attachment; filename=template_importacao_reservas.csv'
        
        return response
        
    except Exception as e:
        return jsonify({'erro': 'Erro ao gerar template'}), 500

