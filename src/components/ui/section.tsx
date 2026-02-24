import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: "default" | "subtle" | "muted" | "dark"
  containerClassName?: string
}

export function Section({
  children,
  className,
  variant = "default",
  containerClassName,
  ...props
}: SectionProps) {
  const bgMap = {
    default: "bg-background",
    subtle: "bg-background-subtle",
    muted: "bg-background-muted",
    dark: "bg-[oklch(0.175_0.035_250)] text-white",
  }

  return (
    <section
      className={cn("section-padding relative overflow-hidden", bgMap[variant], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
