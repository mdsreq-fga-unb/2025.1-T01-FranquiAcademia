# 3. Estratégias de Engenharia de Software

##3.1 - Estratégia priorizada
**Abordagem de Desenvolvimento de Software:** Ágil

**Ciclo de vida:** Iterativo e Incremental 

**Processo de Engenharia de Software:** Scrum/XP

##3.2 - Quadro comparativo

Características     | Scrum/XP | FDD - Feature Drive Development|  
-------- | ------ | --------- | 
Abordagem Geral | Iterativo e incremental. Possui um foco maior na agilidade, não priorizando documentação | Focado em desenvolver funcionalidades especificas(features), divindo projetos grandes em incrementos menores e gerenciáveis |
Foco em arquitetura | A arquitetura é desenvolvida de forma incremental e evolutiva, com o foco em atender às necessidades imediatas do produto. Não há um design extenso ou detalhado no início do projeto | Sugere a criação de diagramas UML para arquitetura do sistema e diagramas de sequência complementares | 
Estrutura de Processos | Ciclos curtos(Sprints) de desenvolvimento. Processo ágil e flexível, se preocupando com a entrega contínua. Sprints podem duram 2-4 semanas | Divede um projeto grande em incrementos menores. Esses incrementos geralmente duram 2-10 dias, com iterações máximas de 2 semanas|
Flexibilidade de Requisitos | Alta flexibilidade movida por feedback do cliente a cada Sprint | Permite mudanças em requisitos até certo ponto, mas tende a ser mais rígido devido ao foco em funcionalidades específicas
Colaboração com o cliente | Alto envolvimento do cliente. Seja durante as Sprints revisando incrementos ou fornecendo feedbacks | Não necessariamente envolve o cliente numa comunicação direta na criação do produto. Mas sim utiliza um documentação extensa para que haja comunicação entre a equipe
Complexidade do processo | Processo mais simplificado. Com foco menor em documentação, e maior na autonomia da equipe | Utiliza user stories e diagramas UML detalhados de arquitetura e de sequência para documentação de requisitos que são que são analisados antes das iterações
Práticas de Desenvolvimento |  Programação em par, integração contínua, testes automatizados, refatoração, design simples, e foco em qualidade contínua durante o desenvolvimento | Análise da documentação existente, geração de diagramas de sequência UML e refinamento do modelo
Controle de Qualidade | Testes automatizados, TDD (Test-Driven Development), através de integração contínua garantindo qualidade durante o desenvolvimento | Usa testes ao final de cada iteração e inspeções dos incrementos implementados
Suporte à equipes de Desenvolvimento | Equipes mais autônomas e colaborativas. Foco na comunicação e nas interações diretas para resolver problemas | Permite equipes maiores do que outras metodologias ágeis 



##3.3 - Justificativa

A escolha do processo foi baseada em uma adaptação do framework proposto por Gupta. Em tal framework, são feitas perguntas cujas respostas são "Sim" ou "Não" relacionadas aos requisitos, a equipe de desenvolvimento, aos stakeholders e ao tipo de projeto e seus riscos. A resposta da equipe à cada uma das questões propostas por Gupta indica o processo de desenvolvimento de software ideal para o projeto. As perguntas propostas estão elencadas na figura 1, bem como as respostas fornecidas pelo time de desenvolvimento.

<p style="text-align: center;">
Figura 1 - Escolha de processo através do framework Gupta adaptado
</p>

![Quadro de Seleção de processos](../../assets/gupta.png)

<p style="text-align: center;">
Fonte: Elaborado pelos autores (2024)
</p>

Conforme explicitado na figura 1, o processo de desenvolvimento de software mais indicado para o projeto é o Scrum/XP, uma combinação do Extreme Programming (XP) com o framework de gestão de projetos Scrum. Tanto Scrum, quanto XP foram desenvolvidos no contexto de abordagem ágil de desenvolvimento de software e ciclo de vida do produto iterativo e incremental.

O diferencial do Scrum/XP para o FDD na escolha através do framework, foi a flexibilidade de requisitos. Por outro lado, a escolha do Scrum/XP já era desejada pelo time de desenvolvimento devido a experiências anteriores bem sucedidas com o processo.

---
####Referências:

<p><small>BASTO FAGUNDES, P.; DETERS, J. I.; SILVA DOS SANTOS, S. D. Comparação entre os processos dos métodos ágeis: XP, Scrum, FDD e ASD em relação ao desenvolvimento incremental iterativo. E-Tech: Atualidades Tecnológicas para Competitividade Industrial, Florianópolis, v. 1, n. 1, p. 37-46, 2008, Disponível em: <a href="https://etech.sc.senai.br/revista-cientifica/article/download/21/18/3123">https://etech.sc.senai.br/revista-cientifica/article/download/21/18/3123</a>. Acesso em: 16 nov. 2024.</small></p>
<p><small>FDD vs XP vs SCRUM. Disponível em: <a href="https://pt.slideshare.net/fredcobain/fdd-vs-xp-vs-scrum">https://pt.slideshare.net/fredcobain/fdd-vs-xp-vs-scrum</a> Acesso em: 16 nov. 2024.</small></p>

---
## Histórico de Versão1
Data     | Versão | Descrição | Autor | Revisores 
-------- | ------ | --------- | ----- | ---------
10/11/24 | 1.0 | Tópico 3 | Arthur Miranda, João Pedro, Manuella Valadares | Daniel, Carol, Marcella
15/11/24 | 1.1 | Melhoria na legibilidade da figura 1 | João Pedro | Daniel Rodrigues
16/11/24 | 1.2 | Correção do quadro comparativo e adição de referências | Arthur Miranda | Ana Carolina
