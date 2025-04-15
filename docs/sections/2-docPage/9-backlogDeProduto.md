# 9. Backlog do Produto

## 9.1 - Backlog Geral

O backlog de produto é uma lista dinâmica e priorizada que contém todos os requisitos, funcionalidades, melhorias e correções que serão necessárias para o desenvolvimento de um produto. Ele funciona como um guia para a equipe de desenvolvimento, servindo de referência para todas as tarefas que precisam ser realizadas ao longo do ciclo de vida do projeto. Essa lista não é fixa, mas sim atualizável conforme o produto evolui e novas necessidades surgem, garantindo que o time esteja sempre alinhado às prioridades e expectativas do projeto.

Essa configuração da logística de escrita das histórias de usuários se justifica pelo fato do processo de engenharia selecionada pela equipe: ScrumXP, conforme descrito na seção de [Estratégias de Engenharia de Software](./3-estrategiasEngSoftware.md). Em resumo, os Requisitos Funcionais são detalhados com mais profundidade durante a fase de Sprint Planning, momento em que as histórias de usuário são escritas no formato _"Eu como (agente), gostaria de (ação), para que (agregação de valor)"_.

Dentro do backlog, um dos principais elementos são as User Stories (US), ou histórias de usuário. As histórias de usuário descrevem, em uma linguagem simples e direta, as necessidades do usuário final de forma que todos da equipe possam compreender o valor de cada funcionalidade. Elas são compostas por três elementos principais: quem é o usuário, o que ele deseja fazer e qual o benefício dessa ação. Esse formato ajuda a manter o foco nas necessidades dos usuários, incentivando a equipe a desenvolver soluções que realmente agreguem valor ao produto.

As User Stories mais complexas ou que englobam várias funcionalidades estão agrupadas em Épicos. Um épico é uma descrição ampla de uma necessidade maior, que será posteriormente dividida em histórias menores e mais detalhadas. Esse processo de desmembramento ajuda a equipe a compreender o escopo do projeto e a definir prioridades para desenvolver partes do produto em blocos mais manejáveis. Épicos podem ser definidos com base nas principais funcionalidades ou objetivos do produto, e cada um pode se desdobrar em várias histórias de usuário que detalham as tarefas específicas.

Por sua vez, os Temas funcionam como agrupamentos de histórias e épicos que compartilham um propósito ou um objetivo comum dentro do produto. Eles são úteis para organizar o backlog em seções que representem áreas ou funcionalidades do sistema, facilitando a priorização de desenvolvimento de acordo com as metas do projeto. Diferente dos épicos, que normalmente possuem um escopo mais restrito, os temas são mais amplos e podem abranger múltiplos épicos e histórias de usuário, fornecendo uma visão geral das grandes áreas do produto.

### 9.1.1 - Temas:

Código | Título                                     | Descrição
------ | ------------------------------------------ | ----------
TM01   | Experiência do Usuário com a Empresa       | Funcionalidades que permitem ao usuário interagir com a empresa. 
TM02   | Gestão do Software                         | Funcionalidades voltadas para a administração do site institucional.

### 9.1.2 - Épicos:

Código | Tema Associado | Título                             | User Story
------ | -------------- | ---------------------------------- | ---------------------------
EP01   | TM01            | Consultar Posts de Blog            | Eu como usuário, devo ser capaz de interagir com o conteúdo disponível na central do Blog da Família do Sítio para me informar.
EP02   | TM01            | Marcar Visitas Técnicas            | Eu como usuário, devo ser capaz de explorar opções de visitas para conhecer a fábrica presencialmente.
EP03   | TM02            | Controle de Atendimento | Eu como funcionário da Família do Sítio, devo ser capaz de visualizar e responder as solicitações dos usuário clientes para que eu possa realizar o atendimento de forma ordenada e com o devido controle.
EP04   | TM02            | Administração de Acesso | Eu como funcionário da Família do Sítio, devo ser capaz de gerenciar os acessos de usuários funcionários para que o sistema de administração possa ser acessado somente por pessoas autorizadas.

