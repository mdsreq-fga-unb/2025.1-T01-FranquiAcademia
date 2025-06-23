
# Planejamento da Arquitetura do Software

## 2.1 Arquitetura Geral

O software será desenvolvido utilizando uma arquitetura cliente-servidor, com um backend robusto para processamento de dados e lógica de negócios, e um frontend interativo para a interface do usuário. A comunicação entre o frontend e o backend será realizada através de APIs RESTful.

## 2.2 Tecnologias para o Backend

Para o backend, a escolha recai sobre Python, devido à sua versatilidade, vasta gama de bibliotecas e frameworks, e forte comunidade. O framework Flask será utilizado para a construção das APIs RESTful, proporcionando leveza e flexibilidade. Como banco de dados, optaremos pelo PostgreSQL, um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto, conhecido por sua robustez, escalabilidade e conformidade com padrões SQL. Para a orquestração do banco de dados e modelos, utilizaremos o SQLAlchemy, um kit de ferramentas SQL e Object-Relational Mapper (ORM) para Python, que oferece flexibilidade e controle sobre as operações de banco de dados.



## 2.3 Tecnologias para o Frontend

Para o frontend, utilizaremos React, uma biblioteca JavaScript declarativa, eficiente e flexível para a construção de interfaces de usuário. O React permite a criação de componentes reutilizáveis, facilitando o desenvolvimento e a manutenção da aplicação. Para o gerenciamento de estado, será considerado o uso de Redux ou Context API, dependendo da complexidade da aplicação. A estilização será feita com CSS Modules ou Styled Components, garantindo modularidade e evitando conflitos de estilo. A comunicação com o backend será realizada através de requisições HTTP assíncronas, utilizando a API Fetch ou bibliotecas como Axios.



## 2.4 Estrutura do Banco de Dados

Com base nos requisitos funcionais (RF), a estrutura do banco de dados será projetada para suportar as operações de cadastro, consulta e gerenciamento de usuários, aulas, reservas, mensagens automatizadas e regras de envio. As principais entidades e seus atributos serão:

### Usuários
- `id` (PK, UUID)
- `nome` (VARCHAR)
- `email` (VARCHAR, UNIQUE)
- `senha_hash` (VARCHAR)
- `data_cadastro` (TIMESTAMP)
- `ativo` (BOOLEAN)

### Aulas
- `id` (PK, UUID)
- `nome` (VARCHAR)
- `tema` (VARCHAR)
- `instrutor_id` (FK para Usuários)
- `data_hora` (TIMESTAMP)
- `duracao_minutos` (INTEGER)
- `capacidade` (INTEGER)

### Reservas
- `id` (PK, UUID)
- `usuario_id` (FK para Usuários)
- `aula_id` (FK para Aulas)
- `data_reserva` (TIMESTAMP)
- `primeira_aula` (BOOLEAN)

### Mensagens Automatizadas
- `id` (PK, UUID)
- `nome` (VARCHAR)
- `conteudo` (TEXT)
- `tipo` (VARCHAR - e.g., 'informativo', 'promocional', 'aviso_reserva')
- `data_criacao` (TIMESTAMP)
- `ativa` (BOOLEAN)

### Regras de Envio
- `id` (PK, UUID)
- `mensagem_id` (FK para Mensagens Automatizadas)
- `tipo_regra` (VARCHAR - e.g., 'antes_aula', 'depois_aula', 'cadastro_usuario')
- `valor_regra` (VARCHAR - e.g., '1_dia', '30_minutos', 'boas_vindas')
- `data_criacao` (TIMESTAMP)

Relacionamentos:
- Um `Usuário` pode ter muitas `Reservas` (um para muitos).
- Uma `Aula` pode ter muitas `Reservas` (um para muitos).
- Um `Usuário` pode ser um `Instrutor` de muitas `Aulas` (um para muitos, auto-relacionamento ou tipo de usuário).
- Uma `Mensagem Automatizada` pode ter muitas `Regras de Envio` (um para muitos).




## 2.5 Mapeamento de Requisitos Funcionais e Definição de APIs

Cada requisito funcional (RF) será implementado através de endpoints específicos no backend, acessíveis via APIs RESTful. O frontend consumirá esses endpoints para fornecer a interface e a funcionalidade ao usuário.

### Usuários (RF01, RF02, RF03)
- **RF01: Cadastrar usuários**
  - **API Endpoint:** `POST /api/usuarios`
  - **Descrição:** Cria um novo usuário no sistema.
  - **Corpo da Requisição:** `{ "nome": "string", "email": "string", "senha": "string" }`
  - **Resposta:** `{ "id": "uuid", "nome": "string", "email": "string" }`
