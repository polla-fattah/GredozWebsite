"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { TechGrid, NodeTopologyGraph, AmbientGlow } from "@/components/ui/background-patterns"

export function AboutStats() {
  const t = useTranslations("About")
  const tAbout = useTranslations("AboutPage")

  return (
    <section id="about" className="relative py-14 md:py-20 bg-foreground text-background overflow-hidden">
      {/* Blueprint Grid & Topological System Graph */}
      <TechGrid variant="dark" mask="faded" />
      <AmbientGlow position="top-left" className="opacity-35 md:opacity-30" />
      <NodeTopologyGraph color="background" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Title on the left */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
          </motion.div>

          {/* Description and Action on the right */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col gap-6 justify-start">
            <p className="text-base sm:text-lg md:text-xl text-background/80 leading-relaxed font-light">
              {t("description")}
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-background hover:text-background/80 transition-colors group"
              >
                <span>{tAbout("learnMore")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
