"use client"

import { motion } from "framer-motion"
import {
  Building2,
  CheckCircle2,
  Handshake,
  Search,
} from "lucide-react"
import { FLOW_RESULTS } from "@/lib/constants"
import {
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

export function FlowDiagram() {
  return (
    <motion.div
      variants={flowContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-center md:gap-0"
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
