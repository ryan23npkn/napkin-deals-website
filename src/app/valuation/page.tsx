"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { Button } from "@/components/ui/button"
import { WhatYouGet } from "@/components/valuation/what-you-get"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function ValuationPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundPattern variant="dots" />
      <GradientOrb
        className="left-[-10%] top-[10%] h-[500px] w-[500px]"
        color="primary"
      />
      <GradientOrb
        className="right-[-15%] top-[50%] h-[400px] w-[400px]"
        color="accent"
      />

      <Container className="relative pb-16 pt-20">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left: What You'll Get (sticky sidebar) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-24">
              <WhatYouGet />
            </div>
          </motion.div>

          {/* Right: CTA to brokerage app */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <motion.div variants={fadeInUp}>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Get your free business valuation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                  Enter your website or describe your business and our AI will
                  scrape, research, and benchmark it against 433+ real deals
                  across 31 sources — delivering a full valuation report in
                  under 60 seconds.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8">
                <Button
                  size="lg"
                  className="w-full rounded-full text-base sm:w-auto"
                  asChild
                >
                  <a
                    href="https://app.napkindeals.com/valuation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start My Free Valuation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-3 text-sm text-foreground-subtle">
                  No commitment. 100% confidential. Free to list.
                </p>
              </motion.div>

              {/* How it works */}
              <motion.div
                variants={fadeInUp}
                className="mt-10 border-t border-border pt-8"
              >
                <p className="mb-5 text-xs font-medium uppercase tracking-widest text-foreground-muted">
                  How it works
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    {
                      step: "1",
                      title: "Enter your business",
                      description:
                        "Provide your website URL or describe your business. Select your industry and revenue range.",
                    },
                    {
                      step: "2",
                      title: "AI researches & benchmarks",
                      description:
                        "Our AI scrapes your site, analyzes your market, and benchmarks against real deal data.",
                    },
                    {
                      step: "3",
                      title: "Get your valuation",
                      description:
                        "Receive a full report with valuation range, scoring, comparable deals, and a deal card preview.",
                    },
                  ].map((item) => (
                    <div key={item.step}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                        {item.step}
                      </div>
                      <h4 className="mt-3 text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
