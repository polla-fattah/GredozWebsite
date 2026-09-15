"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Link } from "@/i18n/routing"

export default function ProjectsPage() {
  const t = useTranslations("Projects")

  const projects = [
    {
      slug: "financial-management",
      title: t("p1_title"),
      excerpt: t("p1_excerpt"),
      badge: t("p1_badge"),
      date: t("p1_date"),
      image: "/images/isometric_financial_dashboard.jpg"
    },
    {
      slug: "ecommerce-dashboard",
      title: t("p2_title"),
      excerpt: t("p2_excerpt"),
      badge: t("p2_badge"),
      date: t("p2_date"),
      image: "/images/isometric_ecommerce_dashboard.jpg"
    },
    // We can add more mock projects here in the future to make the grid look full
    {
      slug: "financial-management",
      title: t("p1_title"),
      excerpt: t("p1_excerpt"),
      badge: "MOBILE APP",
      date: "NOV 2026",
      image: "/images/isometric_mobile_app.jpg"
    },
    {
      slug: "ecommerce-dashboard",
      title: t("p2_title"),
      excerpt: t("p2_excerpt"),
      badge: "AI PLATFORM",
      date: "DEC 2026",
      image: "/images/isometric_ai_platform.jpg"
    },
  ]

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12 md:gap-20"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              {t("title").replace("<italic>", "").replace("</italic>", "")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our latest work and see how we help businesses transform their digital presence with cutting-edge technology.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card className="group overflow-hidden border border-border bg-card shadow-none cursor-pointer p-3 md:p-5 rounded-[2.5rem] h-full transition-colors hover:bg-muted/50">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="w-full aspect-[16/9] md:aspect-[16/10] rounded-[2rem] overflow-hidden relative">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="flex flex-col gap-4 pt-8 px-4 pb-4 mt-auto">
                        <div className="flex justify-between items-center text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                          <span className="text-foreground bg-muted px-3 py-1 rounded-full">{project.badge}</span>
                          <span>{project.date}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {project.excerpt}
                          </p>
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
