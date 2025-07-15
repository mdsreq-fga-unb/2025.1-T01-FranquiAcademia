# Variáveis de Ambiente para Deploy no Render

## Backend (Web Service)

### Variáveis Obrigatórias
```
FLASK_ENV=production
FLASK_APP=src/main.py
PYTHON_VERSION=3.11.0
```

### Variáveis de Segurança (Recomendado)
```
SECRET_KEY=sua-chave-secreta-muito-segura-aqui
JWT_SECRET_KEY=sua-chave-jwt-secreta-muito-segura-aqui
```

### Variáveis do Banco de Dados
```
DATABASE_URL=postgres://username:password@host:port/database
```
*Nota: Esta variável é fornecida automaticamente pelo Render quando você conecta um PostgreSQL.*

## Frontend (Static Site)

### Variáveis Obrigatórias
```
VITE_API_URL=https://seu-backend-url.onrender.com
```

## Como Configurar no Render

### 1. Backend Service
1. Acesse o dashboard do seu serviço backend
2. Vá para "Environment" → "Environment Variables"
3. Adicione as variáveis listadas acima

### 2. Frontend Service
1. Acesse o dashboard do seu serviço frontend
2. Vá para "Environment" → "Environment Variables"
3. Adicione a variável `VITE_API_URL` com a URL do seu backend

### 3. Database Service
1. O Render configura automaticamente as variáveis do PostgreSQL
2. A `DATABASE_URL` será fornecida automaticamente

## Exemplo de Configuração Completa

### Backend Environment Variables:
```
FLASK_ENV=production
FLASK_APP=src/main.py
PYTHON_VERSION=3.11.0
SECRET_KEY=minha-chave-secreta-super-segura-2024
JWT_SECRET_KEY=minha-chave-jwt-super-segura-2024
DATABASE_URL=postgres://franqui_user:franqui_password@dpg-abc123-a.frankfurt-postgres.render.com/franqui_academia
```

### Frontend Environment Variables:
```
VITE_API_URL=https://franqui-academia-backend.onrender.com
```

## Segurança

⚠️ **IMPORTANTE**: 
- Nunca commite chaves secretas no código
- Use chaves diferentes para cada ambiente
- Gere chaves seguras usando ferramentas como:
  ```bash
  python -c "import secrets; print(secrets.token_hex(32))"
  ```

## Troubleshooting

### Problema: Erro de conexão com banco
**Solução**: Verifique se a `DATABASE_URL` está correta e se o PostgreSQL está rodando.

### Problema: Erro de CORS
**Solução**: Verifique se a `VITE_API_URL` no frontend aponta para a URL correta do backend.

### Problema: Erro de autenticação JWT
**Solução**: Verifique se as chaves `SECRET_KEY` e `JWT_SECRET_KEY` estão configuradas corretamente. 