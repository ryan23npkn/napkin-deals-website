"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Share2,
  ExternalLink,
  Megaphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { staggerContainer, staggerItem } from "@/lib/animations"
import type { ValuationResult } from "@/lib/valuation"

interface ValuationReportProps {
  result: ValuationResult
  onListOnBulletin: () => void
}

export function ValuationReport({ result, onListOnBulletin }: ValuationReportProps) {
  const [bulletinOptIn, setBulletinOptIn] = useState(false)

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Deal Card Preview */}
      <motion.div variants={staggerItem}>
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
          Your Deal Card
        </p>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {result.dealCard.title}
              </h3>
              <div className="mt-1.5 flex items-center gap-2 text-sm text-foreground-muted">
                <span>{result.dealCard.industry}</span>
                <span className="text-border">|</span>
                <span>{result.dealCard.revenue}</span>
              </div>
            </div>
            <Badge
              variant="outline"
              className="shrink-0 border-accent/20 bg-accent/10 text-accent"
            >
              {result.dealCard.status}
            </Badge>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {result.businessSummary}
          </p>
        </div>
      </motion.div>

      {/* Valuation Range */}
      <motion.div variants={staggerItem}>
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-background-subtle p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground-muted">
            <TrendingUp className="h-4 w-4 text-accent" />
            Estimated Valuation Range
          </div>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {result.valuationRange.low}
            </span>
            <span className="text-lg text-foreground-muted">to</span>
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {result.valuationRange.high}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-foreground-subtle">Revenue Multiple</p>
              <p className="text-sm font-semibold text-foreground">
                {result.revenueMultiple.low}x - {result.revenueMultiple.high}x
              </p>
            </div>
            <div>
              <p className="text-xs text-foreground-subtle">EBITDA Multiple</p>
              <p className="text-sm font-semibold text-foreground">
                {result.ebitdaMultiple.low}x - {result.ebitdaMultiple.high}x
              </p>
            </div>
            <div>
              <p className="text-xs text-foreground-subtle">Sector Avg</p>
              <p className="text-sm font-semibold text-foreground">
                {result.sectorAvgMultiple}x
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Score Breakdown */}
      <motion.div variants={staggerItem}>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground-muted">
              <BarChart3 className="h-4 w-4 text-accent" />
              Valuation Score
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">
                {result.overallScore}
              </span>
              <span className="text-sm text-foreground-subtle">/100</span>
            </div>
          </div>
          <div className="space-y-3">
            {result.scores.map((score) => (
              <div key={score.dimension}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">
                    {score.dimension}
                  </span>
                  <span className="text-foreground-muted">
                    {score.score}/{score.maxScore}
                  </span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-muted">
                  <motion.div
                    className={cn(
                      "h-full rounded-full",
                      score.score >= 7
                        ? "bg-success"
                        : score.score >= 5
                          ? "bg-accent"
                          : "bg-warning"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${(score.score / score.maxScore) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <p className="mt-0.5 text-[11px] text-foreground-subtle">
                  {score.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Comparable Deals */}
      <motion.div variants={staggerItem}>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground-muted">
            <BarChart3 className="h-4 w-4 text-accent" />
            Comparable Deals
            <Badge variant="secondary" className="ml-auto text-[10px]">
              {result.sectorDealCount} in sector
            </Badge>
          </div>
          <div className="space-y-2">
            {result.comparableDeals.map((deal) => (
              <div
                key={deal.title}
                className="flex items-center justify-between rounded-lg border border-border/60 bg-background px-3 py-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {deal.title}
                  </p>
                  <p className="mt-0.5 text-xs text-foreground-muted">
                    {deal.revenue}
                  </p>
                </div>
                <div className="ml-3 text-right">
                  <p className="text-sm font-semibold text-accent">
                    {deal.multiple}
                  </p>
                  <p className="text-[10px] text-foreground-subtle">
                    {deal.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground-subtle">
            {result.marketPosition}
          </p>
        </div>
      </motion.div>

      {/* Strengths & Considerations */}
      <motion.div variants={staggerItem} className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-success">
            <CheckCircle2 className="h-4 w-4" />
            Strengths
          </div>
          <ul className="space-y-2">
            {result.strengths.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-xs text-foreground-muted"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-success" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-warning">
            <AlertCircle className="h-4 w-4" />
            Considerations
          </div>
          <ul className="space-y-2">
            {result.considerations.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-xs text-foreground-muted"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-warning" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* List on Bulletin CTA */}
      <motion.div variants={staggerItem}>
        <div className="rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Megaphone className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold text-foreground">
                List on the Napkin Deals Bulletin
              </h4>
              <p className="mt-1 text-sm text-foreground-muted">
                Get exposure to qualified buyers and capital providers across our
                network. Your listing is off-market, confidential, and there is
                zero commitment.
              </p>
              <ul className="mt-3 grid gap-1.5 text-xs text-foreground-muted sm:grid-cols-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  Free to list
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  No exclusivity required
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  NDA-protected inquiries
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-success" />
                  Remove anytime
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                {!bulletinOptIn ? (
                  <Button
                    onClick={() => {
                      setBulletinOptIn(true)
                      onListOnBulletin()
                    }}
                    className="rounded-full"
                  >
                    List My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success">
                    <CheckCircle2 className="h-4 w-4" />
                    Listed on Bulletin
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Share / Actions */}
      <motion.div
        variants={staggerItem}
        className="flex flex-wrap items-center gap-3 border-t border-border pt-5"
      >
        <Button variant="outline" size="sm" className="rounded-full">
          <Share2 className="mr-2 h-3.5 w-3.5" />
          Share Valuation
        </Button>
        <Button variant="outline" size="sm" className="rounded-full" asChild>
          <a href="https://app.napkindeals.com/login">
            <ExternalLink className="mr-2 h-3.5 w-3.5" />
            Explore Deals on Bulletin
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}
