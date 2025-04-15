# Casos de Uso - Connect Care

> 📝 Um Caso de Uso representa uma interação entre um ator (usuário ou outro sistema) e o sistema, com o objetivo de alcançar um resultado específico. Ele descreve como o sistema deve se comportar em resposta a ações do usuário.

No contexto do aplicativo Connect Care, a técnica foi utilizada como um facilitador no desenvolvimento do software. Nesse sentido, seguimos os passos:

**1. Identificação dos atores**, tais como: Paciente, Agente comunitário, Administrador do sistema, Organizações parceiras, Sistema de geolocalização e Profissional de saúde;

**2. Mapeamento dos Casos de Uso**: A partir de Verificação com a equipe de desenvolvimento;

**3. Desenvolvimento do diagrama**: feito no padrão UML;

**4. Inclusão das relações de Inclusão e Extensão;**

**5. Revisão e análise.**


## Diagrama de Casos de Uso realizado para a Connect Care:


![Diagrama de Casos de Uso](../../../assets/CasosDeUso.png)

_Fonte: Elaboração própria_

## Especificação de Casos de Uso


<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Agendar')">Agendar serviço de saúde</button>
  <button class="tablinks" onclick="openTab(event, 'X')">Acessar histórico médico</button>
  <button class="tablinks" onclick="openTab(event, 'Y')">Criar relatório da comunidade</button>
  <button class="tablinks" onclick="openTab(event, 'Registrar_visita_domiciliar')">Registrar visita domiciliar</button>
  <button class="tablinks" onclick="openTab(event, 'A')">Gerênciar iniciativas de saúde</button>
  <button class="tablinks" onclick="openTab(event, 'ResponderDuvidas')">Responder a dúvidas e reclamações dos usuários</button>
</div>

<div id="Agendar" class="tabcontent">

  <h2>UC - Agendar serviço de saúde</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>30/01/2025</td>
          <td>Daniel Rodrigues da Rocha, Manuella Magalhães Valadares, Ana Carolina Madeira Fialho, Arthur Miranda Suares
