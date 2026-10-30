"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { Plus, Minus } from "lucide-react"

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
    <section id="faq" className="relative py-14 md:py-20 bg-background text-foreground overflow-hidden border-t border-border/40">
      <TechGrid mask="faded" />
      <AmbientGlow position="split" className="opacity-35 md:opacity-30" />

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
                italic: (chunks) => <span className="text-foreground">{chunks}</span>
              })}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* FAQ Accordion List */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3.5 w-full">
            {items.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-border/60 bg-card/50 backdrop-blur-xl overflow-hidden transition-all shadow-sm hover:border-foreground/30"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between gap-6 text-left rtl:text-right hover:bg-muted/40 transition-colors focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-foreground tracking-tight">
                      {item.q}
                    </span>
                    <div className="p-2 rounded-xl bg-muted border border-border/40 shrink-0 text-foreground">
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
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 text-sm sm:text-base text-muted-foreground font-light leading-relaxed border-t border-border/40">
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
