## 9 BackLog do Produto
### 9.1 ...
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

---

# BACKLOG 

| ID   | TÍTULO                                                                 | DESCRIÇÃO                                                                                                                                                                                        | MosCow | Priorização WSJF | MVP |
|------|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|------------------|-----|
| RF01 | Selecionar data e horário para agendamento                             | O sistema deve permitir que o cliente selecione data e horário disponíveis para realizar agendamentos.                                                                                           | M      | 7                | X   |
|
