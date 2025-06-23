# PBB Canvas – HealthNet Sistema Integrado

Este documento descreve a visão do produto, as personas envolvidas, as funcionalidades e os itens do backlog para o projeto HealthNet, um sistema integrado para a FranquiAcademia.

## 1. Problemas (Problems)

A equipe identificou os seguintes problemas centrais a serem resolvidos:

* Sistemas incompatíveis e fragmentados.
* Dificuldade na gestão integrada dos prontuários.
* Processos manuais excessivos.
* Agendamento ineficiente.
* Controle de medicamentos deficiente.
* Baixo nível de conformidade com regulamentações.

A imagem a seguir ilustra o mapa de problemas que o projeto visa solucionar.

![Mapa de Problemas](images/Problemas-miro.png)

## 2. Expectativas (Expectations)

As expectativas para a solução são as seguintes:

* Integração total dos sistemas e dados médicos.
* Interface amigável e intuitiva.
* Automação eficiente dos processos.
* Redução de erros médicos e administrativos.
* Melhora na conformidade regulatória.
* Melhor experiência do usuário para pacientes e equipe de saúde.

Esta seção descreve a expectativa geral para a solução.

![Expectativa da Solução](images/expectativa.png)

## 3. Personas

As personas a seguir representam os diferentes tipos de usuários do nosso sistema.

### Maria (Recepcionista)
* **O que faz:** Registro e atualização de dados dos pacientes.
* **O que espera:** Interface simples e rápida para inserção e atualização dos dados dos pacientes.
![Persona Maria](images/personas_maria.png)

### Dr. João (Médico Clínico Geral)
* **O que faz:** Consulta histórico médico, prescreve medicamentos e exames.
* **O que espera:** Acesso rápido ao histórico completo e alertas automáticos para interações medicamentosas.
![Persona Dr. João](images/personas_dr_joao.png)

### Lívia (Farmacêutica)
* **O que faz:** Dispensa medicamentos conforme prescrições médicas.
* **O que espera:** Sistema integrado para verificação automática das prescrições e interações medicamentosas.
![Persona Lívia](images/personas_livia_farmaceutica.png)

### Rafael (Coordenador de Agendamento)
* **O que faz:** Gerencia agendamento das consultas médicas.
* **O que espera:** Um sistema unificado que evita conflitos e otimiza o uso das agendas médicas.
![Persona Rafael](images/personass_rafael_coordenador.png)

### Sra. Clara (Paciente)
* **O que faz:** Acessa serviços médicos regulares e contínuos.
* **O que espera:** Portal que disponibilize seu histórico, exames, resultados e facilite agendamento online.
![Persona Sra. Clara](images/personas_sra_clara_paciente.png)

### Sr. Roberto (Diretor de Tecnologia)
* **O que faz:** Supervisiona infraestrutura tecnológica.
* **O que espera:** Solução robusta, escalável, segura e conforme regulamentações.
![Persona Sr. Roberto](images/personas_sr_roberto_diretor.png)

## 4. Funcionalidades (Features)

As funcionalidades planejadas para o sistema são detalhadas abaixo.

* **Cadastro Centralizado:** Permite o registro e consulta de dados de pacientes de forma unificada.
* **Prontuário Digital Integrado:** Oferece acesso ao histórico completo do paciente.
* **Agendamento Inteligente:** Otimiza a marcação de consultas e o uso das agendas.
* **Gestão Integrada de Medicamentos:** Controla a dispensação e verifica interações medicamentosas.
* **Portal do Paciente:** Área para o paciente acessar suas informações e agendar serviços.
* **Sistema de Compliance e Relatórios:** Garante a conformidade com regulamentações e gera relatórios.
* **Painel de Gestão Tecnológica:** Ferramenta para monitoramento da infraestrutura de TI.

### Imagens das Funcionalidades

