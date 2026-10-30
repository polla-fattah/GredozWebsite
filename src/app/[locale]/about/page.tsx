"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Target,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Terminal,
  ArrowRight,
  Code2,
  Server,
  Database
} from "lucide-react"
import {
  TechGrid,
  NodeTopologyGraph,
  AmbientGlow
} from "@/components/ui/background-patterns"
import { Team } from "@/components/sections/Team"

export default function AboutPage() {
  const t = useTranslations("AboutPage")

  const beliefs = [
    {
      icon: <Target className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("values.v1_title"),
      desc: t("values.v1_desc")
    },
    {
      icon: <Sparkles className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("values.v2_title"),
      desc: t("values.v2_desc")
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("values.v3_title"),
      desc: t("values.v3_desc")
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("values.v4_title"),
      desc: t("values.v4_desc")
    },
  ]

  return (
    <div className="relative bg-background min-h-screen pb-24">
      {/* Background Architectural Grid & Depth (Constrained to top screen area with smooth blend) */}
      <div className="absolute inset-x-0 top-0 h-[85vh] max-h-[720px] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top-right" className="opacity-50 md:opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 pt-28 md:pt-32 pb-10 md:pb-14 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.25] py-2">
              {t.rich("heroTitle", {
                italic: (chunks) => <span className="text-foreground">{chunks}</span>
              })}
            </h1>
          </motion.div>

          {/* Subtitle & CTA Buttons */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-8 items-end pt-2">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {t("heroSubtitle")}
            </p>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 text-sm h-12 tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all justify-center gap-2"
                )}
              >
                <span>{t("contactUs")}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-8 text-sm h-12 tracking-wider font-semibold border-border/60 hover:bg-muted dark:hover:bg-muted dark:hover:text-foreground transition-all justify-center"
                )}
              >
                {t("exploreServices")}
              </Link>
            </div>
          </motion.div>

          {/* Architecture Showcase Box */}
          <motion.div variants={fadeInUp} className="pt-8">
            <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-muted border border-border/40">
                    <Terminal className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium tracking-tight text-foreground">
                      {t("hub.title")}
                    </div>
                    <div className="text-xs text-muted-foreground">{t("hub.subtitle")}</div>
                  </div>
                </div>

                <div className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                  {t("hub.status")}
                </div>
              </div>

              {/* Three Capability Columns */}
              <div className="pt-8 grid sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-muted/30 border border-border/40 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="font-medium text-base">{t("hub.h1_title")}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{t("hub.h1_desc")}</p>
                </div>
                <div className="p-5 rounded-2xl bg-muted/30 border border-border/40 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground mb-1">
                    <Server className="w-4 h-4" />
                    <span className="font-medium text-base">{t("hub.h2_title")}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{t("hub.h2_desc")}</p>
                </div>
                <div className="p-5 rounded-2xl bg-muted/30 border border-border/40 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-foreground mb-1">
                    <Database className="w-4 h-4" />
                    <span className="font-medium text-base">{t("hub.h3_title")}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{t("hub.h3_desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Story & Heritage Section */}
      <section className="relative overflow-hidden py-12 md:py-16 z-10 border-t border-border/40">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left Column: Heading */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                {t.rich("story.title", {
                  italic: (chunks) => <span className="text-foreground">{chunks}</span>
                })}
              </h2>
            </motion.div>

            {/* Right Column: Story Copy */}
            <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col gap-5 text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="relative overflow-hidden py-12 md:py-16 z-10 border-t border-border/40">
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
                {t.rich("values.title", {
                  italic: (chunks) => <span className="text-foreground">{chunks}</span>
                })}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                {t("values.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beliefs.map((belief, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 flex flex-col justify-between h-full transition-colors hover:border-foreground/30 shadow-sm relative overflow-hidden group">
                    <div className="flex flex-col gap-5">
                      <div className="p-3 rounded-2xl bg-muted w-fit border border-border/40 group-hover:scale-105 transition-transform">
                        {belief.icon}
                      </div>
                      <h3 className="text-xl font-medium tracking-tight text-foreground">
                        {belief.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                        {belief.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Erbil Regional Presence Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="rounded-3xl border border-border/60 bg-foreground text-background p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
            <NodeTopologyGraph color="background" />
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                  {t.rich("location.title", {
                    italic: (chunks) => <span>{chunks}</span>
                  })}
                </h2>
                <p className="text-base md:text-lg text-background/80 font-light leading-relaxed max-w-2xl">
                  {t("location.desc")}
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-4 rounded-2xl bg-background/10 border border-background/10 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-wider text-background/60 font-medium">{t("location.locationLabel")}</div>
                  <div className="text-sm font-medium text-background mt-0.5">{t("location.city")}</div>
                </div>

                <div className="p-4 rounded-2xl bg-background/10 border border-background/10 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-wider text-background/60 font-medium">{t("location.timezoneLabel")}</div>
                  <div className="text-sm font-medium text-background mt-0.5">{t("location.timeZone")}</div>
                </div>

                <div className="p-4 rounded-2xl bg-background/10 border border-background/10 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-wider text-background/60 font-medium">{t("location.communicationLabel")}</div>
                  <div className="text-sm font-medium text-background mt-0.5">{t("location.languages")}</div>
                </div>

                <div className="p-4 rounded-2xl bg-background/10 border border-background/10 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-wider text-background/60 font-medium">{t("location.deliveryLabel")}</div>
                  <div className="text-sm font-medium text-background mt-0.5">{t("location.delivery")}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Embedded Team Section (Clean blank background) */}
      <div>
        <Team withGradient={false} />
      </div>

      {/* Bottom CTA Banner */}
      <section className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-border/60 bg-card p-10 md:p-16 text-center flex flex-col items-center gap-8 shadow-sm relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {t("cta.title")}
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-10 text-sm h-14 tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 active:scale-95"
                )}
              >
                {t("cta.button")}
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
          </div>
        </motion.div>
      </section>
    </div>
  )
}
