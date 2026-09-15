"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="relative overflow-hidden bg-background pt-36 md:pt-56 pb-16 md:pb-24">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center gap-10 md:gap-12"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-[88px] font-medium tracking-tight leading-tight md:leading-[1.1]"
          >
            {t("headline")}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            {t("subheadline")}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6 pt-8 md:pt-10"
          >
            <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 text-base h-14 w-full sm:w-auto tracking-widest font-semibold hover:scale-105 active:scale-95 transition-transform bg-foreground text-background hover:bg-foreground/90")}>
              {t("explore")}
            </Link>
            <Link href="#footer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-10 text-base h-14 w-full sm:w-auto tracking-widest font-semibold border-border/40 hover:bg-accent hover:text-accent-foreground")}>
              {t("contact")}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 md:mt-24 w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative w-full aspect-[16/8] md:aspect-[21/9]">
            <Image 
              src="/images/abstract_dark_fluid_1789384914818.jpg" 
              alt="Abstract Dark Fluid"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
