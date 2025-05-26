Requisitos:


visto que escolhemos o modelo dsdm em que por natureza utiliza o método de priorização must have, should have, could have e won't have. Realizamos submetidos de priorização como valor e esforço

Critério total de priorização

RF01. Realizar Cadastro 
Must Have
RF02. Editar usuários
Must Have
RF03. Realizar login
Must Have
RF04. Listar Aulas
Should Have
RF05. Filtrar Aulas
Should Have
RF06. Listar Reservas
Should Have
RF07. Filtrar Reservas
Should Have
RF08. Enviar Mensagens Automatizadas
Must Have
RF09. Criar Mensagens Automatizadas
Must Have
RF10. Editar Mensagens Automatizadas
Should Have
RF11. Apagar Mensagens Automatizadas
Must Have
RF12. Listar Mensagens Automatizadas
Must Have
RF13. Ativar ou Inativar Mensagens Automatizadas
Could Have
RF14. Criar Regras de Envio
Should Have
RF15. Editar Regras de Envio
Could Have
RF16. Apagar Regras de Envio
Should Have
RF17. Criar Dashboard de Análise de dados
Must Have
RF18. Criar filtros para dados do dashboard
Should Have
RF19. Editar filtros para dados do dashboard
Could Have
RF20. Listar filtros para dados do dashboard
Should Have
RF21. Filtrar dados de Dashboards
Must Have
RF22. Favoritar Dashboards de análises de dado
Could Have
RF23. Exportar Dashboards
Could Have
RF24. Exportar Automaticamente os Dados da Plataforma Original
Could Have




Critérios de Priorização
Para organizar e planejar a implementação dos requisitos de forma eficiente, utilizamos os seguintes critérios de priorização:
1. Valor
Avalia o valor agregado por cada funcionalidade ao produto como um todo. Leva em consideração os benefícios que a funcionalidade trará para o negócio, como aumento de receita, melhoria na experiência do usuário, ganho de competitividade ou economia de tempo e recursos. Funcionalidades que entregam alto valor têm potencial de gerar maior impacto no sucesso do sistema.
2. Esforço
Mede o nível de trabalho e recursos necessários da equipe para implementar a funcionalidade. Pode envolver análise de complexidade técnica, tempo estimado de desenvolvimento, número de integrantes necessários, riscos envolvidos e integração com outros sistemas. Quanto maior o esforço, mais criteriosa deve ser a decisão de priorização, equilibrando com o valor e a urgência.

3. Dependência:
A dependência, refere-se ao grau em que outros itens do backlog de desenvolvimento dependem de um requisito específico para serem implementados. Ela é categorizada em três níveis:
1 – Poucos dependentes: Quase nenhum item depende dele.


2 – Dependência média: Um número razoável de itens dependem dele.


3 – Muitos dependentes: Essencial para liberar vários outros itens do backlog.


Prioridade
Definimos que vamos usar a fórmula:
Prioridade = ((4x(Valor) + Dependência) - Esforço )

Critério total de priorização



Valor
Esforço
Dependência
Priorização
RF01. Cadastrar usuários
4
2
2
16
RF02. Editar usuários
4
2
1
15
RF03. Realizar login
4
2
1
15
RF04. Listar Aulas
2
1
2
9
RF05. Filtrar Aulas
2
2
1
9
RF06. Listar Reservas
2
1
2
9
RF07. Filtrar Reservas
2
2
1
7
RF08. Enviar Mensagens Automatizadas
4
3
2
15
RF09. Criar Mensagens Automatizadas
4
2
3
17
RF10. Editar Mensagens Automatizadas
3
2
2
12
RF11. Apagar Mensagens Automatizadas
4
1
1
16
RF12. Listar Mensagens Automatizadas
4
1
1
16
RF13. Ativar ou Inativar Mensagens Automatizadas
2
2
1
7
RF14. Criar Regras de Envio
3
3
3
12
RF15. Editar Regras de Envio
2
3
1
6
RF16. Apagar Regras de Envio
2
2
1
7
RF17. Criar Dashboard de Análise de dados
4
4
3
15
RF18. Criar filtros para dados do dashboard
2
3
2
7
RF19. Editar filtros para dados do dashboard
1
3
1
8
RF20. Listar filtros para dados do dashboard
2
1
1
3
RF21. Filtrar dados de Dashboards
4
3
1
1
RF22. Favoritar Dashboards de análises de dado
1
2
1
15
RF23. Exportar Dashboards
1
4
1
1
RF24. Exportar Dados da Plataforma Original
4
4
3
15





