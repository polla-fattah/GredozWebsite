"use client"

import { Triangle, Hexagon, Circle, Square } from "lucide-react"

export function TrustedPartners() {
  const logos = [
    { name: "LOGOSIPUM", icon: <Triangle className="w-6 h-6 -rotate-90" /> },
    { name: "LOGOSIPUM", icon: <Hexagon className="w-6 h-6" /> },
    { name: "LOGOSIPUM", icon: <Circle className="w-6 h-6" /> },
    { name: "LOGOSIPUM", icon: <Square className="w-6 h-6" /> },
    { name: "LOGOSIPUM", icon: <Triangle className="w-6 h-6 rotate-90" /> },
  ]

  return (
    <section className="py-16 md:py-24 border-t border-border/40 overflow-hidden bg-background">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center py-4 gap-24 px-12">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-3xl font-bold tracking-tighter text-foreground/40 opacity-80">
              {logo.icon}
              {logo.name}
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 text-3xl font-bold tracking-tighter text-foreground/40 opacity-80">
              {logo.icon}
              {logo.name}
            </div>
          ))}
           {/* Duplicate for seamless looping 2 */}
           {logos.map((logo, i) => (
            <div key={`dup2-${i}`} className="flex items-center gap-3 text-3xl font-bold tracking-tighter text-foreground/40 opacity-80">
              {logo.icon}
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
