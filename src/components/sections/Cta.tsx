"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"

export function Cta() {
  const t = useTranslations("Cta")

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/40 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-2xl">
            {t.rich("title", {
              italic: (chunks) => <span>{chunks}</span>,
              br: () => <br />
            })}
          </h2>
          
          <Link href="#footer"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-8 text-sm h-12 tracking-widest font-semibold border-border/40 hover:bg-foreground hover:text-background transition-colors shrink-0 gap-2")}
          >
            {t("button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