</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>04/02/2025</td>
          <td>Daniel Rodrigues da Rocha, Manuella Magalhães Valadares, Ana Carolina Madeira Fialho, Arthur Miranda Suares, Marcella Sousa Anderle, João Pedro Ferreira Alves</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Manuella Magalhães Valadares</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Esta especificação de caso de uso permite ao paciente realizar o agendamento de um serviço de saúde através do Connect Care. Para tanto é deve-se filtrar o tipo de especialização do serviço requerido, data e horário de preferência e recebendo os devidos locais e profissionais como resultado e, ao fim, confirmando seu agendamento. O paciente ainda pode visualizar um mapa para ver a distância e as rotas para chegar até o atendimento agendado. Os agendamentos poderão ser excluídos para casos de cancelamento e também serão acompanhados pela atualização de status de seu andamento.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>Paciente</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 Paciente autenticado no sistema.</li>
      <li>3.2 Disponibilidade de profissionais de saúde e locais.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  Esse caso de uso é iniciado quando o usuário selecionar a opção “Agendar serviço de saúde”.
  <ol>
      <li>O sistema apresenta as seguintes opções: </br>
        - Realizar novo agendamento; </br>
        - Remarcar agendamento [FA01]; </br>
        - Cancelar agendamento [FA02]; </br>
        - Consultar agendamentos [FA03]. </br>
      </li>
      <li>O usuário seleciona a opção de realizar um novo agendamento;</li>
      <li>O usuário seleciona a especialidade desejada;[FE03][RN01]</li>
      <li>O usuário seleciona a Data desejada; [FE03][RN01]</li>
      <li>O sistema faz a validação da data; [FE01][FE02][RN03]</li>
      <li>O sistema mostra os horários e locais disponíveis; [FE04][RN02]</li>
      <li>O usuário seleciona um agendamento único; [FA04] </li>
      <li>O sistema apresenta a opção "ver no mapa";</li>
      <li>O usuário confirma o agendamento;</li>
      <li>O sistema apresenta uma mensagem de agendamento realizado com sucesso;</li>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>

  <h4>FA01 - Remarcar agendamento</h4>
  No passo 1 do Fluxo Básico, o usuário seleciona a opção "Remarcar agendamento"
  <ol>
      <li>O sistema exibe os agendamentos ativos do paciente. [FE05][RN02]</li>
      <li>O paciente escolhe um agendamento para remarcar.[FE06][RN04]</li>
      <li>O paciente seleciona uma nova opção e confirma a remarcação.</li>
      <li>O sistema atualiza o status do agendamento.</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Cancelar agendamento</h4>
  No passo 1 do Fluxo Básico, o usuário seleciona a opção "Cancelar agendamento"
  <ol>
      <li>O sistema exibe os agendamentos ativos do paciente.[FE05][RN02]</li>
      <li>O paciente escolhe um agendamento para cancelar. [FE06][RN04]</li>
      <li>O sistema solicita confirmação do cancelamento.</li>
      <li>O paciente confirma e o sistema remove o agendamento.</li>
  </ol>

  <h4>FA03 - Consultar agendamentos</h4>
  No passo 1 do Fluxo Básico, o usuário seleciona a opção "Consultar agendamento"
  <ol>
      <li>O sistema exibe a lista de agendamentos futuros e passados.[FE05][RN02]</li>
      <li>O usuário aciona um agendamento específico.</li>
      <li>O Sistema exibe as informações: </br> 
      - Data e horário</br>
      - Especialidade
      </li>
  </ol>

  <h4>FA04 - Sair do Agendamento</h4>
  <p>No passo 7 do fluxo básico, se o sistema não apresentar uma data que agrade o usuário, ele pode selecionar a opção "cancelar" e sair do agendamento.</p>



  <h3>6. Fluxo de Exceção (FE)</h3>

  <h4>FE01 - Data anterior à atual</h4>
  <p>"As datas devem ser maiores que a de hoje". O caso de uso retorna ao passo 3 do FB.</p>

  <h4>FE02 - Data com mais de um ano à frente</h4>
  <p>"As datas não devem ser de mais de um ano". O caso de uso retorna ao passo 3 do FB.</p>

  <h4>FE03 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h4>FE04 - Sem opções para a data ou especialidade selecionada</h4>
  <p>O sistema irá emitir um aleta de falta de disponibilidade. O caso de uso retorna ao passo 3 do FB.</p>

  <h4>FE05 - Nenhum agendamento no sistema</h4>
  <p>O usuário não possui nenhum agendamento no sistema. O usuário retorna ao passo anterior.</p>

  <h4>FE06 - Impossibilidade de ajuste no agendamento</h4>
  <p>O usuário é impedido de realizar a tarefa e volta ao passo 1 do FB.</p>

  <h3>7. Regras de Negócio (RN)</h3>

  <h4>RN01 - Validação dos Dados</h4>
  <p>Para que o sistema realize o pré-agendamento, é necessário que os passos 3 e 4 estejam preenchidos corretamente, e que o sistema valide o passo 5</p>

  <h4>RN02 - Agrupamento por agenda</h4>
  <p>O sistema fornece agendamentos agrupados com a especialidade, data, horário e local.</p>

  <h4>RN03 - Validação das Datas</h4>
  <p>As datas preenchidas devem seguir os seguintes critérios:</p>
  <ul>
      <li>Ser posteriores ou iguais ao dia atual.</li>
      <li>Ser de até um ano após o dia atual.</li>
  </ul>

  <h4>RN04 - Cancelamento e Remarcação</h4>
  <p>O paciente pode cancelar ou remarcar consultas apenas até 24 horas antes do horário marcado.</p>


  <h3>8. Pós-Condições</h3>
  <p>Não se aplica.</p>

  <h3>9. Ponto de Extensão</h3>
  <p><strong>Ver no mapa:</strong> O passo 8 do fluxo básico deve ser extendido para o caso de uso "Ver no mapa" com o objetivo de visualizar as rotas e distância dos agendamentos.</p>


</div>






<div id="X" class="tabcontent">
<h2>UC - Acessar histórico médico</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>30/01/2025</td>
          <td>Daniel Rodrigues da Rocha, Manuella Magalhães Valadares, Ana Carolina Madeira Fialho, Arthur Miranda Suares
