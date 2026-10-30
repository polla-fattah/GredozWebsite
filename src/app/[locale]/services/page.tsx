"use client"

import { useTranslations, useMessages } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { 
  Code2, 
  Server, 
  Database, 
  ArrowRight, 
  Headphones, 
  Calendar, 
  Cpu, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react"

export default function ServicesPage() {
  const t = useTranslations("ServicesPage")
  const messages = useMessages() as any

  const metrics = [
    { value: t("metrics.m1_val"), label: t("metrics.m1_label") },
    { value: t("metrics.m2_val"), label: t("metrics.m2_label") },
    { value: t("metrics.m3_val"), label: t("metrics.m3_label") },
    { value: t("metrics.m4_val"), label: t("metrics.m4_label") },
  ]

  const softwareItems: Array<{ title: string; desc: string }> = 
    messages?.ServicesPage?.software?.items || []

  const hardwareItems: Array<{ title: string; desc: string }> = 
    messages?.ServicesPage?.hardware?.items || []

  const dataItems: Array<{ title: string; desc: string }> = 
    messages?.ServicesPage?.data?.items || []

  const howWeWorkSteps: Array<{ num: string; title: string; desc: string }> = 
    messages?.ServicesPage?.howWeWork?.steps || []

  const stepIcons = [
    <Headphones key="1" className="w-5 h-5 text-foreground stroke-[1.5]" />,
    <Calendar key="2" className="w-5 h-5 text-foreground stroke-[1.5]" />,
    <Cpu key="3" className="w-5 h-5 text-foreground stroke-[1.5]" />,
    <ShieldCheck key="4" className="w-5 h-5 text-foreground stroke-[1.5]" />
  ]

  return (
    <div className="relative bg-background min-h-screen">
      {/* Background Architectural Grid & Depth (Constrained to top screen area with smooth blend to rest of page) */}
      <div className="absolute inset-x-0 top-0 h-[85vh] max-h-[720px] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top-left" className="opacity-50 md:opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* 1. Hero & Metrics Section */}
      <section className="container max-w-7xl mx-auto px-4 pt-28 md:pt-32 pb-10 md:pb-14 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 md:gap-8"
        >
          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.25] py-2">
              {t.rich("title", {
                italic: (chunks) => <span className="text-foreground">{chunks}</span>
              })}
            </h1>
          </motion.div>

          {/* Subtitle & Action Button */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-6 md:gap-8 items-end">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {t("subtitle")}
            </p>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 justify-end">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 text-sm h-12 w-full sm:w-auto tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all justify-center gap-2"
                )}
              >
                <span>{t("startProject")}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>

          {/* Architectural Metrics Strip */}
          <motion.div variants={fadeInUp} className="pt-4 md:pt-6">
            <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden group">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                      {metric.value}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Core Solutions Offerings Section */}
      <section id="offerings" className="relative overflow-hidden py-12 md:py-16 border-t border-border/40 scroll-mt-24 z-10">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                {t.rich("offeringsTitle", {
                  italic: (chunks) => <span className="text-foreground">{chunks}</span>
                })}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                {t("offeringsSubtitle")}
              </p>
            </motion.div>

            {/* Solutions Stack */}
            <div className="flex flex-col gap-8 md:gap-10">
              
              {/* Pillar 01: Software Solutions */}
              <motion.div
                id="software"
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-12 relative overflow-hidden group shadow-sm transition-colors hover:border-foreground/30 scroll-mt-24"
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-muted border border-border/40">
                        <Code2 className="w-7 h-7 text-foreground stroke-[1.5]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
                          {t("software.tag")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                          {t("software.title")}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground bg-muted px-4 py-2 rounded-full w-fit">
                      {t("software.num")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
                    {t("software.desc")}
                  </p>

                  {/* Items Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {softwareItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-muted/30 border border-border/40 p-5 sm:p-6 flex flex-col gap-2 hover:bg-muted/50 hover:border-foreground/20 transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-foreground shrink-0" />
                          <h4 className="text-base font-semibold text-foreground tracking-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                    <Link
                      href="/contact?service=software"
                      className={cn(
                        buttonVariants({ size: "default", variant: "outline" }),
                        "rounded-full px-6 text-xs tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors gap-2"
                      )}
                    >
                      <span>{t("discussSolution")}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 02: Hardware Solutions */}
              <motion.div
                id="hardware"
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-12 relative overflow-hidden group shadow-sm transition-colors hover:border-foreground/30 scroll-mt-24"
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-muted border border-border/40">
                        <Server className="w-7 h-7 text-foreground stroke-[1.5]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
                          {t("hardware.tag")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                          {t("hardware.title")}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground bg-muted px-4 py-2 rounded-full w-fit">
                      {t("hardware.num")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
                    {t("hardware.desc")}
                  </p>

                  {/* Items Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hardwareItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "rounded-2xl bg-muted/30 border border-border/40 p-5 sm:p-6 flex flex-col gap-2 hover:bg-muted/50 hover:border-foreground/20 transition-all",
                          idx === 0 && "sm:col-span-2 lg:col-span-2"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-foreground shrink-0" />
                          <h4 className="text-base font-semibold text-foreground tracking-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                    <Link
                      href="/contact?service=hardware"
                      className={cn(
                        buttonVariants({ size: "default", variant: "outline" }),
                        "rounded-full px-6 text-xs tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors gap-2"
                      )}
                    >
                      <span>{t("discussSolution")}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 03: Data Solutions */}
              <motion.div
                id="data"
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-12 relative overflow-hidden group shadow-sm transition-colors hover:border-foreground/30 scroll-mt-24"
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-muted border border-border/40">
                        <Database className="w-7 h-7 text-foreground stroke-[1.5]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
                          {t("data.tag")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                          {t("data.title")}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground bg-muted px-4 py-2 rounded-full w-fit">
                      {t("data.num")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
                    {t("data.desc")}
                  </p>

                  {/* Items Grid */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    {dataItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-muted/30 border border-border/40 p-5 sm:p-6 flex flex-col gap-2 hover:bg-muted/50 hover:border-foreground/20 transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-foreground shrink-0" />
                          <h4 className="text-base font-semibold text-foreground tracking-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                    <Link
                      href="/contact?service=data"
                      className={cn(
                        buttonVariants({ size: "default", variant: "outline" }),
                        "rounded-full px-6 text-xs tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors gap-2"
                      )}
                    >
                      <span>{t("discussSolution")}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. How We Work Section */}
      <section id="how-we-work" className="relative overflow-hidden py-12 md:py-16 z-10 border-t border-border/40 scroll-mt-24">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                {t.rich("howWeWork.title", {
                  italic: (chunks) => <span className="text-foreground">{chunks}</span>
                })}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                {t("howWeWork.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howWeWorkSteps.map((step, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 flex flex-col justify-between h-full transition-colors hover:border-foreground/30 shadow-sm relative overflow-hidden group">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-muted w-fit border border-border/40">
                          {stepIcons[i] || <Cpu className="w-5 h-5 text-foreground stroke-[1.5]" />}
                        </div>
                        <span className="font-mono text-xs font-semibold text-muted-foreground tracking-wider">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <section className="relative overflow-hidden py-12 md:py-16 z-10 border-t border-border/40">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-border/60 bg-card p-8 sm:p-12 md:p-14 text-center flex flex-col items-center gap-6 md:gap-8 shadow-sm relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                {t("cta.title")}
              </h2>

              <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed">
                {t("cta.subtitle")}
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-10 text-sm h-13 tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all justify-center w-full sm:w-auto"
                  )}
                >
                  {t("cta.button")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
