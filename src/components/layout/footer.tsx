"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export function Footer() {
  const t = useTranslations("Footer")

  const pages = [
    { label: t("home"), href: "/" },
    { label: t("services"), href: "/services" },
    { label: t("about"), href: "/about" },
    { label: t("team"), href: "/team" },
    { label: t("contact"), href: "/contact" },
  ]

  const solutions = [
    { label: t("software"), href: "/services#software" },
    { label: t("hardware"), href: "/services#hardware" },
    { label: t("data"), href: "/services#data" },
    { label: t("howWeWork"), href: "/services#how-we-work" },
  ]

  const sections = [
    { label: t("whyGredoz"), href: "/#why-gredoz" },
    { label: t("partnership"), href: "/#engagement" },
    { label: t("faq"), href: "/#faq" },
  ]

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white pt-14 md:pt-16 pb-10 md:pb-12 overflow-hidden border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-16">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Brand & Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link href="/" className="inline-block w-fit">
                <img 
                  src="/logo/dark-mode.png" 
                  alt="Gredoz Logo" 
                  className="h-14 sm:h-16 w-auto hover:opacity-80 transition-opacity" 
                />
              </Link>
              <p className="text-sm font-medium text-white/70 tracking-wide max-w-sm">
                {t("tagline")}
              </p>

              <div className="flex flex-col gap-2 pt-2 text-xs font-mono text-white/60">
                <a href="mailto:info@gredoz.krd" className="hover:text-white transition-colors w-fit">
                  info@gredoz.krd
                </a>
                <a href="tel:+9647874401600" className="hover:text-white transition-colors w-fit" dir="ltr">
                  +964 787 440 1600 · +964 750 770 0409
                </a>
                <span className="text-white/40">Erbil, Kurdistan Region, Iraq</span>
              </div>
            </div>

            {/* Column 2: Pages */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
                {t("pagesTitle")}
              </h4>
              <div className="flex flex-col gap-2.5">
                {pages.map((link, idx) => (
                  <Link 
                    key={idx}
                    href={link.href} 
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Solutions */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
                {t("solutionsTitle")}
              </h4>
              <div className="flex flex-col gap-2.5">
                {solutions.map((link, idx) => (
                  <Link 
                    key={idx}
                    href={link.href} 
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Sections */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
                {t("sectionsTitle")}
              </h4>
              <div className="flex flex-col gap-2.5">
                {sections.map((link, idx) => (
                  <Link 
                    key={idx}
                    href={link.href} 
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 pt-8 border-t border-white/10">
            <p>{t("copyright")}</p>
            <p className="font-mono text-[11px] text-white/30">
              Sunday–Thursday, 9:00–17:00 · Erbil, Iraq
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
