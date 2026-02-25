"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { Globe, Target, Users, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const EASE = [0.16, 1, 0.3, 1] as const

const pipelineStagger: import("framer-motion").Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.6 } },
}

const stageVariant: import("framer-motion").Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

const connectorVariant: import("framer-motion").Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: EASE },
  },
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const value = { val: 0 }
    const controls = animate(value, { val: target }, {
      duration: 1.8,
      delay: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(value.val).toLocaleString() + suffix
        }
      },
    })
    return () => controls.stop()
  }, [target, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const STAGES = [
  {
    icon: Globe,
    label: "Sourcing",
    description: "50+ deal sources",
    counter: 500,
    counterSuffix: "+",
    counterLabel: "Businesses",
    color: "text-primary",
    bg: "bg-primary/10",
    ringColor: "ring-primary/20",
  },
  {
    icon: Target,
    label: "Matching",
    description: "AI-powered",
    counter: 120,
    counterSuffix: "+",
    counterLabel: "NDAs Signed",
    color: "text-accent",
    bg: "bg-accent/10",
    ringColor: "ring-accent/20",
  },
  {
    icon: Users,
    label: "Engagement",
    description: "Direct access",
    counter: 20,
    counterSuffix: "+",
    counterLabel: "Meetings Set",
    color: "text-success",
    bg: "bg-success/10",
    ringColor: "ring-success/20",
  },
  {
    icon: Briefcase,
    label: "Close",
    description: "Deal done",
    counter: 8,
    counterSuffix: "",
    counterLabel: "Qualified Offers",
    color: "text-success",
    bg: "bg-success/10",
    ringColor: "ring-success/20",
  },
]

export function DealPipeline({ className }: { className?: string }) {
  return (
    <motion.div
      variants={pipelineStagger}
      initial="hidden"
      animate="visible"
      className={cn("relative", className)}
    >
      <div className="space-y-0">
        {STAGES.map((stage, i) => (
          <div key={stage.label}>
            {/* Stage card */}
            <motion.div
              variants={stageVariant}
              className="flex items-center gap-4"
            >
              {/* Icon */}
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1",
                  stage.bg,
                  stage.color,
                  stage.ringColor
                )}
              >
                <stage.icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold text-foreground">{stage.label}</h4>
                  <span className="text-xs text-foreground-subtle">{stage.description}</span>
                </div>
                {/* Progress bar */}
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    className={cn(
                      "h-full rounded-full",
                      i === 0
                        ? "bg-primary"
                        : i === 1
                          ? "bg-accent"
                          : "bg-success"
                    )}
                    initial={{ width: "0%" }}
                    animate={{ width: `${100 - i * 22}%` }}
                    transition={{ duration: 1.2, delay: 0.8 + i * 0.3, ease: EASE }}
                  />
                </div>
              </div>

              {/* Counter */}
              <div className="shrink-0 text-right">
                <p className={cn("text-lg font-bold tabular-nums", stage.color)}>
                  <AnimatedCounter target={stage.counter} suffix={stage.counterSuffix} />
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-foreground-subtle">
                  {stage.counterLabel}
                </p>
              </div>
            </motion.div>

            {/* Connector line between stages */}
            {i < STAGES.length - 1 && (
              <motion.div
                variants={connectorVariant}
                className="ml-5 flex h-6 items-center"
                style={{ originY: 0 }}
              >
                <div className="h-full w-px bg-border" />
                <motion.div
                  className="absolute ml-[3px] h-1.5 w-1.5 rounded-full bg-primary/40"
                  animate={{ y: [0, 16], opacity: [0.8, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: 1.5 + i * 0.4,
                    ease: "linear",
                  }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom summary */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.2, ease: EASE }}
        className="mt-4 rounded-lg border border-success/20 bg-success/[0.04] px-4 py-2.5"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-success">Pipeline Active</span>
          <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
            Live
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
