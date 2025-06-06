## 7 Requisitos de Software

### 7.1 Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles indicam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar. Essas especificações são diretamente relacionadas ao comportamento do sistema em interação com os usuários ou outros sistemas.

<br>

| **ID** | **TÍTULO** | **DESCRIÇÃO** | **OBJETIVO ESPECÍFICO** |
| :----- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
|**RF01**|Cadastrar usuários                             |O sistema deve permitir o cadastro de novos usuários, incluindo informações como nome, e-mail, etc.                                        |OE04                          |
|**RF02**|Editar usuários                                |O sistema deve permitir a edição das informações de usuários já cadastrados.                                                              |OE04                          |
|**RF03**|Realizar login                                 |O sistema deve permitir que usuários autenticados acessem suas funcionalidades através de um processo de login seguro.                       |OE01                          |
|**RF04**|Consultar Aulas                             |O sistema deve permitir que os usuários consultem as aulas disponíveis, aplicando filtros por critérios específicos (range de data, tema, instrutor) e exibindo os resultados em uma lista. | OE05 |
|**RF05**| Consultar Reservas                         |O sistema deve permitir que os usuários consultem suas reservas de aulas, aplicando filtros por critérios específicos (range de data da aula, primeira aula, instrutor) e exibindo os resultados em uma lista.|OE05 |
|**RF06**|Criar Mensagens Automatizadas                  |O sistema deve permitir a criação de novas mensagens automatizadas, definindo seu conteúdo, exemplo: informativos, promocionais, aviso sobre a reserva da aula...                                                |OE03                          |
|**RF07**|Enviar Mensagens Automatizadas                 |O sistema deve ser capaz de enviar mensagens automáticas para os usuários com base em regras predefinidas.                                |OE03                          |
|**RF08**|Editar Mensagens Automatizadas                 |O sistema deve permitir a edição do conteúdo de mensagens automatizadas existentes.                                                        |OE03                          |
|**RF09**|Apagar Mensagens Automatizadas                 |O sistema deve permitir a exclusão de mensagens automatizadas.                                                                             |OE03                          |
|**RF10**|Consultar Mensagens Automatizadas                 |O sistema deve permitir que usuários consultem mensagens automatizadas aplicando filtos por critérios específicos(range de data, nome, franquia) e exibindo o resultados em uma listas das mensagens automatizadas do sistema.|OE03|
|**RF11**|Ativar ou Inativar Mensagens Automatizadas     |O sistema deve permitir ativar ou desativar o envio de mensagens automatizadas específicas.                                                |OE03                          |
|**RF12**|Criar Regras de Envio                           |O sistema deve permitir a criação de regras que determinam quando as mensagens automatizadas devem ser enviadas.                           |OE03                          |
|**RF13**|Editar Regras de Envio                          |O sistema deve permitir a edição das regras de envio existentes.                                                                         |OE03                          |
|**RF14**|Apagar Regras de Envio                         |O sistema deve permitir a exclusão de regras de envio.                                                                                   |OE03                          |
|**RF15**|Consultar Dados de Reservas | O sistema deve permitir visualizar os dados de reservas (total de reservas, reservas por dia/semana/mês, etc.) no formato de gráficos de barras e/ou pizza. | OE02 |
|**RF16**| Consultar Dados de Primeiras Aulas | O sistema deve permitir visualizar os dados de primeiras aulas (total de primeiras aulas, primeiras aulas por período, etc.) no formato de gráficos de barras e/ou pizza. | OE02 |
|**RF17**| Consultar Dados de Aulas por Professor | O sistema deve permitir visualizar os dados de aulas por professor (total de aulas ministradas por professor, aulas ministradas por professor por período, etc.) no formato de gráficos de barras e/ou pizza. | OE02 |
|**RF18**| Consultar Horários de Maior Reserva | O sistema deve permitir visualizar os horários com maior número de reservas (horários com mais reservas por dia/semana, etc.) no formato de gráficos de barras e/ou pizza. | OE02 |
|**RF19**| Filtrar Dados de Consultas | O sistema deve permitir que os usuários apliquem filtros para visualizar dados específicos nas consultas (ex: filtrar reservas por data, filtrar aulas por professor e período, etc.). | OE02 |
|**RF20**| Salvar Consultas Favoritas de Análise de Dados | O sistema deve permitir que os usuários salvem consultas com filtros aplicados como favoritas para acesso rápido. | OE02 |
|**RF21**|Exportar Dashboard criados pelo usuário em csv   |O sistema deve permitir a exportação dos dashboards criados pelo cliente em formato CSV. |0E02|
|**RF22**|Exportar Dashboards em PDF |O sistema deve permitir a exportação dos dashboards em formato PDF adequados.|0E02|
|**RF23**|Importar planilha csv de dados das reservas de aulas da Plataforma Original| O sistema deve permitir que o usuário importe um arquivo csv com os dados da planilha de reservas de aula da plataforma Original|0E03|
|**RF24**|Integrar planilha csv de dados das reservas de aulas da Plataforma Original com o banco de dados de aulas |O sistema deve ser capaz de ler o arquivo csv e integrar na base de dados de aula do sistema |OE03|

