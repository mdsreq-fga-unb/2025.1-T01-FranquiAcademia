# 6. Interação entre Equipe e Cliente

## 6.1 - Composição da Equipe


| Papel     | Descrição      | Responsável       | Participantes       |
|:--------------:|:--------------:|:--------------:|:--------------:|
| Product Owner  | Responsável por gerenciar o progresso do projeto, atuando como ponto de conexão entre o cliente e a equipe. Além disso, o Product Owner monitora os prazos e prioridades.   | Daniel Rodrigues  |  --   |
| Analista de QA  | Deve testar o produto para averiguar se o software, e todas suas aplicações, estão funcionando da maneira que o cliente final espera.   | João Pedro    | --    |
| Desenvolvedor Frontend  | Desenvolve a interface visual, design e garante a integração com o servidor.   | Manuella Magalhães    | Ana Carolina, João Pedro    |
| Desenvolvedor Backend  | Desenvolve a lógica do servidor, gerencia banco de dados e integrações.   | Daniel Rodrigues    | Arthur, Marcella    |
| Analista de Requisitos |  Identifica, documenta e gerencia as necessidades e expectativas do cliente. | Ana Carolina | Arthur, Daniel, João, Manuella, Marcella |


## 6.2 Comunicação


### > Ferramentas de Comunicação:

- **WhatsApp:** Será utilizado para 2 propósitos: Comunicação Diária com os membros desenvolvedores e Comunicação rápida com os Stakeholders. O software em questão permitirá a separação do alvo da comunicação por meio da criação dos grupos, além de possuir envio de mensagens, links e arquivos. O Whatsapp irá concentrar avisos de novas pedidos de revisão por parte da equipe de desenvolvimento e discussões rápidas. 
- **Google Meet:** As reuniões semanais de Sprint Review, Sprint Planning e Retrospectiva, e quinzenais de Validação com os Stakeholders serão feitas por vídeochamadas, utilizando a plataforma Google Meet. Essa plataforma irá concentrar a validação das entregas, planejamento de sprints posteriores, revisão das atividades delegadas e feedbacks sobre acertos e erros da equipe. 
- **Discord:** As reuniões informais, isto é, que não foram oficializadas pelo Product Owner ou que visa apenas realizar atividades de sprints, será adotado o Discord como plataforma de Videochamada entre os desenvolvedores envolvidos. Esta plataforma jamais serão utilizadas com os stakeholders. O Discord irá concentrar a realização de atividades da sprints e reuniões informais, não oficializadas pelo Product Owner da equipe.
- **GitHub Projects:** O GitHub Project's é um KanBan integrado no próprio site do GitHub e integrado ao repositório do projeto _Café do Sítio_ e, consequentemente, ao sistema de versionamento Git. A plataforma permite que Issues e PR's sejam organizadas automaticamente de forma lógica em diferentes tipos de visualizações: KanBan, Roadmap, Tabelas, etc. O GitHub Projects irá concentrar o controle e atualização do backlog do produto.
- **Trello:** Utilizado para documentar as demandas que surgem entre Desenvolvedores e Stakeholders, o Trello organiza atividades com base na metodologia KanBan, assim como o GitHub Projects. Contudo, seu foco será centralizar as solicitações específicas de revisão, envio de arquivos e documentos necessários para o desenvolvimento de forma bilateral, além de definir prazos e acompanhar o atendimento dessas demandas.

### > Métodos de Frequência de Reuniões:

- **Daily's Assíncronas:** Realizadas via WhatsApp no grupo entre desenvolvedores, os membros deverão enviar, no início do seu dia, a resposta de 3 perguntas principais: O que você fez ontem, O que você irá fazer hoje e O que te impede de fazer essa atividade?. Este processo irá auxiliar na identificação de riscos e permitir o remanejamento das atribuições para evitar atrasos de entrega.
- **Reunião de Sprint Planning:** Realizadas a cada Início de Sprint, a reunião de Planning expõe ao time de desenvolvimento as demandas requisitadas para a semana, sendo representada no GitHub Project's com os devidos prazos.
- **Reunião de Sprint Review:** Realizadas a cada Fim de Sprint, a reunião de Review irá repassar pelas atividades planejadas no início da Sprint, elucidados pela reunião de Planning. Este processo irá auxiliar na organização e atualização do status do Backlog do produto e mediar soluções em caso de débitos de atividades.
- **Reunião de Retrospectiva:** As reuniões de Retrospectiva acontecerão todo final de Sprint para debater os principais erros e acertos da semana, promovendo um plano de ação no final, com a finalidade de evitar riscos à longo prazo ou desmotivação da equipe.

### > Frequência de Reuniões com o Cliente:

- **Reunião de Validação (a cada 2 Semanas):** As reuniões com a presença dos Stakeholders validando as funcionalidades por meio do Deploy ocorrerão a cada 15 dias, ou seja, 2 semanas com o time de desenvolvimento. Esse modelo foi adotado para se adaptar à agendas dos stakeholders, uma vez que não conseguem se encontrar com o time em um intervalo menor semanal por conta das demandas da empresa.
- **Interações Adicionais por WhatsApp e Trello:**  Outras validações ocorrerão assincronamente via WhatsApp, para o aviso inicial de uma nova demanda, e via plataforma Trello, para documentar e estabelecer o prazo da demanda, com os stakeholders. Essa interação surgiu para compensar as sprints que não contarão com a presença dos Stakeholders para as validações.

## 6.3 Processo de Validação

1. As funcionalidades da Sprint passarão pela checagem de Definition of Ready (DoR), que irá verificar a escrita correta da história de usuário, se há documentação e se foi declarado junto ao cliente os critérios de aceitação.

2. As funcionalidades, no final de cada Sprint, passarão pela checagem de Definition of Done (DoD), para verificar se os protótipos foram validados pelo cliente, houve aprovação dos revisores à nível de código e se os stakeholders conseguiram executar todos os critérios de aceitação em Deploy do software.

---
## Histórico de Versão
Data     | Versão | Descrição           | Autor    | Revisores 
-------- | ------ | ------------------- | -------- | ---------
10/11/24 | 1.0 | Adição do Tópico 5.2 | Daniel Rodrigues | João Pedro
10/11/24 | 1.1 | Inclusão tópico 5.3  | Marcella         | João
10/11/24 | 1.2 | Tópico 5.1           | Ana Carolina     | Arthur
