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

export function Projects() {
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
  ]

  return (
    <section id="projects" className="py-24 md:py-40 bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>
              })}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card className="group overflow-hidden border border-background/10 bg-background/5 shadow-none cursor-pointer p-3 md:p-5 rounded-[2.5rem] h-full transition-colors hover:bg-background/10">
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
                        <div className="flex justify-between items-center text-xs font-semibold tracking-wider uppercase text-background/50">
                          <span className="text-background/80 bg-background/10 px-3 py-1 rounded-full">{project.badge}</span>
                          <span>{project.date}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-background transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-background/60 leading-relaxed text-sm md:text-base">
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
          
          <motion.div variants={fadeInUp} className="flex justify-start mt-8">
            <Link href="/projects" className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-8 text-sm h-12 tracking-widest font-semibold bg-background text-foreground hover:bg-background/90 border-transparent hover:text-foreground")}>
              {t("explore")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