### 9.1.3 - User Storys dos Requisitos Funcionais:
Código | Requisito Funcional Associado | Épico Associado | User Story
------ | ----------------------------- | --------------- | ----------------------------------
US01   | RQF01 | EP01 | Eu como usuário devo ser capaz desenvolver um conteúdo, com permissão à formatação de texto avançados e inserição imagens para que seja publicado como blog no site da Família do Sítio.
US02   | RQF02 | EP01 | Eu como usuário devo ser capaz de editar qualquer blog, antes e após a publicação, para que eu possa fazer a manutenção do seu conteúdo de forma rápida.
US04   | RQF04 | EP01 | Eu como usuário devo ser capaz de atribuir uma categoria à um blog para que eu possa encontrá-lo com mais facilidade.
US05   | RQF05 | EP01 | Eu como usuário devo ser capaz de filtrar os blog pela sua categoria para que eu possa visualizar apenas os conteúdos de meu interesse.
US06   | RQF06 | EP01 | Eu como usuário devo ser capaz de pesquisar por títulos de blogs para que eu poossa encontrar os conteúdos com mais facilidade.
US08   | RQF08 | EP01 | Eu como usuário devo ser capaz de conseguir acessar outros blogs recomendados após acessar o seu conteúdo detalhado, para que possa continuar acessando outros conteúdos da empresa.
US11   | RQF11 | EP02 | Eu como usuário gostaria de criar uma disponilibidade de visita técnica em um calendário no sistema, para que o público externo, como consumidores, possam selecionar este dia para agendar sua visita à empresa.
US14   | RQF14 | EP02 | Eu como usuário gostaria de cadastrar meu agendamento em um dos dias disponíveis de visitação, para realizar a visita técnica de forma presencial.
US15   | RQF15 | EP03 | Eu como usuário, devo ser capaz de fazer uma reclamação, um elogio, uma dúvida, sugestão ou parcerias para que os colaboradores da Família do Sítio esteja ciente e eu receba um retorno sobre minha solicitação.
US16   | RQF16 | EP03 | Eu como usuário, devo ser capaz de localizar produtos de meu interesse, em estabelecimentos dentro de um sistema de GPS, para que eu saiba onde achar os produtos da Família do Sítio.
US18   | RQF18 | EP04 | Eu como Funcionário da Família do Sítio, devo ser capaz de fazer login com meu email empresarial e senha, para que eu possa acessar as funções da Central de Administração.
US19   | RQF19 | EP04 | Eu como Funcionário da Família do Sítio, devo ser capaz de criar ou apagar o acesso de novas contas no sistema, para que eu possa controlar o acesso à central administrativa.

### 9.1.4 - Relacionado aos Requisitos Não Funcionais (Somente de Usabibilidade):
Código | Título do Requisito de Usabilidade (Relacionada à implementação de uma interface)
------ | ----------------------------------------------------
RNF01 | O sistema deve permitir que os usuários localizem facilmente a seção que apresenta a história da empresa, com navegação intuitiva e conteúdo disposto de forma clara e acessível.
RNF02 | A interface deve exibir os produtos da empresa de forma visualmente organizada e categorizada, facilitando a identificação e compreensão de cada item pelo usuário.
RNF03 | As informações sobre ações sociais da empresa devem estar disponíveis de maneira acessível e atrativa, garantindo clareza na comunicação e fácil navegação para o usuário.
RNF04 | Os contatos da empresa devem ser apresentados em um formato padronizado e de fácil compreensão, com suporte a links clicáveis para e-mail, telefone e redes sociais.
RNF05 | As vagas de emprego da empresa devem ser exibidas de forma clara, com uma organização que facilitem a busca por oportunidades compatíveis com o interesse do usuário, instruindo o usuário como prosseguir com o processo no site terceiro empregare.
RNF06 | As instruções do E-commerce devem ser descritas de maneira clara, com linguagem simples e objetiva, utilizando elementos visuais, como ícones e guias passo a passo, para melhorar a compreensão.
RNF07 | A interface da página principal deverá introduzir os usuários às principais informações para as demais navegações: História da Família do Sítio e Ações Sociais, além do rodapé e cabeçalho com as demais navegações.

## 9.2 - Priorização do Backlog Geral

Para a construção da priorização, a equipe utilizou uma das fases do workshop Lean Inception para auxiliar na atividade: **Revisão Técnica e de Negócio**. Nessa fase, todas as funcinalidades são classificadas em níveis de 1 à 3, onde:

- **1:** Classifica a funcinalidade como _Baixo_ no tópico de revisão de referência;
- **2:** Classifica a funcinalidade como _Médio_ no tópico de revisão de referência;
- **3:** Classifica a funcinalidade como _Alta_ no tópico de revisão de referência;

