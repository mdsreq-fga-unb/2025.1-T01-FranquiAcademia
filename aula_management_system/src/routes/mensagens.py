from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from src.models.user import MensagemAutomatizada, db
from datetime import datetime

mensagens_bp = Blueprint('mensagens', __name__)

@mensagens_bp.route('/mensagens', methods=['GET'])
@jwt_required()
def get_mensagens():
    """Endpoint para consultar mensagens automatizadas (RF10)"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        nome = request.args.get('nome')
        franquia = request.args.get('franquia')  # Pode ser usado para filtrar por tipo
        
        # Construir query base
        query = MensagemAutomatizada.query
        
        # Aplicar filtros
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.filter(MensagemAutomatizada.data_criacao >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.filter(MensagemAutomatizada.data_criacao <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        if nome:
            query = query.filter(MensagemAutomatizada.nome.ilike(f'%{nome}%'))
        
        if franquia:
            query = query.filter(MensagemAutomatizada.tipo.ilike(f'%{franquia}%'))
        
        # Executar query
        mensagens = query.all()
        
        return jsonify([mensagem.to_dict() for mensagem in mensagens]), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@mensagens_bp.route('/mensagens', methods=['POST'])
@jwt_required()
def create_mensagem():
    """RF06: criar mensagem automatizada"""
    data = request.get_json()
    # validação de campos obrigatórios
    for field in ('nome', 'conteudo', 'tipo'):
        if not data or field not in data:
            return jsonify({'erro': f'Campo {field} é obrigatório'}), 400

    # validação de valores permitidos
    tipos_validos = ['informativo', 'promocional', 'aviso_reserva']
    if data['tipo'] not in tipos_validos:
        return jsonify({
            'erro': f'Tipo deve ser um dos: {", ".join(tipos_validos)}'
        }), 400

    # criar e salvar
    mensagem = MensagemAutomatizada(
        nome=data['nome'],
        conteudo=data['conteudo'],
        tipo=data['tipo']
    )
    db.session.add(mensagem)
    db.session.commit()

    return jsonify(mensagem.to_dict()), 201

@mensagens_bp.route('/mensagens/<mensagem_id>', methods=['GET'])
@jwt_required()
def get_mensagem(mensagem_id):
    """Endpoint para obter uma mensagem específica"""
    try:
        mensagem = MensagemAutomatizada.query.get_or_404(mensagem_id)
        return jsonify(mensagem.to_dict()), 200
    except Exception as e:
        return jsonify({'erro': 'Mensagem não encontrada'}), 404

@mensagens_bp.route('/mensagens/<mensagem_id>', methods=['PUT'])
@jwt_required()
def update_mensagem(mensagem_id):
    """Endpoint para editar mensagens automatizadas (RF08)"""
    try:
        mensagem = MensagemAutomatizada.query.get_or_404(mensagem_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'erro': 'Dados não fornecidos'}), 400
        
        # Validar tipo de mensagem se fornecido
        if 'tipo' in data:
            tipos_validos = ['informativo', 'promocional', 'aviso_reserva']
            if data['tipo'] not in tipos_validos:
                return jsonify({'erro': f'Tipo deve ser um dos seguintes: {", ".join(tipos_validos)}'}), 400
        
        # Atualizar campos
        mensagem.nome = data.get('nome', mensagem.nome)
        mensagem.conteudo = data.get('conteudo', mensagem.conteudo)
        mensagem.tipo = data.get('tipo', mensagem.tipo)
        
        db.session.commit()
        return jsonify(mensagem.to_dict()), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@mensagens_bp.route('/mensagens/<mensagem_id>', methods=['DELETE'])
@jwt_required()
def delete_mensagem(mensagem_id):
    """Endpoint para apagar mensagens automatizadas (RF09)"""
    try:
        mensagem = MensagemAutomatizada.query.get_or_404(mensagem_id)
        db.session.delete(mensagem)
        db.session.commit()
        return jsonify({'status': 'success', 'mensagem': 'Mensagem excluída.'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@mensagens_bp.route('/mensagens/<mensagem_id>/status', methods=['PATCH'])
@jwt_required()
def toggle_mensagem_status(mensagem_id):
    """Endpoint para ativar ou inativar mensagens automatizadas (RF11)"""
    try:
        mensagem = MensagemAutomatizada.query.get_or_404(mensagem_id)
        data = request.get_json()
        
        if not data or 'ativa' not in data:
            return jsonify({'erro': 'Campo ativa é obrigatório'}), 400
        
        if not isinstance(data['ativa'], bool):
            return jsonify({'erro': 'Campo ativa deve ser um valor booleano'}), 400
        
        mensagem.ativa = data['ativa']
        db.session.commit()
        
        return jsonify({
            'id': mensagem.id,
            'nome': mensagem.nome,
            'ativa': mensagem.ativa
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@mensagens_bp.route('/mensagens/<mensagem_id>/enviar', methods=['POST'])
@jwt_required()
def send_mensagem(mensagem_id):
    """Endpoint para enviar mensagens automatizadas (RF07)"""
    try:
        mensagem = MensagemAutomatizada.query.get_or_404(mensagem_id)
        
        if not mensagem.ativa:
            return jsonify({'erro': 'Mensagem está inativa'}), 400
        
        # Aqui seria implementada a lógica real de envio
        # Por exemplo, integração com serviços de email, SMS, etc.
        # Por enquanto, apenas retornamos sucesso
        
        return jsonify({'status': 'success', 'mensagem': 'Mensagem enviada.'}), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

