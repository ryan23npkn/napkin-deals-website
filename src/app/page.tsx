import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Services } from "@/components/sections/services"
import { SellerDealBulletin } from "@/components/sections/seller-deal-bulletin"
import { FAQ } from "@/components/sections/faq"
import { CallToAction } from "@/components/sections/call-to-action"

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <HowItWorks />
      <Services />
      <SellerDealBulletin />
      <FAQ />
      <CallToAction />
    </main>
  )
}
