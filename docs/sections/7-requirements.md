## 7 Requsitos de Software

### 7.1 Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles indicam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar. Essas especificações são diretamente relacionadas ao comportamento do sistema em interação com os usuários ou outros sistemas.

<br>

|**ID**|**TÍTULO** |**DESCRIÇÃO** |**OBJETIVO ESPECÍFICO** |
| :----- | :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
|**RF01**|Cadastrar usuários                             |O sistema deve permitir o cadastro de novos usuários, incluindo informações como nome, e-mail, etc.                                        |OE04                          |
|**RF02**|Editar usuários                                |O sistema deve permitir a edição das informações de usuários já cadastrados.                                                              |OE04                          |
|**RF03**|Realizar login                                 |O sistema deve permitir que usuários autenticados acessem suas funcionalidades através de um processo de login seguro.                       |OE01                          |
|**RF04/05**|Consultar Aulas                             |O sistema deve permitir que os usuários consultem as aulas disponíveis, aplicando filtros por critérios específicos (range de data, tema, instrutor) e exibindo os resultados em uma lista. | OE05 |
|**RF06/07**| Consultar Reservas                         |O sistema deve permitir que os usuários consultem suas reservas de aulas, aplicando filtros por critérios específicos (range de data da aula, primeira aula, instrutor) e exibindo os resultados em uma lista.|OE05 |
|**RF08**|Criar Mensagens Automatizadas                  |O sistema deve permitir a criação de novas mensagens automatizadas, definindo seu conteúdo, exemplo: informativos, promocionais, aviso sobre a reserva da aula...                                                |OE03                          |
|**RF09**|Enviar Mensagens Automatizadas                 |O sistema deve ser capaz de enviar mensagens automáticas para os usuários com base em regras predefinidas.                                |OE03                          |
|**RF10**|Editar Mensagens Automatizadas                 |O sistema deve permitir a edição do conteúdo de mensagens automatizadas existentes.                                                        |OE03                          |
|**RF11**|Apagar Mensagens Automatizadas                 |O sistema deve permitir a exclusão de mensagens automatizadas.                                                                             |OE03                          |
|**RF12**|Consultar Mensagens Automatizadas                 |O sistema deve permitir que usuários consultem mensagens automatizadas aplicando filtos por critérios específicos(range de data, nome, franquia) e exibindo o resultados em uma listas das mensagens automatizadas do sistema.|OE03|
|**RF13**|Ativar ou Inativar Mensagens Automatizadas     |O sistema deve permitir ativar ou desativar o envio de mensagens automatizadas específicas.                                                |OE03                          |
|**RF14**|Criar Regras de Envio                           |O sistema deve permitir a criação de regras que determinam quando as mensagens automatizadas devem ser enviadas.                           |OE03                          |
|**RF15**|Editar Regras de Envio                          |O sistema deve permitir a edição das regras de envio existentes.                                                                         |OE03                          |
|**RF16**|Apagar Regras de Envio                         |O sistema deve permitir a exclusão de regras de envio.                                                                                   |OE03                          |
|**RF17**|Criar Dashboard de Análise de dados            |O sistema deve permitir visualizar os dados disponíveis (reservas, primeiras aulas, aulas por professor, horário com maior reservas...)no formato de gráficos de barras e/ou pizza, chamando-os como dashboards. |OE02|
|**RF18**|Criar filtros para dados do dashboard          |O sistema deve permitir a criação de filtros para manipular os dados exibidos nos dashboards.                                             |OE02                          |
|**RF19**|Editar filtros para dados do dashboard         |O sistema deve permitir a edição dos filtros existentes nos dashboards.                                                                 |OE02                          |
|**RF20**|Listar filtros para dados do dashboard         |O sistema deve exibir uma lista dos filtros disponíveis para os dashboards.                                                              |OE02                          |
|**RF21**|Filtrar dados de Dashboards                    |O sistema deve permitir que os usuários apliquem filtros para visualizar dados específicos nos dashboards.                                |OE02                          |
|**RF22**|Favoritar Dashboard de análises de dado       |O sistema deve permitir que os usuários marquem dashboards como favoritos para acesso rápido.                                            |OE02                          |
|**RF23**|Exportar Dashboard criados pelo usuário em csv   |O sistema deve permitir a exportação dos dashboards criados pelo cliente em formato CSV. |0E02|
|**RF24**|Exportar Dashboards em PDF |O sistema deve permitir a exportação dos dashboards em formato PDF adequados.|0E02|
|**RF25**|Importar planilha csv de dados das reservas de aulas da Plataforma Original| O sistema deve permitir que o usuário importe um arquivo csv com os dados da planilha de reservas de aula da plataforma Original|0E03|
|**RF26**|Integrar planilha csv de dados das reservas de aulas da Plataforma Original com o banco de dados de aulas |O sistema deve ser capaz de ler o arquivo csv e integrar na base de dados de aula do sistema |OE03|

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
| RNF01 | Responsividade em dispositivos móveis                  | O sistema deve ser responsivo e acessível em diferentes tamanhos de tela (mobile, tablet, desktop).                      | Usabilidade          |
| RNF02 | Tempo de resposta da interface                        | A interface deve ter um tempo de resposta inferior a 2 segundos por ação do usuário.                                    | Performance          |
| RNF03 | Clareza das mensagens de erro                         | O sistema deve exibir mensagens de erro claras e que orientem o usuário sobre como corrigir o problema.                    | Usabilidade          |
| RNF04 | Intuitividade da navegação                             | A navegação do sistema deve ser intuitiva e facilitada por menus laterais e filtros.                                  | Usabilidade          |
| RNF05 | Acessibilidade para usuários com deficiência visual    | O sistema deve seguir as diretrizes WCAG 2.1 Nível AA para garantir a acessibilidade por leitores de tela.              | Usabilidade          |
| RNF06 | Capacidade de usuários simultâneos                     | O sistema deve suportar pelo menos 100 usuários simultâneos sem degradação significativa no tempo de resposta.          | Performance          |
| RNF07 | Segurança das senhas                                   | As senhas dos usuários devem ser armazenadas de forma criptografada utilizando um algoritmo forte (ex: bcrypt).           | Segurança            |
| RNF08 | Backup dos dados                                       | O sistema deve realizar backups automáticos dos dados diariamente.                                                       | Outros (Confiabilidade) |
| RNF09 | Facilidade de manutenção do código                    | O código do sistema deve ser bem estruturado e comentado para facilitar a manutenção e futuras atualizações.             | Outros (Manutenibilidade) |
| RNF10 | Compatibilidade com navegadores web modernos          | O sistema deve ser totalmente compatível com as versões mais recentes do Chrome, Firefox e Safari.                      | Outros (Portabilidade) |
| RNF11 | Log de atividades dos usuários administradores        | O sistema deve manter um registro de todas as ações realizadas pelos usuários com perfil de administrador.              | Segurança            |
| RNF12 | Tempo de recuperação após falha                       | O sistema deve ser capaz de se recuperar de uma falha em no máximo 15 minutos, com o mínimo de perda de dados possível.    | Outros (Confiabilidade) |


## Histórico de Versão:

| Data       | Versão | Descrição                | Autor              | Revisores               |
| :--------- | :----- | :------------------------- | :----------------- | :---------------------- |
| 26/05/2025 | 1.0    | Criação do Documento     | **Luis Eduardo Lima** | **Eduardo Waski** |