Backlog do Produto
Backlog Geral
O backlog do produto do projeto DeltaCore é uma lista priorizada e evolutiva de funcionalidades e requisitos que guiam o desenvolvimento do sistema proposto para as franquias Vidya Yoga e Race Bootcamp. A estrutura foi elaborada conforme as diretrizes do método ágil DSDM e os princípios do ScrumXP, com apoio da técnica Lean Inception para priorização baseada em valor agregado e esforço estimado.
As histórias de usuário (User Stories) foram definidas utilizando o padrão:
Eu como (usuário), desejo (ação) para (benefício).
Além disso, as histórias foram agrupadas em Épicos e Temas, promovendo uma organização que facilita a rastreabilidade, o planejamento incremental e a comunicação com os stakeholders.
Temas
Código
Título
Descrição
TM01
Comunicação com Alunos
Funcionalidades que envolvem o envio automatizado de mensagens.
TM02
Análise de Dados
Funcionalidades relacionadas à geração de relatórios e dashboards.
TM03
Agendamento de Aulas
Funcionalidades relacionadas à marcação e visualização de aulas.
TM04
Gestão de Usuários e Acesso
Cadastro, login e controle de contas.
TM05
Integração com Sistemas Existentes
Funcionalidades de exportação e interoperabilidade.


Épicos
Código
Tema Associado
Título
User Story resumida
EP01
TM01
Envio de Mensagens
Como gestor, quero enviar mensagens automáticas aos alunos para melhorar a retenção.
EP02
TM02
Visualização de Relatórios
Como gestor, quero ver painéis com estatísticas dos alunos e das aulas.
EP03
TM03
Visualizar agendamentos
Como aluno, quero visualizar agendamentos de aulas.
EP04
TM04
Acesso ao Sistema
Como recepcionista, quero logar no sistema para acessar minhas funcionalidades.
EP05
TM05
Exportação de Dados
Como administrador, quero exportar dados da plataforma original para análise.

User Stories dos Requisitos Funcionais
Código
Requisito Funcional
Épico Associado
User Story
RF08
Enviar mensagens
EP01
Eu como gestor, desejo que o sistema envie mensagens automáticas para alunos inativos.
RF09
Criar mensagens
EP01
Eu como gestor, desejo cadastrar modelos de mensagens para automação de comunicação.
RF11
Apagar mensagens
EP01
Eu como gestor, desejo remover mensagens automáticas que não são mais úteis.
RF17
Criar dashboard
EP02
Eu como gestor, desejo visualizar estatísticas de uso e engajamento dos alunos.
RF22
Filtrar dashboards
EP02
Eu como gestor, desejo aplicar filtros nos dashboards para segmentar os dados analisados.
RF06
Listar reservas
EP03
Eu como recepcionista, desejo ver as reservas dos alunos em uma agenda visual.
RF01
Cadastrar usuários
EP04
Eu como recepcionista, desejo cadastrar novos alunos no sistema.
RF03
Realizar login
EP04
Eu como recepcionista, desejo acessar o sistema com login e senha.
RF25
Exportar dados
EP05
Eu como administrador, desejo exportar dados da plataforma para uso interno.


Requisitos Não Funcionais (Usabilidade)
Código
Requisito
RNF01
O sistema deve ser responsivo e acessível em dispositivos móveis.
RNF02
A interface deve ter tempo de resposta inferior a 2 segundos por ação.
RNF03
O sistema deve exibir mensagens de erro claras e orientativas.
RNF04
A navegação deve ser intuitiva e orientada por menus laterais e filtros.



Priorização do Backlog Geral (MoSCoW + Valor e Esforço)
Código
Valor
Esforço
MoSCoW
Prioridade (4×Valor - Esforço)
RF08
4
3
Must Have
13
RF09
4
2
Must Have
14
RF11
4
1
Must Have
15
RF17
4
4
Must Have
12
RF22
4
3
Must Have
13
RF06
2
1
Should Have
7
RF01
1
2
Could Have
2
RF03
1
2
Could Have
2
RF25
4
4
Must Have
12


