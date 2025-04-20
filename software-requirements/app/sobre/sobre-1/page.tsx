import { TabView } from "@/components/tab-view"

export default function Sobre1Page() {
  const tabs = [
    {
      value: "visao-geral",
      label: "Visão Geral",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Visão Geral do Projeto</h2>
          <p>
            Este projeto tem como objetivo desenvolver um sistema completo de gerenciamento de requisitos de software,
            seguindo as melhores práticas da engenharia de software e metodologias ágeis.
          </p>
          <p>
            A abordagem utilizada combina elementos de diferentes frameworks para garantir a qualidade e a
            rastreabilidade dos requisitos ao longo de todo o ciclo de vida do desenvolvimento.
          </p>
          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20 mt-6">
            <h3 className="font-semibold mb-2">Objetivos Principais:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identificar e documentar requisitos funcionais e não-funcionais</li>
              <li>Estabelecer prioridades e dependências entre requisitos</li>
              <li>Garantir a rastreabilidade dos requisitos até a implementação</li>
              <li>Facilitar a gestão de mudanças nos requisitos</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      value: "escopo",
      label: "Escopo",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Escopo do Projeto</h2>
          <p>
            O escopo deste projeto abrange todas as etapas da engenharia de requisitos, desde a elicitação até a
            validação e gerenciamento de mudanças.
          </p>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Incluso no Escopo:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Elicitação de requisitos com stakeholders</li>
                <li>Análise e modelagem de requisitos</li>
                <li>Especificação detalhada de requisitos</li>
                <li>Validação e verificação</li>
                <li>Gerenciamento de mudanças</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-2">Fora do Escopo:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Implementação do sistema</li>
                <li>Testes de sistema e integração</li>
                <li>Implantação e manutenção</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "cronograma",
      label: "Cronograma",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Cronograma do Projeto</h2>
          <p>O projeto está organizado em fases bem definidas, com entregas específicas em cada etapa.</p>
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Fase 1: Iniciação (2 semanas)</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Definição do escopo e objetivos</li>
                <li>Identificação dos stakeholders</li>
                <li>Planejamento inicial</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Fase 2: Elicitação (3 semanas)</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Entrevistas com stakeholders</li>
                <li>Workshops de requisitos</li>
                <li>Análise de documentos existentes</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Fase 3: Análise e Especificação (4 semanas)</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Modelagem de requisitos</li>
                <li>Especificação detalhada</li>
                <li>Priorização</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Fase 4: Validação e Finalização (3 semanas)</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Revisão com stakeholders</li>
                <li>Ajustes finais</li>
                <li>Documentação completa</li>
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
        <h1 className="text-3xl font-bold tracking-tight">Sobre o Projeto</h1>
        <p className="text-muted-foreground mt-2">Informações detalhadas sobre o projeto, seus objetivos e escopo.</p>
      </div>

      <TabView tabs={tabs} />
    </div>
  )
}
