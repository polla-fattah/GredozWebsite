"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { TechGrid , AmbientGlow } from "@/components/ui/background-patterns"
import { Plus, Minus, HelpCircle } from "lucide-react"

export function Faq() {
  const t = useTranslations("Faq")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-foreground text-background overflow-hidden border-t border-background/10">
      <TechGrid variant="dark" mask="faded" />
      <AmbientGlow position="center" className="opacity-40" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 md:gap-20"
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

          {/* FAQ Accordion List */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4 w-full">
            {items.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-background/10 bg-background/5 backdrop-blur-xl overflow-hidden transition-all shadow-none"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between gap-6 text-left rtl:text-right hover:bg-background/10 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-background tracking-tight">
                      {item.q}
                    </span>
                    <div className="p-2 rounded-xl bg-background/10 border border-background/10 shrink-0 text-background transition-transform">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-background/10 text-sm sm:text-base text-background/70 font-light leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
