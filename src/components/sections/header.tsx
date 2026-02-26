"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { MEGA_MENU } from "@/lib/constants"

function useNativeAnchor(href: string) {
  return href.startsWith("http") || href.includes("#")
}

function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  if (useNativeAnchor(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const handleMouseEnter = useCallback((index: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setActiveMenu(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled && "glass border-b border-border/10 shadow-sm"
        )}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={handleMouseLeave}
          >
            {MEGA_MENU.map((group, i) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === i ? null : i)
                  }
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeMenu === i
                      ? "text-foreground bg-muted"
                      : "text-foreground-muted hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {group.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeMenu === i && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown panel — positioned relative to this trigger */}
                <AnimatePresence>
                  {activeMenu === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                      style={{ minWidth: "320px" }}
                      onMouseEnter={() => {
                        if (closeTimeout.current) {
                          clearTimeout(closeTimeout.current)
                          closeTimeout.current = null
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
                        {group.items.map((item) => {
                          const Icon = item.Icon
                          return (
                            <NavLink
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/60"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {item.label}
                                </p>
                                <p className="mt-0.5 text-xs text-foreground-muted">
                                  {item.description}
                                </p>
                              </div>
                            </NavLink>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/valuation">Free Valuation</Link>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <a href="https://app.napkindeals.com/login">
                Browse Deals
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground-muted hover:bg-muted"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 overflow-y-auto bg-background/95 backdrop-blur-xl pt-20 md:hidden"
        >
          <nav className="px-6 pb-8">
            {MEGA_MENU.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-border/40"
              >
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === i ? null : i)
                  }
                  className="flex w-full items-center justify-between py-4 text-lg font-medium text-foreground"
                >
                  {group.label}
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 text-foreground-muted transition-transform duration-200",
                      mobileExpanded === i && "rotate-90"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {mobileExpanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-4 pl-2">
                        {group.items.map((item) => {
                          const Icon = item.Icon
                          return (
                            <NavLink
                              key={item.label}
                              href={item.href}
                              onClick={closeMobile}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/60"
                            >
                              <Icon className="h-4 w-4 text-primary" />
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {item.label}
                                </p>
                                <p className="text-xs text-foreground-muted">
                                  {item.description}
                                </p>
                              </div>
                            </NavLink>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: MEGA_MENU.length * 0.08 }}
              className="mt-6 flex flex-col gap-3"
            >
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/valuation" onClick={closeMobile}>
                  Free Valuation
                </Link>
              </Button>
              <Button className="rounded-full" asChild>
                <a
                  href="https://app.napkindeals.com/login"
                  onClick={closeMobile}
                >
                  Browse Deals
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </>
  )
}
