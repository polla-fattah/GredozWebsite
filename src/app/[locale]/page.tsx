import { Hero } from "@/components/sections/Hero"
import { TrustedPartners } from "@/components/sections/TrustedPartners"
import { AboutStats } from "@/components/sections/AboutStats"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Projects } from "@/components/sections/Projects"
import { EngagementModels } from "@/components/sections/EngagementModels"
import { Features } from "@/components/sections/Features"
import { Faq } from "@/components/sections/Faq"
import { Testimonials } from "@/components/sections/Testimonials"
import { Cta } from "@/components/sections/Cta"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedPartners />
      <AboutStats />
      <Services />
      <Process />
      <Projects />
      <EngagementModels />
      <Features />
      <Faq />
      <Testimonials />
      <Cta />
    </div>
  )
}