MVP
As funcionalidades escolhidas para compor o MVP foram aquelas classificadas como "Must Have" com maior valor agregado e viabilidade técnica.
Requisitos Funcionais no MVP
RF08: Enviar mensagens automatizadas
RF09: Criar mensagens automatizadas
RF11: Apagar mensagens automatizadas
RF17: Criar painel de dados (dashboard)
RF22: Filtrar dados do dashboard
RF25: Exportar dados da plataforma original
Requisitos Não Funcionais no MVP
RNF01: Responsividade em dispositivos móveis
RNF02: Tempo de resposta inferior a 2 segundos
RNF03: Mensagens de erro orientativas

Documento baseado na estrutura do projeto Café do Sítio e adaptado ao contexto do nosso projeto.


8. DoR e DoD
Esta seção apresenta os conceitos de Definition of Ready (DoR) e Definition of Done (DoD), que ajudam a garantir que o trabalho esteja bem definido antes de ser iniciado e que esteja completo antes de ser considerado pronto para entrega.

8.1 Definition of Ready (DoR)
O DoR é um acordo entre o time e o Product Owner (PO), indicando quando um requisito estará preparado para ser puxado para uma Sprint. Ele define os critérios que devem ser atendidos para que uma user story, caso de uso ou cenário esteja pronto para ser desenvolvido. Isso garante clareza nos requisitos e ausência de impedimentos.
Para um item do backlog ser considerado Ready:
O requisito possui informações necessárias para ser trabalhado, com detalhes suficientes e sem ambiguidades.


O requisito cabe em uma Sprint, é suficientemente pequeno para ser concluído no ciclo.


Está representado por uma história de usuário, facilitando o entendimento pelo time.


Possui critérios de aceitação e BDD (Behavior Driven Development), descrevendo os comportamentos esperados.


Está mapeado para uma interface, quando necessário.


Suas dependências estão mapeadas.


Já foi estimado em esforço.


Está alinhado com os objetivos do produto e possui valor claro agregado.



8.2 Definition of Done (DoD)
O DoD é um acordo que define quando uma funcionalidade pode ser considerada concluída com qualidade, demonstrando que o time e o PO estão satisfeitos com o resultado. Um requisito que não atenda completamente ao DoD não deve ser liberado ou apresentado na Sprint Review.
Para um item do backlog ser considerado Done:
Entrega um incremento funcional do produto, com valor claro.


Contempla os critérios de aceite estabelecidos previamente.


Está documentado para uso, manutenção e compreensão por outros membros ou stakeholders.


Está aderente aos padrões de codificação definidos pela equipe.


Mantém os índices de performance esperados, sem prejudicar o desempenho geral do sistema.


O desenvolvimento está completo, conforme o escopo e requisitos definidos.


Foram realizados e aprovados testes unitários e de integração, garantindo funcionamento correto e integração com os módulos.
Foi realizada revisão de código por outro desenvolvedor e validado pela equipe de QA.


Requisitos legais foram respeitados.
A documentação foi atualizada e o feedback do cliente foi incorporado.



Processo de Engenharia de Requisitos

