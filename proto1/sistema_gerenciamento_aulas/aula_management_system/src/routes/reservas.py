from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.models.user import Reserva, Aula, User, db
from datetime import datetime

reservas_bp = Blueprint('reservas', __name__)

@reservas_bp.route('/reservas', methods=['GET'])
@jwt_required()
def get_reservas():
    """Endpoint para consultar reservas (RF05)"""
    try:
        current_user_id = get_jwt_identity()
        
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        primeira_aula = request.args.get('primeira_aula')
        instrutor_id = request.args.get('instrutor_id')
        
        # Construir query base - apenas reservas do usuário autenticado
        query = Reserva.query.filter_by(usuario_id=current_user_id)
        
        # Aplicar filtros
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.join(Aula).filter(Aula.data_hora >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.join(Aula).filter(Aula.data_hora <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        if primeira_aula is not None:
            primeira_aula_bool = primeira_aula.lower() == 'true'
            query = query.filter(Reserva.primeira_aula == primeira_aula_bool)
        
        if instrutor_id:
            query = query.join(Aula).filter(Aula.instrutor_id == instrutor_id)
        
        # Executar query
        reservas = query.all()
        
        return jsonify([reserva.to_dict() for reserva in reservas]), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@reservas_bp.route('/reservas', methods=['POST'])
@jwt_required()
def create_reserva():
    """Endpoint para criar uma nova reserva"""
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data or 'aula_id' not in data:
            return jsonify({'erro': 'aula_id é obrigatório'}), 400
        
        # Verificar se a aula existe
        aula = Aula.query.get(data['aula_id'])
        if not aula:
            return jsonify({'erro': 'Aula não encontrada'}), 404
        
        # Verificar se o usuário já tem uma reserva para esta aula
        existing_reserva = Reserva.query.filter_by(
            usuario_id=current_user_id,
            aula_id=data['aula_id']
        ).first()
        
        if existing_reserva:
            return jsonify({'erro': 'Usuário já possui reserva para esta aula'}), 409
        
        # Verificar capacidade da aula
        reservas_count = Reserva.query.filter_by(aula_id=data['aula_id']).count()
        if reservas_count >= aula.capacidade:
            return jsonify({'erro': 'Aula lotada'}), 409
        
        reserva = Reserva(
            usuario_id=current_user_id,
            aula_id=data['aula_id'],
            primeira_aula=data.get('primeira_aula', False)
        )
        
        db.session.add(reserva)
        db.session.commit()
        
        return jsonify(reserva.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@reservas_bp.route('/reservas/<reserva_id>', methods=['GET'])
@jwt_required()
def get_reserva(reserva_id):
    """Endpoint para obter uma reserva específica"""
    try:
        current_user_id = get_jwt_identity()
        reserva = Reserva.query.filter_by(id=reserva_id, usuario_id=current_user_id).first()
        
        if not reserva:
            return jsonify({'erro': 'Reserva não encontrada'}), 404
        
        return jsonify(reserva.to_dict()), 200
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@reservas_bp.route('/reservas/<reserva_id>', methods=['DELETE'])
@jwt_required()
def delete_reserva(reserva_id):
    """Endpoint para cancelar uma reserva"""
    try:
        current_user_id = get_jwt_identity()
        reserva = Reserva.query.filter_by(id=reserva_id, usuario_id=current_user_id).first()
        
        if not reserva:
            return jsonify({'erro': 'Reserva não encontrada'}), 404
        
        db.session.delete(reserva)
        db.session.commit()
        return '', 204
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@reservas_bp.route('/admin/reservas', methods=['GET'])
@jwt_required()
def get_all_reservas():
    """Endpoint para administradores consultarem todas as reservas"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        primeira_aula = request.args.get('primeira_aula')
        instrutor_id = request.args.get('instrutor_id')
        usuario_id = request.args.get('usuario_id')
        
        # Construir query base
        query = Reserva.query
        
        # Aplicar filtros
        if data_inicio:
            try:
                data_inicio_dt = datetime.fromisoformat(data_inicio)
                query = query.join(Aula).filter(Aula.data_hora >= data_inicio_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_inicio inválido. Use YYYY-MM-DD'}), 400
        
        if data_fim:
            try:
                data_fim_dt = datetime.fromisoformat(data_fim)
                query = query.join(Aula).filter(Aula.data_hora <= data_fim_dt)
            except ValueError:
                return jsonify({'erro': 'Formato de data_fim inválido. Use YYYY-MM-DD'}), 400
        
        if primeira_aula is not None:
            primeira_aula_bool = primeira_aula.lower() == 'true'
            query = query.filter(Reserva.primeira_aula == primeira_aula_bool)
        
        if instrutor_id:
            query = query.join(Aula).filter(Aula.instrutor_id == instrutor_id)
        
        if usuario_id:
            query = query.filter(Reserva.usuario_id == usuario_id)
        
        # Executar query
        reservas = query.all()
        
        return jsonify([reserva.to_dict() for reserva in reservas]), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

