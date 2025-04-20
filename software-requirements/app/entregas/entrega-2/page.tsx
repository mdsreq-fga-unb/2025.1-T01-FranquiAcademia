import { TabView } from "@/components/tab-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCode, FileSearch } from "lucide-react"

export default function Entrega2Page() {
  const tabs = [
    {
      value: "visao-geral",
      label: "Visão Geral",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Entrega 2: Análise e Modelagem</h2>
          <p>
            A segunda entrega do projeto foca na análise detalhada dos requisitos elicitados, sua modelagem e
            organização em uma estrutura coerente.
          </p>

          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20 mt-6">
            <h3 className="font-semibold mb-2">Objetivos da Entrega:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analisar e refinar os requisitos elicitados</li>
              <li>Modelar os requisitos usando técnicas apropriadas</li>
              <li>Identificar relacionamentos e dependências</li>
              <li>Priorizar requisitos com stakeholders</li>
              <li>Criar protótipos de interface para validação</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Especificação de Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Documento detalhado com a especificação dos requisitos refinados e priorizados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileCode className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Modelos e Diagramas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conjunto de modelos e diagramas que representam visualmente os requisitos e suas relações.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileSearch className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Protótipos de Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Protótipos de interface do usuário para validação dos requisitos com stakeholders.
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
          <h2 className="text-2xl font-bold">Documentos da Entrega 2</h2>
          <p>A segunda entrega inclui documentos que detalham a análise e modelagem dos requisitos.</p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Especificação de Requisitos de Software (SRS)</h3>
              <p className="mt-1 text-muted-foreground">
                Documento formal que descreve detalhadamente os requisitos do sistema.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Introdução e propósito</li>
                  <li>Descrição geral do sistema</li>
                  <li>Requisitos funcionais detalhados</li>
                  <li>Requisitos não-funcionais</li>
                  <li>Restrições e premissas</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Documento de Modelagem</h3>
              <p className="mt-1 text-muted-foreground">Contém os modelos e diagramas que representam os requisitos.</p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Diagramas de casos de uso</li>
                  <li>Modelos de domínio</li>
                  <li>Diagramas de atividades</li>
                  <li>Diagramas de sequência</li>
                  <li>Modelos de dados</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Matriz de Rastreabilidade</h3>
              <p className="mt-1 text-muted-foreground">Documenta as relações entre requisitos e outros artefatos.</p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Mapeamento de requisitos para fontes</li>
                  <li>Relações entre requisitos</li>
                  <li>Dependências</li>
                  <li>Rastreabilidade para casos de teste</li>
                  <li>Rastreabilidade para componentes</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Documento de Priorização</h3>
              <p className="mt-1 text-muted-foreground">
                Descreve a priorização dos requisitos e os critérios utilizados.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Metodologia de priorização</li>
                  <li>Critérios utilizados</li>
                  <li>Resultados da priorização</li>
                  <li>Justificativas</li>
                  <li>Plano de implementação baseado em prioridades</li>
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
          <h2 className="text-2xl font-bold">Resultados da Entrega 2</h2>
          <p>Os resultados da segunda entrega proporcionam uma visão clara e estruturada dos requisitos do sistema.</p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Principais Conquistas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Refinamento de 45 requisitos iniciais para 60 requisitos detalhados</li>
                <li>Criação de 15 diagramas de casos de uso</li>
                <li>Desenvolvimento de 10 protótipos de interface</li>
                <li>Priorização completa dos requisitos</li>
                <li>Estabelecimento da matriz de rastreabilidade</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Métricas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>40 requisitos funcionais detalhados</li>
                <li>20 requisitos não-funcionais detalhados</li>
                <li>95% de cobertura das áreas de negócio</li>
                <li>100% dos requisitos priorizados</li>
                <li>90% de aprovação dos protótipos pelos stakeholders</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Próximos Passos</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Especificação detalhada dos requisitos de alta prioridade</li>
                <li>Validação formal com stakeholders</li>
                <li>Desenvolvimento de casos de teste</li>
                <li>Refinamento dos protótipos</li>
                <li>Preparação para a fase de implementação</li>
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
        <h1 className="text-3xl font-bold tracking-tight">Entrega 2</h1>
        <p className="text-muted-foreground mt-2">Documentação da segunda entrega do projeto: Análise e Modelagem.</p>
      </div>

      <TabView tabs={tabs} />
    </div>
  )
}
