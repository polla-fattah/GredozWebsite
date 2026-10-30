import { Hero } from "@/components/sections/Hero"
import { AboutStats } from "@/components/sections/AboutStats"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Features } from "@/components/sections/Features"
import { EngagementModels } from "@/components/sections/EngagementModels"
import { Faq } from "@/components/sections/Faq"
import { Cta } from "@/components/sections/Cta"

import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.Home" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description") },
    twitter: { title: t("title"), description: t("description") },
  };
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutStats />
      <Services />
      <Process />
      <Features />
      <EngagementModels />
      <Faq />
      <Cta />
    </div>
  )
}
