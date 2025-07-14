from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from src.models.user import Aula, User, db
from datetime import datetime

aulas_bp = Blueprint('aulas', __name__)

@aulas_bp.route('/aulas', methods=['GET'])
@jwt_required()
def get_aulas():
    """Endpoint para consultar aulas (RF04)"""
    try:
        # Obter parâmetros de filtro
        data_inicio = request.args.get('data_inicio')
        data_fim = request.args.get('data_fim')
        tema = request.args.get('tema')
        instrutor_id = request.args.get('instrutor_id')
        
        # Construir query base
        query = Aula.query
        
        # Aplicar filtros
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
        
        if tema:
            query = query.filter(Aula.tema.ilike(f'%{tema}%'))
        
        if instrutor_id:
            query = query.filter(Aula.instrutor_id == instrutor_id)
        
        # Executar query
        aulas = query.all()
        
        return jsonify([aula.to_dict() for aula in aulas]), 200
        
    except Exception as e:
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@aulas_bp.route('/aulas', methods=['POST'])
@jwt_required()
def create_aula():
    """Endpoint para criar uma nova aula"""
    try:
        data = request.get_json()
        
        required_fields = ['nome', 'tema', 'instrutor_id', 'data_hora', 'duracao_minutos', 'capacidade']
        for field in required_fields:
            if not data or field not in data:
                return jsonify({'erro': f'Campo {field} é obrigatório'}), 400
        
        # Verificar se o instrutor existe
        instrutor = User.query.get(data['instrutor_id'])
        if not instrutor:
            return jsonify({'erro': 'Instrutor não encontrado'}), 404
        
        # Converter data_hora
        try:
            data_hora = datetime.fromisoformat(data['data_hora'])
        except ValueError:
            return jsonify({'erro': 'Formato de data_hora inválido. Use YYYY-MM-DDTHH:MM:SS'}), 400
        
        aula = Aula(
            nome=data['nome'],
            tema=data['tema'],
            instrutor_id=data['instrutor_id'],
            data_hora=data_hora,
            duracao_minutos=data['duracao_minutos'],
            capacidade=data['capacidade']
        )
        
        db.session.add(aula)
        db.session.commit()
        
        return jsonify(aula.to_dict()), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@aulas_bp.route('/aulas/<aula_id>', methods=['GET'])
@jwt_required()
def get_aula(aula_id):
    """Endpoint para obter uma aula específica"""
    try:
        aula = Aula.query.get_or_404(aula_id)
        return jsonify(aula.to_dict()), 200
    except Exception as e:
        return jsonify({'erro': 'Aula não encontrada'}), 404

@aulas_bp.route('/aulas/<aula_id>', methods=['PUT'])
@jwt_required()
def update_aula(aula_id):
    """Endpoint para atualizar uma aula"""
    try:
        aula = Aula.query.get_or_404(aula_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'erro': 'Dados não fornecidos'}), 400
        
        # Verificar se o instrutor existe (se estiver sendo alterado)
        if 'instrutor_id' in data:
            instrutor = User.query.get(data['instrutor_id'])
            if not instrutor:
                return jsonify({'erro': 'Instrutor não encontrado'}), 404
        
        # Atualizar campos
        aula.nome = data.get('nome', aula.nome)
        aula.tema = data.get('tema', aula.tema)
        aula.instrutor_id = data.get('instrutor_id', aula.instrutor_id)
        aula.duracao_minutos = data.get('duracao_minutos', aula.duracao_minutos)
        aula.capacidade = data.get('capacidade', aula.capacidade)
        
        if 'data_hora' in data:
            try:
                aula.data_hora = datetime.fromisoformat(data['data_hora'])
            except ValueError:
                return jsonify({'erro': 'Formato de data_hora inválido. Use YYYY-MM-DDTHH:MM:SS'}), 400
        
        db.session.commit()
        return jsonify(aula.to_dict()), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

@aulas_bp.route('/aulas/<aula_id>', methods=['DELETE'])
@jwt_required()
def delete_aula(aula_id):
    """Endpoint para excluir uma aula"""
    try:
        aula = Aula.query.get_or_404(aula_id)
        db.session.delete(aula)
        db.session.commit()
        return '', 204
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': 'Erro interno do servidor'}), 500

