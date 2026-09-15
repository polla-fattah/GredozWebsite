"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Services() {
  const t = useTranslations("Services")

  const services = [
    { title: t("s1_title"), desc: t("s1_desc") },
    { title: t("s2_title"), desc: t("s2_desc") },
    { title: t("s3_title"), desc: t("s3_desc") },
    { title: t("s4_title"), desc: t("s4_desc") },
  ]

  return (
    <section id="services" className="py-24 md:py-40 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 md:gap-24"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
          </motion.div>

          <div className="flex flex-col w-full">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-16 py-8 md:py-12 border-b border-border/40 hover:bg-muted/10 transition-colors"
              >
                <div className="text-sm font-medium text-muted-foreground/50 w-12 shrink-0">
                  0{index + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:w-1/3">
                  {service.title}
                </h3>
                <p className="text-base md:text-[17px] text-muted-foreground/80 leading-relaxed font-light flex-1">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
