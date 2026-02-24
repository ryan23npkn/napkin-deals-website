"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SECTION_IDS } from "@/lib/constants"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const sectionIds = Object.values(SECTION_IDS)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

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
          <a href="#" className="relative z-10">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeId === link.href.slice(1)
                    ? "text-foreground bg-muted"
                    : "text-foreground-muted hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact">Schedule a Call</a>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <a href="#contact">
                View Deals
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
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col items-center justify-center gap-6 pt-24">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl font-medium text-foreground"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08 }}
              className="mt-4 flex flex-col gap-3"
            >
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Schedule a Call
                </a>
              </Button>
              <Button className="rounded-full" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  View Deals
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
