# Ata da Reunião - Sprint Review e Retrospectiva
**Data:** 05/02/2025  
**Horário:** 19:30  
**Local:** Microsoft Teams  
**Participantes:** Luigi (PO), Equipe de Desenvolvimento

## Objetivo da Reunião
Apresentação das funcionalidades desenvolvidas no Sprint 1 e retrospectiva do processo.

## Processo de Engenharia de Requisitos Aplicado

### 1. Validação de Requisitos Implementados
**Técnica utilizada:** Demonstração das funcionalidades para o PO

**User Stories entregues:**

#### US001: Cadastro de usuários ✅
**Status:** Concluída e aprovada
**Funcionalidades implementadas:**
- Formulário de cadastro responsivo
- Validação de campos obrigatórios
- Verificação de email único
- Confirmação por email
- Sistema de login

**Feedback do PO:** Interface intuitiva e processo de cadastro fluido

#### US002: Gerenciamento de turmas ✅
**Status:** Concluída e aprovada
**Funcionalidades implementadas:**
- Criação de turmas
- Adição/remoção de alunos
- Associação de disciplinas
- Listagem de alunos por turma

**Feedback do PO:** Funcionalidade atende às necessidades básicas

#### US003: Visualização de notas ⚠️
**Status:** Parcialmente concluída (80%)
**Funcionalidades implementadas:**
- Exibição de notas por disciplina
- Cálculo de média geral
- Filtro por período letivo

**Pendente:** Status de aprovação/reprovação

### 2. Novos Requisitos Identificados
**Durante a demonstração, o PO identificou necessidades adicionais:**

#### US006: Como aluno, eu quero receber notificações sobre novas notas
**Critérios de Aceitação:**
- Notificação por email quando nota for lançada
- Notificação no sistema
- Configuração de preferências de notificação

#### US007: Como professor, eu quero visualizar estatísticas da turma
**Critérios de Aceitação:**
- Média da turma por disciplina
- Gráfico de distribuição de notas
- Relatório de frequência

### 3. Refinamento de Requisitos Existentes
**US004 (Lançamento de notas) - Refinada:**
- Adicionar campo para observações
- Possibilidade de anexar arquivos
- Notificação automática para alunos

## Processo de Engenharia de Software Aplicado

### Sprint Review
**Métricas do Sprint 1:**
- **Velocidade:** 18 pontos (meta: 26 pontos)
- **Qualidade:** 0 bugs críticos
- **Cobertura de testes:** 85%

**Funcionalidades demonstradas:**
1. Sistema de autenticação completo
2. Interface de cadastro de usuários
3. Gerenciamento de turmas
4. Visualização básica de notas

### Retrospectiva
**Pontos Positivos:**
- Boa comunicação entre equipe e PO
- Código bem estruturado e documentado
- Testes automatizados funcionando
- Deploy automatizado funcionando

**Pontos de Melhoria:**
- Estimativas foram otimistas
- Falta de protótipos antes do desenvolvimento
- Necessidade de mais validação com usuários finais

**Ações para próximo Sprint:**
1. Criar protótipos antes do desenvolvimento
2. Revisar processo de estimativas
3. Implementar validação contínua com PO

### Sprint Planning - Sprint 2
**Duração:** 05/02 a 19/02/2025

**User Stories selecionadas:**
1. US003 - Finalizar visualização de notas (2 pontos)
2. US004 - Lançamento de notas (13 pontos)
3. US006 - Sistema de notificações (8 pontos)

**Objetivo:** Implementar funcionalidades de lançamento e notificação

## Decisões Técnicas
1. Implementar sistema de notificações com WebSockets
2. Adicionar testes de aceitação automatizados
3. Melhorar documentação da API
4. Implementar monitoramento de performance

## Próximos Passos
1. Finalizar US003
2. Iniciar desenvolvimento de US004
3. Configurar sistema de notificações
4. Preparar protótipos para Sprint 3

---
**Responsável pela ata:** Equipe de Desenvolvimento  
**Aprovado por:** Luigi (PO) 