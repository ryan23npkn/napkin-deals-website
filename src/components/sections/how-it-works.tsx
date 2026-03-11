"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  Handshake,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { FLOW_RESULTS } from "@/lib/constants"
import {
  staggerContainer,
  staggerItem,
  flowContainer,
  zoneRevealLeft,
  zoneRevealCenter,
  zoneRevealRight,
  drawLine,
  fadeIn,
  popIn,
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

/* ── Connector SVGs ───────────────────────────────── */

function HorizontalConnector() {
  return (
    <div className="relative hidden md:flex items-center justify-center w-16 lg:w-24 shrink-0">
      <svg
        viewBox="0 0 80 40"
        fill="none"
        className="w-full h-10 overflow-visible"
      >
        <motion.path
          d="M 0 20 L 72 20"
          stroke="var(--border)"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          variants={drawLine}
        />
        <motion.path
          d="M 66 14 L 74 20 L 66 26"
          stroke="var(--primary)"
          strokeWidth={1.5}
          fill="none"
          variants={fadeIn}
        />
      </svg>
      {/* Traveling dot */}
      <motion.div
        className="absolute left-1 h-2 w-2 rounded-full bg-primary"
        initial={{ opacity: 0 }}
        animate={{ x: [0, 56], opacity: [0.7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  )
}

function VerticalConnector() {
  return (
    <div className="relative flex md:hidden justify-center py-1">
      <svg viewBox="0 0 40 48" fill="none" className="w-10 h-12 overflow-visible">
        <motion.path
          d="M 20 0 L 20 40"
          stroke="var(--border)"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          variants={drawLine}
        />
        <motion.path
          d="M 14 34 L 20 42 L 26 34"
          stroke="var(--primary)"
          strokeWidth={1.5}
          fill="none"
          variants={fadeIn}
        />
      </svg>
      <motion.div
        className="absolute top-1 h-2 w-2 rounded-full bg-primary"
        initial={{ opacity: 0 }}
        animate={{ y: [0, 36], opacity: [0.7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  )
}

/* ── Zone cards ───────────────────────────────────── */

function BusinessCard() {
  return (
    <motion.div
      variants={zoneRevealLeft}
      className="w-full md:w-56 lg:w-64 rounded-xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Building2 className="h-4 w-4 text-primary" />
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">
          Your Business
        </p>
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Revenue", value: "$2.4M" },
          { label: "Profit", value: "$680K" },
          { label: "Industry", value: "SaaS" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between text-sm">
            <span className="text-foreground-muted">{row.label}</span>
            <span className="font-semibold text-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function NapkinDealsHub() {
  const cardStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const cardItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  }

  return (
    <motion.div
      variants={zoneRevealCenter}
      className="w-full md:w-60 lg:w-72 dashed-border p-5"
    >
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-widest text-foreground-subtle">
        Napkin Deals
      </p>
      <motion.div variants={cardStagger} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-3">
        <motion.div
          variants={cardItem}
          className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10">
            <Search className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">AI Matching</p>
            <p className="text-xs text-foreground-muted">Strategic buyer identification</p>
          </div>
        </motion.div>
        <motion.div
          variants={cardItem}
          className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
            <Handshake className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">M&A Advisor</p>
            <p className="text-xs text-foreground-muted">Dedicated end-to-end support</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function ResultsStack() {
  const resultsStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const resultItem = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: EASE },
    },
  }

  return (
    <motion.div variants={zoneRevealRight} className="w-full md:w-52 lg:w-56">
      <motion.div variants={resultsStagger} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-2.5">
        {FLOW_RESULTS.map((result) => {
          const Icon = result.Icon
          return (
            <motion.div
              key={result.label}
              variants={resultItem}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-success/10">
                <Icon className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{result.value}</p>
                <p className="text-xs text-foreground-muted">{result.label}</p>
              </div>
            </motion.div>
          )
        })}
        {/* Deal Closed badge */}
        <motion.div
          variants={popIn}
          className="flex items-center gap-3 rounded-lg border border-success/30 bg-success/[0.06] px-4 py-3"
        >
          <CheckCircle2 className="h-5 w-5 text-success" />
          <span className="text-sm font-bold text-success">Deal Closed</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* ── Flow Diagram ─────────────────────────────────── */

function FlowDiagram() {
  return (
    <motion.div
      variants={flowContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-center md:gap-0"
    >
      <BusinessCard />
      <HorizontalConnector />
      <VerticalConnector />
      <NapkinDealsHub />
      <HorizontalConnector />
      <VerticalConnector />
      <ResultsStack />
    </motion.div>
  )
}

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

      {/* Flow Diagram */}
      <FlowDiagram />

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
