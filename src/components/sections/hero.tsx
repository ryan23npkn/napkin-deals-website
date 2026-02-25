"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { HERO_STATS, MEDIA_MENTIONS, SECTION_IDS } from "@/lib/constants"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations"

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-foreground-muted">
        {label}
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16 sm:pt-32"
    >
      {/* Background elements */}
      <BackgroundPattern variant="dots" />
      <GradientOrb className="left-[-10%] top-[10%] h-[500px] w-[500px]" color="primary" />
      <GradientOrb className="right-[-10%] top-[30%] h-[400px] w-[400px]" color="accent" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display font-bold text-[clamp(2.75rem,2rem+3.75vw,4.5rem)] leading-[1.05] tracking-tight text-foreground"
          >
            The Private Market{" "}
            <GradientText>Brokerage.</GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted"
          >
            Napkin Deals aggregates dealflow from 50+ sources and uses
            intent-driven matching to connect the right buyers, sellers, and
            capital — faster. Advisory. Brokerage. Capital. Deals.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm text-foreground-subtle"
          >
            Free to list. No upfront pressure. Success-fee only.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-10 inline-flex items-center gap-8 rounded-xl border border-border-subtle bg-card/50 p-6 backdrop-blur-sm"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && (
                  <div className="h-10 w-px bg-border" />
                )}
                <StatItem value={stat.value} label={stat.label} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Media Mentions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 border-t border-border-subtle pt-10"
        >
          <motion.p
            variants={staggerItem}
            className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
          >
            As seen in
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {MEDIA_MENTIONS.map((name) => (
              <motion.span
                key={name}
                variants={staggerItem}
                className="text-sm font-semibold text-foreground-subtle/60 transition-colors hover:text-foreground-muted"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
