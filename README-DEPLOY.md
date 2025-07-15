# 🚀 Deploy da FranquiAcademia no Render

Este projeto está configurado para deploy automático no Render com Docker e configurações otimizadas.

## 📋 Pré-requisitos

- Conta no [Render](https://render.com)
- Repositório Git com o código
- Docker instalado (para testes locais)

## 🏗️ Estrutura do Projeto

```
├── aula_management_system/     # Backend Flask
│   ├── Dockerfile             # Container produção
│   ├── Dockerfile.dev         # Container desenvolvimento
│   ├── requirements.txt       # Dependências Python
│   └── src/                   # Código fonte
├── aula-management-frontend/   # Frontend React
│   ├── Dockerfile             # Container produção
│   ├── Dockerfile.dev         # Container desenvolvimento
│   ├── nginx.conf             # Configuração nginx
│   └── src/                   # Código fonte
├── docker-compose.yml         # Produção
├── docker-compose.dev.yml     # Desenvolvimento
├── render.yaml                # Configuração Render
├── deploy.sh                  # Script de deploy local
└── render-build.sh            # Script de build Render
```

## 🚀 Deploy Rápido no Render

### Opção 1: Deploy Automático (Recomendado)

1. **Conectar ao Render**:
   - Acesse [render.com](https://render.com)
   - Clique em "New" → "Blueprint"
   - Conecte seu repositório Git
   - O Render detectará automaticamente o `render.yaml`

2. **Configurar**:
   - O Render criará automaticamente:
     - Backend API (Python)
     - Frontend (Static Site)
     - PostgreSQL Database

3. **Variáveis de Ambiente**:
   - As variáveis básicas são configuradas automaticamente
   - Chaves secretas são geradas automaticamente

### Opção 2: Deploy Manual

#### Backend
1. Criar "Web Service"
2. **Build Command**: `cd aula_management_system && pip install -r requirements.txt`
3. **Start Command**: `cd aula_management_system && python src/main.py`
4. **Environment**: Python 3.11

#### Frontend
1. Criar "Static Site"
2. **Build Command**: `cd aula-management-frontend && npm install -g pnpm && pnpm install && pnpm build`
3. **Publish Directory**: `aula-management-frontend/dist`

#### Database
1. Criar "PostgreSQL"
2. Conectar ao backend via variável `DATABASE_URL`

## 🐳 Deploy Local com Docker

### Desenvolvimento
```bash
# Usar script de deploy
./deploy.sh dev

# Ou manualmente
docker-compose -f docker-compose.dev.yml up --build
```

### Produção Local
```bash
# Usar script de deploy
./deploy.sh prod

# Ou manualmente
docker-compose up --build
```

## 📊 Comandos Úteis

```bash
# Ver status dos containers
./deploy.sh status

# Ver logs
./deploy.sh logs dev
./deploy.sh logs prod

# Parar containers
./deploy.sh stop dev
./deploy.sh stop prod

# Ajuda
./deploy.sh help
```

## 🔧 Configurações

### Variáveis de Ambiente

#### Backend (Produção)
```
FLASK_ENV=production
FLASK_APP=src/main.py
PYTHON_VERSION=3.11.0
SECRET_KEY=gerado-automaticamente
JWT_SECRET_KEY=gerado-automaticamente
DATABASE_URL=fornecido-pelo-render
```

#### Frontend (Produção)
```
VITE_API_URL=https://seu-backend-url.onrender.com
```

### Portas
- **Backend**: 5001
- **Frontend**: 80 (produção) / 5174 (desenvolvimento)
- **Database**: 5432

## 🔍 Health Check

A aplicação inclui um endpoint de health check:
```
GET /api/health
```

Resposta esperada:
```json
{
  "status": "healthy",
  "message": "API is running"
}
```

## 🛠️ Troubleshooting

### Problemas Comuns

1. **Erro de build do frontend**:
   ```bash
   # Verificar se pnpm está instalado
   npm install -g pnpm
   
   # Limpar cache
   pnpm store prune
   ```

2. **Erro de conexão com banco**:
   - Verificar `DATABASE_URL` no Render
   - Confirmar se PostgreSQL está ativo

3. **Erro de CORS**:
   - Verificar `VITE_API_URL` no frontend
   - Confirmar se backend está rodando

### Logs

Para verificar logs no Render:
1. Dashboard do serviço → "Logs"
2. Verificar erros de build e runtime

## 🔒 Segurança

- Chaves secretas são geradas automaticamente
- HTTPS é fornecido automaticamente pelo Render
- CORS configurado para produção
- Headers de segurança no nginx

## 📈 Monitoramento

- Health check automático
- Logs centralizados no Render
- Métricas de performance disponíveis
- Alertas configuráveis

## 🌐 URLs de Produção

Após o deploy:
- **Frontend**: `https://franqui-academia-frontend.onrender.com`
- **Backend**: `https://franqui-academia-backend.onrender.com`
- **API Health**: `https://franqui-academia-backend.onrender.com/api/health`

## 📚 Documentação Adicional

- [DEPLOY.md](./DEPLOY.md) - Guia detalhado de deploy
- [render-env.md](./render-env.md) - Variáveis de ambiente
- [env.example](./env.example) - Exemplo de configuração local

## 🤝 Suporte

Para problemas específicos:
1. Verificar logs no Render
2. Testar localmente com Docker
3. Verificar configurações de ambiente
4. Consultar documentação do Render 