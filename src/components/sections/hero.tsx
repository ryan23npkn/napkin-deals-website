"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { DealBulletin } from "@/components/deal-bulletin"
import { HERO_STATS, MEDIA_MENTIONS, SECTION_IDS } from "@/lib/constants"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInRight,
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
  const words = ["Discover.", "Evaluate.", "Close."]

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <div className="mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  variants={fadeInUp}
                  className="mr-3 inline-block font-display text-[clamp(2.75rem,2rem+3.75vw,4.5rem)] leading-[1.05] tracking-tight text-foreground last:mr-0 sm:mr-4"
                >
                  {i === 2 ? <GradientText>{word}</GradientText> : word}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="max-w-lg text-lg leading-relaxed text-foreground-muted"
            >
              The private market brokerage that aggregates dealflow from 50+ sources
              and uses intent-driven matching to connect the right buyers, sellers,
              and capital — faster.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
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
              className="mt-10 flex items-center gap-8 rounded-xl border border-border-subtle bg-card/50 p-6 backdrop-blur-sm"
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

          {/* Right: Deal Bulletin */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <DealBulletin className="w-full max-w-md mx-auto" />
          </motion.div>
        </div>

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
