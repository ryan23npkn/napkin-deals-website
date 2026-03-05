"use client"

import { motion } from "framer-motion"
import { ClipboardList, Users, HandCoins } from "lucide-react"
import { Section } from "@/components/ui/section"
import {
  staggerContainer,
  staggerItem,
  drawLine,
  viewportConfig,
} from "@/lib/animations"

const STEPS = [
  {
    number: "1",
    Icon: ClipboardList,
    title: "List for Free",
    description:
      "Create your listing in under 5 minutes. Basic info, financials, and what you're looking for. No paperwork.",
  },
  {
    number: "2",
    Icon: Users,
    title: "We Find Buyers",
    description:
      "Your listing reaches qualified acquirers across our broker network, marketplaces, and off-market channels.",
  },
  {
    number: "3",
    Icon: HandCoins,
    title: "Get Offers",
    description:
      "Review offers on your terms. We handle negotiations, due diligence support, and closing.",
  },
] as const

export function HowItWorks() {
  return (
    <Section>
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
          How It Works
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="mt-4 text-center font-display text-[clamp(1.875rem,1.5rem+1.875vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-foreground"
        >
          Three steps to a qualified offer
        </motion.h2>

        {/* Steps */}
        <div className="relative mt-16">
          {/* SVG connecting line — desktop only */}
          <motion.svg
            className="pointer-events-none absolute top-14 left-0 hidden w-full lg:block"
            viewBox="0 0 1200 2"
            fill="none"
            preserveAspectRatio="none"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.line
              x1="200"
              y1="1"
              x2="1000"
              y2="1"
              stroke="oklch(0.65 0.15 250)"
              strokeWidth="2"
              strokeDasharray="6 6"
              variants={drawLine}
              style={{ pathLength: 0 }}
            />
          </motion.svg>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-12">
            {STEPS.map((step) => {
              const Icon = step.Icon
              return (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
                    {step.number}
                  </div>

                  {/* Icon + content */}
                  <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-lg bg-background-subtle">
                    <Icon className="h-5 w-5 text-foreground-muted" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
