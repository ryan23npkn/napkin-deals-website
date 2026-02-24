"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { AUDIENCES, SECTION_IDS } from "@/lib/constants"
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
              <h3 className="font-display text-xl text-foreground">
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
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {audience.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