![Funcionalidade de Agendamento](images/func_agendamento.png)
![Funcionalidade de Cadastro](images/func_cadastro.png)
![Funcionalidade de Gestão](images/func_gestao.png)
![Funcionalidade de Gestão de Tecnologia](images/func_gestao_tecnologia.png)
![Funcionalidade do Portal](images/func_portal.png)
![Funcionalidade de Prontuário](images/func_prontuario.png)
![Funcionalidade do Sistema de Compliance](images/func_sistema_compliance.png)

## 5. Itens do Product Backlog (PBIs)

Os itens do Product Backlog derivados das funcionalidades estão listados a seguir.

### Cadastro Centralizado
* Registrar novo paciente.
* Consultar dados integrados de pacientes.
* Atualizar automaticamente dados entre unidades.
![PBIs de Cadastro](images/pbis_cadastro.png)

### Prontuário Digital Integrado
* Acessar histórico completo dos pacientes.
* Inserir e consultar exames e prescrições anteriores.
* Gerar alertas para informações faltantes ou críticas.
![PBIs de Prontuário](images/pbis_prontuario.png)

### Agendamento Inteligente
* Agendar consultas online.
* Notificar pacientes automaticamente.
* Visualizar disponibilidade integrada dos médicos.
![PBIs de Agendamento](images/pbis_agendamento.png)

### Gestão Integrada de Medicamentos
* Verificar interações medicamentosas automaticamente.
* Registrar medicamentos dispensados.
* Alertar automaticamente sobre alergias.
*As imagens para esta funcionalidade podem ser representadas por gestão geral e compliance.*
![PBIs de Gestão](images/pbis_gestao.png)
![PBIs de Gestão Integrada](images/pbis_gestao_integrada.png)

### Portal do Paciente
* Consultar resultados de exames e histórico.
* Realizar agendamento online de consultas.
* Receber notificações automáticas e lembretes.
![PBIs do Portal](images/pbis_portal.png)

### Sistema de Compliance e Relatórios
* Coletar e consolidar dados regulatórios automaticamente.
* Gerar relatórios de conformidade automatizados.
* Monitorar auditorias de compliance em tempo real.
![PBIs do Sistema de Compliance](images/pbis_sistema_compliance.png)

### Painel de Gestão Tecnológica
* Monitorar segurança e desempenho dos sistemas.
* Executar atualizações sem interrupção do serviço.
* Gerenciar suporte técnico integrado.
*A imagem de Gestão ilustra esta funcionalidade.*
![PBIs de Gestão](images/pbis_gestao.png)



# Product Backlog Building (PBB): HealthNet Sistema Integrado

Este documento detalha a aplicação da metodologia **Product Backlog Building (PBB)** para a concepção do sistema "HealthNet". [cite_start]O PBB é um método colaborativo para a elaboração e criação de um Product Backlog, utilizando o PBB Canvas como ferramenta de facilitação. [cite_start]O objetivo é construir um entendimento compartilhado sobre o produto e preparar o backlog para o desenvolvimento ágil.

## 1. O PBB Canvas

[cite_start]O PBB Canvas é uma ferramenta visual que guia a construção do backlog por meio de seções que contextualizam o produto, descrevem seus usuários e detalham suas funcionalidades.

### Seções do Canvas:
* [cite_start]**Problemas e Expectativas:** Identificam o estado atual (dores) e o estado desejado (objetivos) do produto.
* [cite_start]**Personas:** Descrevem os perfis dos usuários, o que fazem e o que esperam do sistema.
* [cite_start]**Funcionalidades (Features):** Representam as ações e interações de cada persona com o produto para resolver seus problemas.
* [cite_start]**Itens do Product Backlog (PBIs):** Detalham as funcionalidades em itens de trabalho menores e acionáveis, que representam uma ação de um usuário no produto.

## 2. PBB Canvas Aplicado: HealthNet

A seguir, a aplicação prática do PBB Canvas para o projeto "HealthNet".

### 2.1. Problemas (Problems)

A equipe identificou os seguintes problemas centrais a serem resolvidos:
* Sistemas incompatíveis e fragmentados.
* Dificuldade na gestão integrada dos prontuários.
* Processos manuais excessivos.
* Agendamento ineficiente.
* Controle de medicamentos deficiente.
* Baixo nível de conformidade com regulamentações.

