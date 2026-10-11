"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { TechGrid , AmbientGlow } from "@/components/ui/background-patterns"
import { 
  Compass, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Rocket 
} from "lucide-react"

export function Process() {
  const t = useTranslations("Process")

  const steps = [
    {
      num: t("step1_num"),
      title: t("step1_title"),
      desc: t("step1_desc"),
      icon: <Compass className="w-5 h-5 text-background stroke-[1.5]" />
    },
    {
      num: t("step2_num"),
      title: t("step2_title"),
      desc: t("step2_desc"),
      icon: <Layers className="w-5 h-5 text-background stroke-[1.5]" />
    },
    {
      num: t("step3_num"),
      title: t("step3_title"),
      desc: t("step3_desc"),
      icon: <Cpu className="w-5 h-5 text-background stroke-[1.5]" />
    },
    {
      num: t("step4_num"),
      title: t("step4_title"),
      desc: t("step4_desc"),
      icon: <ShieldCheck className="w-5 h-5 text-background stroke-[1.5]" />
    },
    {
      num: t("step5_num"),
      title: t("step5_title"),
      desc: t("step5_desc"),
      icon: <Rocket className="w-5 h-5 text-background stroke-[1.5]" />
    },
  ]

  return (
    <section id="process" className="relative py-24 md:py-36 bg-foreground text-background overflow-hidden">
      <TechGrid variant="dark" mask="faded" />
      <AmbientGlow position="split" className="opacity-30 md:opacity-25" />

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p className="text-background/80 text-base md:text-lg font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* 5-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-background/10 bg-background/5 backdrop-blur-xl hover:border-background/30 hover:bg-background/10 transition-all shadow-none"
              >

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-background/10 border border-background/10">
                      {step.icon}
                    </div>
                    <span className="font-mono text-xs font-semibold text-background/60 tracking-wider">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium tracking-tight text-background leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-background/70 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-background/10 flex items-center justify-between text-[11px] font-mono text-background/40">
                  <span>PHASE {step.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-background/20 group-hover:bg-background transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
