"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { Badge } from "@/components/ui/badge"
import { DealBulletin } from "@/components/deal-bulletin"
import { Products } from "@/components/sections/products"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  BULLETIN_STATS,
  AUDIENCES,
  INDUSTRIES,
  BUYER_PERSONAS,
  BUYER_FAQ_ITEMS,
  MANDATE_BENEFITS,
} from "@/lib/constants"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/lib/animations"

function openCalendly() {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    ;(window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/npkn-ryan/take-private-funnel-demo-clone",
    })
  }
}

export default function BuyersPage() {
  const buyerAudience = AUDIENCES[1] // Buyers & Acquirers
  const capitalAudience = AUDIENCES[2] // Capital Providers

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 sm:pt-32">
        <BackgroundPattern variant="dots" />
        <GradientOrb color="primary" className="left-[-10%] top-[10%] h-[500px] w-[500px]" />
        <GradientOrb color="accent" className="right-[-10%] top-[30%] h-[400px] w-[400px]" />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground-muted shadow-sm">
                  For Buyers
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-[clamp(2.5rem,1.75rem+3.75vw,4.25rem)] font-bold tracking-tight leading-[1.05]"
              >
                Private Market{" "}
                <span className="text-gradient">Deal Discovery</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-lg text-lg leading-relaxed text-foreground-muted"
              >
                A curated feed of private market opportunities from broker
                networks, marketplaces, and off-market sources. Find your next
                acquisition faster.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full text-base" asChild>
                  <a href="https://app.napkindeals.com/browse" target="_blank" rel="noopener noreferrer">
                    Browse Deals
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base"
                  onClick={openCalendly}
                >
                  Request a Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="mt-10 inline-flex items-center gap-6 rounded-xl border border-border-subtle bg-card/50 p-5 backdrop-blur-sm sm:gap-8 sm:p-6"
              >
                {BULLETIN_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                    {i > 0 && <div className="h-10 w-px bg-border" />}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-foreground-muted">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Deal Bulletin */}
            <div className="hidden lg:block">
              <div className="rounded-xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur-sm dark:border-border/30">
                <DealBulletin />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Products — reused from homepage (Deal Bulletin features + Take-Private) */}
      <Products />

      {/* Buy Side Mandates */}
      <Section id="mandates">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Copy */}
          <motion.div variants={slideInLeft}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Buy Side Mandates
            </span>

            <h2 className="mt-5 font-display text-[clamp(1.875rem,1.5rem+1.875vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-foreground">
              We source deals for you
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted">
              Hire our team to actively source acquisition targets using our
              platform, broker network, and off-market channels — tailored
              to your exact investment criteria.
            </p>

            <div className="mt-8 space-y-5">
              {MANDATE_BENEFITS.map((benefit) => {
                const Icon = benefit.Icon
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-foreground-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full text-base"
                onClick={openCalendly}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right: Mandate brief mockup */}
          <motion.div variants={slideInRight} className="hidden lg:block">
            <div className="rounded-xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur-sm dark:border-border/30">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-foreground">
                    Active Mandate
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Sourcing
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-background/50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Target Profile
                  </p>
                  <p className="mt-1.5 font-semibold text-foreground">
                    B2B SaaS — Vertical Software
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-background/50 p-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                      Revenue
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      $2M – $8M ARR
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 p-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                      EBITDA
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      $500K – $3M
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 p-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                      Geography
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      North America
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-background/50 p-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                      Deal Type
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Platform Acquisition
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background/50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Pipeline Status
                  </p>
                  <div className="mt-2.5 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground-muted">Sourced</span>
                      <span className="font-semibold text-foreground">47</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground-muted">Under Review</span>
                      <span className="font-semibold text-foreground">12</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground-muted">Shortlisted</span>
                      <span className="font-semibold text-accent">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Who Uses This */}
      <Section variant="subtle" id="who-uses-this">
        <SectionHeader
          eyebrow="Built For"
          title="Designed for every type of buyer"
          description="Whether you're a PE firm building a platform, a search fund on the hunt, or an individual buyer — our tools are built for how you work."
        />

        {/* Buyer Personas */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {BUYER_PERSONAS.map((persona) => {
            const Icon = persona.Icon
            return (
              <motion.div
                key={persona.title}
                variants={staggerItem}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{persona.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {persona.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Audience cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {[buyerAudience, capitalAudience].map((audience) => {
            const Icon = audience.Icon
            return (
              <motion.div
                key={audience.title}
                variants={staggerItem}
                className="gradient-border group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl leading-tight text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {audience.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {audience.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {audience.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="secondary"
                      className="text-[10px] font-medium"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <a
                  href={audience.href}
                  {...(audience.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {audience.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Industries */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16"
        >
          <motion.p
            variants={staggerItem}
            className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
          >
            Industries We Cover
          </motion.p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.Icon
              return (
                <motion.div
                  key={industry.name}
                  variants={staggerItem}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground-muted">
                    {industry.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Section>

      {/* Buyer FAQ */}
      <Section id="buyer-faq">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about finding deals on Napkin Deals."
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {BUYER_FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`buyer-faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Section>

      {/* Buyer CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.35 0.10 245), oklch(0.30 0.12 260))",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <Container className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-[clamp(1.875rem,1.5rem+1.875vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white"
            >
              Ready to find your next deal?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-blue-200/80"
            >
              Browse private market deal flow from broker networks, marketplaces,
              and off-market sources. Advanced search, saved criteria, and batch management.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://app.napkindeals.com/browse" target="_blank" rel="noopener noreferrer">
                  Browse Deals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-sm text-blue-200/50"
            >
              Selling instead?{" "}
              <Link
                href="/"
                className="text-blue-200/80 underline underline-offset-2 transition-colors hover:text-white"
              >
                Get a free valuation →
              </Link>
            </motion.p>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
