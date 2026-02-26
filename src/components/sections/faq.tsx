"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { FAQ_ITEMS, SECTION_IDS } from "@/lib/constants"
import { fadeInUp, viewportConfig } from "@/lib/animations"

export function FAQ() {
  return (
    <Section id={SECTION_IDS.faq} variant="subtle">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about working with Napkin Deals."
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mx-auto mt-12 max-w-3xl"
      >
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
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
  )
}
