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
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Product Development</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Enterprise Systems</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">SaaS Dashboards</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Web Applications</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">AI Research Solutions</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("services")}</h4>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Software Development</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Web Development</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">App Development</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">UI/UX Design</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Product Strategy</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Maintenance</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">{t("resources")}</h4>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Engineering</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Resources</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">News</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Documentation</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Guides</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-white text-sm mb-2">Company</h4>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">About</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Leadership</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Careers</Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Investors</Link>
            </div>
          </div>

          <div className="w-full flex justify-center items-center overflow-hidden py-10 mb-8 border-t border-white/10">
            <h1 className="text-[12vw] font-bold text-transparent leading-none tracking-tighter" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              NEXSTUDIO
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50 w-full px-4">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">Terms & conditions</Link>
              <span>·</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <span>·</span>
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
            <p>{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
