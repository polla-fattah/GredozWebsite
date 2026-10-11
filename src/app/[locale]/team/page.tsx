"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { Team } from "@/components/sections/Team"

export default function TeamPage() {
  const t = useTranslations("TeamPage")
  const tCommon = useTranslations("AboutPage.cta")

  return (
    <div className="relative bg-background min-h-screen pb-24">
      {/* Background Architectural Grid & Depth (Constrained strictly to top screen hero area) */}
      <div className="absolute inset-x-0 top-0 h-[100vh] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="split" className="opacity-50 md:opacity-60" />
      </div>

      {/* Hero Section (Clean typography, no badges) */}
      <section className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.3] py-2">
              {t.rich("heroTitle", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h1>
          </motion.div>

          {/* Subtitle & CTA Buttons */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-8 items-end pt-2">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {t("heroSubtitle")}
            </p>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-end">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 text-sm h-12 sm:h-14 tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all shrink-0"
                )}
              >
                {t("startProject")}
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-8 text-sm h-12 sm:h-14 tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background transition-all shrink-0"
                )}
              >
                {t("exploreServices")}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Cards Grid (Directly under hero without duplicate second header or second gradient) */}
      <div className="mt-16 md:mt-24">
        <Team showHeader={false} withGradient={false} />
      </div>

      {/* Bottom CTA Banner (Clean card without ambient glow gradient) */}
      <section className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-border/60 bg-card p-10 md:p-16 text-center flex flex-col items-center gap-8 shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {tCommon("title")}
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed">
              {tCommon("subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-10 text-sm h-14 tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 active:scale-95"
              )}
            >
              {tCommon("button")}
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full px-10 text-sm h-14 tracking-wider font-semibold border-border/60 hover:bg-muted dark:hover:bg-muted dark:hover:text-foreground"
              )}
            >
              {t("exploreServices")}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
