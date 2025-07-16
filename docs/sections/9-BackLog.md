## 9 BackLog do Produto

### Backlog 

O **backlog** representa uma lista dinâmica e priorizada de tudo o que precisa ser construído para o seu produto. Ele serve como um **plano de trabalho vivo** para a equipe de desenvolvimento, abrangendo desde novas funcionalidades até melhorias e correções de bugs. Essa lista está em constante **evolução**, refletindo o crescimento do produto e o surgimento de novas necessidades, garantindo que a equipe esteja sempre focada nas **prioridades e objetivos do projeto**.

Dentro do backlog, as **Histórias de Usuário (User Stories)** são elementos cruciais. Elas descrevem as necessidades dos usuários finais de maneira **simples e direta**, permitindo que toda a equipe compreenda o **valor** de cada funcionalidade. Uma User Story é estruturada para responder a três perguntas fundamentais: **quem** é o usuário, **o que** ele deseja fazer e **qual o benefício** dessa ação. Esse formato mantém o foco nas **necessidades do usuário**, incentivando a criação de soluções que realmente agregam valor ao produto.

Para descrever uma História de Usuário de forma eficaz, siga a estrutura: **"Eu, como [tipo de usuário], quero [ação que desejo realizar], para que [benefício ou valor que obtenho com essa ação]."**

Por exemplo: "Eu, como cliente, quero poder filtrar as aulas por horário, para encontrar rapidamente as opções que se encaixam na minha rotina."

Histórias de Usuário mais complexas ou que abrangem diversas funcionalidades são agrupadas em **Épicos**. Um épico é uma descrição de uma **necessidade de grande escala**, que será posteriormente **dividida em histórias menores e mais detalhadas**. Esse processo ajuda a equipe a entender a dimensão do projeto e a planejar o desenvolvimento em partes **mais gerenciáveis e priorizáveis**. Os épicos podem ser definidos com base nas principais funcionalidades ou nos objetivos do produto, e cada um se desdobra em várias histórias de usuário que detalham as tarefas específicas.

Os **Temas**, por sua vez, funcionam como **agrupamentos de histórias e épicos** que compartilham um **propósito ou objetivo comum** dentro do produto. Eles são úteis para **organizar o backlog** em seções que representam áreas ou funcionalidades do sistema, facilitando a priorização do desenvolvimento de acordo com as **metas do projeto**. Diferente dos épicos, que geralmente têm um escopo mais limitado, os temas são mais amplos e podem englobar múltiplos épicos e histórias de usuário, fornecendo uma **visão geral das grandes áreas do produto**.

#### Temas

* **TM01: Gestão de Usuários e Acesso**
    * Objetivo: Permitir o gerenciamento de contas de usuários de forma segura e eficiente.
* **TM02: Gestão de Aulas e Reservas**
    * Objetivo: Facilitar a consulta e o gerenciamento das aulas e reservas pelos usuários.
* **TM03: Comunicação e Integração de Dados**
    * Objetivo: Automatizar a comunicação com os usuários e integrar dados da plataforma original para melhorar o engajamento e a gestão.
* **TM04: Análise de Dados e Dashboards**
    * Objetivo: Fornecer ferramentas para a análise e visualização de informações relevantes para a gestão.

---

#### Épicos

* **EP01: Gerenciamento de Contas de Usuário**
    * Descrição: Permitir a criação, edição e autenticação de contas de usuários no sistema.
    * Tema: TM01
* **EP02: Consulta de Aulas**
    * Descrição: Permitir que os usuários consultem as aulas disponíveis e as filtrem por critérios relevantes.
    * Tema: TM02
* **EP03: Consulta de Reservas**
    * Descrição: Permitir que os usuários consultem suas reservas de aulas e as filtrem por critérios relevantes.
    * Tema: TM02
* **EP04: Gestão de Mensagens Automatizadas**
    * Descrição: Implementar a capacidade de criar, editar, apagar, consultar, ativar e inativar mensagens automáticas aos usuários.
    * Tema: TM03
