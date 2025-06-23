from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.models.user import User, db

user_bp = Blueprint('user', __name__)

@user_bp.route('/usuarios', methods=['GET'])
@jwt_required()
def get_users():
    """Endpoint para listar todos os usuários"""
    try:
        users = User.query.all()
        return jsonify([user.to_dict() for user in users]), 200
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@user_bp.route('/usuarios', methods=['POST'])
def create_user():
    """Endpoint para cadastrar novos usuários (RF01)"""
    try:
        data = request.get_json()
        
        if not data or not data.get('nome') or not data.get('email') or not data.get('senha'):
            return jsonify({'erro': 'Nome, email e senha são obrigatórios'}), 400
        
        # Verificar se o email já existe
        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user:
            return jsonify({'erro': 'Email já cadastrado'}), 409
        
        user = User(nome=data['nome'], email=data['email'])
        user.set_password(data['senha'])
        
        db.session.add(user)
        db.session.commit()
        
        return jsonify(user.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@user_bp.route('/usuarios/<user_id>', methods=['GET'])
@jwt_required()
def get_user(user_id):
    """Endpoint para obter um usuário específico"""
    try:
        user = User.query.get_or_404(user_id)
        return jsonify(user.to_dict()), 200
    except Exception as e:
        return jsonify({'erro': 'Usuário não encontrado'}), 404

@user_bp.route('/usuarios/<user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    """Endpoint para editar usuários (RF02)"""
    try:
        user = User.query.get_or_404(user_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'erro': 'Dados não fornecidos'}), 400
        
        # Verificar se o email já existe (se estiver sendo alterado)
        if 'email' in data and data['email'] != user.email:
            existing_user = User.query.filter_by(email=data['email']).first()
            if existing_user:
                return jsonify({'erro': 'Email já cadastrado'}), 409
        
        user.nome = data.get('nome', user.nome)
        user.email = data.get('email', user.email)
        
        # Se uma nova senha foi fornecida, atualizá-la
        if 'senha' in data and data['senha']:
            user.set_password(data['senha'])
        
        db.session.commit()
        return jsonify(user.to_dict()), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@user_bp.route('/usuarios/<user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    """Endpoint para excluir um usuário"""
    try:
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return '', 204
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