</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>04/02/2025</td>
          <td>Daniel Rodrigues da Rocha, Manuella Magalhães Valadares, Ana Carolina Madeira Fialho, Arthur Miranda Suares, Marcella Sousa Anderle, João Pedro Ferreira Alves</td>
          <td>Revisão do documento</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Ana Carolina Madeira Fialho</td>
          <td>Alterações no fluxo básico e outros</td>
          <td>1.2</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso permite que um paciente acesse seu histórico médico através da plataforma ConnectCare. O histórico inclui consultas, exames, tratamentos anteriores e outras informações relevantes. O objetivo é fornecer ao paciente acesso rápido e seguro aos seus registros de saúde.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Paciente</li>
      <li>2.2 Profissional de Saúde (Apenas para consulta autorizada)</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 O paciente deve estar autenticado na plataforma </li>
      <li>3.2 O histórico médico deve estar cadastrado no sistema.</li>
      <li>3.3 Profissionais de saúde só podem acessar o histórico com autorização do paciente.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O paciente seleciona a opção "Histórico Médico" no menu principal.</li>
      <li>O sistema verifica se o paciente está autenticado. [FE01 - Falha na autenticação]/li>
      <p>Se não estiver autenticado, o sistema redireciona para a tela de login.</p>
      <li>O sistema solicita os critérios de busca (período, tipo de registro, etc.).</li>
      <li>O paciente insere os critérios desejados. [FE03 - Informações obrigatórias não preenchidas]</li>
      <p>Se os critérios não forem preenchidos, o sistema exibe uma mensagem de erro e solicita a inserção dos dados.<p>
      <li>O sistema valida os critérios de busca. [RN01 - Controle de acesso]</li>
      <p>O sistema garante que apenas pacientes autenticados ou profissionais de saúde autorizados possam acessar os dados.</p>
      <li>O sistema exibe a lista de registros correspondentes. [FA01 - Sem registros encontrados]</li>
      <p>Se não houver registros para os critérios informados, o sistema exibe uma mensagem e permite a inserção de novos critérios.</p>
      <li>O paciente seleciona um registro específico para visualizar os detalhes.</li>
      <p>O sistema apresenta as informações do registro, incluindo data, diagnóstico, prescrições e anotações. [RN02 - Segurança e privacidade]</p>
      <p>Os dados são protegidos conforme a LGPD, garantindo acesso apenas a usuários autorizados.</p>
      <li>O paciente pode baixar ou imprimir o registro. [RN03 - Disponibilidade dos registros]</li>
      <p>O sistema garante que os registros estejam acessíveis e armazenados de forma segura.</p>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 -  Sem registros encontrados</h4>
  <ol>
      <li>Caso não existam registros para os critérios informados, o sistema exibe uma mensagem e permite a inserção de novos critérios.</li>
      
  </ol>

  <h4>FA02 - Acesso negado para profissional de saúde</h4>
  <ol>
      <li>Se um profissional de saúde tentar acessar o histórico sem autorização do paciente, o sistema exibe uma mensagem de erro e retorna ao menu inicial.</li>
     
  </ol>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Falha na autenticação</h4>
  <p>Se o paciente ou profissional não estiver autenticado, o sistema redireciona para a tela de login.</p>
  <p>Regra de Negócio Associada: RN01 - Controle de acesso: Apenas pacientes autenticados podem acessar seu histórico médico, e profissionais de saúde precisam de permissão expressa do paciente para acessar os dados.</p>

  <h4>FE02 - Erro no carregamento dos registros</h4>
  <p>Se houver falha na exibição do histórico, o sistema informa o erro e solicita uma nova tentativa.</p>
  <p>Regra de Negócio Associada: RN03 - Disponibilidade dos registros: O sistema deve garantir que os registros estejam acessíveis e armazenados de forma segura.</p>

  <h4>FE03 - Informações obrigatórias não preenchidas</h4>
  <p>Se o paciente não preencher os critérios de busca, o sistema impede o avanço e solicita a inserção dos dados.</p>
   <p>Regra de Negócio Associada: RN01 - Controle de acesso: Apenas pacientes autenticados podem acessar seu histórico médico. O sistema garante que as informações mínimas necessárias para o acesso ao histórico sejam fornecidas.</p>

   <h4>FE04 - Violação de segurança ou acesso não autorizado</h4>
  <p>Descrição: Se um usuário tentar acessar dados sem permissão ou realizar uma ação não autorizada, o sistema impede a ação e informa sobre a violação.</p>
   <p>Regra de Negócio Associada: RN02 - Segurança e privacidade: Os dados do histórico devem ser protegidos conforme a LGPD, garantindo acesso apenas a usuários autorizados.</p>

  <h3>7. Regras de Negócio (RN)</h3>

  <h4>RN01 - Controle de acesso</h4>
  <p>Apenas pacientes autenticados podem acessar seu histórico médico.</p>
  <p>Profissionais de saúde devem ter permissão expressa do paciente para acessar os dados.</p>

  <h4>RN02 - Segurança e privacidade</h4>
  <p>Os dados do histórico devem ser protegidos conforme a LGPD, garantindo acesso apenas a usuários autorizados.</p>

  <h4>RN03 - Disponibilidade dos registros</h4>
  <p>O sistema deve garantir que os registros estejam acessíveis e armazenados de forma segura.</p>

  <h3>8. Pós-Condições</h3>
  <p>8.1 O paciente visualiza os dados do seu histórico médico.</p>
  <p>8.2 O profissional de saúde acessa os dados somente mediante autorização.</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Local do Ponto de Extensão: Durante a exibição do histórico médico.</p>
  <p>Descrição: O caso de uso "Acessar Histórico Médico" pode ser estendido pelo caso de uso "Realizar Atendimento Médico", permitindo que o profissional de saúde utilize as informações do histórico para embasar a consulta e registrar novas interações no prontuário do paciente.</p>
  

