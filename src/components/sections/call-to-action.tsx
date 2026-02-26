"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SECTION_IDS } from "@/lib/constants"
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations"

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
          {/* Sellers */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm"
          >
            <h3 className="font-display font-bold text-2xl text-white">
              Ready to sell or raise capital?
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
              <a href="/valuation">
                Get a Free Valuation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Buyers */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm"
          >
            <h3 className="font-display font-bold text-2xl text-white">
              Looking for your next acquisition?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-200/70">
              Access aggregated dealflow from 30+ sources. AI-powered matching
              surfaces opportunities aligned with your investment criteria.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-full bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="https://app.napkindeals.com/login">
                Explore Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