* **EP05: Gestão de Regras de Envio de Mensagens**
    * Descrição: Permitir a criação, edição e exclusão de regras que determinam o envio de mensagens automatizadas.
    * Tema: TM03
* **EP06: Integração de Dados da Plataforma Original**
    * Descrição: Permitir a importação de dados de reservas de aulas da plataforma original e sua integração com o banco de dados do sistema.
    * Tema: TM03
* **EP07: Visualização de Dados de Análise**
    * Descrição: Permitir a visualização de dados de reservas, primeiras aulas, aulas por professor e horários de maior reserva através de gráficos.
    * Tema: TM04
* **EP08: Interação com Consultas de Análise**
    * Descrição: Permitir a aplicação de filtros, salvamento de consultas favoritas e exportação de dashboards criados pelo usuário.
    * Tema: TM04

### User Stories

**Épico: Gerenciamento de Contas de Usuário (EP01)**

* **US01:** Eu, como **novo usuário**, quero **me cadastrar no sistema**, para que eu possa **acessar as funcionalidades da plataforma.** (RF01)
* **US02:** Eu, como **usuário existente**, quero **editar minhas informações de cadastro**, para **manter meus dados atualizados.** (RF02)
* **US03:** Eu, como **usuário cadastrado**, quero **realizar login no sistema**, para **acessar minhas funcionalidades.** (RF03)

**Épico: Consulta de Aulas (EP02)**

* **US04:** Eu, como **usuário**, quero **consultar a lista de aulas disponíveis**, para **escolher as que me interessam.** (RF04)
* **US05:** Eu, como **usuário**, quero **filtrar a lista de aulas por range de data, tema e instrutor**, para **encontrar aulas específicas para o que procuro.** (RF04)

**Épico: Consulta de Reservas (EP03)**

* **US06:** Eu, como **usuário**, quero **acompanhar meus agendamentos**, **consultando minhas reservas por range de data da aula, primeira aula e instrutor**(RF05)

**Épico: Gestão de Mensagens Automatizadas (EP04)**

* **US07:** Eu, como **gestor**, quero **criar novas mensagens automatizadas (informativos, promocionais, avisos)**, para **comunicar informações importantes aos usuários.** (RF06)
* **US08:** Eu, como **usuário**, quero **enviar mensagens automáticas para os clientes** com **base** em **regras predefinidas**, para melhorar a comunicação e o engajamento. (RF07)

* **US09: Gerenciar Comunicações Automatizadas:** Eu, como **gestor**, quero ter controle sobre as mensagens automatizadas, podendo **editar seu conteúdo, ativar/inativar seu envio e criar, editar e apagar as regras que definem quando elas devem ser enviadas**, para manter a comunicação sempre atualizada e no fluxo desejado. (RF08, RF09, RF10, RF11, RF12, RF13, RF14)

**Épico: Integração de Dados da Plataforma Original (EP06)**

* **US10:** Eu, como **usuário**, quero **importar um arquivo CSV com os dados de reservas de aula da Plataforma Original**, para **trazer os dados para o novo sistema.** (RF23)
* **US11:** Eu, como **sistema**, quero **ler o arquivo CSV importado e integrar os dados na base de dados de aulas**, para **garantir a consistência das informações.** (RF24)

**Épico: Visualização de Dados de Análise (EP07)**

* **US12:** Eu, como **gestor**, quero **visualizar dados de reservas (total, por dia/semana/mês) em gráficos (barras/pizza)**, para **analisar o volume de agendamentos.** (RF15)
* **US13:** Eu, como **gestor**, quero **visualizar dados de primeiras aulas (total, por período) em gráficos (barras/pizza)**, para **acompanhar o crescimento da base de alunos.** (RF16)
* **US14:** Eu, como **gestor**, quero **visualizar dados de aulas por professor (total, por período) em gráficos (barras/pizza)**, para **avaliar a performance dos instrutores.** (RF17)
* **US15:** Eu, como **gestor**, quero **visualizar os horários com maior número de reservas em gráficos (barras/pizza)**, para **identificar picos de demanda.** (RF18)

