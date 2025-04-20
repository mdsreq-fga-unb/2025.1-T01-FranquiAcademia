import { TabView } from "@/components/tab-view"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Sobre3Page() {
  const tabs = [
    {
      value: "equipe",
      label: "Equipe",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Equipe do Projeto</h2>
          <p>
            Nossa equipe é composta por profissionais especializados em engenharia de requisitos, análise de sistemas e
            gestão de projetos.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>João Silva</CardTitle>
                    <CardDescription>Gerente de Projeto</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Responsável pela coordenação geral do projeto, planejamento e comunicação com stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Maria Santos</CardTitle>
                    <CardDescription>Analista de Requisitos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Especialista em elicitação e análise de requisitos, com foco em técnicas de modelagem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                    <AvatarFallback>CP</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Carlos Pereira</CardTitle>
                    <CardDescription>Engenheiro de Requisitos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Especialista em especificação e validação de requisitos, com experiência em metodologias ágeis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Ana Rodrigues</CardTitle>
                    <CardDescription>UX Designer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Responsável pela criação de protótipos e validação da experiência do usuário.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Lucas Mendes</CardTitle>
                    <CardDescription>Analista de Qualidade</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Responsável pela verificação e validação dos requisitos, garantindo sua qualidade e testabilidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      value: "responsabilidades",
      label: "Responsabilidades",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Responsabilidades da Equipe</h2>
          <p>
            Cada membro da equipe possui responsabilidades específicas, garantindo a cobertura de todos os aspectos do
            processo de engenharia de requisitos.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Gerente de Projeto</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Planejamento e controle do projeto</li>
                <li>Gestão de recursos e cronograma</li>
                <li>Comunicação com stakeholders</li>
                <li>Resolução de impedimentos</li>
                <li>Relatórios de progresso</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Analista de Requisitos</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Elicitação de requisitos</li>
                <li>Análise e classificação</li>
                <li>Modelagem de requisitos</li>
                <li>Priorização</li>
                <li>Documentação inicial</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Engenheiro de Requisitos</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Especificação detalhada</li>
                <li>Rastreabilidade</li>
                <li>Gerenciamento de mudanças</li>
                <li>Validação técnica</li>
                <li>Integração com desenvolvimento</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">UX Designer</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Prototipagem</li>
                <li>Validação com usuários</li>
                <li>Design de interfaces</li>
                <li>Testes de usabilidade</li>
                <li>Documentação visual</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Analista de Qualidade</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Verificação de requisitos</li>
                <li>Testes de aceitação</li>
                <li>Garantia de qualidade</li>
                <li>Revisões técnicas</li>
                <li>Validação final</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "comunicacao",
      label: "Comunicação",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Plano de Comunicação</h2>
          <p>
            A comunicação eficiente é essencial para o sucesso do projeto. Nosso plano de comunicação estabelece canais
            e frequências para garantir que todos os envolvidos estejam alinhados.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Reuniões Regulares</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Reunião diária de status (15 minutos)</li>
                <li>Reunião semanal de progresso (1 hora)</li>
                <li>Revisão quinzenal com stakeholders (2 horas)</li>
                <li>Retrospectiva mensal (1 hora)</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Canais de Comunicação</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Microsoft Teams para comunicação diária</li>
                <li>E-mail para comunicações formais</li>
                <li>Confluence para documentação</li>
                <li>Jira para acompanhamento de tarefas</li>
                <li>Miro para workshops virtuais</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Relatórios</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Relatório semanal de progresso</li>
                <li>Relatório mensal de status do projeto</li>
                <li>Relatório de riscos e impedimentos</li>
                <li>Documentação de decisões importantes</li>
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
        <h1 className="text-3xl font-bold tracking-tight">Equipe e Responsabilidades</h1>
        <p className="text-muted-foreground mt-2">
          Informações sobre a equipe do projeto, suas responsabilidades e plano de comunicação.
        </p>
      </div>

      <TabView tabs={tabs} />
    </div>
  )
}
