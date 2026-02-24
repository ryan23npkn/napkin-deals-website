"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { DIFFERENTIATORS, TRUST_INDUSTRIES, SECTION_IDS } from "@/lib/constants"
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations"

export function WhyNapkin() {
  return (
    <Section id={SECTION_IDS.whyNapkin}>
      <SectionHeader
        eyebrow="Why Napkin"
        title="Dealflow exists everywhere. We make it actionable."
        description="Not a marketplace. Not a traditional broker. A modern dealflow platform built for speed, transparency, and results."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-4 md:grid-cols-2"
      >
        {DIFFERENTIATORS.map((item) => {
          const Icon = item.Icon
          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -2 }}
              className={cn(
                "group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md",
                item.featured && "md:col-span-2"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                  {item.metric && (
                    <Badge variant="secondary" className="mt-3 text-xs">
                      {item.metric}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Trust industries */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 text-center"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground-subtle">
          Trusted across industries
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {TRUST_INDUSTRIES.map((industry) => (
            <Badge
              key={industry}
              variant="outline"
              className="text-xs font-normal text-foreground-muted"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
