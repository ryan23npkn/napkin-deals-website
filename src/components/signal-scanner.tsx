"use client"

import { motion, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const EASE = [0.16, 1, 0.3, 1] as const

const scannerStagger: import("framer-motion").Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.5 } },
}

const rowVariant: import("framer-motion").Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

function AnimatedScore({
  target,
  delay,
}: {
  target: number
  delay: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const value = { val: 0 }
    const controls = animate(value, { val: target }, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = String(Math.round(value.val))
        }
      },
    })
    return () => controls.stop()
  }, [target, delay])

  return <span ref={ref}>0</span>
}

function ScoreBar({ score, delay }: { score: number; delay: number }) {
  return (
    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
      <motion.div
        className={cn(
          "h-full rounded-full",
          score >= 75
            ? "bg-success"
            : score >= 55
              ? "bg-accent"
              : "bg-foreground-muted/40"
        )}
        initial={{ width: "0%" }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      />
    </div>
  )
}

const COMPANIES = [
  {
    ticker: "KSS",
    name: "Kohl's Corporation",
    score: 85,
    status: "Hot",
    statusColor: "text-success",
    statusBg: "bg-success/10",
  },
  {
    ticker: "WBA",
    name: "Walgreens Boots",
    score: 82,
    status: "Hot",
    statusColor: "text-success",
    statusBg: "bg-success/10",
  },
  {
    ticker: "NXST",
    name: "Nexstar Media",
    score: 80,
    status: "Watch",
    statusColor: "text-accent",
    statusBg: "bg-accent/10",
  },
  {
    ticker: "DLTR",
    name: "Dollar Tree",
    score: 78,
    status: "Watch",
    statusColor: "text-accent",
    statusBg: "bg-accent/10",
  },
]

export function SignalScanner({ className }: { className?: string }) {
  return (
    <motion.div
      variants={scannerStagger}
      initial="hidden"
      animate="visible"
      className={cn("relative", className)}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
          Signal Scanner
        </span>
        <span className="flex items-center gap-1.5 text-xs text-foreground-subtle">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          Live
        </span>
      </div>

      {/* Column headers */}
      <motion.div
        variants={rowVariant}
        className="mb-2 grid grid-cols-[1fr_3rem_4rem_3.5rem] items-center gap-3 px-1 text-[10px] font-medium uppercase tracking-wider text-foreground-subtle"
      >
        <span>Company</span>
        <span className="text-right">Score</span>
        <span>Signal</span>
        <span className="text-right">Status</span>
      </motion.div>

      {/* Company rows */}
      <div className="space-y-1">
        {COMPANIES.map((company, i) => (
          <motion.div
            key={company.ticker}
            variants={rowVariant}
            className="grid grid-cols-[1fr_3rem_4rem_3.5rem] items-center gap-3 rounded-lg border border-border/60 bg-background-subtle/50 px-3 py-2.5"
          >
            {/* Company */}
            <div className="min-w-0">
              <span className="text-sm font-semibold text-foreground">
                {company.ticker}
              </span>
              <span className="ml-1.5 text-[10px] text-foreground-subtle hidden xl:inline">
                {company.name}
              </span>
            </div>

            {/* Score */}
            <p
              className={cn(
                "text-right text-sm font-bold tabular-nums",
                company.score >= 75
                  ? "text-success"
                  : company.score >= 55
                    ? "text-accent"
                    : "text-foreground-muted"
              )}
            >
              <AnimatedScore
                target={company.score}
                delay={0.8 + i * 0.25}
              />
            </p>

            {/* Signal bar */}
            <ScoreBar score={company.score} delay={0.8 + i * 0.25} />

            {/* Status badge */}
            <div className="flex justify-end">
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                  company.statusColor,
                  company.statusBg
                )}
              >
                {company.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0, ease: EASE }}
        className="mt-3 rounded-lg border border-primary/15 bg-primary/[0.04] px-3 py-2"
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-medium text-foreground-muted">
            Scanning 5,000+ companies...
          </span>
          <span className="text-[10px] font-bold tabular-nums text-primary">
            <AnimatedScore target={100} delay={2.2} />%
          </span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, delay: 2.2, ease: EASE }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
