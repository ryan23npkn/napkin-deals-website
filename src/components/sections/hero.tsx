"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { GradientOrb } from "@/components/ui/background-pattern"
import { DealPipeline } from "@/components/deal-pipeline"
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
  "15x More Buyers",
  "30% Higher Offers",
  "<45 Day Offers",
  "$0 Upfront Fees",
] as const

function HeroCTAInput() {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const base = "https://app.napkindeals.com/list-your-business"
    const href = url.trim() ? `${base}?url=${encodeURIComponent(url.trim())}` : base
    window.open(href, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="flex w-full overflow-hidden rounded-full border border-border bg-card shadow-lg shadow-primary/[0.04] transition-colors focus-within:border-primary/30 focus-within:shadow-primary/[0.08]">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your business website"
          className="h-12 flex-1 bg-transparent px-5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none sm:h-14 sm:text-base"
        />
        <Button
          type="submit"
          size="lg"
          className="m-1.5 shrink-0 rounded-full px-5 text-sm font-semibold sm:px-7 sm:text-base"
        >
          Find Buyers
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </div>
      <p className="mt-3 text-sm text-foreground-subtle">
        Or{" "}
        <a
          href="https://app.napkindeals.com/list-your-business"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-foreground-muted transition-colors hover:text-foreground"
        >
          list your business directly
        </a>
      </p>
    </form>
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
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-20">
          {/* Left: Content */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center xl:text-left"
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
              className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-foreground-muted xl:mx-0"
            >
              Free to list. No exclusivity. No upfront fees. We bring the
              buyers to you.
            </motion.p>

            <motion.div
              key="cta"
              variants={fadeInUp}
              className="mt-8 flex justify-center xl:justify-start"
            >
              <HeroCTAInput />
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              key="metrics"
              variants={fadeInUp}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
            >
              {METRICS.map((m, i) => (
                <div
                  key={m}
                  className="bg-card px-5 py-4 text-center"
                >
                  <p className="text-sm font-semibold tracking-tight text-foreground">{m}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Deal Pipeline (xl only) */}
          <motion.div
            className="hidden xl:block"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            <div className="gradient-border rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/[0.04]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  Your Buyer Reach
                </span>
                <span className="flex items-center gap-1.5 text-xs text-foreground-subtle">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                  Live
                </span>
              </div>
              <DealPipeline />
            </div>
          </motion.div>
        </div>

        {/* Buyer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 text-center xl:text-left"
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