**Épico: Interação com Consultas de Análise (EP08)**

* **US16:** Eu, como **gestor**, quero **salvar consultas com filtros aplicados como favoritas**, para **acessar rapidamente as análises mais importantes.** (RF20)
* **US17:** Eu, como **gestor**, quero **exportar dashboards criados em formato CSV**, para **compartilhar ou utilizar os dados em outras ferramentas.** (RF21)
* **US18:** Eu, como **gestor**, quero **exportar dashboards em formato PDF**, para **compartilhar relatórios de forma visual.** (RF22)


## Critérios de Priorização

### MoSCoW

O **MoSCoW** é uma técnica utilizada para categorizar a importância de cada item (requisito, funcionalidade) sob a perspectiva do cliente, informando o **valor de negócio**. Essa priorização qualitativa é convertida em valores numéricos que serão utilizados na fórmula do **WSJF**, enquanto os demais fatores da fórmula são estimados pela equipe de desenvolvimento.

**MoSCoW** é um acrônimo que representa quatro níveis de prioridade:

| Letra | Significado          | Descrição                                                                 | Peso |
|-------|----------------------|---------------------------------------------------------------------------|------|
| M     | **Must have** | Requisitos **obrigatórios** para o funcionamento do sistema. Sem eles, o projeto é considerado um fracasso. | 4    |
| S     | **Should have** | Requisitos **importantes**, mas não cruciais. Podem ser adiados se houver necessidade. | 3    |
| C     | **Could have** | Requisitos **desejáveis** que agregam valor ao produto, mas são opcionais. | 2    |
| W     | **Won’t have (this time)** | Requisitos que **não serão incluídos** na entrega atual, mas poderão ser considerados em futuras iterações. | 1    |

---

## WSJF (Weighted Shortest Job First)

O **WSJF** é um método empregado para priorizar funcionalidades com base na relação entre o **valor a ser entregue** e o **esforço necessário** para sua implementação.

### Fatores Avaliados:

* **Valor do Negócio**: Pontuação derivada da priorização MoSCoW (escala de 1 a 4).
* **Urgência**: Avaliação da **criticidade temporal** da entrega da funcionalidade (escala de 1 a 5).
    * **1 (Muito Urgente):** A funcionalidade precisa ser entregue o mais rápido possível para evitar perdas significativas ou aproveitar uma oportunidade imediata.
    * **2 (Urgente):** A entrega da funcionalidade é importante e deve ser priorizada logo após os itens muito urgentes.
    * **3 (Média Urgência):** A funcionalidade pode ser entregue em um prazo razoável, sem impacto imediato crítico.
    * **4 (Pouco Urgente):** A entrega da funcionalidade pode ser planejada para um momento posterior, sem grande impacto.
    * **5 (Não Urgente):** A entrega da funcionalidade pode ser adiada significativamente ou até mesmo reconsiderada.
* **Redução de Risco**: Avaliação de como a funcionalidade contribui para **mitigar riscos** do projeto (escala de 1 a 5).
    * **5 (Baixa Redução de Risco):** A funcionalidade tem pouco ou nenhum impacto na redução de riscos do projeto.
    * **4 (Baixa a Média Redução de Risco):** A funcionalidade oferece uma pequena contribuição para a redução de riscos.
    * **3 (Média Redução de Risco):** A funcionalidade contribui moderadamente para a redução de riscos.
    * **2 (Média a Alta Redução de Risco):** A funcionalidade é importante para mitigar riscos significativos.
    * **1 (Alta Redução de Risco):** A funcionalidade é crucial para evitar ou mitigar riscos críticos que podem impactar severamente o projeto.

### Fórmula original:

`WSJF = (Valor do Negócio + Urgência + Redução de Risco) / Tamanho do Trabalho`

Para o contexto da disciplina, onde se consideadaptaremos a fórmula original do WSJF para focar no valor entregue, utilizando a seguinte adaptação.