Em outras palavras, caso o nível de esforço seja nível 1, por exemplo, isto significa que aquela funcionalidade possui _Baixo nível de esforço_, se for nível 2, possui _Médio nível de esforço_. Em contrapartida, os 3 tópicos de revisões tangem:

- **Nível de Esforço:** Indica a quantidade de trabalho e dedicação necessária para desenvolver e finalizar a funcionalidade, considerando o tempo e os recursos da equipe. Esse tópico avalia o esforço total, mas não necessariamente a dificuldade técnica. Cada nível indica:
    - **1:** Exige baixo esforço, sendo uma funcionalidade simples de implementar, com impacto mínimo no tempo de desenvolvimento e sem grande consumo de recursos.
    - **2:** Exige esforço moderado, demandando mais tempo e dedicação, mas ainda sendo possível dentro do escopo regular do time.
    - **3:** Exige alto esforço, representando uma funcionalidade que pode consumir grande parte dos recursos e do tempo disponíveis, exigindo maior planejamento e execução detalhada.

<br>

- **Nível de Valor Agregado:** Indica o quanto a funcionalidade agrega valor ao produto ou serviço final, considerando os benefícios que trará para os usuários ou para o alcance dos objetivos estratégicos do negócio. Cada nível indica:
    - **1:** Agrega baixo valor ao produto, sendo um requisito que não gera grande impacto para os usuários ou para os objetivos estratégicos.
    - **2:** Agrega valor médio ao produto, contribuindo moderadamente para a satisfação dos usuários ou objetivos do negócio.
    - **3:** Agrega alto valor, sendo essencial para o sucesso do produto e trazendo impacto significativo para os usuários ou para o negócio.

Para calcular a **prioridade** das funcionalidades com base nos três níveis de avaliação (Esforço, Valor Agregado), iremos utilizar uma fórmula que combine os pesos de cada critério. O objetivo é priorizar funcionalidades que agreguem mais valor e ofereçam uma boa experiência ao usuário, mas com menor esforço.

**Prioridade = (4 * Valor_Agregado) - Esforço**

- **Valor Agregado** têm peso **4**, pois são mais importantes para o impacto do produto.
- **Esforço** é subtraído, pois funcionalidades com menor esforço são mais prioritárias.

Os requisitos em sua devida priorização é:

Código | Nível de Valor Agregado | Nível de Esforço | Prioridade
------ | ----------------------- | ---------------- | ----------
RQF01   | 3                       | 1                | 11
RQF08   | 3                       | 1                | 11
RQF04   | 3                       | 2                | 10
RQF14   | 3                       | 2                | 10
RQF15   | 3                       | 2                | 10
RQF19   | 3                       | 2                | 10
RQF16   | 3                       | 3                | 9
RQF02   | 2                       | 1                | 7
RQF06   | 2                       | 2                | 6
RQF11   | 2                       | 2                | 6
RQF18   | 2                       | 2                | 6
RQF05   | 1                       | 1                | 3
RNF01 | 3                       | 1                | 11
RNF02 | 3                       | 1                | 11
RNF03 | 3                       | 1                | 11
RNF04 | 3                       | 1                | 11
RNF05 | 3                       | 1                | 11
RNF06 | 3                       | 1                | 11
RNF07 | 3                       | 1                | 11

<!-- US03   | Nível 2                    | Nível 1                           | Nível 2     |3 -->
<!-- US12   | Nível 3                    | Nível 2                           | Nível 3     |7 -->
<!-- US13   | Nível 1                    | Nível 2                           | Nível 3     |9 -->
<!-- US09   | Nível 1                    | Nível 2                           | Nível 2     |7 -->
<!-- US10   | Nível 1                    | Nível 2                           | Nível 2     |7 -->

## 9.3 - MVP

Decidido durante a produção do Workshop Lean Inception, foi estabelecido o MVP do produto de software da Família do Sítio e a sua versão de incremento baseando-se na definição de 2 categorias, como dito na seção anterior:

- Esforço de Execução;
- Valor Agregado;

Com esta técnica, foi possível elencar as funcionalidades de maior valor agregado para as primeiras produções feita pelo time. Dessa forma, as funcionalidades **que estão em MVP**, são:

### 9.3.1 - Requisitos Funcionais

