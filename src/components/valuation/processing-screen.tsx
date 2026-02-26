"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, BarChart3, Search, FileText, Check } from "lucide-react"

const STEPS = [
  { Icon: Globe, label: "Analyzing your business", duration: 3000 },
  { Icon: Search, label: "Researching market data", duration: 4000 },
  { Icon: BarChart3, label: "Benchmarking against 433+ deals", duration: 3000 },
  { Icon: FileText, label: "Generating your valuation report", duration: 2000 },
]

export function ProcessingScreen() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    let cumulative = 0

    STEPS.forEach((step, i) => {
      if (i > 0) {
        cumulative += STEPS[i - 1].duration
        timers.push(setTimeout(() => setActiveStep(i), cumulative))
      }
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="flex flex-col items-center py-8">
      {/* Spinner */}
      <div className="relative mb-8">
        <motion.div
          className="h-16 w-16 rounded-full border-2 border-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-xl font-bold text-foreground"
            key={activeStep}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {Math.round(((activeStep + 1) / STEPS.length) * 100)}%
          </motion.span>
        </div>
      </div>

      {/* Steps */}
      <div className="w-full max-w-sm space-y-3">
        {STEPS.map((step, i) => {
          const isActive = i === activeStep
          const isComplete = i < activeStep

          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? "bg-accent/10 text-foreground"
                  : isComplete
                    ? "text-foreground-muted"
                    : "text-foreground-subtle"
              }`}
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : isComplete
                      ? "bg-success/10 text-success"
                      : "bg-muted text-foreground-subtle"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isComplete ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </motion.div>
                  ) : (
                    <step.Icon className="h-3.5 w-3.5" />
                  )}
                </AnimatePresence>
              </div>
              <span className="text-sm font-medium">{step.label}</span>
              {isActive && (
                <motion.div
                  className="ml-auto flex gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-1 w-1 rounded-full bg-accent"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
