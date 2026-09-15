"use client"

import { Triangle, Hexagon, Circle, Square } from "lucide-react"
import { useLocale } from "next-intl"
import { cn } from "@/lib/utils"

export function TrustedPartners() {
  const locale = useLocale()
  const isRtl = locale === "ar" || locale === "ku"

  const logos = [
    { name: "LOGOSIPUM", icon: <Triangle className="w-6 h-6 -rotate-90" /> },
    { name: "LOGOSIPUM", icon: <Hexagon className="w-6 h-6" /> },
    { name: "LOGOSIPUM", icon: <Circle className="w-6 h-6" /> },
    { name: "LOGOSIPUM", icon: <Square className="w-6 h-6" /> },
    { name: "LOGOSIPUM", icon: <Triangle className="w-6 h-6 rotate-90" /> },
  ]

  const animationClass = isRtl ? "animate-marquee-rtl" : "animate-marquee"

  return (
    <section className="py-16 md:py-24 border-t border-border/40 overflow-hidden bg-background">
      <div className="relative flex overflow-hidden w-full select-none">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Track 1 */}
        <div className={cn("flex shrink-0 items-center gap-16 md:gap-24 py-4 px-8", animationClass)}>
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tighter text-foreground/40 opacity-80">
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Seamless loop duplicate) */}
        <div className={cn("flex shrink-0 items-center gap-16 md:gap-24 py-4 px-8", animationClass)} aria-hidden="true">
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 text-2xl sm:text-3xl font-bold tracking-tighter text-foreground/40 opacity-80">
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
