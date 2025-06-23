# Guia de Instalação - Sistema de Gerenciamento de Aulas

## Pré-requisitos

### Sistema Operacional
- Linux (Ubuntu 20.04+ recomendado)
- macOS 10.15+
- Windows 10+ (com WSL2 recomendado)

### Software Necessário
- Python 3.11+
- Node.js 18+
- npm ou pnpm
- Git

## Instalação Passo a Passo

### 1. Clonar o Projeto
```bash
# Se você recebeu os arquivos, extraia-os em um diretório
# Ou clone do repositório (se disponível)
cd /caminho/para/o/projeto
```

### 2. Configurar o Backend

#### 2.1. Navegar para o diretório do backend
```bash
cd aula_management_system
```

#### 2.2. Criar ambiente virtual Python
```bash
python3 -m venv venv
```

#### 2.3. Ativar o ambiente virtual
```bash
# Linux/macOS
source venv/bin/activate

# Windows
venv\Scripts\activate
```

#### 2.4. Instalar dependências
```bash
pip install -r requirements.txt
```

#### 2.5. Configurar variáveis de ambiente (opcional)
```bash
# Criar arquivo .env (opcional)
echo "SECRET_KEY=sua_chave_secreta_aqui" > .env
echo "JWT_SECRET_KEY=sua_chave_jwt_aqui" >> .env
```

#### 2.6. Inicializar o banco de dados
```bash
# O banco será criado automaticamente na primeira execução
python src/main.py
```

### 3. Configurar o Frontend

#### 3.1. Navegar para o diretório do frontend
```bash
cd ../aula-management-frontend
```

#### 3.2. Instalar dependências
```bash
# Usando pnpm (recomendado)
pnpm install

# Ou usando npm
npm install
```

#### 3.3. Configurar variáveis de ambiente
```bash
# Criar arquivo .env.local
echo "VITE_API_URL=http://localhost:5001/api" > .env.local
```

### 4. Executar o Sistema

#### 4.1. Iniciar o Backend
```bash
# Em um terminal, navegue para o diretório do backend
cd aula_management_system
source venv/bin/activate
python src/main.py
```

O backend estará disponível em: `http://localhost:5001`

#### 4.2. Iniciar o Frontend
```bash
# Em outro terminal, navegue para o diretório do frontend
cd aula-management-frontend
pnpm run dev --host

# Ou usando npm
npm run dev -- --host
```

O frontend estará disponível em: `http://localhost:5173`

### 5. Acessar o Sistema

1. Abra seu navegador
2. Acesse `http://localhost:5173`
3. Crie uma nova conta ou use as credenciais de teste
4. Explore as funcionalidades do sistema

## Configuração para Produção

### Backend (Flask)

#### 1. Configurar servidor WSGI
```bash
pip install gunicorn
```

#### 2. Criar arquivo de configuração
```python
# wsgi.py
from src.main import app

if __name__ == "__main__":
    app.run()
```

#### 3. Executar com Gunicorn
```bash
gunicorn --bind 0.0.0.0:5001 wsgi:app
```

### Frontend (React)

#### 1. Build para produção
```bash
pnpm run build
# ou
npm run build
```

#### 2. Servir arquivos estáticos
```bash
# Usando um servidor web como nginx ou apache
# Ou usando serve
npx serve -s dist -l 3000
```

## Configuração de Banco de Dados

### SQLite (Padrão)
- Não requer configuração adicional
- Arquivo criado automaticamente em `src/database/app.db`

### PostgreSQL (Produção)
```python
# Alterar em src/main.py
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://usuario:senha@localhost/nome_banco'
```

## Solução de Problemas

### Erro de Porta em Uso
```bash
# Verificar processos usando a porta
lsof -ti:5001 | xargs kill -9  # Backend
lsof -ti:5173 | xargs kill -9  # Frontend
```

### Erro de Dependências Python
```bash
# Atualizar pip
pip install --upgrade pip

# Reinstalar dependências
pip install -r requirements.txt --force-reinstall
```

### Erro de Dependências Node.js
```bash
# Limpar cache
pnpm store prune
# ou
npm cache clean --force

# Reinstalar
rm -rf node_modules package-lock.json
pnpm install
```

### Erro de CORS
- Verificar se o backend está configurado com CORS
- Verificar se a URL da API está correta no frontend

### Erro de Autenticação
- Verificar se o JWT_SECRET_KEY está configurado
- Limpar localStorage do navegador

## Dados de Teste

### Usuário Administrador
Você pode criar um usuário administrador através da interface de cadastro ou diretamente no banco:

```python
# Script para criar usuário admin (execute no Python)
from src.models.user import User, db
from src.main import app

with app.app_context():
    admin = User(nome="Administrador", email="admin@sistema.com")
    admin.set_password("admin123")
    db.session.add(admin)
    db.session.commit()
```

### Dados de Exemplo
O sistema inclui funcionalidade de importação CSV. Você pode:

1. Baixar o template CSV em `/api/importar/template_csv`
2. Preencher com dados de exemplo
3. Importar através da interface

## Monitoramento e Logs

### Backend
```bash
# Logs do Flask (desenvolvimento)
tail -f logs/app.log

# Logs do Gunicorn (produção)
gunicorn --access-logfile access.log --error-logfile error.log wsgi:app
```

### Frontend
- Logs disponíveis no console do navegador (F12)
- Erros de build visíveis no terminal

## Backup e Restauração

### Banco SQLite
```bash
# Backup
cp src/database/app.db backup_$(date +%Y%m%d).db

# Restauração
cp backup_20241223.db src/database/app.db
```

### Banco PostgreSQL
```bash
# Backup
pg_dump nome_banco > backup_$(date +%Y%m%d).sql

# Restauração
psql nome_banco < backup_20241223.sql
```

## Suporte

Para suporte técnico ou dúvidas sobre o sistema:

1. Consulte a documentação completa no README.md
2. Verifique os logs de erro
3. Consulte a seção de solução de problemas
4. Entre em contato com a equipe de desenvolvimento

## Atualizações

Para atualizar o sistema:

1. Faça backup dos dados
2. Baixe a nova versão
3. Execute as migrações de banco (se houver)
4. Reinstale as dependências
5. Reinicie os serviços

