# 8. DoR e DoD

## 8.1 Definiton of Ready (DoR)
A Definition of Ready (DoR) é um conjunto de critérios que um item ou uma User Story do Backlog deve atender para ser considerando pronto para iniciar o trabalho desse item. Assim que um item do Backlog atende a esses critérios, ele é puxado para ser trabalhado durante a Sprint. Para que um item possa ser considerado 'Ready', ele precisa atender aos seguintes critérios:

- **A História de Usuário foi construída no formato "Eu como [Ator], devo ser capaz de [o que fazer], para que [objetivo]"?**
- **O requisito não possui ambiguidade?** Ou seja, se a história de usuário e o seu título não possui outras interpretações para o lado dos desenvolvedores e stakeholders.
- **As stakeholders passaram os Critérios de Aceitação?** Ou seja, as ações e comportamentos que eles testarão e esperam que deverá ocorrer no software.
- **As stakeholders passaram o protótipo esperado de como deve ser a interface?** As stakeholders, dentro da empresa, já possuem uma acessoria de imagem e uma designer que já fizeram reuniões e projetaram como deveriam ser as páginas. Além de que novas páginas precisam passar pela aprovação dessa mesma acessoria
- **O requisito foi validado pelo Coordenador de requisitos?** Ou seja, se o requisito foi revisado e aprovado, garantindo que ele esteja em conformidade com os padrões de qualidade estabelecidos, incluindo clareza, viabilidade técnica, e documentação completa e sem ambiguidades.

## 8.2 Definition of Done (DoD)
Se a DoR é um conjunto de critérios para que um item seja considerado adequado para começar a se trabalhar nele, então a Definition of Done (DoD) é o conjunto de critérios que um item precisa ter para ser considerado como terminado. Sendo esse conjunto de critérios descritos abaixo:

- **A interface está de acordo com o protótipo passado pelas stakeholders?** A interface deve estar de acordo com o que foi passado pela designer stakeholder
- **Os critérios de aceitação definidos com os stakeholders foram atendidos?** O requisito deve conter todas as ações e comportamentos esperados pelas stakeholders, assim como foi definido anteriormente.
- **O backend foi integrado ao frontend (Caso necessário)?** Backend e frontend devem ser integrados corretamete.
- **Todo o código passou por revisão de pares para garantir qualidade e aderência aos padrões do projeto, isto é, 2 revisores aprovaram o código?** Pelo processo de desenvolvimento de software aderido, ScrumXP, a revisão é feita também em pares.
- **O backend foi validado pelo coordenador Daniel Rodrigues e, portanto, segue níveis seguros na manipulação dos dados (Caso esta US exija backend)?**
- **O código foi validado pelo Analista de Quality Assurance Joao Pedro e, portanto, possui cobertura de testes de no mínimo 80%?**
- **A funcionalidade foi integrada ao branch principal sem conflitos?** A funcionalidade não pode conter conflitos ou interferir de alguma forma no funcionamento de outra funcionalidade ou do projeto como um todo.
- **A funcionalidade está disponível em um ambiente de homologação ou produção, pronta para validação?** A cada entrega, o ambiente que contém as funcionalidades desenvolvidas deve estar disponível para que as stakeholdes possam ter acesso.

## Histórico de Versão:
| Data | Versão | Descrição | Autor | Revisores |
|---- | ------ | --------- | ----- | --------- |
| 12/12/24 | 1.0 | Criação do Documento | Arthur Suares | Daniel Rodrigues
| 14/01/25 | 1.1 | Correção dos termos usados no DoD | Manuella Valadares | Arthur Miranda
| 20/01/25 | 1.2 | Correção dos critérios de aceitação usados no DoD | Ana Carolina | Daniel Rodrigues