1. Elicitação e Descoberta A elicitação é a etapa inicial da Engenharia de Requisitos, responsável por identificar o que os stakeholders realmente precisam de um sistema de software. Neste momento, o engenheiro de requisitos atua como um mediador e investigador, utilizando diversas técnicas como entrevistas, questionários, workshops, observações diretas, análise de documentos existentes, prototipagem e brainstormings. O objetivo é obter uma visão ampla e profunda das expectativas, dores e desejos dos usuários e das demais partes interessadas. Um dos maiores desafios dessa etapa é que os stakeholders nem sempre sabem exatamente o que querem ou expressam suas necessidades de forma vaga ou contraditória. Por isso, mais do que coletar informações, a elicitação exige sensibilidade, escuta ativa e habilidade para fazer as perguntas certas. 
Utilizamos entrevistas para entender a real necessidade do cliente, brainstorming para sugerir melhores soluções, e prototipagem para agregar valor o mais rápido possível para o cliente.
2. Análise e Consenso Após a coleta inicial de dados, os requisitos identificados precisam ser analisados para verificar se são viáveis, completos, consistentes e livres de ambiguidade. Essa etapa é essencial para transformar as necessidades brutas dos stakeholders em informações estruturadas e compreensíveis. Durante a análise, podem ser identificados conflitos entre requisitos de diferentes grupos ou problemas de entendimento. Nesse cenário, o engenheiro de requisitos assume o papel de negociador, facilitando o consenso entre as partes envolvidas e promovendo decisões colaborativas. A priorização dos requisitos também ocorre aqui, permitindo que a equipe de desenvolvimento saiba o que é mais crítico entregar primeiro. O objetivo é construir um conjunto coeso e realista de requisitos que represente, de forma equilibrada, os interesses de todos os envolvidos no projeto. 
Nesta etapa, verificamos o que realmente fazia sentido e o que era viável realizarmos. Realizamos esta etapa por meio de reuniões de equipe com e sem o cliente.
3. Declaração Com os requisitos já analisados e acordados, é necessário registrá-los de forma clara, precisa e acessível. A etapa de declaração consiste em documentar formalmente os requisitos, garantindo que todos os envolvidos no projeto tenham uma referência comum e confiável. Essa documentação pode assumir diferentes formas, como listas de requisitos textuais, casos de uso, histórias de usuário (user stories) ou outros formatos adequados ao contexto. É fundamental que os requisitos sejam escritos em uma linguagem compreensível tanto para os desenvolvedores quanto para os stakeholders não técnicos, evitando jargões e ambiguidades. Uma boa declaração serve como base para o planejamento do projeto, a estimativa de esforço, o desenvolvimento e, posteriormente, a validação do sistema. 
Na etapa de declaração, utilizamos as listas de requisitos textuais, casos de uso, user stories.
4. Representação Embora a declaração textual seja essencial, muitos requisitos se beneficiam de formas gráficas de representação, que facilitam o entendimento e a comunicação. Nesta etapa, os requisitos são organizados por meio de diagramas, modelos ou outras estruturas visuais, como diagramas de casos de uso, fluxogramas, modelos de domínio e mapas de requisitos. Essas representações ajudam a revelar relacionamentos, dependências e fluxos de interação que seriam mais difíceis de perceber apenas com texto. Além disso, tornam-se ferramentas valiosas em reuniões e revisões com os stakeholders, especialmente em ambientes colaborativos e interdisciplinares. A representação visual contribui para a construção de uma visão comum do sistema e facilita a identificação de falhas, omissões ou redundâncias. 
5. Verificação e Validação Antes que os requisitos sejam utilizados como base para o desenvolvimento, é fundamental garantir que estejam corretos e completos. A verificação busca confirmar se os requisitos foram especificados de maneira adequada, ou seja, se estão bem escritos, livres de inconsistências e tecnicamente viáveis. Já a validação busca assegurar que os requisitos realmente refletem o que os stakeholders precisam. Isso pode ser feito por meio de revisões formais, reuniões de inspeção, simulações, protótipos e testes de aceitação. Essa etapa é importante porque ajuda a evitar retrabalho e desperdício de recursos, garantindo que o sistema seja desenvolvido com base em informações confiáveis e alinhadas às expectativas dos usuários. 
Feito por meio de reuniões com a equipe e com o cliente. Será feito com protótipos e testes de aceitação.

6. Organização e Atualização Por fim, os requisitos precisam ser gerenciados ao longo de todo o ciclo de vida do projeto, já que mudanças são inevitáveis. A etapa de organização e atualização envolve a estruturação dos requisitos de forma que possam ser facilmente acessados, rastreados, versionados e modificados conforme novas necessidades surjam ou mudanças no ambiente do projeto ocorram. Ferramentas de gerenciamento de requisitos, como sistemas de controle de versão e rastreabilidade, são frequentemente utilizadas aqui. É responsabilidade da equipe de engenharia de requisitos manter os documentos atualizados, garantir que mudanças sejam registradas de forma transparente e avaliar os impactos que cada modificação pode gerar. Essa atividade é essencial para manter a coerência entre o que foi acordado inicialmente e o que será efetivamente entregue ao final do projeto.


