"use client"

import { motion } from "framer-motion"
import {
  FileText,
  BarChart3,
  Target,
  TrendingUp,
  LayoutDashboard,
  Shield,
} from "lucide-react"
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations"

const PREVIEW_ITEMS = [
  {
    Icon: TrendingUp,
    title: "Valuation Range",
    description: "Data-driven estimate using real market multiples",
  },
  {
    Icon: FileText,
    title: "AI Research Report",
    description: "Business analysis, strengths, and key considerations",
  },
  {
    Icon: BarChart3,
    title: "Comparable Deals",
    description: "Benchmarked against 433+ deals across 31 sources",
  },
  {
    Icon: Target,
    title: "Market Positioning",
    description: "Scoring across 8 dimensions vs. sector peers",
  },
  {
    Icon: LayoutDashboard,
    title: "Deal Card Preview",
    description: "See how buyers would view your business listing",
  },
  {
    Icon: Shield,
    title: "100% Confidential",
    description: "Your data is private — list only if you choose to",
  },
]

export function WhatYouGet() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Free Valuation
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
          What You&apos;ll Get
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          An AI-powered valuation report in under 60 seconds, benchmarked
          against real deal data from our platform.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mt-6 space-y-4"
      >
        {PREVIEW_ITEMS.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            className="flex items-start gap-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <item.Icon className="h-4 w-4 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs text-foreground-muted">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 rounded-xl border border-border/60 bg-background-subtle p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-medium text-foreground-muted">
            Platform Data
          </span>
          <span className="flex items-center gap-1.5 text-xs text-foreground-subtle">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
            Live
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div>
            <p className="text-lg font-bold text-foreground">$4.6B+</p>
            <p className="text-[10px] text-foreground-muted">Deal Flow</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">433</p>
            <p className="text-[10px] text-foreground-muted">Deals</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">31</p>
            <p className="text-[10px] text-foreground-muted">Sources</p>
          </div>
        </div>
      </div>
    </div>
  )
}
