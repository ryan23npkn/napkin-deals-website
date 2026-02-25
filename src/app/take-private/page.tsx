"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  Zap,
  Calculator,
  Shield,
  TrendingDown,
  Users,
  FileText,
  Eye,
  Brain,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations"
import { SignalScanner } from "@/components/signal-scanner"
import { FOOTER_LINKS } from "@/lib/constants"

const FEATURES = [
  {
    icon: BarChart3,
    title: "AI Composite Scoring",
    description:
      "7-factor scoring model blending quantitative analysis with Claude AI qualitative assessment. Every company gets a 0-100 take-private attractiveness score.",
  },
  {
    icon: Zap,
    title: "Real-Time Signals",
    description:
      "Track 13D filings, activist stake changes, price drops, board shakeups, and governance events as they happen. Never miss a catalyst.",
  },
  {
    icon: Calculator,
    title: "LBO Quick Model",
    description:
      "Instant back-of-envelope LBO analysis with estimated entry multiples, debt capacity, equity checks, and projected IRR for every candidate.",
  },
  {
    icon: Shield,
    title: "Governance Analysis",
    description:
      "Board composition, anti-takeover provisions, insider ownership, and dual-class structures parsed from DEF 14A proxy statements.",
  },
  {
    icon: Users,
    title: "Activist Tracking",
    description:
      "13D/13G filings monitored every 6 hours. Track activist positions, stated intent, ownership changes, and threat levels.",
  },
  {
    icon: FileText,
    title: "SEC Filing Intelligence",
    description:
      "Automated parsing of 10-K, 10-Q, DEF 14A, and Schedule 13D/13G filings. XBRL financial data extraction with cross-period normalization.",
  },
]

const SCORE_DIMENSIONS = [
  { label: "Valuation", weight: "25%", description: "Undervaluation vs. intrinsic value and peers" },
  { label: "Free Cash Flow", weight: "20%", description: "Cash flow strength and predictability" },
  { label: "Debt Capacity", weight: "15%", description: "Room for LBO leverage (4-6x EBITDA)" },
  { label: "Governance", weight: "10%", description: "Governance weakness = easier acquisition" },
  { label: "Activist Pressure", weight: "10%", description: "Activist involvement as catalyst" },
  { label: "Strategic Value", weight: "10%", description: "Hidden assets, sum-of-parts, buyer interest" },
  { label: "Market Position", weight: "10%", description: "Moat, recurring revenue, defensibility" },
]

const PRESETS = [
  {
    name: "Classic PE",
    description: "Low P/E, strong FCF, manageable debt — the traditional LBO candidate profile.",
    criteria: ["P/E < 15", "EV/EBITDA < 10", "FCF Yield > 5%", "Debt/EBITDA < 3x"],
  },
  {
    name: "Activist / Event-Driven",
    description: "Companies under activist pressure with catalysts for change.",
    criteria: ["Recent 13D filing", "Activist score > 60", "Proxy fights", "Board changes"],
  },
  {
    name: "Strategic",
    description: "Sum-of-parts discount, recurring revenue, and strategic buyer appeal.",
    criteria: ["Recurring rev > 60%", "Strategic score > 65", "Sum-of-parts gap", "Hidden assets"],
  },
]

function openCalendly() {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    ;(window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/npkn-ryan/take-private-funnel-demo",
    })
  }
}