<!--

alguns outros requisitos que acho que talvez podem entrar

| **RF17** | Comparar Total de Reservas por Período | O sistema deve permitir comparar o total de reservas em diferentes períodos (diário, semanal, mensal) através de gráficos de barras e/ou pizza. | OE02 |
| **RF18** | Comparar Primeiras Aulas por Período | O sistema deve permitir comparar o número de primeiras aulas realizadas em diferentes períodos (semanal, mensal) através de gráficos de barras e/ou pizza. | OE02 |
| **RF19** | Comparar Aulas Ministradas por Professor | O sistema deve permitir comparar a quantidade de aulas ministradas por cada professor, apresentando os dados em gráficos de barras (eixo X: professores, eixo Y: quantidade de aulas). | OE02 |
| **RF20** | Comparar Horários de Pico | O sistema deve permitir comparar a quantidade de reservas por horário, identificando os horários de pico (maior número de reservas) através de gráficos de barras. | OE02 |
| **RF21** | Comparar Retenção de Alunos | O sistema deve permitir comparar a taxa de retenção de alunos (ex: alunos que retornam após a primeira aula) entre diferentes períodos ou turmas, utilizando gráficos de barras ou linhas. | OE02 |
| **RF22** | Comparar Inatividade de Alunos | O sistema deve permitir comparar o número de alunos inativos (ex: alunos que não reservam aulas há um determinado período) entre diferentes períodos ou franquias, utilizando gráficos de barras ou pizza. | OE02 |
| **RF23** | Comparar Uso de Créditos | O sistema deve permitir comparar o uso de créditos pelos alunos, identificando padrões de consumo e alunos com poucos créditos restantes, através de gráficos de barras. | OE02 |
| **RF24** | Comparar Dados Demográficos | O sistema deve permitir comparar dados demográficos dos alunos (idade, gênero) com outros dados (frequência, tipo de aula) utilizando gráficos de barras ou pizza. | OE02 |
| **RF25** | Filtrar Dados para Comparação | O sistema deve permitir que os usuários apliquem filtros para refinar os dados a serem comparados (ex: comparar aulas por professor em um período específico). | OE02 |
| **RF26** | Salvar Comparativos Favoritos | O sistema deve permitir que os usuários salvem as configurações de comparação (filtros e tipos de gráficos) como favoritas para acesso rápido. | OE02 |

-->


<!-- **cometnario** Oi professor, somente será possivel exportar um dashboard por vez, fiquei na duvida se colocava isso na descricao do requisitos, pq parece mais uma regra de negocio-->



## Requisitos Não Funcionais (RNF)

Os requisitos não funcionais foram organizados com base no modelo URPS+, que classifica esses requisitos em categorias que abrangem Usabilidade, Confiabilidade, Desempenho, Suportabilidade e outras características relevantes. Esse sistema facilita a análise e priorização das características que impactam na qualidade geral do software, além de assegurar que ele atenda aos padrões esperados pelo cliente e pelos usuários.

