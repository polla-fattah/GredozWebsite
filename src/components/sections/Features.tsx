"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Database, X, LayoutGrid, Percent } from "lucide-react"
import { TechGrid , AmbientGlow } from "@/components/ui/background-patterns"

export function Features() {
  const t = useTranslations("Features")

  const features = [
    {
      title: t("f1_title"),
      desc: t("f1_desc"),
      icon: <Database className="w-12 h-12 text-foreground stroke-[1.5]" />,
    },
    {
      title: t("f2_title"),
      desc: t("f2_desc"),
      icon: <X className="w-12 h-12 text-foreground stroke-[1.5]" />,
    },
    {
      title: t("f3_title"),
      desc: t("f3_desc"),
      icon: <LayoutGrid className="w-12 h-12 text-foreground stroke-[1.5]" />,
    },
    {
      title: t("f4_title"),
      desc: t("f4_desc"),
      icon: <Percent className="w-12 h-12 text-foreground stroke-[1.5]" />,
    },
  ]

  return (
    <section className="relative py-24 md:py-40 bg-background overflow-hidden">
      <TechGrid mask="faded" />
      <AmbientGlow position="bottom-right" className="opacity-45 md:opacity-40" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-start gap-6"
              >
                <div className="mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground/80 leading-relaxed font-light text-base md:text-[17px]">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
