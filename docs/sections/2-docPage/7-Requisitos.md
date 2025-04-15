# 7. Requisitos de Software

## 7.1 Workshop Lean Inception

# Workshop Lean Inception

O Lean Inception é uma metodologia colaborativa criada para alinhar a equipe de desenvolvimento em torno de uma visão clara e um conjunto de funcionalidades essenciais para o desenvolvimento de um produto mínimo viável (MVP). Idealizada por Paulo Caroli, a Lean Inception reúne diferentes stakeholders, como desenvolvedores, designers e representantes de negócios, para discutir e mapear as ideias do projeto de forma concisa e focada. Esse processo se baseia em uma série de workshops e atividades práticas que ajudam a priorizar funcionalidades e validar hipóteses, garantindo que o produto final tenha alto valor para o cliente com o menor desperdício de recursos possível.

O diferencial do Lean Inception é a sua ênfase na colaboração intensa e no alinhamento de objetivos entre todos os envolvidos no projeto. Ao longo da Lean Inception, a equipe passa por atividades que vão desde a definição do propósito do produto até a criação de uma lista de funcionalidades ordenadas por valor e esforço, chegando a um consenso sobre o que deve fazer parte do MVP. Essa abordagem ágil e enxuta reduz riscos e incertezas, permitindo que o produto chegue ao mercado de forma mais rápida e ajustada às reais necessidades dos usuários.

Os resultados do Lean Inception pode ser consultados no board abaixo:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLJUh_Eo=/?moveToViewport=-6919,-1897,12879,5798&embedId=144438836556" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

<br>

## Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles indicam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar. Essas especificações são diretamente relacionadas ao comportamento do sistema em interação com os usuários ou outros sistemas.

Os requisitos funcionais do sistema da Família do Sítio são:

**RQF01 -** Criar Post no blog <br>
**RQF02 -** Editar Post no blog <br>
**RQF03 -** Comentar no Post do Blog <br>
**RQF04 -** Categorizar Post no Blog <br>
**RQF05 -** Filtrar por Posts no Blog <br>
**RQF06 -** Pesquisar por Posts no blog <br>
**RQF07 -** Baixar Post do blog <br>
**RQF08 -** Recomendar outros Posts do Blog <br>
**RQF09 -** Conectar Posts do blog com os Produtos da Empresa <br>
**RQF10 -** Compartilhar Post do blog <br>
**RQF11 -** Configurar disponibilidade de Visita Técnica à Fábrica<br>
**RQF12 -** Realizar Visita Técnica Virtual à Fábrica<br>
**RQF13 -** Emitir certificado de presença da Visita Técnica <br>
**RQF14 -** Agendar Visita Técnica à Fábrica <br>
**RQF15 -** Enviar mensagem à empresa pela Central de Atendimento ao Cliente <br>
**RQF16 -** Localizar por Produtos da Família do Sítio <br>
**RQF17 -** Notificar usuários de Visita Técnica marcada<br>
**RQF18 -** Fazer login na Central Administrativa <br>
**RQF19 -** Gerenciar contas com acesso à Central de Administração

## Requisitos Não Funcionais

Os requisitos não funcionais foram organizados com base no modelo URPS+, que classifica esses requisitos em categorias que abrangem Usabilidade, Confiabilidade, Desempenho, Suportabilidade e outras características relevantes. Esse sistema facilita a análise e priorização das características que impactam na qualidade geral do software, além de assegurar que ele atenda aos padrões esperados pelo cliente e pelos usuários.

### Usabilidade

#### Necessários de estar no backlog:
**RNF01 -** O sistema deve permitir que os usuários localizem facilmente a seção que apresenta a história da empresa, com navegação intuitiva, tendo o conteúdo disposto de forma que o usuário não precise decorar um caminho de navegação para achar aquilo que procura. <br>
**RNF02 -** A interface deve exibir os produtos da empresa em categorias organizadas e definidas pelas stakeholders de acordo com a classe dos produtos: Linha Assum Preto, Linha da Família do Sítio e Linha Speciale Espresso. Permitindo que o usuário identifique cada item.<br>
**RNF03 -** As informações sobre ações sociais da empresa devem destacar as iniciativas realizadas, utilizando uma estrutura que disponha o texto sem muita complexidade, como muitos ícones ou componentes. <br>
**RNF04 -** Os contatos da empresa devem ser apresentados em um formato padronizado, com suporte a links clicáveis para e-mail, telefone e redes sociais. <br>
**RNF05 -** As vagas de emprego da empresa devem ser exibidas de maneira organizada, com filtros ou categorias que permitam ao usuário encontrar oportunidades compatíveis com seus interesses e com instruções para acessar o processo no site de terceiros, Empregare. <br>
**RNF06 -** As instruções do E-commerce devem ser descritas de maneira clara, com linguagem simples e objetiva, utilizando elementos visuais, como ícones e guias passo a passo, para melhorar a compreensão.<br>
**RNF07 -** A interface da página principal deverá introduzir os usuários às principais informações para as demais navegações: História da Família do Sítio e Ações Sociais, além do rodapé e cabeçalho com as demais navegações.<br>
**RNF08 -** A interface do usuário deve permitir o uso pessoas com diferentes níveis de habilidade técnica. <br>
**RNF09 -** O tempo de aprendizado para novos administradores não deve exceder 2 horas com um tutorial básico. <br>
**RNF10 -** As cores utilizadas no software devem seguir a paleta de cores da Família do Sítio, com exceção das cores preta e branca. <br>
**RNF11 -** A tipografia utilizada no software deverá estar dentro das estabelecidas no manual de marca da Família do Sítio: Myriad Pro ou Impact. 

### Confiabilidade

**RNF12 -** O sistema deve estar disponível pelo menos 99,5% do tempo por mês (uptime). <br>
**RNF13 -** Em caso de falhas no servidor, o sistema deve se recuperar dentro de 10 minutos.

### Desempenho

**RNF14 -** O sistema deve suportar pelo menos 1000 acessos simultâneos sem degradação perceptível de desempenho. <br>
**RNF15 -** Consultas no feed de blogs devem ser respondidas em até 1 segundo.

### Suportabilidade

**RNF16 -** O sistema deve ser compatível com as últimas duas versões dos navegadores Chrome, Firefox, Edge e Safari referentes ao dia 01/01/2025. <br>

# Bibliografia:

> ISO/IEC 25010:2011. Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models. International Organization for Standardization, 2011.

> SOMMERVILLE, Ian. Engenharia de Software. 10ª ed. São Paulo: Pearson, 2011.

> PRESSMAN, Roger S. Engenharia de Software: Uma Abordagem Profissional. 8ª ed. Porto Alegre: AMGH, 2016.

---
## Histórico de Versão
Data     | Versão | Descrição           | Autor    | Revisores 
-------- | ------ | ------------------- | -------- | ---------
09/12/24 | 1.0 | Adição das tabelas de requisitos | Manuella Valadares | Ana Carolina
10/12/24 | 1.1 | Redesign da página dos requisitos | Daniel Rodrigues | Manuella Valadares
12/12/24 | 2.0 | Novos requisitos e reestruturação do backlog | Daniel Rodrigues | Arthur Suares
14/01/25 | 2.1 | Adição da data de referência no RNF 15 | João Pedro | Arthur Suares
20/01/25 | 2.2 | Troca do tipo de requisito de RQNF por RNF | Ana Carolina | Daniel Rodrigues





