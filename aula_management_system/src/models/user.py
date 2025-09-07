from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid
import bcrypt

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'usuarios'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    senha_hash = db.Column(db.String(128), nullable=False)
    data_cadastro = db.Column(db.DateTime, default=datetime.utcnow)
    ativo = db.Column(db.Boolean, default=True)
    
    # Relacionamentos
    reservas = db.relationship('Reserva', backref='usuario', lazy=True)
    aulas_ministradas = db.relationship('Aula', backref='instrutor', lazy=True)

    def __repr__(self):
        return f'<User {self.nome}>'

    def set_password(self, password):
        """Criptografa e define a senha do usuário"""
        self.senha_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    def check_password(self, password):
        """Verifica se a senha fornecida está correta"""
        return bcrypt.checkpw(password.encode('utf-8'), self.senha_hash.encode('utf-8'))

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email,
            'data_cadastro': self.data_cadastro.isoformat() if self.data_cadastro else None,
            'ativo': self.ativo
        }

class Aula(db.Model):
    __tablename__ = 'aulas'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    nome = db.Column(db.String(100), nullable=False)
    tema = db.Column(db.String(100), nullable=False)
    instrutor_id = db.Column(db.String(36), db.ForeignKey('usuarios.id'), nullable=False)
    data_hora = db.Column(db.DateTime, nullable=False)
    duracao_minutos = db.Column(db.Integer, nullable=False)
    capacidade = db.Column(db.Integer, nullable=False)
    
    # Relacionamentos
    reservas = db.relationship('Reserva', backref='aula', lazy=True)

    def __repr__(self):
        return f'<Aula {self.nome}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'tema': self.tema,
            'instrutor': self.instrutor.to_dict() if self.instrutor else None,
            'data_hora': self.data_hora.isoformat() if self.data_hora else None,
            'duracao_minutos': self.duracao_minutos,
            'capacidade': self.capacidade
        }

class Reserva(db.Model):
    __tablename__ = 'reservas'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    usuario_id = db.Column(db.String(36), db.ForeignKey('usuarios.id'), nullable=False)
    aula_id = db.Column(db.String(36), db.ForeignKey('aulas.id'), nullable=False)
    data_reserva = db.Column(db.DateTime, default=datetime.utcnow)
    primeira_aula = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<Reserva {self.id}>'

    def to_dict(self):
        return {
            'id': self.id,
            'aula': self.aula.to_dict() if self.aula else None,
            'data_reserva': self.data_reserva.isoformat() if self.data_reserva else None,
            'primeira_aula': self.primeira_aula
        }

class MensagemAutomatizada(db.Model):
    __tablename__ = 'mensagens_automatizadas'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    nome = db.Column(db.String(100), nullable=False)
    conteudo = db.Column(db.Text, nullable=False)
    tipo = db.Column(db.String(50), nullable=False)  # 'informativo', 'promocional', 'aviso_reserva'
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    ativa = db.Column(db.Boolean, default=True)
    
    # Relacionamentos
    regras_envio = db.relationship('RegraEnvio', backref='mensagem', lazy=True)

    def __repr__(self):
        return f'<MensagemAutomatizada {self.nome}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'conteudo': self.conteudo,
            'tipo': self.tipo,
            'data_criacao': self.data_criacao.isoformat() if self.data_criacao else None,
            'ativa': self.ativa
        }

class RegraEnvio(db.Model):
    __tablename__ = 'regras_envio'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    mensagem_id = db.Column(db.String(36), db.ForeignKey('mensagens_automatizadas.id'), nullable=False)
    tipo_regra = db.Column(db.String(50), nullable=False)  # 'antes_aula', 'depois_aula', 'cadastro_usuario'
    valor_regra = db.Column(db.String(50), nullable=False)  # '1_dia', '30_minutos', 'boas_vindas'
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<RegraEnvio {self.id}>'

    def to_dict(self):
        return {
            'id': self.id,
            'mensagem_id': self.mensagem_id,
            'tipo_regra': self.tipo_regra,
            'valor_regra': self.valor_regra,
            'data_criacao': self.data_criacao.isoformat() if self.data_criacao else None
        }

class ConsultaFavorita(db.Model):
    __tablename__ = 'consultas_favoritas'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    usuario_id = db.Column(db.String(36), db.ForeignKey('usuarios.id'), nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    endpoint = db.Column(db.String(200), nullable=False)
    parametros = db.Column(db.Text, nullable=True)  # JSON string
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<ConsultaFavorita {self.nome}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'endpoint': self.endpoint,
            'parametros': self.parametros,
            'data_criacao': self.data_criacao.isoformat() if self.data_criacao else None
        }

