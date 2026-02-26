"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { GradientText } from "@/components/ui/gradient-text"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function ValuationDetailPage() {
  // This page serves as a landing page for shared valuation links.
  // Full persistence (DB-backed report retrieval) can be added later.
  // For now, it encourages visitors to get their own valuation.

  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundPattern variant="dots" />
      <GradientOrb
        className="left-[-10%] top-[20%] h-[500px] w-[500px]"
        color="primary"
      />
      <GradientOrb
        className="right-[-15%] top-[40%] h-[400px] w-[400px]"
        color="accent"
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8">
        <a href="/">
          <Logo />
        </a>
        <ThemeToggle />
      </header>

      <Container className="relative flex min-h-[70vh] items-center justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Free Business Valuation
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-display text-[clamp(2rem,1.5rem+2.5vw,3rem)] font-bold leading-tight tracking-tight text-foreground"
          >
            Get Your <GradientText>Free Valuation</GradientText>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-foreground-muted"
          >
            AI-powered business valuation in under 60 seconds. Benchmarked
            against $4.6B+ in real deal flow across 433 opportunities.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button size="lg" className="rounded-full text-base" asChild>
              <a href="/valuation">
                Get My Free Valuation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm text-foreground-subtle"
          >
            No commitment. 100% confidential.
          </motion.p>
        </motion.div>
      </Container>
    </div>
  )
}
