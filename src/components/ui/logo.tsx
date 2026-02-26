import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconOnly?: boolean
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {iconOnly ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="text-sm font-bold leading-none">N</span>
        </div>
      ) : (
        <span className="flex flex-col items-end leading-none">
          <span className="text-xl font-extrabold uppercase tracking-wide text-primary">Napkin</span>
          <span className="text-gradient text-[0.65rem] font-bold normal-case tracking-[0.25em]">Deals</span>
        </span>
      )}
    </div>
  )
}
