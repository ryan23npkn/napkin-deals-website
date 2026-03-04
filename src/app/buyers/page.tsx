"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { BackgroundPattern, GradientOrb } from "@/components/ui/background-pattern"
import { DealBulletinSection, TakePrivateSection } from "@/components/sections/products"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  BUYER_FAQ_ITEMS,
  MANDATE_BENEFITS,
  INDUSTRIES,
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
  const [poolSubmitted, setPoolSubmitted] = useState(false)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 sm:pt-32">
        <BackgroundPattern variant="dots" />
        <GradientOrb color="primary" className="left-[-10%] top-[10%] h-[500px] w-[500px]" />
        <GradientOrb color="accent" className="right-[-10%] top-[30%] h-[400px] w-[400px]" />

        <Container className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
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
              Find acquisition targets{" "}
              <span className="text-gradient">before anyone else</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
            >
              Aggregated private market deal flow from brokers,
              marketplaces, and off-market sources.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="rounded-full text-base" asChild>
                <a href="https://app.napkindeals.com/register" target="_blank" rel="noopener noreferrer">
                  Register Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base" asChild>
                <a href="https://app.napkindeals.com/browse" target="_blank" rel="noopener noreferrer">
                  Browse Deals
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Deal Bulletin */}
      <DealBulletinSection />

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

            {/* Buyer Pool Sign-Up */}
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">or</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {poolSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">You&apos;re on our radar</p>
                    <p className="text-xs text-foreground-muted">If a mandate comes through that fits your profile, we&apos;ll reach out.</p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setPoolSubmitted(true)
                  }}
                  className="mt-4"
                >
                  <p className="mb-3 text-sm text-foreground-muted">
                    Not ready for a mandate? Drop your info and we&apos;ll
                    reach out if a deal comes through that fits your profile.
                    No criteria needed — we review your site.
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Email"
                      required
                      className="sm:flex-1"
                    />
                    <Input
                      type="url"
                      placeholder="Company URL"
                      required
                      className="sm:flex-1"
                    />
                    <Button type="submit" size="sm" className="rounded-full whitespace-nowrap">
                      Get on Our Radar
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </form>
              )}
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

      {/* Industries */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            variants={staggerItem}
            className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle"
          >
            Industries & Business Types
          </motion.p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.Icon
              return (
                <motion.div
                  key={industry.name}
                  variants={staggerItem}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-border bg-card p-4 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground-muted leading-tight">
                    {industry.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Section>

      {/* Take-Private Signal Intelligence */}
      <TakePrivateSection />

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
              Start sourcing in under a minute
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-blue-200/80"
            >
              Free account. No credit card. Instant access to every deal on the platform.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://app.napkindeals.com/register" target="_blank" rel="noopener noreferrer">
                  Register Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full !border-white/30 !bg-transparent !text-white !shadow-none hover:!bg-white/10"
                asChild
              >
                <a href="https://app.napkindeals.com/browse" target="_blank" rel="noopener noreferrer">
                  Browse Deals
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
