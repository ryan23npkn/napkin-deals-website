"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, ShieldCheck, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { GradientOrb } from "@/components/ui/background-pattern"
import { SECTION_IDS } from "@/lib/constants"
import { fadeInUp } from "@/lib/animations"

const EASE = [0.16, 1, 0.3, 1] as const

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const METRICS = [
  "More Buyers",
  "Higher Offers",
  "No Upfront Fees",
] as const

const VALUATION_URL = "https://app.napkindeals.com/valuation"

const BUYER_MATCHES = [
  { name: "Strategic Acquirer", type: "PE-backed", score: 94, Icon: Building2, delay: 0.8 },
  { name: "Growth Fund III", type: "Private Equity", score: 91, Icon: TrendingUp, delay: 1.2 },
  { name: "Verified Buyer", type: "NDA Signed", score: 87, Icon: ShieldCheck, delay: 1.6 },
] as const

function BuyerMatchStack() {
  return (
    <div className="relative w-[280px]">
      {/* Header pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
        className="mb-3 flex items-center justify-between"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
          Buyer Matches
        </span>
        <span className="flex items-center gap-1.5 text-xs text-foreground-subtle">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          Live
        </span>
      </motion.div>

      {/* Match cards stacking in */}
      <div className="flex flex-col gap-2.5">
        {BUYER_MATCHES.map(({ name, type, score, Icon, delay }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: EASE }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 shadow-md shadow-primary/[0.03]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{name}</p>
              <p className="text-xs text-foreground-subtle">{type}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm font-bold text-success">{score}%</p>
              <p className="text-[10px] text-foreground-subtle">match</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Counter pill */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, delay: 2.0, ease: EASE }}
        className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-border bg-card/80 px-4 py-2 text-xs text-foreground-muted shadow-sm"
      >
        <span className="font-semibold text-foreground">+47 more</span> buyers matched
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden bg-background pt-10 pb-16 sm:pt-14 sm:pb-20"
    >
      {/* Subtle background depth */}
      <GradientOrb className="left-[-10%] top-[5%] h-[600px] w-[600px]" color="primary" />
      <GradientOrb className="right-[-15%] top-[20%] h-[500px] w-[500px]" color="accent" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left: Content */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div key="eyebrow" variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground-muted shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                For businesses with $1M–100M+ in revenue
              </span>
            </motion.div>

            <motion.h1
              key="headline"
              variants={fadeInUp}
              className="mt-6 font-display font-bold text-[clamp(2.75rem,2rem+3.75vw,4.5rem)] leading-[1.02] tracking-tight text-foreground"
            >
              List your business.{" "}
              <br className="hidden sm:block" />
              <GradientText>Get qualified offers.</GradientText>
            </motion.h1>

            <motion.p
              key="subtitle"
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-foreground-muted lg:mx-0"
            >
              The new way to sell your business.
            </motion.p>

            <motion.div
              key="cta"
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center gap-3 lg:items-start"
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/[0.12] sm:px-10 sm:text-lg"
                asChild
              >
                <a href={VALUATION_URL} target="_blank" rel="noopener noreferrer">
                  Get a Free Valuation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-foreground-subtle">
                No commitment · Takes under 5 minutes
              </p>
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              key="metrics"
              variants={fadeInUp}
              className="mt-10 inline-grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border"
            >
              {METRICS.map((m) => (
                <div
                  key={m}
                  className="bg-card px-4 py-2.5 text-center"
                >
                  <p className="text-sm font-semibold tracking-tight text-foreground">{m}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Buyer match stack (lg only) */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <BuyerMatchStack />
          </div>
        </div>

        {/* Buyer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 text-center lg:text-left"
        >
          <a
            href="/buyers"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-subtle transition-colors hover:text-foreground-muted"
          >
            Looking to buy a business? Join our buyer network
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </Container>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background-subtle" />
    </section>
  )
}
