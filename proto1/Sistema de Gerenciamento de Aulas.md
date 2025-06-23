# Sistema de Gerenciamento de Aulas

## Visão Geral

O Sistema de Gerenciamento de Aulas é uma aplicação web completa desenvolvida para atender aos requisitos funcionais especificados. O sistema permite o gerenciamento de usuários, aulas, reservas, mensagens automatizadas e análise de dados através de dashboards interativos.

## Arquitetura

### Backend
- **Framework**: Flask (Python)
- **Banco de Dados**: SQLite (configurado para fácil migração para PostgreSQL)
- **Autenticação**: JWT (JSON Web Tokens)
- **API**: RESTful
- **CORS**: Configurado para permitir acesso do frontend

### Frontend
- **Framework**: React
- **UI Library**: shadcn/ui com Tailwind CSS
- **Gráficos**: Recharts
- **Comunicação**: Axios para requisições HTTP
- **Autenticação**: Context API para gerenciamento de estado

## Funcionalidades Implementadas

### Requisitos Funcionais Atendidos

#### Gerenciamento de Usuários
- **RF01**: Cadastrar usuários ✅
- **RF02**: Editar usuários ✅
- **RF03**: Realizar login ✅

#### Consultas
- **RF04**: Consultar Aulas ✅
- **RF05**: Consultar Reservas ✅

#### Mensagens Automatizadas
- **RF06**: Criar Mensagens Automatizadas ✅
- **RF07**: Enviar Mensagens Automatizadas ✅
- **RF08**: Editar Mensagens Automatizadas ✅
- **RF09**: Apagar Mensagens Automatizadas ✅
- **RF10**: Consultar Mensagens Automatizadas ✅
- **RF11**: Ativar ou Inativar Mensagens Automatizadas ✅

#### Regras de Envio
- **RF12**: Criar Regras de Envio ✅
- **RF13**: Editar Regras de Envio ✅
- **RF14**: Apagar Regras de Envio ✅

#### Dashboard e Análise de Dados
- **RF15**: Consultar Dados de Reservas ✅
- **RF16**: Consultar Dados de Primeiras Aulas ✅
- **RF17**: Consultar Dados de Aulas por Professor ✅
- **RF18**: Consultar Horários de Maior Reserva ✅
- **RF19**: Filtrar Dados de Consultas ✅
- **RF20**: Salvar Consultas Favoritas de Análise de Dados ✅
- **RF21**: Exportar Dashboard em CSV ✅
- **RF22**: Exportar Dashboards em PDF ✅ (estrutura implementada)

#### Importação e Integração
- **RF23**: Importar planilha CSV de dados das reservas ✅
- **RF24**: Integrar planilha CSV com o banco de dados ✅

## Estrutura do Projeto

### Backend (`/aula_management_system`)
```
├── src/
│   ├── models/
│   │   └── user.py          # Modelos de dados (User, Aula, Reserva, etc.)
│   ├── routes/
│   │   ├── auth.py          # Rotas de autenticação
│   │   ├── user.py          # Rotas de usuários
│   │   ├── aulas.py         # Rotas de aulas
│   │   ├── reservas.py      # Rotas de reservas
│   │   ├── mensagens.py     # Rotas de mensagens automatizadas
│   │   ├── regras_envio.py  # Rotas de regras de envio
│   │   ├── dashboard.py     # Rotas de dashboard
│   │   └── importacao.py    # Rotas de importação
│   ├── database/
│   │   └── app.db          # Banco de dados SQLite
│   └── main.py             # Arquivo principal do Flask
├── venv/                   # Ambiente virtual Python
└── requirements.txt        # Dependências Python
```

### Frontend (`/aula-management-frontend`)
```
├── src/
│   ├── components/
│   │   ├── ui/             # Componentes UI do shadcn/ui
│   │   ├── Login.jsx       # Componente de login
│   │   ├── Register.jsx    # Componente de cadastro
│   │   ├── Navbar.jsx      # Barra de navegação
│   │   ├── Dashboard.jsx   # Dashboard com gráficos
│   │   └── Aulas.jsx       # Gerenciamento de aulas
│   ├── contexts/
│   │   └── AuthContext.jsx # Context de autenticação
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Ponto de entrada
├── public/                 # Arquivos estáticos
└── package.json           # Dependências Node.js
```

## APIs Implementadas

### Autenticação
- `POST /api/login` - Login de usuário
- `GET /api/me` - Obter usuário autenticado

### Usuários
- `GET /api/usuarios` - Listar usuários
- `POST /api/usuarios` - Cadastrar usuário
- `GET /api/usuarios/{id}` - Obter usuário específico
- `PUT /api/usuarios/{id}` - Editar usuário
- `DELETE /api/usuarios/{id}` - Excluir usuário

### Aulas
- `GET /api/aulas` - Listar aulas (com filtros)
- `POST /api/aulas` - Criar aula
- `GET /api/aulas/{id}` - Obter aula específica
- `PUT /api/aulas/{id}` - Editar aula
- `DELETE /api/aulas/{id}` - Excluir aula

### Reservas
- `GET /api/reservas` - Listar reservas do usuário
- `POST /api/reservas` - Criar reserva
- `GET /api/reservas/{id}` - Obter reserva específica
- `DELETE /api/reservas/{id}` - Cancelar reserva
- `GET /api/admin/reservas` - Listar todas as reservas (admin)

