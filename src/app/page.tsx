"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { NapkinDifference } from "@/components/sections/napkin-difference"
import { Services } from "@/components/sections/services"
import { SellerDealBulletin } from "@/components/sections/seller-deal-bulletin"
import { FAQ } from "@/components/sections/faq"
import { CallToAction } from "@/components/sections/call-to-action"
import { Section } from "@/components/ui/section"
import { INDUSTRIES } from "@/lib/constants"
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations"

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <NapkinDifference />
      <HowItWorks />
      <Services />
      <SellerDealBulletin />

      {/* Industries */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            variants={staggerItem}
            className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
          >
            Industries & Business Types
          </motion.p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.Icon
              return (
                <motion.div
                  key={industry.name}
                  variants={staggerItem}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-border bg-card p-4 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground-muted leading-tight">
                    {industry.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Section>

      <FAQ />
      <CallToAction />
    </main>
  )
}
