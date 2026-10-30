"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Code2, Server, Database } from "lucide-react"

export function Services() {
  const t = useTranslations("Services")

  const services = [
    {
      num: "01",
      title: t("s1_title"),
      desc: t("s1_desc"),
      href: "/services#software",
      icon: <Code2 className="w-6 h-6 text-foreground stroke-[1.5]" />
    },
    {
      num: "02",
      title: t("s2_title"),
      desc: t("s2_desc"),
      href: "/services#hardware",
      icon: <Server className="w-6 h-6 text-foreground stroke-[1.5]" />
    },
    {
      num: "03",
      title: t("s3_title"),
      desc: t("s3_desc"),
      href: "/services#data",
      icon: <Database className="w-6 h-6 text-foreground stroke-[1.5]" />
    },
  ]

  return (
    <section id="services" className="relative py-14 md:py-20 bg-background overflow-hidden border-t border-border/40">
      <TechGrid mask="faded" />
      <AmbientGlow position="top-right" className="opacity-45 md:opacity-40" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                {t.rich("title", {
                  italic: (chunks) => <span className="text-foreground">{chunks}</span>
                })}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                {t("subtitle")}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="shrink-0">
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full px-7 text-xs sm:text-sm h-12 w-full sm:w-auto tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors gap-2 justify-center"
                )}
              >
                <span>{t("explore")}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </motion.div>
          </div>

          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col justify-between p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-xl hover:border-foreground/30 hover:bg-card/80 transition-all shadow-sm h-full block"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-muted border border-border/40">
                        {service.icon}
                      </div>
                      <span className="text-xs font-mono font-semibold text-muted-foreground tracking-wider bg-muted px-3 py-1.5 rounded-full">
                        {service.num}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-8 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-foreground group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    <span>{t("viewDetails")}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
