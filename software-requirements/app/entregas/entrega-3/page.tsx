import { TabView } from "@/components/tab-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, FileSpreadsheet } from "lucide-react"

export default function Entrega3Page() {
  const tabs = [
    {
      value: "visao-geral",
      label: "Visão Geral",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Entrega 3: Validação e Finalização</h2>
          <p>
            A terceira entrega do projeto foca na validação dos requisitos com stakeholders, finalização da documentação
            e preparação para a implementação.
          </p>

          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20 mt-6">
            <h3 className="font-semibold mb-2">Objetivos da Entrega:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Validar os requisitos com stakeholders</li>
              <li>Finalizar a documentação de requisitos</li>
              <li>Desenvolver casos de teste baseados em requisitos</li>
              <li>Estabelecer o processo de gerenciamento de mudanças</li>
              <li>Preparar a transição para a fase de implementação</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Documentação Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conjunto completo de documentos de requisitos, finalizados e aprovados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileCheck className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Relatório de Validação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Documento que registra o processo de validação e seus resultados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileSpreadsheet className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Plano de Gerenciamento de Mudanças</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Documento que define o processo para gerenciar mudanças nos requisitos durante a implementação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      value: "documentos",
      label: "Documentos",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Documentos da Entrega 3</h2>
          <p>
            A terceira entrega inclui a documentação final do projeto, com foco na validação e preparação para
            implementação.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Documento de Requisitos Final</h3>
              <p className="mt-1 text-muted-foreground">
                Versão final e aprovada da especificação de requisitos do sistema.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Especificação completa de requisitos</li>
                  <li>Modelos e diagramas finalizados</li>
                  <li>Protótipos aprovados</li>
                  <li>Matriz de rastreabilidade atualizada</li>
                  <li>Aprovações formais</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Relatório de Validação</h3>
              <p className="mt-1 text-muted-foreground">
                Documenta o processo de validação dos requisitos e seus resultados.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Metodologia de validação</li>
                  <li>Resultados das revisões</li>
                  <li>Feedback dos stakeholders</li>
                  <li>Ajustes realizados</li>
                  <li>Aprovação final</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Plano de Casos de Teste</h3>
              <p className="mt-1 text-muted-foreground">
                Define os casos de teste baseados nos requisitos para validação durante a implementação.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Casos de teste para requisitos funcionais</li>
                  <li>Testes de aceitação</li>
                  <li>Critérios de aprovação</li>
                  <li>Rastreabilidade para requisitos</li>
                  <li>Procedimentos de teste</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Plano de Gerenciamento de Mudanças</h3>
              <p className="mt-1 text-muted-foreground">
                Define o processo para gerenciar mudanças nos requisitos durante a implementação.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Processo de solicitação de mudanças</li>
                  <li>Critérios de avaliação</li>
                  <li>Papéis e responsabilidades</li>
                  <li>Impacto em cronograma e custos</li>
                  <li>Procedimentos de aprovação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "resultados",
      label: "Resultados",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Resultados da Entrega 3</h2>
          <p>
            Os resultados da terceira entrega representam a conclusão bem-sucedida do processo de engenharia de
            requisitos.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Principais Conquistas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Validação de 100% dos requisitos com stakeholders</li>
                <li>Finalização de toda a documentação</li>
                <li>Desenvolvimento de 50 casos de teste</li>
                <li>Estabelecimento do processo de gerenciamento de mudanças</li>
                <li>Aprovação formal do documento de requisitos</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Métricas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>60 requisitos totalmente validados</li>
                <li>100% de cobertura de casos de teste</li>
                <li>98% de aprovação pelos stakeholders</li>
                <li>5 ciclos de revisão concluídos</li>
                <li>0 requisitos pendentes de validação</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Lições Aprendidas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Importância do envolvimento contínuo dos stakeholders</li>
                <li>Valor da prototipagem para validação</li>
                <li>Necessidade de rastreabilidade completa</li>
                <li>Benefícios da abordagem iterativa</li>
                <li>Impacto positivo da documentação clara e estruturada</li>
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
        <h1 className="text-3xl font-bold tracking-tight">Entrega 3</h1>
        <p className="text-muted-foreground mt-2">
          Documentação da terceira entrega do projeto: Validação e Finalização.
        </p>
      </div>

      <TabView tabs={tabs} />
    </div>
  )
}
