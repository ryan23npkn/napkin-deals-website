"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingDown, BarChart3, Zap, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { DealBulletin } from "@/components/deal-bulletin"
import { SECTION_IDS } from "@/lib/constants"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/lib/animations"

const TAKE_PRIVATE_HIGHLIGHTS = [
  { icon: BarChart3, label: "AI Composite Scoring" },
  { icon: Zap, label: "Real-Time Signals" },
  { icon: Shield, label: "Governance Analysis" },
  { icon: FileText, label: "SEC Filing Intelligence" },
]

export function Products() {
  return (
    <Section id={SECTION_IDS.products}>
      <SectionHeader
        eyebrow="Our Products"
        title="Tools built for the private markets"
        description="From aggregated deal discovery to AI-powered public company screening — our platform gives buyers, sellers, and capital providers an institutional edge."
      />

      <div className="mt-16 space-y-20">
        {/* Deal Bulletin */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={slideInLeft}>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Deal Discovery
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.5rem,1.25rem+1.25vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground">
              Aggregated Deal Bulletin
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              A live, curated feed of private market opportunities aggregated
              from 50+ sources. AI-powered filtering surfaces deals that match
              your acquisition criteria, investment thesis, and geographic focus
              — all in one place.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "500+ active listings across 30+ industries",
                "AI-matched recommendations based on your intent signals",
                "Real-time alerts for new and updated opportunities",
                "NDA-protected engagement with sellers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full" asChild>
                <a href="https://app.napkindeals.com/login">
                  Browse Deals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#contact">
                  Request a Demo
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={slideInRight}>
            <DealBulletin className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto" />
          </motion.div>
        </motion.div>

        {/* Take-Private Signal Intelligence */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Mockup / visual — left on desktop */}
          <motion.div
            variants={slideInLeft}
            className="order-2 lg:order-1"
          >
            <div className="mx-auto max-w-md rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 backdrop-blur-sm lg:mx-0">
              {/* Mock score card */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Take-Private Score
                  </span>
                </div>
                <span className="text-xs text-foreground-subtle">3,000+ companies</span>
              </div>
              {/* Sample scores */}
              <div className="space-y-3">
                {[
                  { name: "ACME Corp", score: 87, industry: "Technology", mcap: "$420M" },
                  { name: "Beacon Health", score: 82, industry: "Healthcare", mcap: "$310M" },
                  { name: "Summit Mfg", score: 79, industry: "Industrials", mcap: "$680M" },
                  { name: "Apex Retail", score: 74, industry: "Consumer", mcap: "$195M" },
                ].map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-card p-3 dark:border-border/40"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-card-foreground">
                        {company.name}
                      </p>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-foreground-muted">
                        <span>{company.industry}</span>
                        <span className="text-border">|</span>
                        <span>{company.mcap}</span>
                      </div>
                    </div>
                    <div className="ml-3 flex items-center gap-1.5">
                      <div className="h-2 w-16 overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-emerald-400"
                          style={{ width: `${company.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-emerald-400 tabular-nums w-6 text-right">
                        {company.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Score dimensions preview */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Valuation", "FCF", "Debt Capacity", "Governance", "Activist", "Strategic", "Moat"].map(
                  (dim) => (
                    <span
                      key={dim}
                      className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-2 py-0.5 text-[10px] font-medium text-emerald-400/80"
                    >
                      {dim}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Content — right on desktop */}
          <motion.div
            variants={slideInRight}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingDown className="h-4 w-4 text-emerald-400" />
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                New Product
              </p>
            </div>
            <h3 className="mt-3 font-display text-[clamp(1.5rem,1.25rem+1.25vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground">
              Take-Private Signal Intelligence
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              AI-powered screening of 3,000+ public companies for take-private
              candidacy. SEC filings, governance analysis, activist tracking, and
              LBO modeling — built for PE firms, hedge funds, and investment banks.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {TAKE_PRIVATE_HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                    <item.icon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground-muted">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full bg-emerald-500 text-white hover:bg-emerald-400"
                asChild
              >
                <a href="https://takeprivate.napkindeals.com/register">
                  Apply for Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="/take-private">
                  See How It Works
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
