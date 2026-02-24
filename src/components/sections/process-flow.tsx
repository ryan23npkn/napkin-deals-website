"use client"

import { motion } from "framer-motion"
import { Building2, ArrowRight, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Logo } from "@/components/ui/logo"
import { PROCESS_OUTCOMES, SECTION_IDS } from "@/lib/constants"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  drawLine,
  viewportConfig,
} from "@/lib/animations"

function FlowCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 shadow-sm ${className ?? ""}`}
    >
      {children}
    </div>
  )
}

export function ProcessFlow() {
  return (
    <Section id={SECTION_IDS.process} variant="subtle">
      <SectionHeader
        eyebrow="Process"
        title="From listing to close, simplified"
        description="Our platform streamlines every step of the M&A process, from initial listing to final offer."
      />

      {/* Desktop flow */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16 hidden items-center justify-center gap-6 lg:flex"
      >
        {/* Business card */}
        <motion.div variants={staggerItem}>
          <FlowCard className="w-56">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Your Business</h3>
            <p className="mt-1 text-sm text-foreground-muted">
              List with no exclusivity or fees
            </p>
          </FlowCard>
        </motion.div>

        {/* Arrow */}
        <motion.div variants={staggerItem}>
          <svg width="64" height="24" viewBox="0 0 64 24" fill="none" className="text-accent">
            <motion.path
              d="M0 12H56M56 12L44 4M56 12L44 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawLine}
            />
          </svg>
        </motion.div>

        {/* Platform card */}
        <motion.div variants={staggerItem}>
          <FlowCard className="w-64 border-accent/30 shadow-md">
            <div className="mb-3 flex items-center gap-2">
              <Logo iconOnly />
              <span className="text-sm font-bold text-accent">Napkin Deals</span>
              <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-success" />
            </div>
            <ul className="space-y-2">
              {["AI-Powered Matching", "NDA Automation", "Buyer Qualification", "Offer Management"].map(
                (step) => (
                  <li key={step} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                    {step}
                  </li>
                )
              )}
            </ul>
          </FlowCard>
        </motion.div>

        {/* Arrow */}
        <motion.div variants={staggerItem}>
          <svg width="64" height="24" viewBox="0 0 64 24" fill="none" className="text-accent">
            <motion.path
              d="M0 12H56M56 12L44 4M56 12L44 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawLine}
            />
          </svg>
        </motion.div>

        {/* Outcomes */}
        <motion.div variants={staggerItem}>
          <FlowCard className="w-56">
            <h3 className="mb-3 font-semibold text-foreground">Results</h3>
            <div className="grid grid-cols-2 gap-3">
              {PROCESS_OUTCOMES.map((outcome) => (
                <div key={outcome.label}>
                  <p className="text-lg font-bold text-accent">{outcome.value}</p>
                  <p className="text-xs text-foreground-muted">{outcome.label}</p>
                </div>
              ))}
            </div>
          </FlowCard>
        </motion.div>
      </motion.div>

      {/* Mobile vertical flow */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 space-y-4 lg:hidden"
      >
        <motion.div variants={staggerItem}>
          <FlowCard>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Your Business</h3>
                <p className="text-sm text-foreground-muted">List with no exclusivity</p>
              </div>
            </div>
          </FlowCard>
        </motion.div>

        <motion.div variants={staggerItem} className="flex justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-accent" />
        </motion.div>

        <motion.div variants={staggerItem}>
          <FlowCard className="border-accent/30">
            <div className="flex items-center gap-2 mb-3">
              <Logo iconOnly />
              <span className="text-sm font-bold text-accent">Napkin Deals Platform</span>
            </div>
            <ul className="space-y-2">
              {["AI-Powered Matching", "NDA Automation", "Buyer Qualification", "Offer Management"].map(
                (step) => (
                  <li key={step} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                    {step}
                  </li>
                )
              )}
            </ul>
          </FlowCard>
        </motion.div>

        <motion.div variants={staggerItem} className="flex justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-accent" />
        </motion.div>

        <motion.div variants={staggerItem}>
          <FlowCard>
            <h3 className="mb-3 font-semibold text-foreground">Results</h3>
            <div className="grid grid-cols-2 gap-4">
              {PROCESS_OUTCOMES.map((outcome) => (
                <div key={outcome.label}>
                  <p className="text-lg font-bold text-accent">{outcome.value}</p>
                  <p className="text-xs text-foreground-muted">{outcome.label}</p>
                </div>
              ))}
            </div>
          </FlowCard>
        </motion.div>
      </motion.div>
    </Section>
  )
}
