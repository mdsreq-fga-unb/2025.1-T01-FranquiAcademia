# 2. Solução Proposta

## 2.1 Objetivos do Produto

O objetivo principal do produto é **agregar funcionalidades de análise de dados**, permitindo o cruzamento e a apresentação de informações relevantes sobre clientes, academia e funcionários. Adicionalmente, visa implementar uma **funcionalidade de envio automatizado de mensagens personalizadas** para diferentes segmentos de clientes, eliminando a necessidade de operação manual pela equipe da recepção. A plataforma também **manterá as funcionalidades essenciais do sistema anterior**, como a visualização das marcações de aulas.

---

## 2.2 Características da Solução

A solução proposta contará com um conjunto de funcionalidades voltadas à automação da gestão da franquia, à melhoria da comunicação com os alunos e à organização das operações internas. 

Dentre as principais características previstas, destacam-se:

- Automação da comunicação com alunos, incluindo mensagens de boas-vindas, lembretes de aula e incentivo para retorno em caso de faltas.
- Painel analítico com relatórios, estatísticas e indicadores de desempenho, contando com diversos filtros para personalização.
- Painel de visualização dos agendamentos.

**Objetivos Específicos:**

* **OE02: Análise de Dados:** Desenvolver funcionalidades para coletar, cruzar e apresentar dados relevantes sobre clientes (inativos, pós-experimental, sem créditos), aulas e funcionários, permitindo a geração de insights para a tomada de decisão.
* **OE03: Automação de Mensagens:** Implementar um sistema para o envio automático de mensagens personalizadas a diferentes segmentos de clientes, com base em regras de negócio definidas, visando melhorar o atendimento, a fidelização e a recuperação de alunos.
* **OE04: Gestão de Usuários:** Manter e potencialmente aprimorar as funcionalidades de gestão de usuários existentes no sistema Angulare, como a visualização de créditos e histórico de visitas.
* **OE05: Visualização de Agendamentos:** Assegurar a continuidade da funcionalidade de visualização da agenda dos studios, com horários e profissionais responsáveis pelas aulas.


---

## 2.3 Tecnologias a Serem Utilizadas

A solução será desenvolvida com tecnologias modernas, amplamente adotadas no mercado e de fácil integração, visando garantir escalabilidade, desempenho e uma boa experiência para os usuários. 

As principais tecnologias previstas são:

- **Frontend:** Next.js, para criação de interfaces amigáveis, intuitivas e responsivas.
- **Backend:** Node.js, com desenvolvimento de APIs REST para comunicação entre os sistemas.
- **Banco de dados:** PostgreSQL, para armazenamento dos dados.
- **Serviços de mensageria:** Integração com WhatsApp API, envio de e-mail e SMS para automação da comunicação com os alunos.
- **Hospedagem:** Heroku (passível de mudança ao longo do projeto, dependendo das necessidades de escalabilidade e facilidade de implementação).

---

## 2.4 Pesquisa de Mercado e Análise Competitiva

No Brasil, existem outras plataformas semelhantes, inclusive a já utilizada atualmente pelo cliente, a **Angulare E-commerce**. Também contamos com a **iFitness** e a **Evo (W12)**.

### Evo (W12)

É um sistema relatado por usuários como extremamente complexo. Exige treinamento da equipe e muito esforço e comprometimento para a aprendizagem. Além disso, não é focado no modelo de academias que funcionam com compra e marcação de aulas por meio de créditos. Também não oferece um cruzamento e análise de dados eficientes. Já foram relatados problemas como quedas do sistema em horários de pico.

### iFitness

Focado em academias convencionais, com ênfase em treinos de musculação. Não foi desenhado para academias com modelo de créditos por aula e agendamento online. A interface é considerada complicada de usar e exige treinamento da equipe.

---

## 2.5 Análise de Viabilidade

A solução é viável tecnicamente, pois utiliza tecnologias maduras e conhecidas pelo grupo, permitindo o desenvolvimento modular e escalável. 

- **Prazo estimado para entrega da versão inicial (MVP):** 3 a 4 meses.
- **Modelo financeiro:** Código aberto para a franquia inicialmente, com potencial de monetização futura via licenciamento.

A economia de tempo e recursos, aliada ao aumento na conversão e retenção de alunos, torna o projeto atrativo. O mercado demonstra demanda crescente por soluções desse tipo, especialmente entre franquias em expansão.

---

## 2.6 Impacto da Solução

A implementação do sistema trará impactos significativos na gestão da franquia:

- Redução de custos operacionais.
- Maior controle das informações.
- Suporte ao crescimento do negócio.
- Atendimento mais ágil e personalizado.
- Melhoria na experiência dos alunos e na rotina da equipe.
- Aumento do engajamento e da taxa de retorno.
- Fortalecimento da imagem da marca por meio da modernização dos serviços.

Esses fatores contribuirão para uma expansão estruturada da franquia.