- **RF02: Editar usuários**
  - **API Endpoint:** `PUT /api/usuarios/{id}`
  - **Descrição:** Atualiza as informações de um usuário existente.
  - **Corpo da Requisição:** `{ "nome": "string", "email": "string" }` (campos opcionais)
  - **Resposta:** `{ "id": "uuid", "nome": "string", "email": "string" }`
- **RF03: Realizar login**
  - **API Endpoint:** `POST /api/login`
  - **Descrição:** Autentica um usuário e retorna um token de acesso.
  - **Corpo da Requisição:** `{ "email": "string", "senha": "string" }`
  - **Resposta:** `{ "access_token": "string", "token_type": "bearer" }`

### Aulas (RF04)
- **RF04: Consultar Aulas**
  - **API Endpoint:** `GET /api/aulas`
  - **Descrição:** Retorna uma lista de aulas, com opções de filtro por data, tema e instrutor.
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD&tema=string&instrutor_id=uuid`
  - **Resposta:** `[ { "id": "uuid", "nome": "string", "tema": "string", "instrutor": { "id": "uuid", "nome": "string" }, "data_hora": "datetime", "duracao_minutos": "integer", "capacidade": "integer" } ]`

### Reservas (RF05)
- **RF05: Consultar Reservas**
  - **API Endpoint:** `GET /api/reservas`
  - **Descrição:** Retorna uma lista de reservas do usuário autenticado, com opções de filtro por data da aula, primeira aula e instrutor.
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD&primeira_aula=boolean&instrutor_id=uuid`
  - **Resposta:** `[ { "id": "uuid", "aula": { "id": "uuid", "nome": "string", "data_hora": "datetime" }, "data_reserva": "datetime", "primeira_aula": "boolean" } ]`

### Mensagens Automatizadas (RF06, RF07, RF08, RF09, RF10, RF11, RF12, RF13, RF14)
- **RF06: Criar Mensagens Automatizadas**
  - **API Endpoint:** `POST /api/mensagens`
  - **Descrição:** Cria uma nova mensagem automatizada.
  - **Corpo da Requisição:** `{ "nome": "string", "conteudo": "string", "tipo": "string" }`
  - **Resposta:** `{ "id": "uuid", "nome": "string", "conteudo": "string", "tipo": "string", "ativa": "boolean" }`
- **RF07: Enviar Mensagens Automatizadas**
  - **API Endpoint:** `POST /api/mensagens/{id}/enviar`
  - **Descrição:** Envia uma mensagem automatizada manualmente (para testes ou envios pontuais).
  - **Resposta:** `{ "status": "success", "mensagem": "Mensagem enviada." }`
- **RF08: Editar Mensagens Automatizadas**
  - **API Endpoint:** `PUT /api/mensagens/{id}`
  - **Descrição:** Edita o conteúdo de uma mensagem automatizada existente.
  - **Corpo da Requisição:** `{ "nome": "string", "conteudo": "string", "tipo": "string" }` (campos opcionais)
  - **Resposta:** `{ "id": "uuid", "nome": "string", "conteudo": "string", "tipo": "string", "ativa": "boolean" }`
- **RF09: Apagar Mensagens Automatizadas**
  - **API Endpoint:** `DELETE /api/mensagens/{id}`
  - **Descrição:** Exclui uma mensagem automatizada.
  - **Resposta:** `{ "status": "success", "mensagem": "Mensagem excluída." }`
