![Organizador do Evento](images/organizador_evento.png)
![Fornecedor Local](images/fornecedor_local.png)
![Participante do Evento](images/patrocinador.png)
![Voluntários do Evento](images/voluntarios.png)

# User Story Mapping (USM): Sistema de Gestão de Eventos "EventFlow"

Este documento apresenta a aplicação da técnica de **User Story Mapping (USM)** para planejar o desenvolvimento do sistema "EventFlow". [cite_start]O USM é uma ferramenta valiosa que transforma um backlog de produto em uma representação visual e estruturada, ajudando a equipe a manter o foco nos usuários e em sua jornada. [cite_start]O mapa mostra a "espinha dorsal" (*backbone*) do produto e detalha as funcionalidades em releases incrementais.

## 1. O que é uma História de Usuário?

[cite_start]Uma história de usuário é um requisito de software escrito na perspectiva do usuário final, focada em uma característica específica que agrega valor. [cite_start]Geralmente, segue o formato: "**Eu, como** `<papel>`, **quero** `<ação>` **para** `<valor de negócio>`".

## 2. Personas do EventFlow

#### Organizador do Evento
* **O que faz:** Planeja, promove e gerencia todos os aspectos de um evento.
* **O que espera:** Uma plataforma centralizada para gerenciar inscrições, pagamentos, comunicação e logística.
    ![Organizador do Evento](images/organizador_evento.png)

#### Fornecedor Local
* **O que faz:** Oferece serviços essenciais para eventos (catering, equipamentos, etc.).
* **O que espera:** Um canal para se conectar com organizadores, divulgar serviços e gerenciar contratações.
    ![Fornecedor Local](images/fornecedor_local.png)

#### Patrocinador
* **O que faz:** Investe em eventos em troca de visibilidade.
* **O que espera:** Ferramentas para identificar eventos, analisar público e medir o ROI.
    ![Patrocinador](images/patrocinador.png)

#### Voluntário do Evento
* **O que faz:** Doa seu tempo e habilidades para apoiar a execução de eventos.
* **O que espera:** Um sistema para encontrar oportunidades, se inscrever para turnos e receber tarefas.
    ![Voluntários do Evento](images/voluntarios.png)

## 3. User Story Map: EventFlow

O mapa abaixo organiza as tarefas dos usuários (linhas) ao longo da jornada do produto (*backbone*, nas colunas) e as agrupa em releases para entrega de valor incremental.

| **Backbone** | **1. Planejamento do Evento** | **2. Divulgação e Venda** | **3. Gestão de Recursos** | **4. Experiência do Participante** | **5. Pós-Evento** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Atividades** | `(Organizador)` | `(Organizador, Participante, Patrocinador)` | `(Organizador, Fornecedor, Voluntário)` | `(Participante, Organizador)` | `(Organizador, Participante)` |
| **MVP 1** | Criar novo evento (data, local, descrição) | Publicar página do evento | | Fazer inscrição (ingresso gratuito) | |
| | Definir tipos de ingresso (Gratuito, VIP) | Gerar link de compartilhamento | Cadastrar fornecedores manualmente | Visualizar programação do evento | Enviar e-mail de agradecimento |
| | | | | Check-in no evento por QR Code | |
| **MVP 2** | Configurar formulário de inscrição | Integração de pagamento (cartão de crédito) | Sistema de candidatura para fornecedores | App do evento com mapa interativo | Coletar feedback dos participantes |
| | Ferramenta de orçamento simples | Criar lotes de ingressos com virada de preço | Portal para voluntários (inscrição e turnos) | Sistema de notificação (push) | Emitir certificado de participação |
| **Releases Futuras**| Clonar um evento existente | Programa de afiliados para divulgadores | Avaliação de fornecedores | Gamificação (pontos por interação) | Análise de dados e relatórios (ROI) |
| | Módulo de gestão de palestrantes | Integração com redes sociais (login) | Alocação de tarefas para voluntários | Chat em tempo real entre participantes | Galeria de fotos e vídeos |
| | | Módulo de patrocínio (cotas e benefícios) | | | |

---
