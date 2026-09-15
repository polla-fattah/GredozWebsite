"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Triangle } from "lucide-react"

export function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white pt-24 pb-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-16">
            <Triangle className="w-5 h-5 fill-white" />
            <span className="font-bold text-lg tracking-tight">NexStudio</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("useCases")}</h4>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.productDevelopment")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.enterpriseSystems")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.saasDashboards")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.webApplications")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.aiResearchSolutions")}</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("services")}</h4>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.softwareDevelopment")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.webDevelopment")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.appDevelopment")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.uiuxDesign")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.productStrategy")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.maintenance")}</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("resources")}</h4>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.engineering")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.resources")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.news")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.documentation")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.guides")}</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("company")}</h4>
              <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">{t("about")}</Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">{t("contact")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.leadership")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.terms")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.careers")}</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t("links.investors")}</Link>
            </div>
          </div>

          <div className="w-full flex justify-center items-center overflow-hidden py-10 mb-8 border-t border-white/10">
            <h1 className="text-[12vw] font-bold text-transparent leading-none tracking-tighter" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              NEXSTUDIO
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50 w-full px-4">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">{t("links.termsAndConditions")}</Link>
            </div>
            <p>{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