- **RF10: Consultar Mensagens Automatizadas**
  - **API Endpoint:** `GET /api/mensagens`
  - **Descrição:** Retorna uma lista de mensagens automatizadas, com opções de filtro por data, nome e franquia.
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD&nome=string&franquia=string`
  - **Resposta:** `[ { "id": "uuid", "nome": "string", "conteudo": "string", "tipo": "string", "data_criacao": "datetime", "ativa": "boolean" } ]`
- **RF11: Ativar ou Inativar Mensagens Automatizadas**
  - **API Endpoint:** `PATCH /api/mensagens/{id}/status`
  - **Descrição:** Ativa ou desativa o envio de uma mensagem automatizada.
  - **Corpo da Requisição:** `{ "ativa": "boolean" }`
  - **Resposta:** `{ "id": "uuid", "nome": "string", "ativa": "boolean" }`
- **RF12: Criar Regras de Envio**
  - **API Endpoint:** `POST /api/regras_envio`
  - **Descrição:** Cria uma nova regra de envio para uma mensagem automatizada.
  - **Corpo da Requisição:** `{ "mensagem_id": "uuid", "tipo_regra": "string", "valor_regra": "string" }`
  - **Resposta:** `{ "id": "uuid", "mensagem_id": "uuid", "tipo_regra": "string", "valor_regra": "string" }`
- **RF13: Editar Regras de Envio**
  - **API Endpoint:** `PUT /api/regras_envio/{id}`
  - **Descrição:** Edita uma regra de envio existente.
  - **Corpo da Requisição:** `{ "tipo_regra": "string", "valor_regra": "string" }` (campos opcionais)
  - **Resposta:** `{ "id": "uuid", "mensagem_id": "uuid", "tipo_regra": "string", "valor_regra": "string" }`
- **RF14: Apagar Regras de Envio**
  - **API Endpoint:** `DELETE /api/regras_envio/{id}`
  - **Descrição:** Exclui uma regra de envio.
  - **Resposta:** `{ "status": "success", "mensagem": "Regra de envio excluída." }`

### Análise de Dados (RF15, RF16, RF17, RF18, RF19, RF20, RF21, RF22)
- **RF15: Consultar Dados de Reservas**
  - **API Endpoint:** `GET /api/dashboard/reservas`
  - **Descrição:** Retorna dados de reservas para visualização em gráficos (total, por dia/semana/mês).
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD&agrupamento=diario|semanal|mensal`
  - **Resposta:** `{ "total_reservas": "integer", "dados_agrupados": [ { "periodo": "string", "quantidade": "integer" } ] }`
- **RF16: Consultar Dados de Primeiras Aulas**
  - **API Endpoint:** `GET /api/dashboard/primeiras_aulas`
  - **Descrição:** Retorna dados de primeiras aulas para visualização em gráficos.
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD&agrupamento=diario|semanal|mensal`
  - **Resposta:** `{ "total_primeiras_aulas": "integer", "dados_agrupados": [ { "periodo": "string", "quantidade": "integer" } ] }`
- **RF17: Consultar Dados de Aulas por Professor**
  - **API Endpoint:** `GET /api/dashboard/aulas_por_professor`
  - **Descrição:** Retorna dados de aulas por professor para visualização em gráficos.
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD`
  - **Resposta:** `[ { "professor": { "id": "uuid", "nome": "string" }, "total_aulas": "integer" } ]`
- **RF18: Consultar Horários de Maior Reserva**
  - **API Endpoint:** `GET /api/dashboard/horarios_reservas`
  - **Descrição:** Retorna dados de horários com maior número de reservas para visualização em gráficos.
  - **Parâmetros de Query:** `?data_inicio=YYYY-MM-DD&data_fim=YYYY-MM-DD`
  - **Resposta:** `[ { "horario": "string", "quantidade_reservas": "integer" } ]`
- **RF19: Filtrar Dados de Consultas**
  - **Descrição:** A filtragem será implementada através dos parâmetros de query nos endpoints de dashboard.
- **RF20: Salvar Consultas Favoritas de Análise de Dados**
  - **API Endpoint:** `POST /api/dashboard/favoritos`
  - **Descrição:** Salva uma configuração de consulta de dashboard como favorita.
  - **Corpo da Requisição:** `{ "nome": "string", "endpoint": "string", "parametros": { "key": "value" } }`
  - **Resposta:** `{ "id": "uuid", "nome": "string" }`
  - **API Endpoint:** `GET /api/dashboard/favoritos`
  - **Descrição:** Lista as consultas favoritas salvas.
  - **Resposta:** `[ { "id": "uuid", "nome": "string", "endpoint": "string", "parametros": { "key": "value" } } ]`
- **RF21: Exportar Dashboard criados pelo usuário em CSV**
  - **API Endpoint:** `GET /api/dashboard/{tipo}/exportar/csv`
  - **Descrição:** Exporta os dados de um dashboard específico em formato CSV.
  - **Parâmetros de Query:** (mesmos dos endpoints de consulta de dashboard)
  - **Resposta:** Arquivo CSV.
- **RF22: Exportar Dashboards em PDF**
  - **API Endpoint:** `GET /api/dashboard/{tipo}/exportar/pdf`
  - **Descrição:** Exporta os dados de um dashboard específico em formato PDF.
  - **Parâmetros de Query:** (mesmos dos endpoints de consulta de dashboard)
  - **Resposta:** Arquivo PDF.