export default function TakePrivatePage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 right-0 left-0 z-50 glass border-b border-border/10">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="relative z-10">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                Back to Napkin Deals
              </Link>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <a href="https://takeprivate.napkindeals.com/register">
                Apply for Access
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background pt-24 pb-16 sm:pt-32">
          <BackgroundPattern variant="dots" />
          <GradientOrb color="primary" className="left-[-10%] top-[10%] h-[500px] w-[500px]" />
          <GradientOrb color="accent" className="right-[-10%] top-[30%] h-[400px] w-[400px]" />

          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground-muted shadow-sm">
                    <TrendingDown className="h-3 w-3 text-primary" />
                    Beta — Early Access
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-display text-[clamp(2.5rem,1.75rem+3.75vw,4.25rem)] font-bold tracking-tight leading-[1.05]"
                >
                  Take-Private{" "}
                  <span className="text-gradient">Signal Intelligence</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 max-w-lg text-lg leading-relaxed text-foreground-muted"
                >
                  AI-powered screening of 5,000+ public companies for take-private
                  candidacy. Built for PE firms, hedge funds, and investment banks.
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-8">
                  <Button size="lg" className="rounded-full text-base" asChild>
                    <a href="https://takeprivate.napkindeals.com/register">
                      Apply for Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-10 inline-flex items-center gap-6 rounded-xl border border-border-subtle bg-card/50 p-5 backdrop-blur-sm sm:gap-8 sm:p-6"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground sm:text-3xl">5,000+</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-foreground-muted">Companies</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground sm:text-3xl">7</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-foreground-muted">AI Sub-Scores</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground sm:text-3xl">Daily</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-foreground-muted">Signal Refresh</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Signal Scanner animation */}
              <div className="hidden lg:block">
                <div className="rounded-xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur-sm dark:border-border/30">
                  <SignalScanner />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <Section variant="subtle" id="features">
          <SectionHeader
            eyebrow="Platform Capabilities"
            title="Everything you need to source take-private opportunities"
            description="From SEC filing intelligence to AI-driven scoring, our platform covers the full workflow for identifying and evaluating take-private candidates."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* How Scoring Works */}
        <Section id="how-it-works">
          <SectionHeader
            eyebrow="Scoring Methodology"
            title="Two-layer AI scoring for every company"
            description="A quantitative layer computes deterministic metrics from financial data. An LLM layer (Claude) provides contextual judgment. The composite score blends both."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-16 grid gap-8 lg:grid-cols-2"
          >
            {/* Score dimensions */}
            <motion.div variants={fadeInUp} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="font-semibold tracking-tight">7 Score Dimensions</h3>
              </div>
              <div className="space-y-3">
                {SCORE_DIMENSIONS.map((dim) => (
                  <div key={dim.label} className="flex items-center gap-3">
                    <span className="shrink-0 w-10 text-xs font-mono font-bold text-primary text-right">
                      {dim.weight}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium">{dim.label}</span>
                      <span className="text-xs text-foreground-muted ml-2">{dim.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Screening presets */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="h-5 w-5 text-primary" />
                <h3 className="font-semibold tracking-tight">Pre-Built Screening Presets</h3>
              </div>
              {PRESETS.map((preset) => (
                <div
                  key={preset.name}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h4 className="font-semibold text-sm">{preset.name}</h4>
                  <p className="text-xs text-foreground-muted mt-1">{preset.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {preset.criteria.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-full border border-border bg-background-subtle px-2 py-0.5 text-[10px] font-medium text-foreground-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* Data Sources */}
        <Section variant="subtle" id="data">
          <SectionHeader
            eyebrow="Data Infrastructure"
            title="Institutional-grade data, refreshed daily"
            description="We combine premium financial APIs with free SEC EDGAR data to build the most comprehensive picture of every take-private candidate."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-16 grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeInUp} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold tracking-tight mb-4">Financial Modeling Prep</h3>
              <ul className="space-y-2">
                {[
                  "Company profiles, income statements, balance sheets",
                  "Key ratios, enterprise values, historical prices",
                  "Stock screener and M&A data",
                  "Batch endpoints for efficient data collection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold tracking-tight mb-4">SEC EDGAR</h3>
              <ul className="space-y-2">
                {[
                  "10-K / 10-Q via XBRL JSON for structured financials",
                  "DEF 14A proxy statements for governance data",
                  "13D / 13G filings for activist positions and intent",
                  "RSS feed monitoring every 6 hours for new filings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </Section>

        {/* Who It's For */}
        <Section id="audience">
          <SectionHeader
            eyebrow="Built For"
            title="Designed for institutional buyers"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: "PE Firms", description: "Classic LBO candidates with strong cash flows and manageable debt profiles." },
              { title: "Hedge Funds", description: "Event-driven opportunities around activist campaigns and governance catalysts." },
              { title: "Investment Banks", description: "Pipeline generation for M&A advisory and take-private transaction coverage." },
              { title: "Family Offices", description: "Long-horizon opportunities in undervalued public companies with strategic assets." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Apply CTA */}
        <section
          className="section-padding relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.10 245), oklch(0.30 0.12 260))",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
          <Container className="relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-display text-[clamp(1.875rem,1.5rem+1.875vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white"
              >
                See it in action
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-5 text-lg leading-relaxed text-blue-200/80"
              >
                Walk through the platform with our team. We&apos;ll show you how
                the scoring engine works on real candidates in your target universe.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-white/90"
                  onClick={openCalendly}
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <Container className="py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-sm text-foreground-muted">
                Take-Private Signal Intelligence
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Napkin Deals Home
              </Link>
              <a href="https://takeprivate.napkindeals.com/login" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                Sign In
              </a>
              <a href="https://takeprivate.napkindeals.com/register" className="text-sm text-primary font-medium hover:underline">
                Apply for Access
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-foreground-subtle">
            A product of Napkin Deals Brokerage. Data sources: Financial Modeling Prep, SEC EDGAR.
          </div>
        </Container>
      </footer>
    </>
  )
}