</div>






<div id="Y" class="tabcontent">
<h2>UC - Criar relatório da comunidade</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Daniel Rodrigues da Rocha</td>
          <td>Criação do Caso de Criar relatório da comunidade</td>
          <td>1.0</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso permite que um agente comunitátio crie um relatório sintetizado com as informações de saúde de sua comunidade de atendimento através do Connect Care. Para tanto é possível delimitar a área da comunidade atendida e quantificar disgnósticos usuais dentro daquela comunidade através dos atendimentos realizados para receber um relatório disponível no sistema e, por fim, permitindo sua instalação em formato PDF ou Excel. Os relatórios não poderão ser excluídos, mas sofrerão atualizações à medida que novos atendimentos por parte dos agentes comunitário irem sendo realizadas.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Agentes Comunitários</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
        <li>O usuário deve estar autenticado no sistema.</li>
        <li>O usuário deve ter permissão para criar relatório da comunidade</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>

    <p>Este fluxo básico se inicia quando o usuário seleciona a opção "Criar relatólrio da Comunidade"</p>

  <ol>
      <li>O sistema exibe uma lista de opção:</li>
      
      <ul>
        <li>Criar um novo relatório de uma comunidade;</li>
        <li>Editar relatório existente; [FA01]</li>
      </ul>

      <li>O usuário seleciona a opção de criar um novo relatório de uma comunidade.</li>
      <li>O usuário seleciona a região da comunidade que atendede.[FE01][RN01]</li>
      <li>O usuário seleciona quais atendimentos domiciliares deverão ser incluídos no relatório.[FE01][RN01]</li>
      <li>O sistema valida os atendimentos domiciliares selecionados.[FE02][RN02]</li>
      <li>O sistema apresenta todos os dados de saúde da comunidade através de seus atendimentos através do relatório.</li>
      <li>O sistema apresenta uma mensagem de relatório gerado com sucesso.</li>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Editar relatório existente</h4>
  No passo 1, o usuário seleciona "Editar relatório existente".
  <ol>
      <li>O sistema exibe uma lista de relatórios ativos do agente comunitário.[FE03][RN03]</li>
      <li>O agente comunitário seleciona um relatório ativo para editar.</li>
      <li>O agente comunitário seleciona os novos atendimentos domiciliares que deverão ser considerados no relatório.[FE01][RN01]</li>
      <li>O sistema valida os atendimentos domiciliares selecionados.[FE04][RN02]</li>
      <li>O sistema atualiza os dados do relatório.</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Cliente não digitou as informações necessárias</h4>
  <p>O sistema impedirá que o cliente avance para o próximo passo caso as informações estejam incompletas.</p>

  <h4>FE02 - Atendimentos domiciliares não fazem parte da região selecionada</h4>
  <p>"Os atendimentos domiciliares selecionados não fazem parte da região de sua comunidade". O caso de uso retorna 3 do FB.</p>

  <h4>FE03 - Nenhum relatório registrado no sistema</h4>
  <p>O usuário não possui nenhum relatório registrado no sistema. O caso de uso retorna para o passo anterior.</p>

  <h4>FE04 - Edição dos atendimentos domiciliares não fazem parte da região previamente selecionada</h4>
  <p>"Os atendimentos domiciliares selecionados não fazem parte da região de sua comunidade". O caso de uso retorna ao passo 3 do FA01.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Validação de dados</h4>
  <p>Para que o sistema prepare a geração do relatório, é necessário que os passos 3 e 4 estejam preenchidos corretamente</p>

  <h4>RN02 - Validação dos atendimentos domiciliares selecionados:</h4>
  <p>Os atendimentos domiciliares selecionados devem seguir os seguinte critério:</p>

    <ul>
        <li>O local de atendimento domiciliar selecionado não pode estar fora de uma distância de 5 quilômetros da região selecionada para a comunidade.</li>
    </ul>

  <h4>RN03 - Agrupamento de Dados</h4>
  <p>O sistema os relatórios agrupamos por região da comunidade.</p>

  <h3>8. Pós-Condições</h3>
  <p>Não se aplica.</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Não se aplica.</p>
