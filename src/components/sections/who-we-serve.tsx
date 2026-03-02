"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { AUDIENCES, INDUSTRIES, SECTION_IDS } from "@/lib/constants"
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations"

export function WhoWeServe() {
  const seller = AUDIENCES[0] // Business Owners
  const SellerIcon = seller.Icon

  return (
    <Section id={SECTION_IDS.whoWeServe} variant="subtle">
      <SectionHeader
        eyebrow="Who We Serve"
        title="Built for business owners"
        description="List your business with confidence. We handle the process so you can focus on running your company."
      />

      {/* Featured: Business Owners card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12"
      >
        <motion.div
          variants={staggerItem}
          className="gradient-border group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <SellerIcon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl leading-tight text-foreground">
                {seller.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {seller.subtitle}
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                {seller.description}
              </p>
              <a
                href={seller.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {seller.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {seller.features.map((feature) => (
                <Badge
                  key={feature}
                  variant="secondary"
                  className="text-xs font-medium px-3 py-1.5"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cross-links for other audiences */}
        <motion.div
          variants={staggerItem}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <Link
            href="/buyers"
            className="inline-flex items-center gap-1.5 font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            For Buyers & Acquirers
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <span className="text-border">|</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            Capital Partners
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Industries */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16"
      >
        <motion.p
          variants={staggerItem}
          className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
        >
          Industries We Serve
        </motion.p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.Icon
            return (
              <motion.div
                key={industry.name}
                variants={staggerItem}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground-muted">
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
