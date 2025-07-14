from flask import Blueprint, jsonify, request, make_response
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.models.user import Reserva, Aula, User, ConsultaFavorita, db
from datetime import datetime, timedelta
from sqlalchemy import func, extract
import csv
import io
import json

dashboard_bp = Blueprint('dashboard', __name__)

@dashboard_bp.route('/dashboard/reservas', methods=['GET'])
@jwt_required()
def get_dados_reservas():
    """Endpoint para consultar dados de reservas (RF15)"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        agrupamento = request.args.get('agrupamento', 'diario')  # diario, semanal, mensal
        
        # Construir query base
        query = db.session.query(Reserva).join(Aula)
        
        # Aplicar filtros de data
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.filter(Aula.data_hora >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.filter(Aula.data_hora <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        # Total de reservas
        total_reservas = query.count()
        
        # Dados agrupados
        dados_agrupados = []
        
        if agrupamento == 'diario':
            resultados = db.session.query(
                func.date(Aula.data_hora).label('periodo'),
                func.count(Reserva.id).label('quantidade')
            ).join(Aula).group_by(func.date(Aula.data_hora)).all()
            
            dados_agrupados = [
                {'periodo': str(resultado.periodo), 'quantidade': resultado.quantidade}
                for resultado in resultados
            ]
        
        elif agrupamento == 'semanal':
            resultados = db.session.query(
                func.strftime('%Y-W%W', Aula.data_hora).label('periodo'),
                func.count(Reserva.id).label('quantidade')
            ).join(Aula).group_by(func.strftime('%Y-W%W', Aula.data_hora)).all()
            
            dados_agrupados = [
                {'periodo': resultado.periodo, 'quantidade': resultado.quantidade}
                for resultado in resultados
            ]
        
        elif agrupamento == 'mensal':
            resultados = db.session.query(
                func.strftime('%Y-%m', Aula.data_hora).label('periodo'),
                func.count(Reserva.id).label('quantidade')
            ).join(Aula).group_by(func.strftime('%Y-%m', Aula.data_hora)).all()
            
            dados_agrupados = [
                {'periodo': resultado.periodo, 'quantidade': resultado.quantidade}
                for resultado in resultados
            ]
        
        return jsonify({
            'total_reservas': total_reservas,
            'dados_agrupados': dados_agrupados
        }), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/primeiras_aulas', methods=['GET'])
@jwt_required()
def get_dados_primeiras_aulas():
    """Endpoint para consultar dados de primeiras aulas (RF16)"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        agrupamento = request.args.get('agrupamento', 'diario')
        
        # Construir query base - apenas primeiras aulas
        query = db.session.query(Reserva).join(Aula).filter(Reserva.primeira_aula == True)
        
        # Aplicar filtros de data
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.filter(Aula.data_hora >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.filter(Aula.data_hora <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        # Total de primeiras aulas
        total_primeiras_aulas = query.count()
        
        # Dados agrupados (similar ao endpoint de reservas)
        dados_agrupados = []
        
        if agrupamento == 'diario':
            resultados = db.session.query(
                func.date(Aula.data_hora).label('periodo'),
                func.count(Reserva.id).label('quantidade')
            ).join(Aula).filter(Reserva.primeira_aula == True).group_by(func.date(Aula.data_hora)).all()
            
            dados_agrupados = [
                {'periodo': str(resultado.periodo), 'quantidade': resultado.quantidade}
                for resultado in resultados
            ]
        
        return jsonify({
            'total_primeiras_aulas': total_primeiras_aulas,
            'dados_agrupados': dados_agrupados
        }), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/aulas_por_professor', methods=['GET'])
@jwt_required()
def get_dados_aulas_por_professor():
    """Endpoint para consultar dados de aulas por professor (RF17)"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        
        # Construir query
        query = db.session.query(
            User.id,
            User.nome,
            func.count(Aula.id).label('total_aulas')
        ).join(Aula, User.id == Aula.instrutor_id)
        
        # Aplicar filtros de data
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.filter(Aula.data_hora >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.filter(Aula.data_hora <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        resultados = query.group_by(User.id, User.nome).all()
        
        dados = [
            {
                'professor': {'id': resultado.id, 'nome': resultado.nome},
                'total_aulas': resultado.total_aulas
            }
            for resultado in resultados
        ]
        
        return jsonify(dados), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/horarios_reservas', methods=['GET'])
@jwt_required()
def get_dados_horarios_reservas():
    """Endpoint para consultar horários de maior reserva (RF18)"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        
        # Construir query
        query = db.session.query(
            func.strftime('%H:00', Aula.data_hora).label('horario'),
            func.count(Reserva.id).label('quantidade_reservas')
        ).join(Aula)
        
        # Aplicar filtros de data
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.filter(Aula.data_hora >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.filter(Aula.data_hora <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        resultados = query.group_by(func.strftime('%H:00', Aula.data_hora)).order_by(func.count(Reserva.id).desc()).all()
        
        dados = [
            {'horario': resultado.horario, 'quantidade_reservas': resultado.quantidade_reservas}
            for resultado in resultados
        ]
        
        return jsonify(dados), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/favoritos', methods=['GET'])
@jwt_required()
def get_consultas_favoritas():
    """Endpoint para listar consultas favoritas (RF20)"""
    try:
        current_user_id = get_jwt_identity()
        favoritos = ConsultaFavorita.query.filter_by(usuario_id=current_user_id).all()
        
        return jsonify([favorito.to_dict() for favorito in favoritos]), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/favoritos', methods=['POST'])
@jwt_required()
def create_consulta_favorita():
    """Endpoint para salvar consultas favoritas (RF20)"""
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        required_fields = ['nome', 'endpoint', 'parametros']
        for field in required_fields:
            if not data or field not in data:
                return jsonify({'erro': f'Campo {field} é obrigatório'}), 400
        
        favorito = ConsultaFavorita(
            usuario_id=current_user_id,
            nome=data['nome'],
            endpoint=data['endpoint'],
            parametros=json.dumps(data['parametros'])
        )
        
        db.session.add(favorito)
        db.session.commit()
        
        return jsonify({'id': favorito.id, 'nome': favorito.nome}), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/<tipo>/exportar/csv', methods=['GET'])
@jwt_required()
def export_dashboard_csv(tipo):
    """Endpoint para exportar dashboard em CSV (RF21)"""
    try:
        # Redirecionar para o endpoint apropriado baseado no tipo
        if tipo == 'reservas':
            response_data = get_dados_reservas()[0].get_json()
        elif tipo == 'primeiras_aulas':
            response_data = get_dados_primeiras_aulas()[0].get_json()
        elif tipo == 'aulas_por_professor':
            response_data = get_dados_aulas_por_professor()[0].get_json()
        elif tipo == 'horarios_reservas':
            response_data = get_dados_horarios_reservas()[0].get_json()
        else:
            return jsonify({'erro': 'Tipo de dashboard inválido'}), 400
        
        # Criar CSV
        output = io.StringIO()
        writer = csv.writer(output)
        
        if tipo in ['reservas', 'primeiras_aulas']:
            writer.writerow(['Periodo', 'Quantidade'])
            for item in response_data.get('dados_agrupados', []):
                writer.writerow([item['periodo'], item['quantidade']])
        elif tipo == 'aulas_por_professor':
            writer.writerow(['Professor ID', 'Professor Nome', 'Total Aulas'])
            for item in response_data:
                writer.writerow([item['professor']['id'], item['professor']['nome'], item['total_aulas']])
        elif tipo == 'horarios_reservas':
            writer.writerow(['Horario', 'Quantidade Reservas'])
            for item in response_data:
                writer.writerow([item['horario'], item['quantidade_reservas']])
        
        # Criar resposta
        response = make_response(output.getvalue())
        response.headers['Content-Type'] = 'text/csv'
        response.headers['Content-Disposition'] = f'attachment; filename={tipo}_dashboard.csv'
        
        return response
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@dashboard_bp.route('/dashboard/<tipo>/exportar/pdf', methods=['GET'])
@jwt_required()
def export_dashboard_pdf(tipo):
    """Endpoint para exportar dashboard em PDF (RF22)"""
    try:
        # Por simplicidade, retornamos uma mensagem indicando que a funcionalidade seria implementada
        # Em uma implementação real, usaríamos bibliotecas como ReportLab ou WeasyPrint
        return jsonify({
            'status': 'success',
            'mensagem': f'Exportação PDF para {tipo} seria implementada aqui'
        }), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

