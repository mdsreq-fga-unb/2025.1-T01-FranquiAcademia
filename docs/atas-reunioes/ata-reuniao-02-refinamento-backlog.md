# Ata da Reunião - Refinamento do Backlog
**Data:** 22/01/2025  
**Horário:** 19:30  
**Local:** Microsoft Teams  
**Participantes:** Luigi (PO), Equipe de Desenvolvimento

## Objetivo da Reunião
Refinamento do Product Backlog e detalhamento das User Stories para o Sprint 1.

## Processo de Engenharia de Requisitos Aplicado

### 1. Refinamento de Requisitos
**Técnica utilizada:** Workshop de refinamento com PO

**User Stories detalhadas:**

#### US003: Como aluno, eu quero visualizar minhas notas para acompanhar meu desempenho
**Critérios de Aceitação:**
- Exibir notas por disciplina
- Mostrar média geral
- Permitir filtro por período letivo
- Exibir status de aprovação/reprovação

**Critérios de Negócio:**
- Média mínima para aprovação: 7.0
- Frequência mínima: 75%

#### US004: Como professor, eu quero lançar notas para registrar o desempenho dos alunos
**Critérios de Aceitação:**
- Interface para inserção de notas por aluno
- Validação de notas (0-10)
- Possibilidade de lançar notas em lote
- Histórico de alterações

#### US005: Como administrador, eu quero gerenciar disciplinas para organizar o currículo
**Critérios de Aceitação:**
- Criar, editar e excluir disciplinas
- Definir carga horária
- Associar professores
- Definir pré-requisitos

### 2. Análise de Requisitos Não Funcionais
**RNF004**: Sistema deve garantir segurança dos dados
- Implementar autenticação JWT
- Criptografia de senhas
- Controle de acesso baseado em roles

**RNF005**: Sistema deve ser escalável
- Arquitetura modular
- Cache para consultas frequentes
- Paginação em listagens

### 3. Validação de Requisitos
**Aprovados pelo PO:**
- Todas as User Stories do Sprint 1
- Critérios de aceitação definidos
- Priorização confirmada

## Processo de Engenharia de Software Aplicado

### Sprint Planning
**Sprint 1 - Duração:** 22/01 a 05/02/2025

**User Stories selecionadas:**
1. US001 - Cadastro de usuários (8 pontos)
2. US002 - Gerenciamento de turmas (13 pontos)
3. US003 - Visualização de notas (5 pontos)

**Objetivo do Sprint:** Implementar funcionalidades básicas de cadastro e visualização

### Arquitetura Técnica Detalhada
**Frontend:**
- React.js com TypeScript
- Material-UI para componentes
- React Router para navegação
- Axios para requisições HTTP

**Backend:**
- Node.js com Express
- TypeScript
- JWT para autenticação
- Validação com Joi
- Logs com Winston

**Banco de Dados:**
- PostgreSQL
- Migrations com Knex.js
- Seeds para dados iniciais

### Critérios de Definição de Pronto
- Código revisado e aprovado
- Testes unitários implementados
- Testes de integração passando
- Documentação atualizada
- Deploy em ambiente de homologação

## Decisões Técnicas
1. Uso de TypeScript para maior segurança de tipos
2. Implementação de testes automatizados desde o início
3. CI/CD com GitHub Actions
4. Monitoramento com Sentry

## Próximos Passos
1. Início do desenvolvimento do Sprint 1
2. Criação dos protótipos de interface
3. Configuração do ambiente de desenvolvimento
4. Setup do banco de dados

---
**Responsável pela ata:** Equipe de Desenvolvimento  
**Aprovado por:** Luigi (PO) 