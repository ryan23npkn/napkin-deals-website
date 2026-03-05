"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calculator, Search } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations"

const TOOLS = [
  {
    Icon: Calculator,
    title: "AI Business Valuation",
    description:
      "Get an instant valuation based on your financials. Takes 60 seconds.",
    cta: "Get Your Valuation",
    href: "https://app.napkindeals.com/valuation",
  },
  {
    Icon: Search,
    title: "Find Potential Buyers",
    description:
      "See what types of acquirers are active in your industry and deal size range.",
    cta: "Find Buyers",
    href: "https://app.napkindeals.com/find-buyers",
  },
] as const

export function SellerTools() {
  return (
    <Section variant="subtle">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.p
          variants={staggerItem}
          className="text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
        >
          Not ready to list?
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="mt-4 text-center font-display text-[clamp(1.875rem,1.5rem+1.875vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-foreground"
        >
          Start with a free tool
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-foreground-muted"
        >
          Get a sense of what your business is worth or who might buy it — no
          commitment required.
        </motion.p>

        {/* Tool cards */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          {TOOLS.map((tool) => {
            const Icon = tool.Icon
            return (
              <motion.div
                key={tool.title}
                variants={staggerItem}
                className="gradient-border group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {tool.description}
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 -ml-2 text-sm font-medium text-primary"
                  asChild
                >
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tool.cta}
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </Section>
  )
}
