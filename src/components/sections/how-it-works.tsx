"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calculator, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { FlowDiagram } from "@/components/flow-diagram"
import {
  APPROACH_PILLARS,
  NAPKIN_DIFFERENCE_ITEMS,
  SECTION_IDS,
} from "@/lib/constants"
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations"

const EASE = [0.16, 1, 0.3, 1] as const
const AUTO_ADVANCE_MS = 6000

const TOOLS = [
  {
    Icon: Calculator,
    title: "AI Business Valuation",
    cta: "Get Your Valuation",
    href: "https://app.napkindeals.com/valuation",
  },
  {
    Icon: Search,
    title: "Find Potential Buyers",
    cta: "Find Buyers",
    href: "https://app.napkindeals.com/find-buyers",
  },
] as const

function openAdvisorCalendly() {
  if (typeof window !== "undefined" && (window as /* eslint-disable-line */ any).Calendly) {
    ;(window as /* eslint-disable-line */ any).Calendly.initPopupWidget({
      url: "https://calendly.com/npkn-ryan/advisor-session",
    })
  }
}

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % APPROACH_PILLARS.length),
    [],
  )
  const prev = useCallback(
    () =>
      setActive(
        (prev) =>
          (prev - 1 + APPROACH_PILLARS.length) % APPROACH_PILLARS.length,
      ),
    [],
  )

  // Auto-advance timer with progress
  useEffect(() => {
    if (paused) {
      setProgress(0)
      return
    }

    const interval = 50
    let elapsed = 0

    const timer = setInterval(() => {
      elapsed += interval
      setProgress((elapsed / AUTO_ADVANCE_MS) * 100)

      if (elapsed >= AUTO_ADVANCE_MS) {
        next()
        elapsed = 0
        setProgress(0)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [active, paused, next])

  const pillar = APPROACH_PILLARS[active]
  const Icon = pillar.Icon

  return (
    <Section id={SECTION_IDS.napkinDifference} variant="subtle" className="!pt-12 sm:!pt-16">
      <SectionHeader
        eyebrow="How It Works"
        title="The Napkin Deals Approach"
        description="A modern approach to private market dealmaking — combining expert advisory with technology to deliver better outcomes, faster."
      />

      {/* Flow Diagram */}
      <div className="mt-12">
        <FlowDiagram />
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Step indicators (top bar) */}
          <div className="flex border-b border-border">
            {APPROACH_PILLARS.map((p, i) => {
              const StepIcon = p.Icon
              return (
                <button
                  key={p.title}
                  onClick={() => {
                    setActive(i)
                    setProgress(0)
                  }}
                  className={cn(
                    "group relative flex flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors",
                    i === active
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground-muted/80",
                  )}
                >
                  <StepIcon
                    className={cn(
                      "hidden h-4 w-4 sm:block",
                      i === active ? "text-primary" : "text-foreground-subtle",
                    )}
                  />
                  <span className="hidden sm:inline">{p.title}</span>
                  <span className="sm:hidden text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Active indicator line */}
                  {i === active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Content panel */}
          <div className="relative min-h-[240px] sm:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:items-start sm:gap-10 sm:p-12"
              >
                {/* Large icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Text content */}
                <div className="text-center sm:text-left">
                  <div className="mb-1 text-xs font-medium uppercase tracking-widest text-foreground-subtle">
                    Step {String(active + 1).padStart(2, "0")} of{" "}
                    {String(APPROACH_PILLARS.length).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground-muted">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground-muted shadow-sm backdrop-blur-sm transition-colors hover:text-foreground"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground-muted shadow-sm backdrop-blur-sm transition-colors hover:text-foreground"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-0.5 w-full bg-border">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: paused ? "0%" : `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Key differentiators */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16 grid gap-4 sm:grid-cols-3"
      >
        {NAPKIN_DIFFERENCE_ITEMS.map((item) => (
          <motion.div
            key={item.metric}
            variants={staggerItem}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <Badge variant="secondary" className="mb-3 text-xs">
              {item.metric}
            </Badge>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm text-foreground-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, ease: EASE }}
        className="mt-12 text-center"
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <a
              href="https://app.napkindeals.com/list-your-business"
              target="_blank"
              rel="noopener noreferrer"
            >
              List Your Business
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-base" onClick={openAdvisorCalendly}>
            Book a Free Advisor Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Not ready — exploration track */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, ease: EASE }}
        className="mt-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-subtle">
            Just exploring?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Not sure if you want to sell? List to see what interest looks like.
            Review offers on your timeline, and only move forward if it feels right.
            Pause or remove your listing anytime.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-4">
          {TOOLS.map((tool) => {
            const ToolIcon = tool.Icon
            return (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ToolIcon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-medium text-foreground">
                    {tool.title}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-foreground-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}
