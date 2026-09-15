"use client"

import { useTranslations, useMessages } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProjectDetails() {
  const t = useTranslations("ProjectDetails")
  const messages = useMessages() as any
  const params = useParams()
  const slug = params.slug as string
  const locale = params.locale as string
  
  const isValidProject = ["financial-management", "ecommerce-dashboard"].includes(slug)
  if (!isValidProject) {
    notFound()
  }

  // Choose an image based on the project slug
  const imageSrc = slug === "financial-management" 
    ? "/images/isometric_financial_dashboard.jpg" 
    : "/images/isometric_ecommerce_dashboard.jpg"
    
  const secondaryImageSrc = slug === "financial-management"
    ? "/images/abstract_dark_fluid_1789384914818.jpg"
    : "/images/abstract_data_screen_1789384998333.jpg"

  const isRtl = locale === "ar" || locale === "ku"
  const ArrowIcon = isRtl ? ArrowRight : ArrowLeft
  
  // Safely extract arrays from messages
  const projectMessages = messages?.ProjectDetails?.[slug] || {}
  const services = Array.isArray(projectMessages.services) ? projectMessages.services : []
  const technologies = Array.isArray(projectMessages.technologies) ? projectMessages.technologies : []

  return (
    <div className="bg-background min-h-screen">
      {/* Massive Hero Image at the very top */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[60vh] md:h-[80vh] relative"
      >
        <Image 
          src={imageSrc} 
          alt={t(`${slug}.title`)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      <div className="container max-w-7xl mx-auto px-4 -mt-32 md:-mt-48 relative z-10 pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          {/* Back Button */}
          <motion.div variants={fadeInUp}>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border/40 text-sm font-medium hover:bg-muted transition-colors uppercase tracking-widest shadow-sm w-fit"
            >
              <ArrowIcon className="w-4 h-4" />
              {t("labels.back")}
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mt-8">
            {/* Left Column: Sticky Meta Data */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                    <Badge variant="outline" className="rounded-full px-3 py-1 font-semibold tracking-wider">
                      {t(`${slug}.badge`)}
                    </Badge>
                    <span>{t(`${slug}.date`)}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                    {t(`${slug}.title`)}
                  </h1>
                </div>

                <div className="flex flex-col gap-8 py-8 border-y border-border/40">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{t("labels.client")}</span>
                    <span className="text-lg font-medium">{t(`${slug}.client`)}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{t("labels.industry")}</span>
                    <span className="text-lg font-medium">{t(`${slug}.industry`)}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{t("labels.timeline")}</span>
                    <span className="text-lg font-medium">{t(`${slug}.duration`)}</span>
                  </div>
                </div>

                {services.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{t("labels.services")}</span>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service: string, i: number) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {technologies.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">{t("labels.technologies")}</span>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech: string, i: number) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-border text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <a 
                  href="#" 
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full w-full gap-2 mt-4")}
                >
                  {t("labels.launchProject")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Editorial Content */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24 pt-4 md:pt-12">
              
              {/* The Challenge */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                <h2 className="text-3xl font-medium tracking-tight">{t("labels.challenge")}</h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  {t(`${slug}.challenge`)}
                </p>
              </motion.div>
              
              {/* Secondary Image */}
              <motion.div variants={fadeInUp} className="w-full aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden relative">
                <Image 
                  src={secondaryImageSrc} 
                  alt="Project Detail"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* The Solution */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                <h2 className="text-3xl font-medium tracking-tight">{t("labels.solution")}</h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  {t(`${slug}.solution`)}
                </p>
              </motion.div>

              {/* The Results */}
              <motion.div variants={fadeInUp} className="bg-foreground text-background p-10 md:p-16 rounded-[2.5rem] mt-8">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-background/50 mb-8">{t("labels.results")}</h2>
                <p className="text-2xl md:text-4xl font-medium leading-tight">
                  "{t(`${slug}.results`)}"
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
