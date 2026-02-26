"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { DEAL_BULLETIN_ITEMS, type DealItem } from "@/lib/constants"

function DealRow({ deal }: { deal: DealItem }) {
  const statusColor = {
    Active: "bg-success/10 text-success border-success/20",
    "Under LOI": "bg-warning/10 text-warning border-warning/20",
    New: "bg-accent/10 text-accent border-accent/20",
  }

  return (
    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-card p-3 dark:border-border/40">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-card-foreground">
          {deal.title}
        </p>
        <div className="mt-1 flex items-center gap-2 text-xs text-foreground-muted">
          <span>{deal.industry}</span>
          <span className="text-border">|</span>
          <span>{deal.revenue}</span>
        </div>
      </div>
      <Badge
        variant="outline"
        className={cn("ml-3 shrink-0 text-[10px] font-medium", statusColor[deal.status])}
      >
        {deal.status}
      </Badge>
    </div>
  )
}

export function DealBulletin({ className }: { className?: string }) {
  // Double the items for seamless loop
  const items = [...DEAL_BULLETIN_ITEMS, ...DEAL_BULLETIN_ITEMS]

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-lg backdrop-blur-sm dark:border-border/30",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 dark:border-border/30">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
            Deal Feed
          </span>
        </div>
      </div>

      {/* Scrolling deals */}
      <div className="relative h-[320px] overflow-hidden">
        <motion.div
          className="space-y-2 p-3"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            y: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {items.map((deal, i) => (
            <DealRow key={`${deal.title}-${i}`} deal={deal} />
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-card/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card/80 to-transparent" />
      </div>
    </div>
  )
}
