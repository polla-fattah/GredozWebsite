"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { TechGrid , AmbientGlow } from "@/components/ui/background-patterns"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function Services() {
  const t = useTranslations("Services")

  const services = [
    { title: t("s1_title"), desc: t("s1_desc") },
    { title: t("s2_title"), desc: t("s2_desc") },
    { title: t("s3_title"), desc: t("s3_desc") },
    { title: t("s4_title"), desc: t("s4_desc") },
  ]

  return (
    <section id="services" className="relative py-24 md:py-40 bg-background overflow-hidden">
      <TechGrid mask="faded" />
      <AmbientGlow position="top-right" className="opacity-45 md:opacity-40" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
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

          <div className="flex flex-col gap-4 w-full">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-6 md:p-10 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl hover:border-foreground/30 hover:shadow-sm transition-all"
              >
                <div className="text-sm font-semibold text-foreground/50 bg-muted px-4 py-2 rounded-full w-fit shrink-0">
                  0{index + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:w-1/3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-light flex-1">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="flex justify-start">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full px-8 text-xs sm:text-sm h-12 tracking-widest font-semibold border-border/60 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors gap-2"
              )}
            >
              <span>{t("explore")}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