</div>






<div id="Registrar_visita_domiciliar" class="tabcontent">
<h2>UC - Realizar visita domiciliar</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>05/02/2025</td>
          <td>Arthur Suares</td>
          <td>Formulação do caso de uso no docs</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Arthur Suares</td>
          <td>Passando caso de uso para o pages e Alterações no fluxo alternativo e regras de negócio</td>
          <td>1.1</td>
      </tr>
      <tr>
          <td>10/02/2025</td>
          <td>Arthur Suares</td>
          <td>Adicionando regras de negócio ao fluxo base</td>
          <td>1.2</td>
      </tr>
      <tr>
          <td>10/02/2025</td>
          <td>Arthur Suares</td>
          <td>Revisão do documento</td>
          <td>1.3</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
    <p>
        Este caso de uso permite que um agente comunitário registre uma visita domiciliar a um paciente por meio da plataforma ConnectCare. Durante a visita, o agente pode inserir informações sobre o estado de saúde do paciente, tratamentos recomendados e encaminhamentos necessários. O objetivo é garantir um acompanhamento adequado e a atualização do prontuário digital do paciente.
    </p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Agente comunitário que está responsável por fazer visitas domiciliares</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 O agente comunitário deve estar cadastrado e autenticado na plataforma.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>O agente seleciona a opção "Registrar Visita Domiciliar" no menu principal.</li>
      <li>O sistema apresenta as seguintes opções:</li>
      <ul>
        <li>Consultar pacientes</li>
        <li>Registrar novo paciente [FA01]</li>
        <li>Emergência [FA02] [RN03]</li>
      </ul>
      <li>O sistema exibe uma lista de pacientes cadastrados ou permite a busca por nome, CPF ou endereço.</li>
      <li>O agente seleciona o paciente visitado.</li>
      <li>O sistema exibe o prontuário digital do paciente, incluindo informações médicas anteriores. [RN01]</li>
      <li>O agente insere os dados da visita, como sintomas observados, condições do paciente e orientações fornecidas. [RN04]</li>
      <li>O agente confirma o registro da visita.</li>
      <li>O sistema armazena os dados no prontuário digital do paciente e gera um relatório para acompanhamento. [RN02]</li>
      <li>O agente recebe uma confirmação da operação bem-sucedida.</li>
      <li>O caso de uso se encerra</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Selecionar registrar novo paciente</h4>
  <ol>
      <li>O agente seleciona a opção de registrar um novo paciente.</li>
      <li>O sistema solicita os dados básicos do paciente (nome, CPF, data de nascimento, endereço, etc.).</li>
      <li>O sistema valida as informações e cadastra o paciente.</li>
      <li>O sistema emite uma mensagem de sucesso.</li>
  </ol>

  <h4>FA02 - Selecionar Emergência</h4>
  <ol>
      <li>O agente acessa a opção de emergência na plataforma.</li>
      <li>O sistema exibe um menu de serviços de urgência disponíveis.</li>
      <li>O agente seleciona a opção adequada (ex.: SAMU, hospital de referência, contato com médico responsável).</li>
      <li>O sistema registra a ação no prontuário do paciente e disponibiliza um canal para comunicação rápida.</li>
      <li>O fluxo retorna ao passo 7 do fluxo básico, permitindo que o agente registre a visita, incluindo a emergência relatada.</li>
  </ol>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Informações obrigatórias não preenchidas</h4>
  <p>"Todos os campos obrigatórios devem ser preenchidos antes de concluir o registro da visita" O caso de uso retorna ao passo 4.6 do FB.</p>

  <h4>FE02 - Paciente não encontrado no sistema</h4>
  <p>"Paciente não encontrado. Por favor, verifique os dados inseridos ou cadastre um novo paciente.". O caso de uso retorna ao passo 4.2 do FB.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Disponibilidade dos registros</h4>
  <p>Os registros das visitas devem estar disponíveis, se existirem, para consulta posterior por profissionais de saúde autorizados, garantindo rastreabilidade no acompanhamento do paciente.</p>

  <h4>RN02 - Segurança e privacidade dos dados</h4>
  <p>Os dados da visita devem ser armazenados seguindo as diretrizes da LGPD, garantindo que apenas usuários autorizados possam acessá-los.</p>

  <h4>RN03 - Registro de emergência</h4>
  <p>Caso uma emergência seja identificada, o agente deve registrar a ocorrência e acionar os serviços apropriados antes de concluir o registro da visita, conforme o fluxo alternativo [FA02].</p>

  <h4>RN04 - O registro da visita deve conter informações obrigatórias</h4>
  <p>Para que o registro seja concluído, os campos obrigatórios (como sintomas observados, condições do paciente e orientações fornecidas) devem estar preenchidos.</p>

  <h3>8. Pós-Condições</h3>
    <h3>Pós-Condições</h3>
    <ul>
        <li>A visita domiciliar é registrada no prontuário digital do paciente.</li>
        <li>Encaminhamentos e solicitações de exames ficam disponíveis para análise dos profissionais de saúde.</li>
    <ul>
   
  

  <h3>9. Ponto de Extensão</h3>
  <h4>PE01 Integração com Prontuários de Outros Sistemas</h4>
  <ol>
      <li>Local do Ponto de Extensão: Após o passo 5 do fluxo básico, quando o prontuário digital do paciente é exibido.</li>
      <li>Descrição: O sistema pode estender a funcionalidade para buscar e integrar dados de prontuários eletrônicos de outros sistemas de saúde.</li>
  </ol>

  <h4>PE02 Notificações Automáticas</h4>
  <ol>
      <li>Local do Ponto de Extensão: Após o passo 9 do fluxo básico, quando os dados da visita são armazenados.</li>
      <li>Descrição: O sistema pode enviar notificações automáticas para profissionais de saúde ou familiares cadastrados sempre que um novo registro de visita for realizado.</li>
  </ol>