![Mapa de Problemas](images/Problemas-miro.png)

### 2.2. Expectativas (Expectations)

As expectativas para a solução são as seguintes:
* Integração total dos sistemas e dados médicos.
* Interface amigável e intuitiva.
* Automação eficiente dos processos.
* Redução de erros médicos e administrativos.
* Melhora na conformidade regulatória.
* Melhor experiência do usuário para pacientes e equipe de saúde.

![Expectativa da Solução](images/expectativa.png)

### 2.3. Personas

As personas a seguir representam os diferentes tipos de usuários do nosso sistema.

#### Maria (Recepcionista)
* **O que faz:** Registro e atualização de dados dos pacientes.
* **O que espera:** Interface simples e rápida para inserção e atualização dos dados dos pacientes.
    ![Persona Maria](images/personas_maria.png)

#### Dr. João (Médico Clínico Geral)
* **O que faz:** Consulta histórico médico, prescreve medicamentos e exames.
* **O que espera:** Acesso rápido ao histórico completo e alertas automáticos para interações medicamentosas.
    ![Persona Dr. João](images/personas_dr_joao.png)

#### Lívia (Farmacêutica)
* **O que faz:** Dispensa medicamentos conforme prescrições médicas.
* **O que espera:** Sistema integrado para verificação automática das prescrições e interações medicamentosas.
    ![Persona Lívia](images/personas_livia_farmaceutica.png)

#### Rafael (Coordenador de Agendamento)
* **O que faz:** Gerencia agendamento das consultas médicas.
* **O que espera:** Um sistema unificado que evita conflitos e otimiza o uso das agendas médicas.
    ![Persona Rafael](images/personass_rafael_coordenador.png)

#### Sra. Clara (Paciente)
* **O que faz:** Acessa serviços médicos regulares e contínuos.
* **O que espera:** Portal que disponibilize seu histórico, exames, resultados e facilite agendamento online.
    ![Persona Sra. Clara](images/personas_sra_clara_paciente.png)

#### Sr. Roberto (Diretor de Tecnologia)
* **O que faz:** Supervisiona infraestrutura tecnológica.
* **O que espera:** Solução robusta, escalável, segura e conforme regulamentações.
    ![Persona Sr. Roberto](images/personas_sr_roberto_diretor.png)

### 2.4. Funcionalidades (Features)

* **Cadastro Centralizado:** Permite o registro e consulta de dados de pacientes de forma unificada.
* **Prontuário Digital Integrado:** Oferece acesso ao histórico completo do paciente.
* **Agendamento Inteligente:** Otimiza a marcação de consultas e o uso das agendas.
* **Gestão Integrada de Medicamentos:** Controla a dispensação e verifica interações medicamentosas.
* **Portal do Paciente:** Área para o paciente acessar suas informações e agendar serviços.
* **Sistema de Compliance e Relatórios:** Garante a conformidade com regulamentações e gera relatórios.
* **Painel de Gestão Tecnológica:** Ferramenta para monitoramento da infraestrutura de TI.

![Funcionalidades do Sistema](images/func_gestao_integrada.png)

### 2.5. Itens do Product Backlog (PBIs)

A seguir, os PBIs detalhados para cada funcionalidade.

#### Cadastro Centralizado
* Registrar novo paciente.
* Consultar dados integrados de pacientes.
* Atualizar automaticamente dados entre unidades.
    ![PBIs de Cadastro](images/pbis_cadastro.png)

#### Prontuário Digital Integrado
* Acessar histórico completo dos pacientes.
* Inserir e consultar exames e prescrições anteriores.
* Gerar alertas para informações faltantes ou críticas.
    ![PBIs de Prontuário](images/pbis_prontuario.png)

#### Agendamento Inteligente
* Agendar consultas online.
* Notificar pacientes automaticamente.
* Visualizar disponibilidade integrada dos médicos.
    ![PBIs de Agendamento](images/pbis_agendamento.png)

---

