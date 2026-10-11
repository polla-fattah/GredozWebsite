"use client"

import { useTranslations, useMessages } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, CheckCircle2 } from "lucide-react"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"
import { findTeamMember, TEAM_MEMBERS_DATA } from "@/lib/team-data"

export default function TeamMemberDetailsPage() {
  const t = useTranslations("TeamDetails")
  const tTeam = useTranslations("Team")
  const messages = useMessages() as any
  const params = useParams()
  const slug = params.slug as string

  const member = findTeamMember(slug)
  if (!member) {
    notFound()
  }

  // Safely extract specialties array from localized messages
  const memberMessages = messages?.TeamDetails?.[member.slug] || {}
  const specialties: string[] = Array.isArray(memberMessages.specialties)
    ? memberMessages.specialties
    : member.specialties

  const otherMembers = TEAM_MEMBERS_DATA.filter((m) => m.slug !== member.slug)

  return (
    <div className="relative bg-background min-h-screen pb-32">
      {/* Background Architectural Grid & Depth */}
      <div className="absolute inset-x-0 top-0 h-[100vh] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top" className="opacity-50 md:opacity-60" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 md:gap-14"
        >
          {/* Back Button */}
          <motion.div variants={fadeInUp}>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-border/40 text-xs font-mono font-medium hover:bg-muted hover:border-foreground/30 transition-all uppercase tracking-widest shadow-xs w-fit"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              <span>{t("labels.back")}</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Sticky Profile Card & Metadata */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-28 flex flex-col gap-8">
                {/* Profile Card */}
                <div className="relative rounded-3xl border border-border/60 bg-card/50 backdrop-blur-xl p-7 sm:p-8 flex flex-col gap-6 shadow-sm overflow-hidden">
                  {/* Avatar & Role Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-muted/60 dark:bg-muted/30 border border-border/60 flex items-center justify-center p-4 shrink-0 shadow-xs">
                      <Image
                        src={member.image}
                        alt={t(`${member.slug}.title`)}
                        width={90}
                        height={90}
                        className="object-contain max-h-full max-w-full drop-shadow-sm"
                        priority
                      />
                    </div>

                    {member.github && (
                      <div className="flex flex-col items-end">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Profile"
                          className="p-2 rounded-full border border-border/50 bg-muted/40 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Name & Role */}
                  <div className="flex flex-col gap-1.5">
                    <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
                      {t(`${member.slug}.title`)}
                    </h1>
                    <p className="text-base text-muted-foreground font-light">
                      {t(`${member.slug}.role`)}
                    </p>
                  </div>

                  {/* Detailed Meta Specifications */}
                  <div className="flex flex-col divide-y divide-border/40 py-2 border-y border-border/40 text-xs font-mono">
                    <div className="py-3 flex flex-col gap-1">
                      <span className="text-muted-foreground/70 uppercase tracking-widest text-[10px]">
                        {t("labels.department")}
                      </span>
                      <span className="text-sm font-sans font-medium text-foreground">
                        {t(`${member.slug}.department`)}
                      </span>
                    </div>

                    <div className="py-3 flex flex-col gap-1">
                      <span className="text-muted-foreground/70 uppercase tracking-widest text-[10px]">
                        {t("labels.experience")}
                      </span>
                      <span className="text-sm font-sans font-medium text-foreground">
                        {t(`${member.slug}.experience`)}
                      </span>
                    </div>

                    <div className="py-3 flex flex-col gap-1">
                      <span className="text-muted-foreground/70 uppercase tracking-widest text-[10px]">
                        {t("labels.location")}
                      </span>
                      <span className="text-sm font-sans font-medium text-foreground">
                        {t("labels.locationVal")}
                      </span>
                    </div>
                  </div>

                  {/* Key Technologies */}
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest font-semibold">
                      {t("labels.technologies")}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-muted/40 border border-border/40 text-[11px] font-mono text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full w-full justify-center gap-2 mt-2 bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs tracking-wider uppercase"
                    )}
                  >
                    <span>{t("labels.discussProject")}</span>
                    <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative & Competencies */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-12 md:gap-16 pt-2">
              {/* Professional Overview */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                  {t("labels.overview")}
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  <p>{t(`${member.slug}.overviewP1`)}</p>
                  <p>{t(`${member.slug}.overviewP2`)}</p>
                  {memberMessages.overviewP3 && (
                    <p>{t(`${member.slug}.overviewP3`)}</p>
                  )}
                </div>
              </motion.div>

              {/* Core Specializations Grid */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                  {t("labels.expertise")}
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {specialties.map((spec, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl flex items-start gap-3.5 hover:border-foreground/30 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground leading-snug">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Connected Work With Team Section */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs uppercase font-mono tracking-wider text-muted-foreground font-semibold">
                    {t("labels.workWith")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                    {t("labels.workWithDesc")}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "rounded-full px-6 text-xs tracking-wider font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all"
                    )}
                  >
                    <span>{t("labels.discussProject")}</span>
                  </Link>
                  <Link
                    href="/services"
                    className={cn(
                      buttonVariants({ size: "default", variant: "outline" }),
                      "rounded-full px-6 text-xs tracking-wider font-semibold border-border/60 hover:bg-muted transition-all"
                    )}
                  >
                    <span>{t("labels.services")}</span>
                  </Link>
                </div>
              </motion.div>

              {/* Other Team Members Row */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-6 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-tight text-foreground">
                    {t("labels.allMembers")}
                  </span>
                  <Link
                    href="/team"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t("labels.back")}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {otherMembers.map((other) => {
                    const shortKey = other.slug.split("_")[0]
                    return (
                      <Link
                        key={other.slug}
                        href={`/team/${other.slug}`}
                        className="group flex flex-col items-center text-center p-3.5 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/70 hover:border-foreground/30 transition-all"
                      >
                        <div className="relative w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center p-2 mb-2 group-hover:scale-105 transition-transform">
                          <Image
                            src={other.image}
                            alt={tTeam(`members.${shortKey}.name`)}
                            width={36}
                            height={36}
                            className="object-contain max-h-full max-w-full"
                          />
                        </div>
                        <span className="text-xs font-medium text-foreground truncate w-full group-hover:text-foreground/80">
                          {tTeam(`members.${shortKey}.name`)}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate w-full font-mono mt-0.5">
                          {tTeam(`members.${shortKey}.role`)}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
