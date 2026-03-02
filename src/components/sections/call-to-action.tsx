"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SECTION_IDS } from "@/lib/constants"
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations"

function openAdvisorCalendly() {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    ;(window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/npkn-ryan/advisor-session",
    })
  }
}

export function CallToAction() {
  return (
    <section
      id={SECTION_IDS.cta}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.35 0.10 245), oklch(0.30 0.12 260))",
      }}
    >
      {/* Noise overlay */}
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
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Get a Valuation */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm"
          >
            <h3 className="font-display font-bold text-2xl text-white">
              Ready to sell your business?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-200/70">
              Get a free AI-powered valuation in under 60 seconds. No exclusivity,
              no upfront fees. See what your business is worth.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-full bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="https://app.napkindeals.com/valuation" target="_blank" rel="noopener noreferrer">
                Get a Free Valuation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Book an Advisor Session */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm"
          >
            <h3 className="font-display font-bold text-2xl text-white">
              Want expert guidance?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-200/70">
              Talk to an M&A advisor about your business, your goals, and the best
              path forward. No commitment, no pressure.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-full bg-white text-primary hover:bg-white/90"
              onClick={openAdvisorCalendly}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Free Advisor Session
            </Button>
          </motion.div>
        </motion.div>

        {/* Buyer cross-link */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-6 text-center text-sm text-blue-200/50"
        >
          Looking to buy?{" "}
          <Link
            href="/buyers"
            className="text-blue-200/80 underline underline-offset-2 transition-colors hover:text-white"
          >
            Explore deals →
          </Link>
        </motion.p>
      </Container>
    </section>
  )
}
