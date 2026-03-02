import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { NapkinDifference } from "@/components/sections/napkin-difference"
import { WhoWeServe } from "@/components/sections/who-we-serve"
import { SellerDealBulletin } from "@/components/sections/seller-deal-bulletin"
import { FAQ } from "@/components/sections/faq"
import { CallToAction } from "@/components/sections/call-to-action"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <NapkinDifference />
      <WhoWeServe />
      <SellerDealBulletin />
      <FAQ />
      <CallToAction />
    </main>
  )
}
