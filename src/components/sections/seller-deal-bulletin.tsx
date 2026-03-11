"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { DealBulletin } from "@/components/deal-bulletin"
import { BULLETIN_STATS, INDUSTRIES } from "@/lib/constants"
import {
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/lib/animations"

export function SellerDealBulletin() {
  return (
    <Section id="deal-bulletin">
      <SectionHeader
        eyebrow="Your Listing"
        title="Get seen by serious buyers"
        description="When you list with Napkin Deals, your business joins an active marketplace of qualified acquirers across industries and deal sizes."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <motion.div variants={slideInLeft}>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Active Marketplace
          </p>
          <h3 className="mt-3 font-display text-[clamp(1.5rem,1.25rem+1.25vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-foreground">
            Your business in front of the right buyers
          </h3>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Our deal bulletin is where qualified buyers actively search for
            acquisition opportunities. List your business and get exposure to
            PE firms, search funds, strategic acquirers, and individual buyers
            — all actively looking for their next deal.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Exposure across 11 GICS sectors of active buyers",
              "New buyer activity every week",
              "Multi-source buyer network from broker channels and marketplaces",
              "Professional deal card showcasing your business",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          {/* Market stats */}
          <div className="mt-6 flex items-center gap-6 sm:gap-8">
            {BULLETIN_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div className="h-8 w-px bg-border" />}
                <div>
                  <p className="text-lg font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-foreground-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a href="https://app.napkindeals.com/list-your-business" target="_blank" rel="noopener noreferrer">
                List Your Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div variants={slideInRight}>
          <DealBulletin className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto" />
        </motion.div>
      </motion.div>

      {/* Industries row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16"
      >
        <motion.p
          variants={staggerItem}
          className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
        >
          Active across 14 industries
        </motion.p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-7">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.Icon
            return (
              <motion.div
                key={industry.name}
                variants={staggerItem}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card px-3 py-3 text-center"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-[11px] font-medium leading-tight text-foreground-muted">
                  {industry.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}
