## 7 Requsitos de Software

### 7.1 Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles indicam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar. Essas especificações são diretamente relacionadas ao comportamento do sistema em interação com os usuários ou outros sistemas.

|**ID**|**TÍTULO**|**DESCRIÇÃO**|**OBJETIVO ESPECÍFICO**|
| :- | :- | :- | :- |
|**RF01**|Cadastrar usuários|O sistema deve permitir o cadastro de novos usuários, incluindo informações como nome, e-mail, etc.| |
|**RF02**|Editar usuários|O sistema deve permitir a edição das informações de usuários já cadastrados.| |
|**RF03**|Realizar login|O sistema deve permitir que usuários autenticados acessem suas funcionalidades através de um processo de login seguro.| |
|**RF04**|Listar Aulas|O sistema deve exibir uma lista das aulas disponíveis.| |
|**RF05**|Filtrar Aulas|O sistema deve permitir que os usuários filtrem a lista de aulas por critérios específicos (ex: data, tema, instrutor).| |
|**RF06**|Listar Reservas|O sistema deve permitir que os usuários visualizem suas reservas de aulas.| |
|**RF07**|Filtrar Reservas|O sistema deve permitir que os usuários filtrem suas reservas por critérios específicos (ex: data da aula).| |
|**RF08**|Enviar Mensagens Automatizadas|O sistema deve ser capaz de enviar mensagens automáticas para os usuários com base em regras predefinidas.| |
|**RF09**|Criar Mensagens Automatizadas|O sistema deve permitir a criação de novas mensagens automatizadas, definindo seu conteúdo.| |
|**RF10**|Editar Mensagens Automatizadas|O sistema deve permitir a edição do conteúdo de mensagens automatizadas existentes.| |
|**RF11**|Apagar Mensagens Automatizadas|O sistema deve permitir a exclusão de mensagens automatizadas.| |
|**RF12**|Listar Mensagens Automatizadas|O sistema deve exibir uma lista das mensagens automatizadas configuradas no sistema.| |
|**RF13**|Ativar ou Inativar Mensagens Automatizadas|O sistema deve permitir ativar ou desativar o envio de mensagens automatizadas específicas.| |
|**RF14**|Criar Regras de Envio|O sistema deve permitir a criação de regras que determinam quando as mensagens automatizadas devem ser enviadas.| |
|**RF15**|Editar Regras de Envio|O sistema deve permitir a edição das regras de envio existentes.| |
|**RF16**|Apagar Regras de Envio|O sistema deve permitir a exclusão de regras de envio.| |
|**RF17**|Criar Dashboard de Análise de dados|O sistema deve permitir a criação de painéis visuais para análise de dados.| |
|**RF18**|Criar filtros para dados do dashboard|O sistema deve permitir a criação de filtros para manipular os dados exibidos nos dashboards.| |
|**RF19**|Editar filtros para dados do dashboard|O sistema deve permitir a edição dos filtros existentes nos dashboards.| |
|**RF20**|Listar filtros para dados do dashboard|O sistema deve exibir uma lista dos filtros disponíveis para os dashboards.| |
|**RF21**|Filtrar dados de Dashboards|O sistema deve permitir que os usuários apliquem filtros para visualizar dados específicos nos dashboards.| |
|**RF22**|Favoritar Dashboards de análises de dado|O sistema deve permitir que os usuários marquem dashboards como favoritos para acesso rápido.| |
|**RF23**|Exportar Dashboards|O sistema deve permitir a exportação dos dashboards em formatos adequados (ex: PDF, imagem).| |
|**RF24**|Exportar Dados da Plataforma Original|O sistema deve permitir a exportação dos dados brutos da plataforma em formatos comuns (ex: CSV).| |

## Requisitos Não Funcionais (RNF)

Os requisitos não funcionais foram organizados com base no modelo URPS+, que classifica esses requisitos em categorias que abrangem Usabilidade, Confiabilidade, Desempenho, Suportabilidade e outras características relevantes. Esse sistema facilita a análise e priorização das características que impactam na qualidade geral do software, além de assegurar que ele atenda aos padrões esperados pelo cliente e pelos usuários.


| ID    | Nome do Requisito                                          | Descrição do Requisito                                                                 | Classificação URPS |
|-------|------------------------------------------------------------|-----------------------------------------------------------------------------------------|--------------------|
| RNF01 | Responsividade em dispositivos móveis                      | O sistema deve ser responsivo e acessível em diferentes tamanhos de tela (mobile, tablet, desktop). | Usabilidade        |
| RNF02 | Tempo de resposta da interface                            | A interface deve ter um tempo de resposta inferior a 2 segundos por ação do usuário.       | Performance        |
| RNF03 | Clareza das mensagens de erro                             | O sistema deve exibir mensagens de erro claras e que orientem o usuário sobre como corrigir o problema. | Usabilidade        |
| RNF04 | Intuitividade da navegação                               | A navegação do sistema deve ser intuitiva e facilitada por menus laterais e filtros.     | Usabilidade        |
