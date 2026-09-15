"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function AboutStats() {
  const t = useTranslations("About")

  return (
    <section id="about" className="py-24 md:py-40 bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Title on the left */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-sm">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
          </motion.div>

          {/* Description and Stats on the right */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-12 justify-start pt-2">
            <p className="text-base md:text-lg text-background/70 leading-relaxed font-light">
              {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-background/10 pt-10 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-medium tracking-tight">5K+</span>
                <span className="text-sm font-semibold text-background/50 tracking-wide uppercase">{t("stats.projects")}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-medium tracking-tight">$1M+</span>
                <span className="text-sm font-semibold text-background/50 tracking-wide uppercase">{t("stats.revenue")}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
