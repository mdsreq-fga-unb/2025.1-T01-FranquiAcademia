# Ata da Reunião - Kickoff do Projeto
**Data:** 15/01/2025  
**Horário:** 19:30  
**Local:** Microsoft Teams  
**Participantes:** Luigi (PO), Equipe de Desenvolvimento

## Objetivo da Reunião
Definição inicial do projeto e alinhamento sobre visão, objetivos e escopo.

## Processo de Engenharia de Requisitos Aplicado

### 1. Elicitação de Requisitos
**Técnica utilizada:** Entrevista estruturada com Product Owner

**Requisitos Elicitados:**
- **RF001**: Sistema deve permitir cadastro de usuários (alunos e professores)
- **RF002**: Sistema deve gerenciar turmas e disciplinas
- **RF003**: Sistema deve permitir visualização de notas e frequência
- **RF004**: Sistema deve ter interface responsiva para mobile

**Requisitos Não Funcionais identificados:**
- **RNF001**: Sistema deve responder em menos de 3 segundos
- **RNF002**: Interface deve ser intuitiva para usuários não técnicos
- **RNF003**: Sistema deve suportar pelo menos 1000 usuários simultâneos

### 2. Análise de Requisitos
**Priorização realizada:**
- **Alta Prioridade:** RF001, RF002
- **Média Prioridade:** RF003
- **Baixa Prioridade:** RF004

**Validação:** Todos os requisitos foram validados com o PO

### 3. Especificação Inicial
**User Stories criadas:**
```
US001: Como aluno, eu quero me cadastrar no sistema para acessar minhas informações acadêmicas
Critérios de Aceitação:
- Formulário de cadastro com campos obrigatórios
- Validação de email único
- Confirmação por email
- Login após cadastro

US002: Como professor, eu quero gerenciar turmas para organizar meus alunos
Critérios de Aceitação:
- Criar nova turma
- Adicionar/remover alunos
- Definir disciplinas
- Visualizar lista de alunos
```

## Processo de Engenharia de Software Aplicado

### Metodologia Definida
- **Framework:** Scrum
- **Duração dos Sprints:** 2 semanas
- **Cerimônias:** Daily Standup, Sprint Planning, Sprint Review, Retrospective

### Arquitetura Inicial
- **Frontend:** React.js
- **Backend:** Node.js/Express
- **Banco de Dados:** PostgreSQL
- **Deploy:** Heroku/Vercel

## Próximos Passos
1. Refinamento das User Stories
2. Criação de protótipos de interface
3. Definição da arquitetura técnica detalhada
4. Sprint Planning para primeira iteração

## Decisões Tomadas
- Projeto será desenvolvido em 6 sprints
- Reuniões semanais com PO às segundas-feiras, 19:30
- Uso de Figma para prototipagem
- GitHub para versionamento e documentação

---
**Responsável pela ata:** Equipe de Desenvolvimento  
**Aprovado por:** Luigi (PO) 