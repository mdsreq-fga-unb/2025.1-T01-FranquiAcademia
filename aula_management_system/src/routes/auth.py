from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from src.models.user import User, db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    """Endpoint para autenticação de usuários"""
    try:
        data = request.get_json()
        
        if not data or not data.get('email') or not data.get('senha'):
            return jsonify({'erro': 'Email e senha são obrigatórios'}), 400
        
        user = User.query.filter_by(email=data['email']).first()
        
        if user and user.check_password(data['senha']) and user.ativo:
            access_token = create_access_token(identity=user.id)
            return jsonify({
                'access_token': access_token,
                'token_type': 'bearer',
                'usuario': user.to_dict()
            }), 200
        else:
            return jsonify({'erro': 'Credenciais inválidas'}), 401
            
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@auth_bp.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    """Endpoint para obter informações do usuário autenticado"""
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        
        if user:
            return jsonify(user.to_dict()), 200
        else:
            return jsonify({'erro': 'Usuário não encontrado'}), 404
            
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