- **RQF01:** Criar Post no Blog;
- **RQF02:** Editar Post no Blog;
- **RQF04:** Categorizar Post no Blog;
- **RQF05:** Fitrar Posts no Blog;
- **RQF06:** Pesquisar Posts no Blog;
- **RQF08:** Recomendar outros Posts no Blog;
- **RQF11:** Configurar disponibilidade de Visita Técnica à Fábrica;
- **RQF14:** Agendar visita técnica à Fábrica;
- **RQF15:** Enviar mensagem à empresa pela Central de Atendimento ao Cliente;
- **RQF16:** Localizar por Produtos da Família do Sítio;
- **RQF18:** Fazer login na Central Administrativa;
- **RQF19:** Gerenciar contas com acesso à Central de Administração.

### 9.3.2 - Requisitos não Funcionais de Usabilidade (Relacionadas à implementação de uma Interface)

- **RNF01:** O sistema deve permitir que os usuários localizem facilmente a seção que apresenta a história da empresa, com navegação intuitiva e conteúdo disposto de forma clara e acessível;
- **RNF02:** A interface deve exibir os produtos da empresa de forma visualmente organizada e categorizada, facilitando a identificação e compreensão de cada item pelo usuário;
- **RNF03:** As informações sobre ações sociais da empresa devem estar disponíveis de maneira acessível e atrativa, garantindo clareza na comunicação e fácil navegação para o usuário;
- **RNF04:** Os contatos da empresa devem ser apresentados em um formato padronizado e de fácil compreensão, com suporte a links clicáveis para e-mail, telefone e redes sociais;
- **RNF05:** As vagas de emprego da empresa devem ser exibidas de forma clara, com uma organização que facilitem a busca por oportunidades compatíveis com o interesse do usuário, instruindo o usuário como prosseguir com o processo no site terceiro empregare;
- **RNF06:** As instruções do E-commerce devem ser descritas de maneira clara, com linguagem simples e objetiva, utilizando elementos visuais, como ícones e guias passo a passo, para melhorar a compreensão.
- **RNF07 -** A interface da página principal deverá introduzir os usuários às principais informações para as demais navegações: História da Família do Sítio e Ações Sociais, além do rodapé e cabeçalho com as demais navegações.


### OBS: 
Os requisitos funcionais RQF03, RQF07, RQF09, RQF10, RQF12 e RQF13 e RQF17 não entraram no backlog por decisão dos stakeholders durante reuniões de alinhamento e criação do Lean Inception por motivos como não serem tão necessários, por perceber que outra funcionalidade já cumpriria tal função, etc.

<br><br>

# Referências Bibliográficas:

> PRESSMAN, Roger S. Engenharia de Software: Uma Abordagem Profissional. 7ª ed. São Paulo: McGraw Hill, 2011.

> RUBIN, Kenneth S. Scrum Essencial: Um Guia Prático para o Processo Ágil Mais Popular. São Paulo: Alta Books, 2014.

> SCHWABER, Ken; SUTHERLAND, Jeff. Guia do Scrum: O Guia Definitivo para o Scrum, as Regras do Jogo. Scrum.org, 2020.

> CAROLI, Paulo. Lean Inception: Como Alinhar Pessoas e Construir o Produto Certo. São Paulo: Caroli.org, 2018.

> RIES, Eric. A Startup Enxuta: Como os Empreendedores Atuais Utilizam a Inovação Contínua para Criar Empresas Extremamente Bem-Sucedidas. Rio de Janeiro: Alta Books, 2012.

---
## Histórico de Versão:
| Data | Versão | Descrição | Autor | Revisores |
|---- | ------ | --------- | ----- | --------- |
| 03/12/24 | 1.0 | Criação do documento | Daniel Rodrigues | Arthur Sousa
| 06/12/24 | 1.1 | Desenvolvimento de novos tópicos | Daniel Rodrigues | Arthur Sousa
| 09/12/24 | 1.2 | Corrigindo tópicos e adicinando novos itens do backlog | Daniel Rodrigues | Arthur Sousa
| 09/12/24 | 1.3 | Incluindo o calculo de priorização | Manuella, Arthur, João | Daniel
| 12/12/24 | 2.0 | Novos requisitos e reestruturação do backlog | Daniel Rodrigues | Arthur Suares
| 12/12/24 | 2.1 | Adição dos Temas e Épicos | Daniel Rodrigues | João Pedro
| 14/01/25 | 2.2 | Modificação das referências aos RQNF | João Pedro | Marcella Anderle
| 18/01/25 | 3.0 | Reformulação do backlog | Daniel Rodrigues da Rocha | Arthur Suares
| 20/01/25 | 3.1 | Modificação dos RNF e RQNF | Ana Carolina | Daniel Rodrigues
