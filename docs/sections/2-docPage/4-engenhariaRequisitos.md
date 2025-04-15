# 4. Estratégias de Engenharia de Requisitos

## 4.1 Atividades e Técnicas de ER

### 4.1.1 Elicitação e Descoberta 

**Workshop de Requisitos:**  Essa técnica aborda o escopo, os riscos e as características do produto final, além de acelerar o processo de elicitação e descoberta de requisitos. No projeto, foi implementada por meio de encontros entre a equipe e o cliente, com o objetivo de definir elementos como casos de uso, brainstorming, entre outros aspectos importantes. O workshop é realizado no início de cada nova sprint para garantir o alinhamento e a atualização dos requisitos.

**Brainstorming:** Essa técnica é utilizada para estimular a geração de ideias e a discussão de possíveis soluções para o produto de software. No projeto, será aplicada por meio de reuniões colaborativas com a equipe, incentivando a livre expressão de ideias e a criatividade. O objetivo é capturar o maior número possível de sugestões, que serão posteriormente organizadas e avaliadas para integração ao escopo do projeto.

**Entrevistas com stakeholders:** Técnica essencial para obter um entendimento claro e direto sobre o problema, as necessidades, as possíveis soluções e as expectativas em relação ao produto de software. No projeto, serão realizadas entrevistas quinzenais com o cliente, visando a elicitação eficaz de requisitos e garantindo a definição precisa e assertiva das funcionalidades do produto. Além disso, são realizadas entrevistas fechadas, isto é, antes de ocorrer, o product owner da equipe pré-define as perguntas e assuntos a serem abordados.

**Lean Inception:** Esse método permite alinhar a equipe na definição do MVP (Produto Mínimo Viável). Durante a sprint 1, a equipe e os stakeholders colaboraram para definir e priorizar os recursos e funcionalidades do produto. Além disso, o MVP definido é flexível, podendo ser ajustado e atualizado ao longo do desenvolvimento.

### 4.1.2 Análise e Consenso 

**Análise de risco:** É utilizada para identificar os requisitos que podem apresentar riscos ou inviabilizar o produto ou solução, e assim obter formas de reduzir o risco. Na proposta, a análise de risco é feita em cada sprint planning.

**Negociação:** O fundamental é analisar os objetivos de cada parte e alcançar um acordo mutuamente satisfatório. Em situações de conflito entre o cliente e a equipe sobre a solução de software, é realizada uma negociação amistosa para definir o que será efetivamente implementado, garantindo que ambas as partes estejam alinhadas.

**Moscow:** Esse método de priorização é utilizado para classificar as tarefas em um projeto, buscando um entendimento comum sobre a importância de cada requisito. No projeto, foi aplicado da seguinte forma: primeiramente, a equipe se reuniu para analisar a lista de funcionalidades e requisitos gerais levantados pelo cliente. Em seguida, por meio de consenso e votação, foram definidas as prioridades, riscos e importâncias de cada item. Por fim, as diretrizes foram alinhadas e validadas em uma nova reunião com os stakeholders.

### 4.1.3 Declaração de Requisitos


**Épicos e User Stories:** A declaração de requisitos é dividida em épicos, onde há uma coletânea de features que envolvem um objetivo amplo, e histórias de usuário que descrevem as funcionalidades presentes no projeto.


**Critérios de aceitação:** São definidos critérios de aceitação, ou seja, é acordado junto com os stakeholders do projeto e o Project Owner o que uma User Story precisa ter para ser aceita. Sendo isso feito para que ambas as partes, equipe de desenvolvimento e stakeholders, tenham compreensão do que determinada funcionalidade ou item precisa ter para ser considerada concluída.

**Debates e incorporação de Feedback:** A equipe de desenvolvimento apresenta o que foi desenvolvido. Ao receber o feedback do cliente acerca da funcionalidade desenvolvida a equipe faz a incorporação desse feedback à funcionalidade.


### 4.1.4 Representação de Requisitos


**Prototipagem de Alta Fidelidade:** A prototipação é de Alta Fidelidade. Os protótipos das telas que o projeto irá ter serão feitos na plataforma do Figma. Esses protótipos serão então validados com os stakeholders para que a funcionalidade possa ser desenvolvida corretamente e assim evitar retrabalho.


### 4.1.5 Verificação e Validação de Requisitos


**Critérios de aceitação:**  
Conjunto de condições que devem ser atendidas para que a funcionalidade seja considerada aceitável pelo cliente. Eles definem como será validado que a entrega atende às expectativas, ou seja, que foi feita da forma correta.  

**Feedback do cliente:**  
O cliente tem total abertura para avaliar e comentar sobre o que foi entregue. Esse feedback é essencial para ajustar ou corrigir funcionalidades antes de considerar a validação completa.  


**DoR e DoD:**  
Esses critérios servem como guias para a verificação:  
- **DoR (Definition of Ready):** Garante que a funcionalidade esteja pronta para desenvolvimento.  
- **DoD (Definition of Done):** Confirma que a funcionalidade foi finalizada, testada e está pronta para entrega.  

**Reuniões de Verificação Interna:**  
Antes da validação com o cliente, a equipe realiza reuniões internas para revisar os requisitos e as funcionalidades entregues, certificando-se de que todos os critérios de aceitação e o DoD foram cumpridos.  

### 4.1.6 Organização e Atualização de Requisitos

