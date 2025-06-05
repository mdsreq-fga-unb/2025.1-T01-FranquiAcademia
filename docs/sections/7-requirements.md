## 7 Requsitos de Software

### 7.1 Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles indicam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar. Essas especificações são diretamente relacionadas ao comportamento do sistema em interação com os usuários ou outros sistemas.

<br>

|**ID**|**TÍTULO** |**DESCRIÇÃO** |**OBJETIVO ESPECÍFICO** |
| :----- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
|**RF01**|Cadastrar usuários                             |O sistema deve permitir o cadastro de novos usuários, incluindo informações como nome, e-mail, etc.                                        |OE04                          |
|**RF02**|Editar usuários                                |O sistema deve permitir a edição das informações de usuários já cadastrados.                                                              |OE04                          |
|**RF03**|Realizar login                                 |O sistema deve permitir que usuários autenticados acessem suas funcionalidades através de um processo de login seguro.                       |OE01                          |
|**RF04**|Listar Aulas                                   |O sistema deve exibir uma lista das aulas disponíveis.                                                                                     |OE05                          |
|**RF05**|Filtrar Aulas                                  |O sistema deve permitir que os usuários filtrem a lista de aulas por critérios específicos (ex: data, tema, instrutor).                    |OE05                          |
|**RF06**|Listar Reservas                                |O sistema deve permitir que os usuários visualizem suas reservas de aulas.                                                                 |OE05                          |
|**RF07**|Filtrar Reservas                               |O sistema deve permitir que os usuários filtrem suas reservas por critérios específicos (ex: data da aula).                               |OE05                          |
|**RF08**|Enviar Mensagens Automatizadas                 |O sistema deve ser capaz de enviar mensagens automáticas para os usuários com base em regras predefinidas.                                |OE03                          |
|**RF09**|Criar Mensagens Automatizadas                  |O sistema deve permitir a criação de novas mensagens automatizadas, definindo seu conteúdo.                                                |OE03                          |
|**RF10**|Editar Mensagens Automatizadas                 |O sistema deve permitir a edição do conteúdo de mensagens automatizadas existentes.                                                        |OE03                          |
|**RF11**|Apagar Mensagens Automatizadas                 |O sistema deve permitir a exclusão de mensagens automatizadas.                                                                             |OE03                          |
|**RF12**|Listar Mensagens Automatizadas                 |O sistema deve exibir uma lista das mensagens automatizadas configuradas no sistema.                                                     |OE03                          |
|**RF13**|Ativar ou Inativar Mensagens Automatizadas     |O sistema deve permitir ativar ou desativar o envio de mensagens automatizadas específicas.                                                |OE03                          |
|**RF14**|Criar Regras de Envio                           |O sistema deve permitir a criação de regras que determinam quando as mensagens automatizadas devem ser enviadas.                           |OE03                          |
|**RF15**|Editar Regras de Envio                          |O sistema deve permitir a edição das regras de envio existentes.                                                                         |OE03                          |
|**RF16**|Apagar Regras de Envio                         |O sistema deve permitir a exclusão de regras de envio.                                                                                   |OE03                          |
|**RF17**|Criar Dashboard de Análise de dados            |O sistema deve permitir a criação de painéis visuais para análise de dados.                                                              |OE02                          |
|**RF18**|Criar filtros para dados do dashboard          |O sistema deve permitir a criação de filtros para manipular os dados exibidos nos dashboards.                                             |OE02                          |
|**RF19**|Editar filtros para dados do dashboard         |O sistema deve permitir a edição dos filtros existentes nos dashboards.                                                                 |OE02                          |
|**RF20**|Listar filtros para dados do dashboard         |O sistema deve exibir uma lista dos filtros disponíveis para os dashboards.                                                              |OE02                          |
|**RF21**|Filtrar dados de Dashboards                    |O sistema deve permitir que os usuários apliquem filtros para visualizar dados específicos nos dashboards.                                |OE02                          |
|**RF22**|Favoritar Dashboards de análises de dado       |O sistema deve permitir que os usuários marquem dashboards como favoritos para acesso rápido.                                            |OE02                          |
|**RF23**|Exportar Dashboards                            |O sistema deve permitir a exportação dos dashboards em formatos adequados (ex: PDF, imagem).                                               |OE02                          |
|**RF24**|Exportar Dados da Plataforma Original          |O sistema deve permitir a exportação dos dados brutos da plataforma em formatos comuns (ex: CSV).                                        |OE02                          |


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
| 04/06/2025 | 1.1    | Revisão dos RNFs         |
**Eduardo Waski**     | **Luis Eduardo**  |