</div>

<div id="A" class="tabcontent">
<h2>UC - Gerenciar iniciativas de saúde</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
    <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
    </tr>
    <tr>
          <td>10/02/2025</td>
          <td>João Pedro</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
    </tr>
    <tr>
        <td>10/02/2025</td>
        <td>João Pedro</td>
        <td>Correções de erros gramaticais</td>
        <td>1.1</td>
    </tr>

  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso permite que as organizações parceiras registrem, divulguem e monitorem iniciativas de saúde na plataforma ConnectCare.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>2.1 Organizações Parceiras (ONGs, hospitais e instituições governamentais)</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 A organização parceira deve estar cadastrada e autenticada na plataforma.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  <ol>
      <li>A organização parceira acessa a plataforma ConnectCare.</li>
      <li>A organização seleciona a opção "Gerenciar Iniciativas de Saúde".</li>
      <li>O sistema apresenta as seguintes opções:<br>
        - Cadastrar<br>
        - Visualizar [FA01]<br>
        - Editar [FA02]<br>
        - Excluir [FA03]<br>
        - Monitorar [FA04]</li>
      <li>A organização seleciona a opção "Cadastrar".</li>
      <li>A organização preenche os detalhes de uma nova iniciativa, incluindo: </br>
       - Tipo de iniciativa [RN01] [FE01];</br>
       - Público-alvo [RN01] [FE01]; </br>
       - Localização;</br>
       - Data inicial e final da iniciativa. [RN02] [RN03] [RN04] [FE02]</br>
      </li>
      <li>O sistema valida as informações e registra a iniciativa.</li>
      <li>O sistema redireciona a organização para a página da iniciativa.</li>
      <li>O caso de uso é encerrado.</li>
  </ol>
    
  <h3>5. Fluxo Alternativo (FA)</h3>
  <h4>FA01 - Editar iniciativa</h4>
  <p>No passo 4 do fluxo básico, a organização seleciona a opção "Editar"</p>
  <ol>
      <li>A organização seleciona a iniciativa em que deseja realizar alguma alteração.</li>
      <li>A organização edita os detalhes registrados na criação ou na última edição da iniciativa selecionada.[RN01] [RN02] [RN03] [RN04] [FE01]</li>
      <li>O sistema valida as informações e registra a iniciativa.</li>
      <li>O sistema redireciona a organização para a página da iniciativa.</li>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h4>FA02 - Excluir iniciativa </h4>
  <p>No passo 4 do fluxo básico, a organização seleciona a opção "Excluir"</p>
  <ol>
      <li>A organização seleciona a iniciativa que deseja excluir.</li>
      <li>A organização escreve o nome da iniciativa em um campo de texto dedicado à confirmação da exclusão da iniciativa. </li>
      <li>A organização recebe uma confirmação visual de que a iniciativa foi excluída com sucesso</li>
      <li>O caso de uso é encerrado</li>
  </ol>
  
  <h4>FA03 - Visualizar iniciativa </h4>
  <p>No passo 4 do fluxo básico, a organização seleciona a opção "Visualizar"</p>
  <ol>
      <li>A organização seleciona a iniciativa que deseja visualizar.</li>
      <li>O sistema redireciona a organização para a página da iniciativa.</li>
      <li>O caso de uso é encerrado.</li>
  </ol>
  <h4>FA04 - Monitorar iniciativa </h4>
  <p>No passo 4 do fluxo básico, a organização seleciona a opção "Monitorar"</p>
  <ol>
      <li>A organização seleciona a iniciativa que deseja visualizar as estatísticas.</li>
      <li>O sistema redireciona a organização para uma página com o relatório da iniciativa, onde é possível visualizar a quantidade de participantes e as avaliaçoes de cada participante.</li>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h3>6. Fluxo de Exceção (FE)</h3>
  <h4>FE01 - Quantidade inválida de caracteres </h4>
  <p>Nos pontos 5 do fluxo básico e 2 do fluxo alternativo 01, se a quantidade de caracteres não respeitar a RN01, o sistema informa que a quantidade de caracteres é inválida e retorna ao ponto 4 e 1, dependendo de onde foi chamado.</p>

  <h4>FE02 - Data de iniciativa inválida</h4>
  <p>Nos pontos 5 do fluxo básico e 2 do fluxo alternativo 01, se as datas inicial e final da iniciativa não respeitarem a RN02, RN03 e RN04, o sistema informa que as datas estão inválidas e retorna ao ponto 4 e 1, dependendo de onde foi chamado.</p>

  <h3>7. Regras de Negócio (RN)</h3>
  <h4>RN01 - Quantidade de caracteres </h4>
  <p>Tanto tipo de iniciativa quanto público alvo devem conter entre 5 e 100 caracteres.</p>

  <h4>RN02 - Data inicial no cadastro de uma iniciativa</h4>
  <p>A data inicial da iniciativa não deve ser anterior ao dia do cadastro.</p>

  <h4>RN03 - Data inicial na atualização de uma iniciativa</h4>
  <p>A data inicial da iniciativa só pode ser atualizada se a data do dia atual for anterior a data de início da iniciativa.</p>

  <h4>RN04 - Data final no cadastro e atualização de uma iniciativa</h4>
  <p>A data inicial da iniciativa deve ser anterior à data final em pelo menos uma hora.</p>

  <h3>8. Pós-Condições</h3>
  <ul>
    <li>Ao final deste caso de uso, a iniciativa cadastrada/atualizada deve ser divulgada para a comunidade.</li>
  </ul>

  <h3>9. Ponto de Extensão</h3>
    <ol>
    <li>PE01 - Divulgar iniciativa de saúde 
    <p>Local do ponto de extensão: após o cadastro da iniciativa</p> 
    <p>Descrição: Extensão em "Gerenciar Iniciativas de Saúde" para permitir a promoção das iniciativas por meio de redes sociais e notificações personalizadas.</p> 
    </li>
    <li>PE02 - Melhorar impacto de ações de saúde 
    <p>Local do ponto de extensão: após a participação dos participantes na iniciativa</p> 
    <p>Descrição: Extensão para incluir a geração de métricas detalhadas sobre o impacto da iniciativa, como número de atendimentos realizados e feedback dos participantes.</p> 
    </li>
    </ol>
