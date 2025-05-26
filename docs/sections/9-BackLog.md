## 9 BackLog do Produto

<!--
a talda Explicar o que é o backlog) - falta
explicar metodologia - check
aplicar a metodologia - check
validar mvp - falta
-->


# Critérios de Priorização

## MoSCoW

O **MoSCoW** é usado para coletar a percepção de importância do cliente, informando o **valor do negócio** sobre cada item (requisito, funcionalidade, etc.). Essa prioridade qualitativa é convertida em números para compor os elementos da fórmula do **WSJF**, enquanto os outros fatores da fórmula são estimados pela equipe.

**MoSCoW** é um acrônimo que representa quatro níveis de prioridade:

| Letra | Significado            | Descrição                                                                 | Peso |
|-------|------------------------|---------------------------------------------------------------------------|------|
| M     | Must have              | Requisitos obrigatórios para o sistema funcionar. Sem eles, o projeto falha. | 4    |
| S     | Should have            | Requisitos importantes, mas não vitais. Podem ser adiados, se necessário.  | 3    |
| C     | Could have             | Requisitos desejáveis, que agregam valor, mas são opcionais.              | 2    |
| W     | Won’t have (this time) | Requisitos que não serão incluídos na entrega atual, mas podem ser considerados futuramente. | 1    |

---

## WSJF (Weighted Shortest Job First)

**WSJF** é uma técnica utilizada para priorizar funcionalidades com base na relação entre o **valor entregue** e o **esforço necessário** para implementá-las.

### Fatores avaliados:

- **Valor do Negócio**: Peso derivado da priorização MoSCoW (de 1 a 4)
- **Urgência**: Avaliação de quão urgente é a entrega da funcionalidade (1 a 5)
- **Redução de Risco**: Quanto a funcionalidade ajuda a reduzir riscos (1 a 5)  
  (5 = pouco arriscado / 1 = muito arriscado)
- **Tamanho do Trabalho**: Estimativa em dias para a conclusão da tarefa

### Fórmula:

WSJF = (Valor do Negócio + Urgência + Redução de Risco) / Tamanho do Trabalho

> Quanto maior o WSJF, maior a prioridade do requisito.


# Priorização de Requisitos com WSJF

| ID   | TÍTULO                                       | MoSCoW | Valor (MoSCoW) | Urgência | Redução de Risco | Tamanho do Trabalho (dias) | WSJF  | MVP |
|------|----------------------------------------------|--------|----------------|----------|-----------------|-----------------------------|-------|-----|
| RF01 | Cadastrar usuários                           | M      | 4              | 5        | 2               | 5                           | 2.20  | X   |
| RF02 | Editar usuários                              | M      | 4              | 4        | 3               | 3                           | 3.67  | X   |
| RF03 | Realizar login                               | M      | 4              | 5        | 1               | 3                           | 3.33  | X   |
| RF04 | Listar Aulas                                 | S      | 3              | 3        | 3               | 4                           | 2.25  |     |
| RF05 | Filtrar Aulas                                | S      | 3              | 3        | 4               | 5                           | 2.00  |     |
| RF06 | Listar Reservas                              | S      | 3              | 3        | 3               | 4                           | 2.25  |     |
| RF07 | Filtrar Reservas                             | S      | 3              | 3        | 4               | 5                           | 2.00  |     |
| RF08 | Enviar Mensagens Automatizadas               | M      | 4              | 4        | 3               | 5                           | 2.20  | X   |
| RF09 | Criar Mensagens Automatizadas                | M      | 4              | 4        | 3               | 5                           | 2.20  | X   |
| RF10 | Editar Mensagens Automatizadas               | S      | 3              | 3        | 4               | 3                           | 3.33  |     |
| RF11 | Apagar Mensagens Automatizadas               | M      | 4              | 3        | 4               | 2                           | 5.50  | X   |
| RF12 | Listar Mensagens Automatizadas               | M      | 4              | 4        | 3               | 3                           | 3.67  | X   |
| RF13 | Ativar ou Inativar Mensagens Automatizadas   | C      | 2              | 2        | 4               | 3                           | 2.67  |     |
| RF14 | Criar Regras de Envio                         | S      | 3              | 3        | 3               | 5                           | 1.80  |     |
| RF15 | Editar Regras de Envio                        | C      | 2              | 2        | 4               | 3                           | 2.67  |     |
| RF16 | Apagar Regras de Envio                       | S      | 3              | 3        | 4               | 3                           | 3.33  |     |
| RF17 | Criar Dashboard de Análise de dados          | M      | 4              | 4        | 2               | 8                           | 1.25  | X   |
| RF18 | Criar filtros para dados do dashboard         | S      | 3              | 3        | 3               | 5                           | 1.80  |     |
| RF19 | Editar filtros para dados do dashboard        | C      | 2              | 2        | 4               | 3                           | 2.67  |     |
| RF20 | Listar filtros para dados do dashboard        | S      | 3              | 3        | 3               | 3                           | 3.00  |     |
| RF21 | Filtrar dados de Dashboards                  | M      | 4              | 4        | 2               | 5                           | 2.00  | X   |
| RF22 | Favoritar Dashboards de análises de dado     | C      | 2              | 2        | 4               | 3                           | 2.67  |     |
| RF23 | Exportar Dashboards                          | C      | 2              | 3        | 4               | 5                           | 1.80  |     |
| RF24 | Exportar Dados da Plataforma Original        | C      | 2              | 3        | 3               | 5                           | 1.60  |     |









