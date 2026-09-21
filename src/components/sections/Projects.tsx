"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { ArrowRight } from "lucide-react"

export function Projects() {
  const t = useTranslations("Projects")

  const projects = [
    {
      slug: "financial-management",
      title: t("p1_title"),
      excerpt: t("p1_excerpt"),
      badge: t("p1_badge"),
      date: t("p1_date"),
      service: t("p1_service"),
      image: "/images/isometric_financial_dashboard.jpg"
    },
    {
      slug: "ecommerce-dashboard",
      title: t("p2_title"),
      excerpt: t("p2_excerpt"),
      badge: t("p2_badge"),
      date: t("p2_date"),
      service: t("p2_service"),
      image: "/images/isometric_ecommerce_dashboard.jpg"
    },
    {
      slug: "enterprise-logistics",
      title: t("p3_title"),
      excerpt: t("p3_excerpt"),
      badge: t("p3_badge"),
      date: t("p3_date"),
      service: t("p3_service"),
      image: "/images/isometric_mobile_app.jpg"
    },
    {
      slug: "healthcare-platform",
      title: t("p4_title"),
      excerpt: t("p4_excerpt"),
      badge: t("p4_badge"),
      date: t("p4_date"),
      service: t("p4_service"),
      image: "/images/isometric_ai_platform.jpg"
    },
  ]

  return (
    <section id="projects" className="relative py-24 md:py-36 bg-background overflow-hidden border-t border-border/40">
      {/* Blueprint Grid & Vector Graph Background */}
      <TechGrid mask="faded" />
      <AmbientGlow position="center" className="opacity-40" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 md:gap-20"
        >
          {/* Header area with inline button on desktop */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                {t.rich("title", {
                  italic: (chunks) => <span>{chunks}</span>
                })}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                {t("subtitle")}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="shrink-0">
              <Link 
                href="/projects" 
                className={cn(
                  buttonVariants({ variant: "outline" }), 
                  "rounded-full px-8 text-sm h-12 tracking-widest font-semibold border-border/40 hover:bg-foreground hover:text-background transition-colors"
                )}
              >
                {t("explore")}
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card className="group overflow-hidden border border-border/40 bg-card/40 backdrop-blur-xl hover:bg-card/60 hover:border-foreground/20 shadow-sm cursor-pointer p-3 rounded-[1.5rem] h-full transition-all duration-300 relative">
                    <CardContent className="p-0 flex flex-col h-full gap-4">
                      {/* Image Container */}
                      <div className="w-full aspect-video rounded-[1rem] overflow-hidden relative border border-border/20 bg-muted">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Overlay Gradient for Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>

                      {/* Content Area */}
                      <div className="flex flex-col gap-3 mt-auto px-1">
                        <div className="flex justify-between items-center text-[10px] font-semibold tracking-wider uppercase">
                          <span className="text-foreground bg-muted/80 px-2 py-1 rounded-full border border-border/40">
                            {project.badge}
                          </span>
                          <span className="text-muted-foreground/60">{project.date}</span>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-base font-medium tracking-tight text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-[11px] font-light line-clamp-2">
                            {project.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-border/40 mt-1">
                          <span className="text-[10px] text-muted-foreground font-light truncate max-w-[75%]">
                            {project.service}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 -translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
