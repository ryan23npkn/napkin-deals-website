"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { INTEREST_OPTIONS, CONTACT_EMAIL, CONTACT_PHONE, SECTION_IDS } from "@/lib/constants"
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id={SECTION_IDS.contact} variant="subtle">
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk about your deal"
        description="Whether you're looking to buy, sell, or raise capital — we're here to help. Get in touch and we'll respond within 24 hours."
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid md:grid-cols-5">
            {/* Contact info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col justify-center bg-primary p-8 text-primary-foreground md:col-span-2"
            >
              <h3 className="font-display font-bold text-2xl">Get in Touch</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">
                Reach out directly or fill in the form. We respond to every
                inquiry within one business day.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 opacity-70" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 opacity-70" />
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="p-8 md:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                    <CheckCircle2 className="h-7 w-7 text-success" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        required
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest">I&apos;m interested in...</Label>
                    <select
                      id="interest"
                      required
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select an option</option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your situation..."
                      rows={4}
                      className="mt-1.5"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
