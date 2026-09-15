import { Hero } from "@/components/sections/Hero"
import { TrustedPartners } from "@/components/sections/TrustedPartners"
import { AboutStats } from "@/components/sections/AboutStats"
import { Features } from "@/components/sections/Features"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { Testimonials } from "@/components/sections/Testimonials"
import { Cta } from "@/components/sections/Cta"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedPartners />
      <AboutStats />
      <Features />
      <Services />
      <Projects />
      <Testimonials />
      <Cta />
    </div>
  )
}
