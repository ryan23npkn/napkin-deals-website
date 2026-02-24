import { cn } from "@/lib/utils"

interface BackgroundPatternProps {
  variant?: "dots" | "grid"
  className?: string
}

export function BackgroundPattern({
  variant = "dots",
  className,
}: BackgroundPatternProps) {
  if (variant === "dots") {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 dot-pattern", className)}
        aria-hidden
      />
    )
  }

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]", className)}
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  )
}

export function GradientOrb({
  className,
  color = "primary",
}: {
  className?: string
  color?: "primary" | "accent"
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px]",
        color === "primary"
          ? "bg-primary/[0.07] dark:bg-primary/[0.12]"
          : "bg-accent/[0.07] dark:bg-accent/[0.12]",
        className
      )}
      aria-hidden
    />
  )
}
