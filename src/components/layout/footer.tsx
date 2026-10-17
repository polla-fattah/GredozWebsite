"use client"

import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
export function Footer() {
  const t = useTranslations("Footer")
  const tNav = useTranslations("Navbar")
  const tS = useTranslations("ServicesPage")
  const tP = useTranslations("Projects")
  const locale = useLocale()

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white pt-24 pb-8 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-16">
            <img 
              src="/logo/logo-full-white.png" 
              alt="Gredoz Logo" 
              className="h-8 w-auto" 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("company")}</h4>
              <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">{tNav("home")}</Link>
              <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">{t("about")}</Link>
              <Link href="/team" className="text-sm text-white/50 hover:text-white transition-colors">{t("team")}</Link>
              <Link href="/services" className="text-sm text-white/50 hover:text-white transition-colors">{tNav("services")}</Link>
              <Link href="/projects" className="text-sm text-white/50 hover:text-white transition-colors">{tNav("projects")}</Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">{t("contact")}</Link>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2">
              <h4 className="font-medium text-white text-sm mb-2">{tNav("services")}</h4>
              <Link href="/services#service-1" className="text-sm text-white/50 hover:text-white transition-colors">{tS("s1.title")}</Link>
              <Link href="/services#service-2" className="text-sm text-white/50 hover:text-white transition-colors">{tS("s2.title")}</Link>
              <Link href="/services#service-3" className="text-sm text-white/50 hover:text-white transition-colors">{tS("s3.title")}</Link>
              <Link href="/services#service-4" className="text-sm text-white/50 hover:text-white transition-colors">{tS("s4.title")}</Link>
              <Link href="/services#service-5" className="text-sm text-white/50 hover:text-white transition-colors">{tS("s5.title")}</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{tNav("projects")}</h4>
              <Link href="/projects/financial-management" className="text-sm text-white/50 hover:text-white transition-colors">{tP("p1_title")}</Link>
              <Link href="/projects/ecommerce-dashboard" className="text-sm text-white/50 hover:text-white transition-colors">{tP("p2_title")}</Link>
              <Link href="/projects/enterprise-logistics" className="text-sm text-white/50 hover:text-white transition-colors">{tP("p3_title")}</Link>
              <Link href="/projects/healthcare-platform" className="text-sm text-white/50 hover:text-white transition-colors">{tP("p4_title")}</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-medium text-white/50 w-full px-4 border-t border-white/10 pt-8">
            <p>{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
