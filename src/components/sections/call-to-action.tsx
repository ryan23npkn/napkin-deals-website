"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingDown } from "lucide-react"
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
          className="grid gap-6 md:grid-cols-3"
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
              List your business for free. No exclusivity, no upfront fees. Get
              connected with qualified buyers and capital providers.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-full bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#contact">
                List Your Business
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
              Access aggregated dealflow from 50+ sources. AI-powered matching
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

          {/* Take-Private Funnel */}
          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingDown className="h-5 w-5 text-emerald-300" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-300">
                New Product
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Take-Private Signal Intelligence
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-200/70">
              AI-powered screening of 3,000+ public companies for take-private
              candidacy. SEC filings, governance analysis, activist tracking, and
              LBO modeling — built for institutional buyers.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-full bg-emerald-400 text-gray-900 hover:bg-emerald-300"
              asChild
            >
              <a href="/take-private">
                Apply for Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
