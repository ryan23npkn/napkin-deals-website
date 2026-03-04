"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingDown, BarChart3, Zap, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { DealBulletin } from "@/components/deal-bulletin"
import { BULLETIN_STATS } from "@/lib/constants"
import {
  staggerContainer,
  slideInLeft,
  slideInRight,
  viewportConfig,
  fadeInUp,
} from "@/lib/animations"

const TAKE_PRIVATE_HIGHLIGHTS = [
  { icon: BarChart3, label: "AI Composite Scoring" },
  { icon: Zap, label: "Real-Time Signals" },
  { icon: Shield, label: "Governance Analysis" },
  { icon: FileText, label: "SEC Filing Intelligence" },
]

/* ── Deal Bulletin Section ────────────────────────────── */

export function DealBulletinSection() {
  return (
    <Section id="deal-bulletin">
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
            Private Market Deal Flow
          </h3>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            A curated feed of private market opportunities from broker
            networks, marketplaces, and off-market sources. Filter by
            industry, size, and financials to find deals that match your
            acquisition criteria.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Deals across 11 GICS sectors, updated regularly",
              "Advanced filtering by industry, size, and financials",
              "Save custom searches to track your acquisition focus",
              "Off-market and broker-sourced opportunities",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          {/* Platform stats */}
          <div className="mt-6 flex items-center gap-6 sm:gap-8">
            {BULLETIN_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div className="h-8 w-px bg-border" />}
                <div>
                  <p className="text-lg font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-foreground-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a href="https://app.napkindeals.com/register" target="_blank" rel="noopener noreferrer">
                Register Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="https://app.napkindeals.com/browse" target="_blank" rel="noopener noreferrer">
                Browse Deals
              </a>
            </Button>
          </div>
          <button
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).Calendly) {
                ;(window as any).Calendly.initPopupWidget({
                  url: "https://calendly.com/npkn-ryan/bulletin-demo",
                })
              }
            }}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Request a Demo <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        <motion.div variants={slideInRight}>
          <DealBulletin className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto" />
        </motion.div>
      </motion.div>
    </Section>
  )
}

/* ── Take-Private Signal Intelligence Section ─────────── */

export function TakePrivateSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f5f1e6, #efe9da)",
      }}
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      {/* Warm glow orbs */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-amber-400/[0.15] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute right-[-5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-orange-300/[0.10] blur-[120px]" aria-hidden />

      <Container className="relative">
        <SectionHeader
          eyebrow="Institutional Intelligence"
          title="Take-Private Signal Intelligence"
          description="AI-powered screening of 5,000+ public companies for take-private candidacy. SEC filings, governance analysis, activist tracking, and LBO modeling — built for PE firms, hedge funds, and investment banks."
          className="[&_p:first-child]:!text-amber-800 [&_h2]:!text-stone-900 [&_p:last-child]:!text-stone-700"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Score card mockup — left on desktop (dark card for contrast) */}
          <motion.div
            variants={slideInLeft}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Subtle shadow behind card */}
              <div className="absolute -inset-1 rounded-xl bg-stone-900/20 blur-lg" />
              <div className="relative rounded-xl border border-stone-800 bg-stone-900 p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Take-Private Score
                    </span>
                  </div>
                  <span className="text-xs text-stone-400">5,000+ companies</span>
                </div>
                {/* Sample scores */}
                <div className="space-y-3">
                  {[
                    { name: "Kohl's Corp", score: 85, industry: "Consumer Discretionary", mcap: "$2.4B" },
                    { name: "Walgreens Boots", score: 82, industry: "Healthcare", mcap: "$8.9B" },
                    { name: "Nexstar Media", score: 80, industry: "Communication Svcs", mcap: "$5.2B" },
                    { name: "Dollar Tree", score: 78, industry: "Consumer Staples", mcap: "$14.2B" },
                  ].map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center justify-between rounded-lg border border-stone-700/60 bg-stone-800/80 p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-stone-100">
                          {company.name}
                        </p>
                        <div className="mt-0.5 flex items-center gap-2 text-xs text-stone-400">
                          <span>{company.industry}</span>
                          <span className="text-stone-600">|</span>
                          <span>{company.mcap}</span>
                        </div>
                      </div>
                      <div className="ml-3 flex items-center gap-1.5">
                        <div className="h-2 w-16 overflow-hidden rounded-full bg-stone-700">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${company.score}%`,
                              background: "linear-gradient(90deg, #d4a017, #f5c542)",
                            }}
                          />
                        </div>
                        <span className="text-xs font-bold text-amber-400 tabular-nums w-6 text-right">
                          {company.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Score dimensions */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Valuation", "FCF", "Debt Capacity", "Governance", "Activist", "Strategic", "Market Position"].map(
                    (dim) => (
                      <span
                        key={dim}
                        className="rounded-full border border-stone-700 bg-stone-800 px-2 py-0.5 text-[10px] font-medium text-stone-300"
                      >
                        {dim}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content — right on desktop */}
          <motion.div
            variants={slideInRight}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-800/10 px-4 py-1.5">
              <span
                className="h-2 w-2 rounded-full bg-amber-600"
                style={{ animation: "pulse-soft 2s ease-in-out infinite" }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Beta — Early Access
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {TAKE_PRIVATE_HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900/10">
                    <item.icon className="h-4 w-4 text-stone-800" />
                  </div>
                  <span className="text-sm font-medium text-stone-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full bg-stone-900 text-amber-50 hover:bg-stone-800"
                asChild
              >
                <a href="https://takeprivate.napkindeals.com/register">
                  Apply for Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full !border-stone-800/30 !bg-transparent !text-stone-800 !shadow-none hover:!bg-stone-900/5"
                asChild
              >
                <a href="/take-private">
                  See How It Works
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
