"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { BackgroundPattern } from "@/components/ui/background-pattern"
import { ABCD_ITEMS, SERVICES_OUTCOMES, SECTION_IDS } from "@/lib/constants"
import { fadeInUp, slideInLeft, viewportConfig } from "@/lib/animations"

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id={SECTION_IDS.services}
      className="section-padding relative overflow-hidden bg-[oklch(0.175_0.035_250)] text-white"
    >
      <BackgroundPattern variant="dots" className="opacity-[0.04]" />

      {/* Gradient wash */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-1/2"
        style={{
          background: "radial-gradient(ellipse at top left, oklch(0.40 0.10 245 / 0.08), transparent 60%)",
        }}
        aria-hidden
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Services"
          title="The ABCD Model"
          description="Four integrated service lines that cover every angle of private market dealmaking."
          align="center"
          dark
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Stepper accordion */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative space-y-1">
              {ABCD_ITEMS.map((item, i) => {
                const isActive = i === activeIndex
                const Icon = item.Icon

                return (
                  <button
                    key={item.letter}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "group flex w-full items-start gap-4 rounded-xl p-4 text-left transition-all duration-300",
                      isActive
                        ? "bg-white/[0.07]"
                        : "hover:bg-white/[0.03]"
                    )}
                  >
                    {/* Letter badge */}
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-all duration-300",
                        isActive
                          ? "bg-accent text-white"
                          : "bg-white/10 text-white/60"
                      )}
                    >
                      {item.letter}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className={cn(
                          "h-4 w-4 transition-colors",
                          isActive ? "text-accent" : "text-white/40"
                        )} />
                        <h3 className={cn(
                          "font-semibold transition-colors",
                          isActive ? "text-white" : "text-white/70"
                        )}>
                          {item.title}
                        </h3>
                      </div>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.p
                            key={item.letter}
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-sm leading-relaxed text-blue-200/70"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Outcome panel */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                    {SERVICES_OUTCOMES[activeIndex].title}
                  </span>
                </div>

                <div className="space-y-3">
                  {SERVICES_OUTCOMES[activeIndex].items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                      <span className="text-sm text-white/80">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative bottom bar */}
                <div className="mt-6 flex gap-2">
                  {ABCD_ITEMS.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 flex-1 rounded-full transition-colors duration-300",
                        i === activeIndex ? "bg-accent" : "bg-white/10"
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
