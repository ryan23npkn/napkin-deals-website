"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calculator, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations"

const EASE = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    label: "01",
    title: "List for Free",
    description:
      "Create your listing in under 5 minutes. Basic info, financials, and what you're looking for — no paperwork, no commitment.",
  },
  {
    label: "02",
    title: "We Find Buyers",
    description:
      "Your listing reaches qualified acquirers across our broker network, marketplaces, and off-market channels — automatically.",
  },
  {
    label: "03",
    title: "Get Offers",
    description:
      "Review offers on your terms. We handle negotiations, due diligence support, and closing coordination from start to finish.",
  },
] as const

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

/* ── Main export ────────────────────────────────────── */

function openAdvisorCalendly() {
  if (typeof window !== "undefined" && (window as /* eslint-disable-line */ any).Calendly) {
    ;(window as /* eslint-disable-line */ any).Calendly.initPopupWidget({
      url: "https://calendly.com/npkn-ryan/advisor-session",
    })
  }
}

export function HowItWorks() {
  return (
    <Section variant="subtle" className="!pt-12 sm:!pt-16">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={staggerItem}
          className="text-xs font-medium uppercase tracking-widest text-foreground-subtle"
        >
          How It Works
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="mt-4 font-display text-[clamp(2rem,1.5rem+2.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground"
        >
          Three steps to a successful exit
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mt-5 text-base leading-relaxed text-foreground-muted lg:text-lg"
        >
          List for free. We do the rest.
        </motion.p>
      </motion.div>

      {/* Pillar grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
      >
        {PILLARS.map((pillar) => (
          <motion.div
            key={pillar.label}
            variants={staggerItem}
            className="group relative bg-card px-7 py-8 transition-colors duration-300 hover:bg-background sm:px-8 sm:py-10"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="text-xs font-semibold text-primary">
              {pillar.label}
            </span>
            <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {pillar.description}
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

      {/* Not ready — inline tools */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, ease: EASE }}
        className="mt-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-subtle">
            Not ready to list?
          </p>
          <p className="mt-2 text-sm text-foreground-muted">
            Start with a free tool — no commitment required.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-4">
          {TOOLS.map((tool) => {
            const Icon = tool.Icon
            return (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
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
