"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Globe, FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { REVENUE_RANGES, INDUSTRY_OPTIONS, type ValuationInput } from "@/lib/valuation"

interface WizardFormProps {
  onSubmit: (data: ValuationInput) => void
  isLoading: boolean
}

type InputMode = "url" | "description"

export function WizardForm({ onSubmit, isLoading }: WizardFormProps) {
  const [step, setStep] = useState(1)
  const [inputMode, setInputMode] = useState<InputMode>("url")
  const [formData, setFormData] = useState<Partial<ValuationInput>>({})

  const updateField = (field: keyof ValuationInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => setStep(2)
  const handleBack = () => setStep(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData as ValuationInput)
  }

  const canProceedStep1 =
    inputMode === "url"
      ? formData.websiteUrl && formData.websiteUrl.length > 3
      : formData.businessDescription && formData.businessDescription.length > 20

  const canSubmit = formData.name && formData.email

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Tell us about your business
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                Enter your website and we&apos;ll do the research, or describe
                your business manually.
              </p>
            </div>

            {/* Input mode toggle */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setInputMode("url")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  inputMode === "url"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground-muted hover:text-foreground"
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                Website URL
              </button>
              <button
                type="button"
                onClick={() => setInputMode("description")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  inputMode === "description"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground-muted hover:text-foreground"
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                Describe It
              </button>
            </div>

            {inputMode === "url" ? (
              <div>
                <Label htmlFor="websiteUrl">Website URL</Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  placeholder="https://yourbusiness.com"
                  value={formData.websiteUrl || ""}
                  onChange={(e) => updateField("websiteUrl", e.target.value)}
                  className="mt-1.5"
                  autoFocus
                />
                <p className="mt-1.5 text-xs text-foreground-subtle">
                  We&apos;ll analyze your site to understand your business
                </p>
              </div>
            ) : (
              <div>
                <Label htmlFor="businessDescription">
                  Business Description
                </Label>
                <Textarea
                  id="businessDescription"
                  placeholder="Describe your business: what you do, your market, approximate revenue, number of employees, how long you've been operating..."
                  rows={5}
                  value={formData.businessDescription || ""}
                  onChange={(e) =>
                    updateField("businessDescription", e.target.value)
                  }
                  className="mt-1.5"
                  autoFocus
                />
                <p className="mt-1.5 text-xs text-foreground-subtle">
                  The more detail, the better the valuation
                </p>
              </div>
            )}

            {/* Optional details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="industry">Industry</Label>
                <select
                  id="industry"
                  value={formData.industry || ""}
                  onChange={(e) => updateField("industry", e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select industry</option>
                  {INDUSTRY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="annualRevenue">Annual Revenue</Label>
                <select
                  id="annualRevenue"
                  value={formData.annualRevenue || ""}
                  onChange={(e) => updateField("annualRevenue", e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select range</option>
                  {REVENUE_RANGES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleNext}
              disabled={!canProceedStep1}
              className="w-full rounded-full"
              size="lg"
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Where should we send your valuation?
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                Your report will be ready in under 60 seconds.
              </p>
            </div>

            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={formData.name || ""}
                onChange={(e) => updateField("name", e.target.value)}
                required
                className="mt-1.5"
                autoFocus
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                required
                className="mt-1.5"
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="rounded-full"
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                type="submit"
                disabled={!canSubmit || isLoading}
                className="flex-1 rounded-full"
                size="lg"
              >
                {isLoading ? "Generating..." : "Get My Free Valuation"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>

            <p className="text-center text-xs text-foreground-subtle">
              No commitment required. Your data stays confidential.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
