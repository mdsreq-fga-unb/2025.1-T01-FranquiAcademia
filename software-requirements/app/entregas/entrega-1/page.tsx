import { TabView } from "@/components/tab-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, FileSearch } from "lucide-react"

export default function Entrega1Page() {
  const tabs = [
    {
      value: "visao-geral",
      label: "Visão Geral",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Entrega 1: Elicitação de Requisitos</h2>
          <p>
            A primeira entrega do projeto consiste na elicitação inicial de requisitos, identificação de stakeholders e
            definição do escopo do projeto.
          </p>

          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20 mt-6">
            <h3 className="font-semibold mb-2">Objetivos da Entrega:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identificar e documentar os principais stakeholders</li>
              <li>Realizar entrevistas e workshops iniciais</li>
              <li>Definir o escopo preliminar do projeto</li>
              <li>Estabelecer os requisitos de alto nível</li>
              <li>Criar o plano de engenharia de requisitos</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Documento de Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Documento que descreve a visão geral do projeto, seus objetivos e principais funcionalidades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileCheck className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Lista de Stakeholders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Identificação e classificação dos stakeholders do projeto, com seus interesses e influência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileSearch className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Requisitos Iniciais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lista preliminar de requisitos funcionais e não-funcionais identificados nas entrevistas iniciais.
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
          <h2 className="text-2xl font-bold">Documentos da Entrega 1</h2>
          <p>
            A primeira entrega inclui diversos documentos que formalizam o início do processo de engenharia de
            requisitos.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Documento de Visão</h3>
              <p className="mt-1 text-muted-foreground">
                Descreve a visão geral do projeto, seus objetivos e principais funcionalidades.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Introdução e propósito</li>
                  <li>Descrição do problema</li>
                  <li>Visão da solução</li>
                  <li>Escopo do projeto</li>
                  <li>Restrições e premissas</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Plano de Engenharia de Requisitos</h3>
              <p className="mt-1 text-muted-foreground">
                Define o processo, as atividades e os recursos necessários para a engenharia de requisitos.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Processo de engenharia de requisitos</li>
                  <li>Técnicas de elicitação</li>
                  <li>Ferramentas utilizadas</li>
                  <li>Cronograma de atividades</li>
                  <li>Papéis e responsabilidades</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Registro de Stakeholders</h3>
              <p className="mt-1 text-muted-foreground">Identifica e classifica os stakeholders do projeto.</p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Lista de stakeholders</li>
                  <li>Classificação por interesse e influência</li>
                  <li>Necessidades e expectativas</li>
                  <li>Estratégia de engajamento</li>
                  <li>Plano de comunicação</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Lista Preliminar de Requisitos</h3>
              <p className="mt-1 text-muted-foreground">
                Documenta os requisitos iniciais identificados nas primeiras entrevistas.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium">Conteúdo:</h4>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  <li>Requisitos funcionais de alto nível</li>
                  <li>Requisitos não-funcionais</li>
                  <li>Restrições técnicas</li>
                  <li>Priorização inicial</li>
                  <li>Fontes de requisitos</li>
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
          <h2 className="text-2xl font-bold">Resultados da Entrega 1</h2>
          <p>
            Os resultados da primeira entrega estabelecem a base para todo o processo de engenharia de requisitos do
            projeto.
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Principais Conquistas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Identificação de 15 stakeholders principais</li>
                <li>Realização de 8 entrevistas e 2 workshops</li>
                <li>Documentação de 45 requisitos iniciais</li>
                <li>Definição clara do escopo do projeto</li>
                <li>Estabelecimento do processo de engenharia de requisitos</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Métricas</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>30 requisitos funcionais identificados</li>
                <li>15 requisitos não-funcionais identificados</li>
                <li>85% de cobertura das áreas de negócio</li>
                <li>90% de participação dos stakeholders</li>
                <li>100% de documentação concluída</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Próximos Passos</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Refinamento dos requisitos identificados</li>
                <li>Análise detalhada e modelagem</li>
                <li>Priorização com stakeholders</li>
                <li>Especificação detalhada dos requisitos de alta prioridade</li>
                <li>Validação inicial com usuários-chave</li>
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
        <h1 className="text-3xl font-bold tracking-tight">Entrega 1</h1>
        <p className="text-muted-foreground mt-2">
          Documentação da primeira entrega do projeto: Elicitação de Requisitos.
        </p>
      </div>

      <TabView tabs={tabs} />
    </div>
  )
}