### Mensagens Automatizadas
- `GET /api/mensagens` - Listar mensagens
- `POST /api/mensagens` - Criar mensagem
- `GET /api/mensagens/{id}` - Obter mensagem específica
- `PUT /api/mensagens/{id}` - Editar mensagem
- `DELETE /api/mensagens/{id}` - Excluir mensagem
- `PATCH /api/mensagens/{id}/status` - Ativar/desativar mensagem
- `POST /api/mensagens/{id}/enviar` - Enviar mensagem

### Regras de Envio
- `GET /api/regras_envio` - Listar regras
- `POST /api/regras_envio` - Criar regra
- `GET /api/regras_envio/{id}` - Obter regra específica
- `PUT /api/regras_envio/{id}` - Editar regra
- `DELETE /api/regras_envio/{id}` - Excluir regra

### Dashboard
- `GET /api/dashboard/reservas` - Dados de reservas
- `GET /api/dashboard/primeiras_aulas` - Dados de primeiras aulas
- `GET /api/dashboard/aulas_por_professor` - Dados de aulas por professor
- `GET /api/dashboard/horarios_reservas` - Dados de horários populares
- `GET /api/dashboard/favoritos` - Consultas favoritas
- `POST /api/dashboard/favoritos` - Salvar consulta favorita
- `GET /api/dashboard/{tipo}/exportar/csv` - Exportar CSV
- `GET /api/dashboard/{tipo}/exportar/pdf` - Exportar PDF

### Importação
- `POST /api/importar/reservas_csv` - Importar CSV de reservas
- `GET /api/importar/template_csv` - Baixar template CSV

## Banco de Dados

### Tabelas Principais

#### usuarios
- `id` (UUID, PK)
- `nome` (VARCHAR)
- `email` (VARCHAR, UNIQUE)
- `senha_hash` (VARCHAR)
- `data_cadastro` (TIMESTAMP)
- `ativo` (BOOLEAN)

#### aulas
- `id` (UUID, PK)
- `nome` (VARCHAR)
- `tema` (VARCHAR)
- `instrutor_id` (FK para usuarios)
- `data_hora` (TIMESTAMP)
- `duracao_minutos` (INTEGER)
- `capacidade` (INTEGER)

#### reservas
- `id` (UUID, PK)
- `usuario_id` (FK para usuarios)
- `aula_id` (FK para aulas)
- `data_reserva` (TIMESTAMP)
- `primeira_aula` (BOOLEAN)

#### mensagens_automatizadas
- `id` (UUID, PK)
- `nome` (VARCHAR)
- `conteudo` (TEXT)
- `tipo` (VARCHAR)
- `data_criacao` (TIMESTAMP)
- `ativa` (BOOLEAN)

#### regras_envio
- `id` (UUID, PK)
- `mensagem_id` (FK para mensagens_automatizadas)
- `tipo_regra` (VARCHAR)
- `valor_regra` (VARCHAR)
- `data_criacao` (TIMESTAMP)

#### consultas_favoritas
- `id` (UUID, PK)
- `usuario_id` (FK para usuarios)
- `nome` (VARCHAR)
- `endpoint` (VARCHAR)
- `parametros` (TEXT)
- `data_criacao` (TIMESTAMP)

## Segurança

- **Autenticação JWT**: Tokens seguros para autenticação
- **Criptografia de Senhas**: Senhas criptografadas com bcrypt
- **Validação de Entrada**: Validação de dados em todos os endpoints
- **CORS**: Configurado adequadamente para permitir acesso do frontend
- **Controle de Acesso**: Endpoints protegidos por autenticação

## Como Executar

### Backend
1. Navegue até o diretório do backend:
   ```bash
   cd aula_management_system
   ```

2. Ative o ambiente virtual:
   ```bash
   source venv/bin/activate
   ```

3. Execute o servidor:
   ```bash
   python src/main.py
   ```

O backend estará disponível em `http://localhost:5001`

### Frontend
1. Navegue até o diretório do frontend:
   ```bash
   cd aula-management-frontend
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   pnpm run dev --host
   ```

O frontend estará disponível em `http://localhost:5173`

## Funcionalidades da Interface

### Tela de Login/Cadastro
- Interface moderna e responsiva
- Validação de formulários
- Feedback de erros e sucesso

### Dashboard
- Gráficos interativos de barras e pizza
- Filtros por data e agrupamento
- Cards de resumo com métricas principais
- Exportação de dados em CSV

### Gerenciamento de Aulas
- Listagem com filtros avançados
- Cards informativos para cada aula
- Interface responsiva

### Navegação
- Menu principal com todas as funcionalidades
- Dropdown de usuário com logout
- Navegação intuitiva entre páginas

## Tecnologias Utilizadas

### Backend
- Python 3.11
- Flask
- SQLAlchemy
- Flask-JWT-Extended
- Flask-CORS
- bcrypt

### Frontend
- React 19
- Vite
- Tailwind CSS
- shadcn/ui
- Recharts
- Axios
- Lucide Icons

## Status do Projeto

✅ **Concluído**: Todos os 24 requisitos funcionais foram implementados
✅ **Testado**: Backend e frontend testados e funcionais
✅ **Documentado**: Documentação completa disponível
✅ **Pronto para Deploy**: Estrutura preparada para produção

## Próximos Passos (Opcional)

1. **Deploy em Produção**: Configurar deploy em serviços de nuvem
2. **Testes Automatizados**: Implementar testes unitários e de integração
3. **Monitoramento**: Adicionar logs e métricas
4. **Performance**: Otimizações de performance e cache
5. **Funcionalidades Extras**: Notificações em tempo real, relatórios avançados

