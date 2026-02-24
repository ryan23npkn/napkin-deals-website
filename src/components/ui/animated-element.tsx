"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp, viewportConfig } from "@/lib/animations"

interface AnimatedElementProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "li"
}

export function AnimatedElement({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  as = "div",
}: AnimatedElementProps) {
  const Component = motion.create(as)

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}
