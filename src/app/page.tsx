import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { NapkinDifference } from "@/components/sections/napkin-difference"
import { WhoWeServe } from "@/components/sections/who-we-serve"
import { Products } from "@/components/sections/products"
import { FAQ } from "@/components/sections/faq"
import { CallToAction } from "@/components/sections/call-to-action"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <NapkinDifference />
      <WhoWeServe />
      <Products />
      <FAQ />
      <CallToAction />
      <Contact />
    </main>
  )
}
