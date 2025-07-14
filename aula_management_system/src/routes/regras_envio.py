from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from src.models.user import RegraEnvio, MensagemAutomatizada, db

regras_bp = Blueprint('regras_envio', __name__)

@regras_bp.route('/regras_envio', methods=['GET'])
@jwt_required()
def get_regras_envio():
    """Endpoint para consultar regras de envio"""
    try:
        mensagem_id = request.args.get('mensagem_id')
        
        query = RegraEnvio.query
        
        if mensagem_id:
            query = query.filter(RegraEnvio.mensagem_id == mensagem_id)
        
        regras = query.all()
        
        return jsonify([regra.to_dict() for regra in regras]), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@regras_bp.route('/regras_envio', methods=['POST'])
@jwt_required()
def create_regra_envio():
    """Endpoint para criar regras de envio (RF12)"""
    try:
        data = request.get_json()
        
        required_fields = ['mensagem_id', 'tipo_regra', 'valor_regra']
        for field in required_fields:
            if not data or field not in data:
                return jsonify({'erro': f'Campo {field} é obrigatório'}), 400
        
        # Verificar se a mensagem existe
        mensagem = MensagemAutomatizada.query.get(data['mensagem_id'])
        if not mensagem:
            return jsonify({'erro': 'Mensagem não encontrada'}), 404
        
        # Validar tipo de regra
        tipos_validos = ['antes_aula', 'depois_aula', 'cadastro_usuario']
        if data['tipo_regra'] not in tipos_validos:
            return jsonify({'erro': f'Tipo de regra deve ser um dos seguintes: {", ".join(tipos_validos)}'}), 400
        
        regra = RegraEnvio(
            mensagem_id=data['mensagem_id'],
            tipo_regra=data['tipo_regra'],
            valor_regra=data['valor_regra']
        )
        
        db.session.add(regra)
        db.session.commit()
        
        return jsonify(regra.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@regras_bp.route('/regras_envio/<regra_id>', methods=['GET'])
@jwt_required()
def get_regra_envio(regra_id):
    """Endpoint para obter uma regra de envio específica"""
    try:
        regra = RegraEnvio.query.get_or_404(regra_id)
        return jsonify(regra.to_dict()), 200
    except Exception as e:
        return jsonify({'erro': 'Regra de envio não encontrada'}), 404

@regras_bp.route('/regras_envio/<regra_id>', methods=['PUT'])
@jwt_required()
def update_regra_envio(regra_id):
    """Endpoint para editar regras de envio (RF13)"""
    try:
        regra = RegraEnvio.query.get_or_404(regra_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'erro': 'Dados não fornecidos'}), 400
        
        # Validar tipo de regra se fornecido
        if 'tipo_regra' in data:
            tipos_validos = ['antes_aula', 'depois_aula', 'cadastro_usuario']
            if data['tipo_regra'] not in tipos_validos:
                return jsonify({'erro': f'Tipo de regra deve ser um dos seguintes: {", ".join(tipos_validos)}'}), 400
        
        # Atualizar campos
        regra.tipo_regra = data.get('tipo_regra', regra.tipo_regra)
        regra.valor_regra = data.get('valor_regra', regra.valor_regra)
        
        db.session.commit()
        return jsonify(regra.to_dict()), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@regras_bp.route('/regras_envio/<regra_id>', methods=['DELETE'])
@jwt_required()
def delete_regra_envio(regra_id):
    """Endpoint para apagar regras de envio (RF14)"""
    try:
        regra = RegraEnvio.query.get_or_404(regra_id)
        db.session.delete(regra)
        db.session.commit()
        return jsonify({'status': 'success', 'mensagem': 'Regra de envio excluída.'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

