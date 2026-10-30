"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"

export function Cta() {
  const t = useTranslations("Cta")

  return (
    <section className="py-14 md:py-20 bg-background border-t border-border/40 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16"
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span className="text-foreground">{chunks}</span>
              })}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
          
          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }), 
              "rounded-full px-8 text-sm h-12 w-full sm:w-auto tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-colors shrink-0 gap-2 justify-center"
            )}
          >
            <span>{t("button")}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
