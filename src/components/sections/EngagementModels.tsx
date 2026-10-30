"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TechGrid , AmbientGlow } from "@/components/ui/background-patterns"
import { 
  Users2, 
  Workflow, 
  RefreshCcw, 
  Check, 
  Shield, 
  Lock, 
  Server, 
  FileCheck,
  ArrowRight
} from "lucide-react"

export function EngagementModels() {
  const t = useTranslations("Engagement")

  const models = [
    {
      title: t("m1_title"),
      tag: t("m1_tag"),
      desc: t("m1_desc"),
      icon: <Users2 className="w-6 h-6 text-background stroke-[1.5]" />,
      features: [
        t("m1_f1"),
        t("m1_f2"),
        t("m1_f3"),
        t("m1_f4"),
      ],
      highlight: false
    },
    {
      title: t("m2_title"),
      tag: t("m2_tag"),
      desc: t("m2_desc"),
      icon: <Workflow className="w-6 h-6 text-background stroke-[1.5]" />,
      features: [
        t("m2_f1"),
        t("m2_f2"),
        t("m2_f3"),
        t("m2_f4"),
      ],
      highlight: true
    },
    {
      title: t("m3_title"),
      tag: t("m3_tag"),
      desc: t("m3_desc"),
      icon: <RefreshCcw className="w-6 h-6 text-background stroke-[1.5]" />,
      features: [
        t("m3_f1"),
        t("m3_f2"),
        t("m3_f3"),
        t("m3_f4"),
      ],
      highlight: false
    },
  ]

  const guarantees = [
    {
      icon: <FileCheck className="w-5 h-5 text-background stroke-[1.5]" />,
      title: t("guarantees.g1_title"),
      desc: t("guarantees.g1_desc")
    },
    {
      icon: <Lock className="w-5 h-5 text-background stroke-[1.5]" />,
      title: t("guarantees.g2_title"),
      desc: t("guarantees.g2_desc")
    },
    {
      icon: <Server className="w-5 h-5 text-background stroke-[1.5]" />,
      title: t("guarantees.g3_title"),
      desc: t("guarantees.g3_desc")
    },
    {
      icon: <Shield className="w-5 h-5 text-background stroke-[1.5]" />,
      title: t("guarantees.g4_title"),
      desc: t("guarantees.g4_desc")
    },
  ]

  return (
    <section id="engagement" className="relative py-14 md:py-20 bg-foreground text-background overflow-hidden">
      <TechGrid variant="dark" mask="faded" />
      <AmbientGlow position="top-left" className="opacity-35 md:opacity-30" />

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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p className="text-background/80 text-base md:text-lg font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {models.map((model, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={cn(
                  "relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl border transition-all shadow-none group backdrop-blur-xl",
                  model.highlight
                    ? "border-background/30 bg-background/10"
                    : "border-background/10 bg-background/5 hover:border-background/30 hover:bg-background/10"
                )}
              >

                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-background/10 border border-background/10">
                      {model.icon}
                    </div>
                    <span className="text-xs font-mono font-medium text-background/60 tracking-wider">
                      {model.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium tracking-tight text-background">
                      {model.title}
                    </h3>
                    <p className="text-sm text-background/70 font-light leading-relaxed">
                      {model.desc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-background/10">
                    {model.features.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-3 text-xs sm:text-sm text-background/90 font-light">
                        <Check className="w-4 h-4 text-background shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-background/10">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "w-full rounded-full text-xs sm:text-sm font-semibold justify-center transition-all gap-2 px-4 py-3 h-auto sm:h-11 text-center whitespace-normal shrink-0",
                      model.highlight
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-background/10 text-background hover:bg-background hover:text-foreground"
                    )}
                  >
                    <span>{t("cta")}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Guarantees Strip */}
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-background/10 bg-background/5 p-6 sm:p-8 md:p-10 shadow-none"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {guarantees.map((item, gi) => (
                <div key={gi} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <h4 className="text-sm font-semibold tracking-tight text-background">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-background/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
