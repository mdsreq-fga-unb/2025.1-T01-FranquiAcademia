# Deploy da Aplicação FranquiAcademia no Render

Este documento contém as instruções para fazer o deploy da aplicação FranquiAcademia no Render.

## Estrutura do Projeto

- **Backend**: Flask API (Python) - Porta 5001
- **Frontend**: React/Vite (Node.js) - Porta 5174
- **Database**: PostgreSQL (produção) / SQLite (desenvolvimento)

## Pré-requisitos

1. Conta no Render (https://render.com)
2. Repositório Git com o código da aplicação
3. Conhecimento básico de Docker e containers

## Opções de Deploy

### Opção 1: Deploy Automático com render.yaml

1. **Conectar o repositório ao Render**:
   - Acesse o dashboard do Render
   - Clique em "New" → "Blueprint"
   - Conecte seu repositório Git
   - O Render detectará automaticamente o arquivo `render.yaml`

2. **Configurar variáveis de ambiente**:
   - No serviço do backend, adicione:
     - `FLASK_ENV=production`
     - `FLASK_APP=src/main.py`
     - `DATABASE_URL` (será fornecido automaticamente pelo Render)

3. **Deploy**:
   - O Render fará o deploy automático dos 3 serviços:
     - Backend API
     - Frontend (Static Site)
     - PostgreSQL Database

### Opção 2: Deploy Manual

#### 1. Deploy do Backend

1. **Criar novo Web Service**:
   - Nome: `franqui-academia-backend`
   - Environment: `Python`
   - Build Command: `cd aula_management_system && pip install -r requirements.txt`
   - Start Command: `cd aula_management_system && python src/main.py`

2. **Variáveis de ambiente**:
   ```
   FLASK_ENV=production
   FLASK_APP=src/main.py
   PYTHON_VERSION=3.11.0
   ```

#### 2. Deploy do Frontend

1. **Criar novo Static Site**:
   - Nome: `franqui-academia-frontend`
   - Build Command: `cd aula-management-frontend && npm install -g pnpm && pnpm install && pnpm build`
   - Publish Directory: `aula-management-frontend/dist`

2. **Variáveis de ambiente**:
   ```
   VITE_API_URL=https://seu-backend-url.onrender.com
   ```

#### 3. Criar Database PostgreSQL

1. **Criar novo PostgreSQL**:
   - Nome: `franqui-academia-db`
   - Plan: Starter (gratuito)

2. **Conectar ao Backend**:
   - Copie a `DATABASE_URL` fornecida
   - Adicione como variável de ambiente no backend

## Configuração Local com Docker

### Desenvolvimento

```bash
# Usar Docker Compose para desenvolvimento
docker-compose -f docker-compose.dev.yml up --build

# Acessar:
# Frontend: http://localhost:5174
# Backend: http://localhost:5001
```

### Produção Local

```bash
# Usar Docker Compose para produção
docker-compose up --build

# Acessar:
# Frontend: http://localhost:80
# Backend: http://localhost:5001
# Database: localhost:5432
```

## Estrutura de Arquivos Docker

```
├── docker-compose.yml              # Produção
├── docker-compose.dev.yml          # Desenvolvimento
├── render.yaml                     # Configuração Render
├── aula_management_system/
│   ├── Dockerfile                  # Backend produção
│   ├── Dockerfile.dev              # Backend desenvolvimento
│   └── .dockerignore
└── aula-management-frontend/
    ├── Dockerfile                  # Frontend produção
    ├── Dockerfile.dev              # Frontend desenvolvimento
    ├── nginx.conf                  # Configuração nginx
    └── .dockerignore
```

## Troubleshooting

### Problemas Comuns

1. **Erro de conexão com banco**:
   - Verifique se a `DATABASE_URL` está configurada corretamente
   - Certifique-se de que o PostgreSQL está rodando

2. **Erro de build do frontend**:
   - Verifique se o `pnpm` está instalado
   - Confirme se todas as dependências estão no `package.json`

3. **Erro de CORS**:
   - Verifique se as origens estão configuradas corretamente no backend
   - Confirme se a URL do frontend está correta

### Logs

Para verificar logs no Render:
1. Acesse o dashboard do serviço
2. Vá para a aba "Logs"
3. Verifique se há erros de build ou runtime

## URLs de Produção

Após o deploy, você terá:
- **Frontend**: `https://franqui-academia-frontend.onrender.com`
- **Backend**: `https://franqui-academia-backend.onrender.com`
- **Database**: Gerenciado internamente pelo Render

## Segurança

1. **Variáveis de ambiente**:
   - Nunca commite senhas ou chaves secretas
   - Use variáveis de ambiente do Render para configurações sensíveis

2. **HTTPS**:
   - O Render fornece HTTPS automaticamente
   - Certifique-se de que todas as URLs usam HTTPS

3. **CORS**:
   - Configure CORS adequadamente para produção
   - Limite as origens permitidas

## Monitoramento

1. **Health Check**:
   - Endpoint: `/api/health`
   - Retorna status da API

2. **Métricas**:
   - Use o dashboard do Render para monitorar performance
   - Configure alertas se necessário 