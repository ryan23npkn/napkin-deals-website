"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { WhatYouGet } from "@/components/valuation/what-you-get"
import { WizardForm } from "@/components/valuation/wizard-form"
import { ProcessingScreen } from "@/components/valuation/processing-screen"
import { ValuationReport } from "@/components/valuation/valuation-report"
import type { ValuationInput, ValuationResult } from "@/lib/valuation"

type Stage = "form" | "processing" | "results"

export default function ValuationPage() {
  const [stage, setStage] = useState<Stage>("form")
  const [result, setResult] = useState<ValuationResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: ValuationInput) => {
    setIsLoading(true)
    setStage("processing")

    try {
      const res = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const valuation = await res.json()
      setResult(valuation)

      // Let the processing animation play for at least a few seconds
      setTimeout(() => {
        setStage("results")
        setIsLoading(false)
      }, 8000)
    } catch {
      // If API fails, fall back to demo data
      const { generateDemoValuation } = await import("@/lib/valuation")
      const demoResult = generateDemoValuation(data)
      setResult(demoResult)

      setTimeout(() => {
        setStage("results")
        setIsLoading(false)
      }, 8000)
    }
  }

  const handleListOnBulletin = () => {
    if (result) {
      setResult({ ...result, listedOnBulletin: true })
    }
  }

  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundPattern variant="dots" />
      <GradientOrb
        className="left-[-10%] top-[10%] h-[500px] w-[500px]"
        color="primary"
      />
      <GradientOrb
        className="right-[-15%] top-[50%] h-[400px] w-[400px]"
        color="accent"
      />

      <Container className="relative pb-16 pt-20">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left: What You'll Get (sticky sidebar) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-24">
              <WhatYouGet />
            </div>
          </motion.div>

          {/* Right: Wizard / Processing / Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {stage === "form" && (
                <WizardForm onSubmit={handleSubmit} isLoading={isLoading} />
              )}
              {stage === "processing" && <ProcessingScreen />}
              {stage === "results" && result && (
                <ValuationReport
                  result={result}
                  onListOnBulletin={handleListOnBulletin}
                />
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
