import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Products } from "@/components/sections/products"
import { ProcessFlow } from "@/components/sections/process-flow"
import { BeforeAfter } from "@/components/sections/before-after"
import { WhoWeServe } from "@/components/sections/who-we-serve"
import { WhyNapkin } from "@/components/sections/why-napkin"
import { CallToAction } from "@/components/sections/call-to-action"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <ProcessFlow />
        <BeforeAfter />
        <WhoWeServe />
        <WhyNapkin />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
