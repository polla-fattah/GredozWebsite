"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"

export function Features() {
  const t = useTranslations("Features")

  const items = [
    {
      num: "01",
      title: t("f1_title"),
      desc: t("f1_desc")
    },
    {
      num: "02",
      title: t("f2_title"),
      desc: t("f2_desc")
    },
    {
      num: "03",
      title: t("f3_title"),
      desc: t("f3_desc")
    }
  ]

  return (
    <section id="why-gredoz" className="relative py-14 md:py-20 bg-background overflow-hidden border-t border-border/40 scroll-mt-24">
      <TechGrid mask="faded" />
      <AmbientGlow position="bottom-right" className="opacity-45 md:opacity-40" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span className="text-foreground">{chunks}</span>
              })}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Clean, Simple 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card p-7 sm:p-8 flex flex-col justify-between gap-6 transition-colors hover:border-foreground/30 shadow-sm"
              >
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full w-fit">
                    {item.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
