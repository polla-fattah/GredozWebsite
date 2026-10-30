"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Github } from "lucide-react"
import { TEAM_MEMBERS_DATA } from "@/lib/team-data"

interface TeamProps {
  showHeader?: boolean
  withGradient?: boolean
  className?: string
}

export function Team({
  showHeader = true,
  withGradient = false,
  className
}: TeamProps) {
  const t = useTranslations("Team")

  return (
    <section
      id="team"
      className={cn(
        "relative overflow-hidden",
        showHeader ? "py-12 md:py-16 bg-background border-t border-border/40" : "py-0 bg-transparent border-t-0",
        className
      )}
    >
      <div className={cn(showHeader ? "container max-w-7xl mx-auto px-4" : "w-full", "relative z-10")}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Section Header with Explore CTA */}
          {showHeader && (
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
              <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                  {t.rich("title", {
                    italic: (chunks) => <span className="text-foreground">{chunks}</span>,
                  })}
                </h2>

                <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                  {t("subtitle")}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="shrink-0">
                <Link
                  href="/team"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full px-8 text-sm h-12 w-full sm:w-auto tracking-widest font-semibold border-border/40 hover:bg-foreground hover:text-background transition-colors gap-2 justify-center"
                  )}
                >
                  <span>{t("explore")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </motion.div>
            </div>
          )}

          {/* Fully Responsive Team Cards Grid (1 col mobile, 2 col iPad/tablet, 3 col desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
            {TEAM_MEMBERS_DATA.map((member) => {
              const shortKey = member.slug.split("_")[0]

              return (
                <motion.div
                  key={member.slug}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <Link
                    href={`/team/${member.slug}`}
                    className="block h-full group"
                  >
                    <div className="relative h-full rounded-3xl border border-border/60 bg-card/50 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-foreground/30 hover:bg-card/80 hover:shadow-sm overflow-hidden">
                      <div className="flex flex-col gap-5">
                        {/* Top Header: Avatar on one side, GitHub badge on the other */}
                        <div className="flex items-center justify-between gap-4">
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted/60 dark:bg-muted/30 border border-border/60 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 group-hover:border-foreground/30 transition-transform duration-300">
                            <Image
                              src={member.image}
                              alt={t(`members.${shortKey}.name`)}
                              width={52}
                              height={52}
                              className="object-contain max-h-full max-w-full drop-shadow-xs"
                            />
                          </div>

                          {member.github && (
                            <span
                              aria-label={`${t(`members.${shortKey}.name`)} GitHub`}
                              className="p-2 rounded-full border border-border/40 bg-muted/40 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                            >
                              <Github className="w-4 h-4" />
                            </span>
                          )}
                        </div>

                        {/* Role Badge, Name & Specialty (Stacked to prevent overlap on iPad) */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                            {t(`members.${shortKey}.role`)}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
                            {t(`members.${shortKey}.name`)}
                          </h3>
                          <p className="text-xs font-mono text-muted-foreground/80 tracking-wide line-clamp-1">
                            {t(`members.${shortKey}.specialty`)}
                          </p>
                        </div>

                        {/* Bio Excerpt with uniform line clamping */}
                        <div className="text-sm text-muted-foreground font-light leading-relaxed">
                          <p className="line-clamp-3">
                            {t(`members.${shortKey}.bio`)}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer: View Profile Trigger */}
                      <div className="pt-4 mt-6 border-t border-border/40 flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                          {t("viewProfile")}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-border/60 bg-muted/40 text-muted-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
