"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { AUDIENCES, INDUSTRIES, SECTION_IDS } from "@/lib/constants"
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations"

export function WhoWeServe() {
  return (
    <Section id={SECTION_IDS.whoWeServe} variant="subtle">
      <SectionHeader
        eyebrow="Who We Serve"
        title="Built for all sides of the deal"
        description="Whether you're selling a business, looking to acquire, or deploying capital — our platform connects you with the right counterparty."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {AUDIENCES.map((audience) => {
          const Icon = audience.Icon

          return (
            <motion.div
              key={audience.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="gradient-border group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl leading-tight text-foreground">
                {audience.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {audience.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {audience.description}
              </p>

              {/* Features */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {audience.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="secondary"
                    className="text-[10px] font-medium"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <a
                href={audience.href}
                {...(audience.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {audience.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          )
        })}
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