A metodologia **URPS+** é utilizada para classificar Requisitos Não Funcionais (RNFs) em categorias, facilitando a organização e garantindo que diferentes aspectos da qualidade do sistema sejam considerados. As categorias principais são:

* **U - Usabilidade:** Refere-se à facilidade com que os usuários podem interagir com o sistema para alcançar seus objetivos de forma eficaz, eficiente e satisfatória. Envolve aspectos como a interface do usuário, a facilidade de aprendizado, a acessibilidade e a experiência geral do usuário.

* **R - Requisitos de Desempenho:** Descrevem a capacidade de resposta, a velocidade, a eficiência e a escalabilidade do sistema. Isso inclui tempo de resposta para ações do usuário, capacidade de suportar um certo número de usuários simultâneos, taxa de transferência de dados e utilização de recursos do sistema.

* **P - Requisitos de Segurança:** Envolvem a proteção do sistema e dos seus dados contra acessos não autorizados, uso indevido, divulgação, modificação ou destruição. Inclui aspectos como autenticação, autorização, confidencialidade, integridade e disponibilidade da informação.

* **S - Outros Requisitos:** Esta categoria abrange outros atributos de qualidade que não se encaixam diretamente nas categorias anteriores. Alguns exemplos comuns incluem:
    * **Confiabilidade:** A capacidade do sistema de operar sem falhas por um período específico de tempo.
    * **Manutenibilidade:** A facilidade com que o sistema pode ser modificado, corrigido, adaptado ou aprimorado.
    * **Portabilidade:** A capacidade do sistema de operar em diferentes ambientes de hardware ou software.
    * **Escalabilidade:** A capacidade do sistema de lidar com um aumento na carga de trabalho ou no número de usuários.

* **+ - Adicional:** Esta categoria permite incluir outros aspectos de qualidade que sejam relevantes para o projeto específico, como requisitos legais, requisitos de conformidade, etc.

A tabela a seguir apresenta os Requisitos Não Funcionais criados para o projeto, classificados utilizando a metodologia URPS+:

<br>        

| ID    | Nome do Requisito                                      | Descrição do Requisito                                                                                                | Classificação URPS   |
|-------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|----------------------|
| RNF01 | Tempo de carregamento de tela                        | O frontend deve ter um tempo de carregamento inferior a 3 segundos| Performance          |
| RNF02 | Clareza das mensagens de erro                         | O sistema deve exibir mensagens de erro para o usuário e suas possíveis causas.                    | Usabilidade          |
| RNF03 | Navegação utilizando menus laterais e bem visíveis.                                 | Usabilidade          |
| RNF04 | Acessibilidade para usuários com dificuldade de visualização    | O sistema deve conter ajustes para tamanho de fontes.              | Usabilidade          |
| RNF05 | Capacidade de usuários simultâneos                     | O sistema deve suportar pelo menos 100 usuários simultâneos sem degradação significativa no tempo de resposta.          | Performance          |
| RNF06 | Manutenibilidade do código                    | O código do sistema deve ser bem estruturado e comentado para facilitar a manutenção e futuras atualizações. Devendo ser mantida uma arquitetura de projeto bem definida           | Outros (Manutenibilidade) |
| RNF7 | Compatibilidade com navegadores web modernos          | O sistema deve ser totalmente compatível com as versões do Chrome, Firefox e Safari referentes ao ano de 2025.                       | Outros (Portabilidade) |


## Histórico de Versão:

| Data       | Versão | Descrição                | Autor              | Revisores               |
| :--------- | :----- | :------------------------- | :----------------- | :---------------------- |
| 26/05/2025 | 1.0    | Criação do Documento     | **Luis Eduardo Lima** | **Eduardo Waski** |
| 04/06/2025 | 1.1    | Revisão dos RFs          | **Luis Eduardo Lima** | **Eduardo Waski** |
| 04/06/2025 | 1.2    | Revisão dos RNFs         | **Eduardo Waski**     | **Luis Eduardo**  |