### Importação e Integração de Dados (RF23, RF24)
- **RF23: Importar planilha csv de dados das reservas de aulas da Plataforma Original**
  - **API Endpoint:** `POST /api/importar/reservas_csv`
  - **Descrição:** Recebe um arquivo CSV com dados de reservas e inicia o processo de importação.
  - **Corpo da Requisição:** `multipart/form-data` contendo o arquivo CSV.
  - **Resposta:** `{ "status": "success", "mensagem": "Importação iniciada." }`
- **RF24: Integrar planilha csv de dados das reservas de aulas da Plataforma Original com o banco de dados de aulas**
  - **Descrição:** Esta funcionalidade será parte do processo de importação do RF23, onde o backend processará o CSV e integrará os dados no banco de dados de aulas e reservas.



## 2.6 Segurança e Autenticação

A segurança do sistema será garantida através de:

- **Autenticação Baseada em Token (JWT):** Após o login bem-sucedido (RF03), o backend emitirá um JSON Web Token (JWT) que o frontend armazenará e enviará em todas as requisições subsequentes para endpoints protegidos. Isso garante que apenas usuários autenticados possam acessar funcionalidades restritas.
- **Criptografia de Senhas:** As senhas dos usuários serão armazenadas no banco de dados de forma criptografada (hash) utilizando algoritmos seguros como bcrypt, garantindo que as senhas originais nunca sejam armazenadas em texto claro.
- **Validação de Entrada:** Todas as entradas de dados do usuário serão validadas no backend para prevenir ataques como injeção de SQL, Cross-Site Scripting (XSS) e outros. Isso inclui validação de tipos de dados, formatos e tamanhos.
- **Controle de Acesso Baseado em Papéis (RBAC):** Embora não explicitamente detalhado nos requisitos iniciais, a arquitetura será projetada para permitir a futura implementação de diferentes níveis de acesso para diferentes tipos de usuários (e.g., administrador, instrutor, aluno), caso seja necessário. Isso pode ser feito através da inclusão de um campo `papel` na tabela de `Usuários` e verificação de permissões nos endpoints da API.
- **HTTPS:** A comunicação entre o frontend e o backend será sempre realizada via HTTPS para garantir a criptografia dos dados em trânsito e proteger contra ataques de "man-in-the-middle".



## 2.7 Estratégia de Deploy

O deploy do software será planejado para um ambiente de nuvem, visando escalabilidade, alta disponibilidade e facilidade de gerenciamento. As opções consideradas incluem:

- **Backend (Flask):**
  - **Docker:** A aplicação Flask será conteinerizada usando Docker. Isso garante que o ambiente de execução seja consistente em diferentes estágios (desenvolvimento, teste, produção) e facilita o deploy.
  - **Serviços de Contêiner (e.g., Google Cloud Run, AWS Fargate, Azure Container Instances):** Para um deploy simplificado e escalável, a imagem Docker do backend pode ser implantada em serviços de contêiner gerenciados. Esses serviços cuidam da infraestrutura subjacente, permitindo que o foco seja na aplicação.
  - **Kubernetes:** Para ambientes mais complexos e com necessidade de orquestração avançada, o deploy em um cluster Kubernetes (e.g., Google Kubernetes Engine, Amazon EKS, Azure Kubernetes Service) seria uma opção. Isso oferece maior controle sobre o escalonamento, balanceamento de carga e gerenciamento de serviços.

- **Frontend (React):**
  - **Serviços de Hospedagem Estática (e.g., Google Firebase Hosting, Netlify, Vercel, AWS S3 com CloudFront):** A aplicação React, após ser construída para produção (gerando arquivos estáticos HTML, CSS, JavaScript), pode ser hospedada em serviços de hospedagem estática. Esses serviços são otimizados para entrega rápida de conteúdo estático e geralmente incluem CDNs (Content Delivery Networks) para baixa latência.

- **Banco de Dados (PostgreSQL):**
  - **Serviços de Banco de Dados Gerenciados (e.g., Google Cloud SQL, AWS RDS, Azure Database for PostgreSQL):** Para o PostgreSQL, a melhor prática é utilizar um serviço de banco de dados gerenciado. Isso elimina a necessidade de gerenciar a infraestrutura do banco de dados (backups, patches, escalonamento, alta disponibilidade), permitindo que o foco seja nos dados da aplicação.

- **CI/CD (Integração Contínua/Entrega Contínua):**
  - Será implementado um pipeline de CI/CD (e.g., GitHub Actions, GitLab CI/CD, Jenkins) para automatizar o processo de build, teste e deploy. Isso garante que as alterações de código sejam integradas e entregues de forma rápida e confiável.

Esta estratégia visa um deploy eficiente, escalável e de baixa manutenção, aproveitando os benefícios dos serviços de nuvem gerenciados.


