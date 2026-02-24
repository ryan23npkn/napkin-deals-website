"use client"

import { motion } from "framer-motion"
import { X, Check, AlertTriangle, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { OLD_WAY_ITEMS, NAPKIN_WAY_METRICS, NAPKIN_WAY_OFFERS, SECTION_IDS } from "@/lib/constants"
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations"

function OldWayCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-destructive/20 bg-card p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10">
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </div>
        <h3 className="font-semibold text-foreground">The Old Way</h3>
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {OLD_WAY_ITEMS.map((item, i) => (
          <motion.li
            key={item}
            variants={staggerItem}
            className="flex items-start gap-3 text-sm text-foreground-muted"
          >
            <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Decorative chaos elements */}
      <div className="mt-6 rounded-lg border border-dashed border-destructive/20 bg-destructive/[0.03] p-3">
        <p className="text-center text-xs font-medium text-destructive/60">
          Months of searching. No clear outcome.
        </p>
      </div>
    </div>
  )
}

function NapkinWayCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-success/20 bg-card p-6 shadow-md">
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-success/10 blur-3xl"
        aria-hidden
      />

      {/* Header */}
      <div className="mb-5 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10">
          <Zap className="h-4 w-4 text-success" />
        </div>
        <h3 className="font-semibold text-foreground">The Napkin Way</h3>
      </div>

      {/* Metrics tabs */}
      <div className="mb-4 flex gap-2">
        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
          {NAPKIN_WAY_METRICS.offers} Offers
        </Badge>
        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
          {NAPKIN_WAY_METRICS.meetings} Meetings
        </Badge>
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
          {NAPKIN_WAY_METRICS.ndas} NDAs
        </Badge>
      </div>

      {/* Offer cards */}
      <div className="space-y-2">
        {NAPKIN_WAY_OFFERS.map((offer) => (
          <div
            key={offer.buyer}
            className="flex items-center justify-between rounded-lg border border-border/60 bg-background/50 p-3"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{offer.buyer}</p>
              <p className="text-xs text-foreground-muted">{offer.structure}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-success">{offer.amount}</span>
              <Check className="h-3.5 w-3.5 text-success" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <Section id={SECTION_IDS.beforeAfter}>
      <SectionHeader
        eyebrow="Before & After"
        title="Time is money. We save you both."
        description="Stop wasting months searching fragmented platforms. Our platform delivers qualified offers in weeks, not months."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8"
      >
        <motion.div variants={fadeInUp}>
          <OldWayCard />
        </motion.div>

        {/* VS divider - desktop */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          {/* Intentionally empty — the grid gap provides visual separation */}
        </div>

        <motion.div variants={fadeInUp}>
          <NapkinWayCard />
        </motion.div>
      </motion.div>
    </Section>
  )
}
