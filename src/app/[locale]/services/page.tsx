"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  TechGrid, 
  AmbientGlow,
  GridLines
} from "@/components/ui/background-patterns"
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  Server, 
  RefreshCw, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Code2,
  FileText,
  Lock,
  Layers
} from "lucide-react"

export default function ServicesPage() {
  const t = useTranslations("ServicesPage")

  const metrics = [
    { value: t("metrics.m1_val"), label: t("metrics.m1_label") },
    { value: t("metrics.m2_val"), label: t("metrics.m2_label") },
    { value: t("metrics.m3_val"), label: t("metrics.m3_label") },
    { value: t("metrics.m4_val"), label: t("metrics.m4_label") },
  ]

  const offerings = [
    {
      num: t("s1.num"),
      tag: t("s1.tag"),
      title: t("s1.title"),
      desc: t("s1.desc"),
      deliverablesTitle: t("s1.deliverablesTitle"),
      deliverables: [
        t("s1.d1"),
        t("s1.d2"),
        t("s1.d3"),
        t("s1.d4"),
      ],
      outcomesTitle: t("s1.outcomesTitle"),
      outcome: t("s1.outcome"),
      projectLink: "/projects/financial-management",
      projectTitle: t("caseStudyP1"),
      icon: <Cpu className="w-7 h-7 text-foreground stroke-[1.5]" />
    },
    {
      num: t("s2.num"),
      tag: t("s2.tag"),
      title: t("s2.title"),
      desc: t("s2.desc"),
      deliverablesTitle: t("s2.deliverablesTitle"),
      deliverables: [
        t("s2.d1"),
        t("s2.d2"),
        t("s2.d3"),
        t("s2.d4"),
      ],
      outcomesTitle: t("s2.outcomesTitle"),
      outcome: t("s2.outcome"),
      projectLink: "/projects/ecommerce-dashboard",
      projectTitle: t("caseStudyP2"),
      icon: <Globe className="w-7 h-7 text-foreground stroke-[1.5]" />
    },
    {
      num: t("s3.num"),
      tag: t("s3.tag"),
      title: t("s3.title"),
      desc: t("s3.desc"),
      deliverablesTitle: t("s3.deliverablesTitle"),
      deliverables: [
        t("s3.d1"),
        t("s3.d2"),
        t("s3.d3"),
        t("s3.d4"),
      ],
      outcomesTitle: t("s3.outcomesTitle"),
      outcome: t("s3.outcome"),
      projectLink: "/projects",
      projectTitle: t("caseStudyP3"),
      icon: <Smartphone className="w-7 h-7 text-foreground stroke-[1.5]" />
    },
    {
      num: t("s4.num"),
      tag: t("s4.tag"),
      title: t("s4.title"),
      desc: t("s4.desc"),
      deliverablesTitle: t("s4.deliverablesTitle"),
      deliverables: [
        t("s4.d1"),
        t("s4.d2"),
        t("s4.d3"),
        t("s4.d4"),
      ],
      outcomesTitle: t("s4.outcomesTitle"),
      outcome: t("s4.outcome"),
      projectLink: "/projects/financial-management",
      projectTitle: t("caseStudyP4"),
      icon: <Server className="w-7 h-7 text-foreground stroke-[1.5]" />
    },
    {
      num: t("s5.num"),
      tag: t("s5.tag"),
      title: t("s5.title"),
      desc: t("s5.desc"),
      deliverablesTitle: t("s5.deliverablesTitle"),
      deliverables: [
        t("s5.d1"),
        t("s5.d2"),
        t("s5.d3"),
        t("s5.d4"),
      ],
      outcomesTitle: t("s5.outcomesTitle"),
      outcome: t("s5.outcome"),
      projectLink: "/projects",
      projectTitle: t("caseStudyP5"),
      icon: <RefreshCw className="w-7 h-7 text-foreground stroke-[1.5]" />
    },
  ]

  const standards = [
    {
      icon: <Code2 className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("standards.c1_title"),
      desc: t("standards.c1_desc")
    },
    {
      icon: <Layers className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("standards.c2_title"),
      desc: t("standards.c2_desc")
    },
    {
      icon: <Lock className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("standards.c3_title"),
      desc: t("standards.c3_desc")
    },
    {
      icon: <FileText className="w-6 h-6 text-foreground stroke-[1.5]" />,
      title: t("standards.c4_title"),
      desc: t("standards.c4_desc")
    },
  ]

  return (
    <div className="relative bg-background min-h-screen pb-24">
      {/* Background Architectural Grid & Depth (Constrained to top screen area) */}
      <div className="absolute inset-x-0 top-0 h-[100vh] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top" className="opacity-50 md:opacity-60" />
      </div>

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Main Headline (Clean typography, no badges, no italics) */}
          <motion.div variants={fadeInUp} className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.3] py-2">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h1>
          </motion.div>

          {/* Subtitle & Action Buttons */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-8 items-end pt-2">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {t("subtitle")}
            </p>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 justify-end">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 text-sm h-12 tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all justify-center"
                )}
              >
                {t("startProject")}
              </Link>
            </div>
          </motion.div>

          {/* Architectural Metrics Strip */}
          <motion.div variants={fadeInUp} className="pt-8">
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

      {/* Core Offerings Deep-Dive Section */}
      <section id="offerings" className="relative overflow-hidden pt-28 md:pt-40 scroll-mt-24 z-10">
        <TechGrid mask="faded" />
        <AmbientGlow position="center" className="opacity-40" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {t.rich("offeringsTitle", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              {t("offeringsSubtitle")}
            </p>
          </motion.div>

          {/* Offerings Stack */}
          <div className="flex flex-col gap-10 md:gap-14">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                id={`service-${index + 1}`}
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card p-8 sm:p-10 md:p-14 relative overflow-hidden group shadow-sm transition-colors hover:border-foreground/30 scroll-mt-24"
              >

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  {/* Left Column: Header, Description & Outcomes */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-muted border border-border/40">
                        {offering.icon}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-medium text-muted-foreground tracking-wider">
                          {offering.tag}
                        </span>
                        <span className="text-xs font-mono font-bold text-foreground">
                          {offering.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">
                      {offering.title}
                    </h3>

                    <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                      {offering.desc}
                    </p>

                    {/* Business Outcome Callout */}
                    <div className="p-5 rounded-2xl bg-muted/40 border border-border/40 flex flex-col gap-1.5 mt-2">
                      <span className="text-xs uppercase font-semibold text-foreground tracking-wider">
                        {offering.outcomesTitle}
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {offering.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Checklist */}
                  <div className="lg:col-span-6 flex flex-col gap-6 lg:border-l lg:border-border/40 lg:pl-12 rtl:lg:border-l-0 rtl:lg:border-r rtl:lg:pl-0 rtl:lg:pr-12">
                    <h4 className="text-base font-semibold tracking-tight text-foreground">
                      {offering.deliverablesTitle}
                    </h4>

                    <div className="flex flex-col gap-4">
                      {offering.deliverables.map((item, di) => (
                        <div key={di} className="flex items-start gap-3.5 p-4 rounded-2xl bg-muted/20 border border-border/30">
                          <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-foreground/90 font-light leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                      <Link
                        href="/contact"
                        className={cn(
                          buttonVariants({ size: "default", variant: "outline" }),
                          "rounded-full px-6 text-xs tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors gap-2"
                        )}
                      >
                        <span>{t("startWith", { num: offering.num })}</span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </Link>

                      {offering.projectLink && (
                        <Link
                          href={offering.projectLink}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors group/cs py-2"
                        >
                          <span className="underline underline-offset-4 decoration-border/60 group-hover/cs:decoration-foreground">
                            {t("viewCaseStudy")}: {offering.projectTitle}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover/cs:translate-x-0.5 rtl:group-hover/cs:-translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </section>

      {/* Engineering Standards Section */}
      <section className="relative overflow-hidden pt-28 md:pt-40 z-10 border-t border-border/40 mt-16">
        <TechGrid mask="faded" />
        <AmbientGlow position="center" className="opacity-40" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {t.rich("standards.title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              {t("standards.subtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((val, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 flex flex-col gap-5 h-full transition-colors hover:border-foreground/30 shadow-sm relative overflow-hidden">
                  <div className="p-3 rounded-2xl bg-muted w-fit border border-border/40">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {val.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-border/60 bg-card p-10 md:p-16 text-center flex flex-col items-center gap-8 shadow-sm relative overflow-hidden"
        >
          <TechGrid mask="faded" />
          <AmbientGlow position="center" className="opacity-40" />
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
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
                  "rounded-full px-10 text-sm h-13 tracking-widest font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all justify-center"
                )}
              >
                {t("cta.button")}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
