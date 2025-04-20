import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, Info, Layers } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12 py-8">
      <section className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Projeto de Requisitos de Software
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Documentação completa e organizada para facilitar a avaliação e compreensão do projeto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/sobre/sobre-1">
              Conhecer o Projeto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/entregas/entrega-1">
              Ver Entregas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden border-primary/20 transition-all hover:border-primary hover:shadow-md">
          <CardHeader className="bg-primary/10 pb-4">
            <Info className="h-8 w-8 text-primary" />
            <CardTitle>Sobre o Projeto</CardTitle>
            <CardDescription>Informações detalhadas sobre o projeto e seus objetivos</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>Visão geral e escopo</li>
              <li>Metodologia utilizada</li>
              <li>Equipe e responsabilidades</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/sobre/sobre-1">
                Acessar Seção Sobre
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-primary/20 transition-all hover:border-primary hover:shadow-md">
          <CardHeader className="bg-primary/10 pb-4">
            <Layers className="h-8 w-8 text-primary" />
            <CardTitle>Entregas</CardTitle>
            <CardDescription>Documentos e artefatos produzidos durante o projeto</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>Documentação de requisitos</li>
              <li>Diagramas e modelos</li>
              <li>Relatórios de progresso</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/entregas/entrega-1">
                Ver Entregas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-primary/20 transition-all hover:border-primary hover:shadow-md">
          <CardHeader className="bg-primary/10 pb-4">
            <FileText className="h-8 w-8 text-primary" />
            <CardTitle>Documentação</CardTitle>
            <CardDescription>Acesso rápido a toda documentação do projeto</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>Especificações técnicas</li>
              <li>Casos de uso</li>
              <li>Histórias de usuário</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/sobre/sobre-2">
                Acessar Documentação
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