</div>

<div id="ResponderDuvidas" class="tabcontent">

  <h2>UC - Responder a Dúvidas e Reclamações dos Usuários</h2>

  <h3>Especificação de Caso de Uso</h3>
  <h3>Histórico de Revisão</h3>
  <table>
      <tr>
          <th>Data</th>
          <th>Autor</th>
          <th>Modificações</th>
          <th>Versão</th>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Marcella Sousa Anderle</td>
          <td>Adicionando caso de uso no documento</td>
          <td>1.0</td>
      </tr>
      <tr>
          <td>09/02/2025</td>
          <td>Marcella Sousa Anderle</td>
          <td>Revisando documento</td>
          <td>1.1</td>
      </tr>
  </table>

  <h3>1. Breve Descrição</h3>
  <p>Este caso de uso permite ao Administrador do Sistema responder às dúvidas e reclamações enviadas pelos usuários externos (Pacientes, Profissionais de Saúde e Agentes Comunitários) no Connect Care. O administrador pode visualizar as solicitações, responder, encaminhar para outro setor ou marcar como resolvida.</p>

  <h3>2. Atores</h3>
  <ul>
      <li>Usuário Externo (Paciente, Profissional de Saúde ou Agente Comunitário)</li>
      <li>Administrador do Sistema</li>
  </ul>

  <h3>3. Condições Prévias</h3>
  <ul>
      <li>3.1 O usuário externo deve estar autenticado no sistema.</li>
      <li>3.2 O sistema deve estar operacional e apto a receber solicitações.</li>
  </ul>

  <h3>4. Fluxo Básico (FB)</h3>
  Esse caso de uso é iniciado quando um usuário externo registra uma dúvida ou reclamação.
  <ol>
      <li>O usuário externo acessa a plataforma e registra uma dúvida ou reclamação.[FE01][RN02]</li>
      <li>O sistema armazena a solicitação e a disponibiliza para o Administrador do Sistema.</li>
      <li>O Administrador acessa a interface de administração e visualiza as dúvidas e reclamações pendentes.[FE03][RN03]</li>
      <li>O Administrador escolhe uma das seguintes ações:
        <br> - Responder a solicitação [FA01];
        <br> - Encaminhar para outro setor [FA02];
        <br> - Marcar como resolvida [FA03].
      </li>
      <li>O sistema registra a ação tomada e notifica o usuário externo.</li>
      <li>O caso de uso é encerrado.</li>
  </ol>

  <h3>5. Fluxo Alternativo (FA)</h3>

  <h4>FA01 - Responder a uma Solicitação</h4>
  <ol>
      <li>O Administrador seleciona uma solicitação.</li>
      <li>O sistema exibe os detalhes da solicitação (tipo, data, usuário e descrição).</li>
      <li>O Administrador insere e confirma a resposta. [FE01][FE02][RN02]</li>
      <li>O sistema registra a resposta e notifica o usuário externo.</li>
  </ol>

  <h4>FA02 - Encaminhar para Outro Setor</h4>
  <ol>
      <li>O Administrador escolhe encaminhar a solicitação.</li>
      <li>O sistema exibe a lista de setores disponíveis.</li>
      <li>O Administrador seleciona um setor e adiciona um comentário opcional.</li>
      <li>O Administrador confirma o encaminhamento. [FE03][RN03]</li>
      <li>O sistema transfere a solicitação e notifica o setor responsável.</li>
  </ol>

  <h4>FA03 - Marcar como Resolvida</h4>
  <ol>
      <li>O Administrador opta por marcar a solicitação como resolvida.</li>
      <li>O sistema exibe a lista de solicitações pendentes.</li>
      <li>O Administrador revisa o histórico e insere uma justificativa opcional.</li>
      <li>O sistema registra a ação e notifica o usuário externo.</li>
  </ol>

  <h3>6. Fluxo de Exceção (FE)</h3>

  <h4>FE01 - Resposta Inválida</h4>
  <p>Se a resposta estiver vazia ou contiver caracteres inválidos, o sistema impede o envio e exibe uma mensagem de erro.</p>

  <h4>FE02 - Falha no Envio da Resposta</h4>
  <p>Se houver erro no banco de dados ou na conexão, o sistema exibe uma mensagem informando a falha.</p>

  <h4>FE03 - Falha no Encaminhamento</h4>
  <p>Se o setor selecionado estiver indisponível, o sistema exibe uma mensagem de erro e retorna ao passo anterior.</p>

  <h3>7. Regras de Negócio (RN)</h3>

  <h4>RN01 - Tempo Máximo de Resposta</h4>
  <p>Dúvidas devem ser respondidas em até 48 horas. Reclamações críticas devem ser respondidas em até 24 horas.</p>

  <h4>RN02 - Validação da Resposta</h4>
  <p>A resposta não pode ser nula ou conter caracteres inválidos. [FE01]</p>

  <h4>RN03 - Registro de Histórico</h4>
  <p>O sistema deve armazenar todas as interações para auditoria e consultas futuras.</p>

  <h4>RN04 - Acessibilidade</h4>
  <p>O sistema deve oferecer suporte a VLibras e leitores de tela.</p>

  <h3>8. Pós-Condições</h3>
  <p>O usuário externo recebe uma resposta, tem sua solicitação encaminhada ou marcada como resolvida.</p>

  <h3>9. Ponto de Extensão</h3>
  <p>Não se aplica.</p>

</div>



<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

<style>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
