"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"

export default function ProjectsPage() {
  const t = useTranslations("Projects")
  const tPage = useTranslations("ProjectsPage")

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
    <div className="relative bg-background min-h-screen pb-24">
      {/* Background Architectural Grid & Depth (Constrained to top screen area) */}
      <div className="absolute inset-x-0 top-0 h-[100vh] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top-left" className="opacity-50 md:opacity-60" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* Header section matching About and Services */}
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.div variants={fadeInUp} className="max-w-5xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.3] py-2">
                {tPage.rich("heroTitle", {
                  italic: (chunks) => <span>{chunks}</span>
                })}
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-8 items-end pt-2">
              <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                {tPage("heroSubtitle")}
              </p>
              
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-end">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-8 text-sm h-12 sm:h-14 tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all shrink-0"
                  )}
                >
                  {tPage("startProject")}
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "rounded-full px-8 text-sm h-12 sm:h-14 tracking-wider font-semibold border-border/60 hover:bg-foreground hover:text-background transition-all shrink-0"
                  )}
                >
                  {tPage("exploreServices")}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card className="group overflow-hidden border border-border/40 bg-card/50 dark:bg-card/40 backdrop-blur-xl hover:bg-card/70 hover:border-foreground/20 shadow-none cursor-pointer p-3 rounded-[1.5rem] h-full transition-all duration-300 relative">
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
    </div>
  )
}
