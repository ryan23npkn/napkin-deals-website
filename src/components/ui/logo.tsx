import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconOnly?: boolean
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="text-sm font-bold leading-none">N</span>
      </div>
      {!iconOnly && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Napkin Deals
        </span>
      )}
    </div>
  )
}
