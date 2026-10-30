"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="relative overflow-hidden bg-background min-h-[100dvh] flex items-center pt-24 md:pt-32 pb-16">
      {/* Architectural Background Grid & Ambient Depth with smooth blend to rest of page */}
      <TechGrid mask="hero" />
      <AmbientGlow position="top" className="opacity-50 md:opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center gap-6 md:gap-8 mt-2 md:mt-4"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.25] text-center py-2"
          >
            {t("headline")}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light text-center"
          >
            {t("subheadline")}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2"
          >
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "rounded-full px-8 text-sm sm:text-base h-12 sm:h-13 w-full sm:w-auto tracking-wider font-semibold transition-colors bg-foreground text-background hover:bg-foreground/90 gap-2"
              )}
            >
              <span>{t("talkToUs")}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link 
              href="/services" 
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }), 
                "rounded-full px-8 text-sm sm:text-base h-12 sm:h-13 w-full sm:w-auto tracking-wider font-semibold border-border/60 hover:bg-muted dark:hover:bg-muted dark:hover:text-foreground transition-colors"
              )}
            >
              {t("seeServices")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