`WSJF = (Valor do Negócio + Urgência + Redução de Risco)`

> Quanto maior o valor do WSJF, maior a prioridade do requisito.



# Priorização de Requisitos com WSJF

### Priorização de Requisitos com WSJF

| ID   | TÍTULO                                                          | MoSCoW | Urgência | Redução de Risco | WSJF-DeltaCore | MVP |
| :--- | :-------------------------------------------------------------- | :----- | :------- | :--------------- | :------------- | :-- |
| RF01 | Cadastrar usuários                                              | M      | 5        | 2                | 11             | X   |
| RF02 | Editar usuários                                                 | M      | 4        | 3                | 10             | X   |
| RF03 | Realizar login                                                  | M      | 5        | 1                | 10             | X   |
| RF04 | Consultar Aulas                                                 | S      | 3        | 3                | 9              |     |
| RF05 | Consultar Reservas                                              | S      | 3        | 3                | 9              |     |
| RF06 | Criar Mensagens Automatizadas                                   | M      | 4        | 3                | 10             | X   |
| RF07 | Enviar Mensagens Automatizadas                                  | M      | 4        | 3                | 10             | X   |
| RF08 | Editar Mensagens Automatizadas                                  | S      | 3        | 4                | 10             |     |
| RF09 | Apagar Mensagens Automatizadas                                  | M      | 3        | 4                | 10             | X   |
| RF10 | Consultar Mensagens Automatizadas                               | M      | 4        | 3                | 10             | X   |
| RF11 | Ativar ou Inativar Mensagens Automatizadas                      | C      | 2        | 4                | 8              |     |
| RF12 | Criar Regras de Envio                                           | S      | 3        | 3                | 9              |     |
| RF13 | Editar Regras de Envio                                           | C      | 2        | 4                | 8              |     |
| RF14 | Apagar Regras de Envio                                          | S      | 3        | 4                | 10             |     |
| RF15 | Consultar Dados de Reservas                                     | M      | 4        | 2                | 9              | X   |
| RF16 | Consultar Dados de Primeiras Aulas                              | M      | 4        | 2                | 9              | X   |
| RF17 | Consultar Dados de Aulas por Professor                          | M      | 4        | 2                | 9              | X   |
| RF18 | Consultar Horários de Maior Reserva                             | M      | 4        | 2                | 9              | X   |
| RF19 | Filtrar Dados de Consultas                                      | M      | 4        | 2                | 9              | X   |
| RF20 | Salvar Consultas Favoritas de Análise de Dados                  | S      | 3        | 3                | 9              |     |
| RF21 | Exportar Dashboard criados pelo usuário em csv                  | C      | 3        | 4                | 9              |     |
| RF22 | Exportar Dashboards em PDF                                      | C      | 3        | 4                | 9              |     |
| RF23 | Importar planilha csv de dados das reservas de aulas da Plataforma Original | C      | 3        | 3                | 8              |     |
| RF24 | Integrar planilha csv de dados das reservas de aulas da Plataforma Original com o banco de dados de aulas | C      | 3        | 3                | 8              |     |

---

## MVP (Minimum Viable Product)

O MVP (Produto Mínimo Viável) representa a versão inicial do sistema com as funcionalidades essenciais para atender às necessidades primárias dos usuários e validar as hipóteses do projeto. A seleção dos requisitos para o MVP foi baseada na priorização **MoSCoW**, incluindo os itens classificados como **"Must Have"** (M).

Os seguintes requisitos funcionais compõem o MVP:

* **RF01: Cadastrar usuários:** Permitir que novos usuários criem suas contas no sistema.
* **RF02: Editar usuários:** Permitir que os usuários editem suas informações de perfil.
* **RF03: Realizar login:** Permitir que usuários autenticados acessem o sistema.
* **RF06: Criar Mensagens Automatizadas:** Permitir a criação de modelos de mensagens automatizadas.
* **RF07: Enviar Mensagens Automatizadas:** Implementar a funcionalidade básica de envio de mensagens automáticas.
* **RF09: Apagar Mensagens Automatizadas:** Permitir a exclusão de mensagens automatizadas.
* **RF10: Consultar Mensagens Automatizadas:** Exibir a lista de mensagens automatizadas configuradas.
* **RF15: Consultar Dados de Reservas:** Visualizar dados de reservas em gráficos.
* **RF16: Consultar Dados de Primeiras Aulas:** Visualizar dados de primeiras aulas em gráficos.
* **RF17: Consultar Dados de Aulas por Professor:** Visualizar dados de aulas por professor em gráficos.
* **RF18: Consultar Horários de Maior Reserva:** Visualizar horários de maior reserva em gráficos.
* **RF19: Filtrar Dados de Consultas:** Permitir a aplicação de filtros básicos nas consultas.

| Código do Requisito | Nome do Requisito | Critério de Aceite |
| :------------------ | :---------------- | :----------------- |
| RF01                | Cadastrar usuários | **Cenário:** Novo usuário se cadastra no sistema. **Dado que** o usuário acessa a tela de cadastro **Quando** ele preenche todos os campos obrigatórios (nome, email, senha) e clica em "Cadastrar" **Então** o sistema deve criar a conta do usuário com sucesso, exibir uma mensagem de confirmação e redirecioná-lo para a tela de login ou dashboard. **E** a senha deve ser armazenada de forma segura (RNF07). |
| RF02                | Editar usuários | **Cenário:** Usuário existente edita suas informações. **Dado que** o usuário está logado e acessa a tela de edição de perfil **Quando** ele modifica um ou mais campos (ex: nome, email, telefone) e clica em "Salvar" **Então** o sistema deve atualizar as informações do usuário com sucesso e exibir uma mensagem de confirmação. |
| RF03                | Realizar login | **Cenário:** Usuário realiza login no sistema. **Dado que** o usuário acessa a tela de login **Quando** ele insere credenciais válidas (email e senha) e clica em "Entrar" **Então** o sistema deve autenticar o usuário com sucesso e redirecioná-lo para o dashboard. **E** o sistema deve suportar pelo menos 100 usuários simultâneos com tempo de resposta inferior a 3 segundos (RNF05). |
| RF06                | Criar Mensagens Automatizadas | **Cenário:** Gestor cria uma nova mensagem automatizada. **Dado que** o gestor acessa a funcionalidade de criação de mensagens automatizadas **Quando** ele preenche o título, conteúdo e tipo da mensagem (informativo, promocional, aviso) e clica em "Salvar" **Então** o sistema deve criar a mensagem automatizada com sucesso e exibi-la na lista de mensagens configuradas. |
| RF07                | Enviar Mensagens Automatizadas | **Cenário:** Sistema envia mensagens automáticas com base em regras (MVP: envio básico). **Dado que** uma mensagem automatizada está configurada e ativa **Quando** a condição de envio básica (ex: agendamento manual para teste) é disparada **Então** o sistema deve enviar a mensagem para os usuários elegíveis. |
| RF09                | Apagar Mensagens Automatizadas | **Cenário:** Gestor apaga uma mensagem automatizada. **Dado que** o gestor visualiza a lista de mensagens automatizadas **Quando** ele seleciona uma mensagem e confirma a exclusão **Então** o sistema deve remover a mensagem da lista e garantir que ela não seja mais enviada. |
| RF10                | Consultar Mensagens Automatizadas | **Cenário:** Gestor consulta mensagens automatizadas. **Dado que** o gestor acessa a funcionalidade de mensagens automatizadas **Quando** ele visualiza a lista de mensagens **Então** o sistema deve exibir todas as mensagens automatizadas configuradas, com informações como título, tipo e status (ativo/inativo). |
| RF15                | Consultar Dados de Reservas | **Cenário:** Gestor visualiza dados de reservas em gráficos. **Dado que** o gestor acessa o dashboard de análise **Quando** ele seleciona a visualização de "Dados de Reservas" **Então** o sistema deve exibir gráficos (barras/pizza) com o total de reservas e a distribuição por dia/semana/mês. |
| RF16                | Consultar Dados de Primeiras Aulas | **Cenário:** Gestor visualiza dados de primeiras aulas em gráficos. **Dado que** o gestor acessa o dashboard de análise **Quando** ele seleciona a visualização de "Dados de Primeiras Aulas" **Então** o sistema deve exibir gráficos (barras/pizza) com o total de primeiras aulas e a distribuição por período. |
| RF17                | Consultar Dados de Aulas por Professor | **Cenário:** Gestor visualiza dados de aulas por professor em gráficos. **Dado que** o gestor acessa o dashboard de análise **Quando** ele seleciona a visualização de "Dados de Aulas por Professor" **Então** o sistema deve exibir gráficos (barras/pizza) com o total de aulas ministradas por cada professor e a distribuição por período. |
| RF18                | Consultar Horários de Maior Reserva | **Cenário:** Gestor visualiza horários de maior reserva em gráficos. **Dado que** o gestor acessa o dashboard de análise **Quando** ele seleciona a visualização de "Horários de Maior Reserva" **Então** o sistema deve exibir gráficos (barras/pizza) que identifiquem os horários com maior volume de agendamentos. |
| RF19                | Filtrar Dados de Consultas | **Cenário:** Gestor aplica filtros básicos nas consultas do dashboard. **Dado que** o gestor está visualizando um dashboard de análise **Quando** ele aplica um filtro básico (ex: por data, por tipo de aula) **Então** o sistema deve atualizar os gráficos e dados exibidos para refletir o filtro aplicado. |

