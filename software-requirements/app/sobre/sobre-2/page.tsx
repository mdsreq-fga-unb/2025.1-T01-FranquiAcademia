import { TabView } from "@/components/tab-view"

export default function Sobre2Page() {
  const tabs = [
    {
      value: "metodologia",
      label: "Metodologia",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Metodologia Utilizada</h2>
          <p>
            Este projeto utiliza uma abordagem híbrida, combinando elementos de metodologias ágeis e tradicionais para
            garantir a qualidade e a eficiência no processo de engenharia de requisitos.
          </p>
          <div className="grid gap-6 mt-6">
            <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
              <h3 className="font-semibold mb-2">Elementos Ágeis:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Iterações curtas com feedback constante</li>
                <li>Priorização contínua de requisitos</li>
                <li>Colaboração próxima com stakeholders</li>
                <li>Adaptação a mudanças</li>
              </ul>
            </div>
            <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
              <h3 className="font-semibold mb-2">Elementos Tradicionais:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Documentação formal e detalhada</li>
                <li>Rastreabilidade completa</li>
                <li>Processos de verificação e validação estruturados</li>
                <li>Gerenciamento de configuração</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "ferramentas",
      label: "Ferramentas",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Ferramentas Utilizadas</h2>
          <p>
            Para garantir a eficiência e qualidade do processo de engenharia de requisitos, utilizamos um conjunto de
            ferramentas especializadas.
          </p>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Ferramentas de Modelagem:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lucidchart - Diagramas UML e fluxogramas</li>
                <li>Draw.io - Modelagem visual</li>
                <li>Enterprise Architect - Modelagem detalhada</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Ferramentas de Gestão:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jira - Rastreamento de requisitos</li>
                <li>Confluence - Documentação colaborativa</li>
                <li>Trello - Gestão de tarefas</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Ferramentas de Colaboração:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Microsoft Teams - Comunicação e reuniões</li>
                <li>Google Workspace - Documentos compartilhados</li>
                <li>Miro - Quadros virtuais para workshops</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "processos",
      label: "Processos",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Processos de Engenharia de Requisitos</h2>
          <p>
            Nosso processo de engenharia de requisitos segue um fluxo bem definido, com atividades específicas em cada
            etapa.
          </p>
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">1. Elicitação</h3>
              <p className="mt-1 text-muted-foreground">
                Processo de descoberta e coleta de requisitos a partir de diversas fontes.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Entrevistas estruturadas</li>
                <li>Workshops de requisitos</li>
                <li>Observação de usuários</li>
                <li>Análise de documentos</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">2. Análise</h3>
              <p className="mt-1 text-muted-foreground">Refinamento e organização dos requisitos coletados.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Classificação de requisitos</li>
                <li>Resolução de conflitos</li>
                <li>Priorização</li>
                <li>Modelagem</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">3. Especificação</h3>
              <p className="mt-1 text-muted-foreground">Documentação formal e detalhada dos requisitos.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Documentos de requisitos</li>
                <li>Casos de uso</li>
                <li>Histórias de usuário</li>
                <li>Protótipos</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">4. Validação</h3>
              <p className="mt-1 text-muted-foreground">Verificação da qualidade e correção dos requisitos.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Revisões técnicas</li>
                <li>Validação com stakeholders</li>
                <li>Testes de aceitação</li>
                <li>Inspeções formais</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Metodologia e Processos</h1>
        <p className="text-muted-foreground mt-2">
          Detalhes sobre a metodologia, ferramentas e processos utilizados no projeto.
        </p>
      </div>

      <TabView tabs={tabs} />
    </div>
  )
}