**Backlog de Requisitos:**
Os requisitos são organizados e atualizados por meio de uma lista detalhada com informações como: User Stories, Critérios de Aceitação e Prazos de execução.

**Feedbacks Acerca do Backlog:**
As opiniões dos stakeholders sobre a utilidade das funcionalidades e a visão de sua aplicação dentro do Produto Mínimo Viável pode gerar atualizações no backlog da construção da solução de software.

**User Stories:**
Todos os requisitos funcionais passam pelo método de organização de User Stories para melhor entendimento das expectativas com a funcionalidade, assim como seu comportamento dentro do software. Entendimento este claro para o lado dos stakeholders e para o lado dos desenvolvedores.

## 4.2 Engenharia de Requisitos e o Scrum/XP

Baseando-se na estratégia de desenvolvimento de software selecionado, mencionado no tópico 3 e consultando os códigos das User Stories da seção [Backlog do Produto](./9-backlogDeProduto.md), o cronograma preliminar do projeto pode ser visualizada logo abaixo:

Fases do Processo           | Atividades ER             | Prática                    | Técnica                                                        | Resultado Esperado
--------------------------- | ------------------------- | -------------------------- | -------------------------------------------------------------- | ----------------------------
**Planejamento de Release** | Elicitação e Descoberta   | Elicitação de Requisitos   | Workshop Lean Inception, Brainstorming, Reuniões com o cliente | Identificação de requisitos presentes dentro do projeto
                            | Análise e Consenso        | Priorização dos Requisitos | Priorização via Workshop Lean Inception | Definição do valor técnico valor agregado e do impacto na experiência do usuário
                            | Declaração                | Registro dos Requisitos | Épicos e User Stories | Histórias de usuário que descrevem as funcionalidades presentes no projeto
                            | Validação e Verificação   | Validação dos requisitos e prioridade dos itens no backlog | Workshop Lean Inception com PBB | Requisitos e prioridades validadas para o início do desenvolvimento
                            | Organização e Atualização | Organização dos requisitos  | Product Backlog Building (PBB) | Requisitos organizados em um backlog para agregar valor ao cliente o mais breve possível
**Sprint Planning**         | Elicitação e Descoberta   | Refinamento dos Requisitos | User Stories, Entrevistas | Detalhamento dos requisitos à nível funcional e com a devida clareza para a sprint
                            | Análise e Consenso        | Mensurar a viabilidade da implementação  | Análise de Risco/Viabilidade | Alinhamento de expectativas para a entrega e alocação adequada de membros para o desenvolvimento do requisito
                            | Declaração                | "Definição de Critérios de Aceitação" | Definição dos critérios de aceitação, Definition of Ready (DoR) e Definition of Done (DoD) | Funcionalidades com critérios de conclusão bem estabelecidas e com os critérios de inicialização esclarecidas
                            | Verificação e Validação    | Verificação dos requisitos da sprint | DoR | Equipe segura para iniciar o desenvolvimento
                            | Organização e Atualização  | Organização das funcionalidades em andamento ou acrescentadas para a sprint e backlog | Backlog de Requisitos, User Stories | Sprint organizada com as funcionalidades a serem desenvolvidas e backlog atualizado em casos de incrementos
**Execução da Sprint**      | Representação             | Desenvolvimento de Protótipos | Prototipagem em Alta Fidelidade | Os protótipos validados auxiliam a equipe a desenvolver a funcionalidade corretamente e evitar o retrabalho 
                            | Verificação e Validação    | Validação dos protótipos | Critérios de aceitação, feedback do cliente, DoD | Confirmação de que os requisitos atendem aos critérios definidos, DoD
                            | Organização e Atualização | Revisão do Backlog | Fazer uma revisão de como está o Backlog da Sprint | Backlog em dia com o andamento da Sprint
**Sprint Review**           | Declaração                | Atualização das Histórias de usuário | Debates ao receber feedback do cliente e incorporação desse feedback | Alinhamento do que está sendo desenvolvido com o feedback dos clientes
                            | Verificação e Validação   | Demonstração ao Cliente do que foi realizado durante a Sprint | Reuniões, Feedbacks | Funcionalidades verificadas pelo feedback dos clientes
                            | Organização e Atualização | Organização das funcionalidades finalizadas ou debitadas da sprint | Backlog de Requisitos, Feedback | Backlog atualizado com as funcionalidades atrasadas e implementadas 

---
## Historico de Versão
Data     | Versão | Descrição | Autor | Revisores 
-------- | ------ | --------- | ----- | ---------
02/12/24 | 1.0 | Criação do Documento e adição de Elicitação e descoberta e Análise e Consenso| Ana Carolina | Arthur Miranda
02/12/24 | 1.1 | Criação do Documento e Adição do Tópico 4 | Daniel Rodrigues | Manuella Magalhães
03/12/24 | 1.2 | Finalização do Documento | João Pedro | Manuella Magalhães
03/12/24 | 1.3 | Adição de Representação e Declaração  | Arthur Miranda | Manuella Valadares
04/12/24 | 1.4 | Adição de Veriificação e Validação e Organização         | Manuella Valadares | Ana Carolina
14/01/25 | 1.5 | Removendo DoR da Execução da Sprint por feedback do professor | Manuella Valadares | Arthur Miranda
18/01/25 | 1.6 | Ajustando processo de Organização e Atualização da ER | Daniel Rodrigues | Arthur Miranda