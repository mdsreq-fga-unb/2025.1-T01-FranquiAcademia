"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface TabItem {
  value: string
  label: string
  content: React.ReactNode
}

interface TabViewProps {
  tabs: TabItem[]
  className?: string
}

export function TabView({ tabs, className }: TabViewProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className={cn("w-full", className)}>
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <TabsList className="relative mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full p-1 border border-border">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="rounded-lg border border-border bg-card p-6 shadow-sm"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
