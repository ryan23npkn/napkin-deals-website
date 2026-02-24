"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  dark?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mb-4 text-sm font-medium uppercase tracking-widest",
            dark ? "text-blue-300" : "text-accent"
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className={cn(
          "font-display text-[clamp(1.875rem,1.5rem+1.875vw,2.75rem)] leading-[1.1] tracking-tight",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-blue-200/80" : "text-foreground-muted"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