Os seguintes requisitos não funcionais também serão considerados no MVP para garantir uma experiência básica de qualidade:

* **RNF01: Tempo de carregamento de tela:** O frontend deve ter um tempo de carregamento inferior a 3 segundos.
* **RNF02: Clareza das mensagens de erro:** O sistema deve exibir mensagens de erro claras e suas possíveis causas.
* **RNF03: Navegação utilizando menus laterais e bem visíveis:** A navegação deve ser intuitiva e acessível.
* **RNF04: Acessibilidade para usuários com dificuldade de visualização:** O sistema deve conter ajustes para tamanho de fontes para 12px, 16px, 20px.
* **RNF05: Capacidade de usuários simultâneos:** O sistema deve suportar pelo menos 100 usuários simultâneos, mantendo tempo de resposta inferior a 3 segundos por requisição em 95% das requisições.
* **RNF06: Manutenibilidade do código:** O código do sistema deve ser bem estruturado em pastas autodescritivas e comentado para facilitar a manutenção e futuras atualizações.          | Outros 
* **RNF07: Compatibilidade com navegadores web modernos:** O sistema deve ser totalmente compatível com as versões do Chrome, Firefox e Safari referentes ao ano de 2025.

O foco do MVP é entregar um produto funcional que permita a validação das principais funcionalidades e a coleta de feedback inicial dos usuários, servindo como base para as próximas iterações e desenvolvimento de funcionalidades adicionais.



## Histórico de Versão:

| Data       | Versão | Descrição                | Autor              | Revisores               |
| :--------- | :----- | :------------------------- | :----------------- | :---------------------- |
| 26/04/2025 | 1.0    | Criação do Documento     | **Eduardo Waski, Luis Eduardo Lima, Isabelly** | **Henrique, Filipe, Cibelly** |
| 05/06/2025 | 1.1    | Modificação do backlog | **Luis Eduardo Lima, Isabelly** | **Henrique, Filipe, Cibelly, Eduardo Waski** |
| 05/06/2025 | 1.2    | Modificação das User Stories | **Luis Eduardo Lima, Isabelly, Eduardo** | **Henrique, Cibelly, Eduardo Waski** |
| 23/06/2025 | 1.3    | Modificação da priorizacão | **Isabelly, Eduardo, Filipe** | **Luis Eduardo Lima, Henrique, Cibelly, Eduardo Waski** |



