"use client"

import { useTranslations, useMessages } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Github, 
  CheckCircle2, 
  Quote, 
  MapPin, 
  Briefcase, 
  Layers, 
  Cpu, 
  Sparkles, 
  Clock 
} from "lucide-react"
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

  // Safely extract localized member data
  const memberMessages = messages?.TeamDetails?.[member.slug] || {}
  const specialties: string[] = Array.isArray(memberMessages.specialties)
    ? memberMessages.specialties
    : member.specialties

  const technologies: string[] = Array.isArray(memberMessages.technologies)
    ? memberMessages.technologies
    : member.technologies

  const quote: string = memberMessages.quote || ""
  const otherMembers = TEAM_MEMBERS_DATA.filter((m) => m.slug !== member.slug)

  return (
    <div className="relative bg-background min-h-screen pb-20 md:pb-28">
      {/* Background Architectural Grid & Depth */}
      <div className="absolute inset-x-0 top-0 h-[85vh] max-h-[760px] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top-right" className="opacity-45 md:opacity-55" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 pt-24 md:pt-28 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 md:gap-14"
        >
          {/* Breadcrumb & Navigation Bar */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-md border border-border/60 text-xs font-mono font-medium hover:bg-muted hover:border-foreground/30 transition-all uppercase tracking-wider text-muted-foreground hover:text-foreground w-fit shadow-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 transition-transform" />
              <span>{t("labels.back")}</span>
            </Link>

            {/* Availability & Location Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/40 bg-card/40 backdrop-blur-md text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t("labels.locationVal")}</span>
              <span className="text-border/80">·</span>
              <span className="text-foreground/70">GMT+3</span>
            </div>
          </motion.div>

          {/* Hero Profile Dossier Card */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-3xl border border-border/60 bg-card/50 backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden"
          >
            {/* Subtle decorative inner corner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-foreground/[0.03] to-transparent rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Profile Avatar / Emblem Block */}
              <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-foreground/10 via-foreground/5 to-transparent blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-[28px] bg-card border border-border/80 flex items-center justify-center p-6 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                      src={member.image}
                      alt={t(`${member.slug}.title`)}
                      width={160}
                      height={160}
                      className="object-contain max-h-full max-w-full drop-shadow-md"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Identity & Headline Details */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-5 text-center md:text-start">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-foreground text-background text-[11px] font-mono font-semibold tracking-wider uppercase">
                    {t(`${member.slug}.badge`)}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-muted/60 border border-border/60 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3 text-foreground/70" />
                    <span>{t(`${member.slug}.experience`)}</span>
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-muted/60 border border-border/60 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-foreground/70" />
                    <span>{t(`${member.slug}.department`)}</span>
                  </span>

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Profile"
                      className="p-1.5 rounded-full border border-border/60 bg-muted/40 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors inline-flex items-center gap-1.5 px-3 text-xs font-mono"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                {/* Name & Role */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                    {t(`${member.slug}.title`)}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
                    {t(`${member.slug}.role`)}
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
                  <Link
                    href={`/contact?team=${member.slug}`}
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "rounded-full px-6 h-11 text-xs tracking-wider uppercase font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all gap-2"
                    )}
                  >
                    <span>{t("labels.discussProject")}</span>
                    <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                  </Link>

                  <Link
                    href="/services"
                    className={cn(
                      buttonVariants({ size: "default", variant: "outline" }),
                      "rounded-full px-6 h-11 text-xs tracking-wider uppercase font-semibold border-border/80 hover:bg-muted transition-all"
                    )}
                  >
                    <span>{t("labels.services")}</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Signature Philosophy Pull-Quote */}
          {quote && (
            <motion.div
              variants={fadeInUp}
              className="relative rounded-3xl border border-border/60 bg-gradient-to-r from-card/80 via-card/50 to-card/80 backdrop-blur-xl p-8 sm:p-10 md:p-12 overflow-hidden shadow-xs"
            >
              <div className="flex items-start gap-5 md:gap-8">
                <div className="p-3.5 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground shrink-0 hidden sm:flex">
                  <Quote className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-foreground/90">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-muted-foreground font-medium uppercase tracking-wider">
                    — {t(`${member.slug}.title`)}, {t(`${member.slug}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Deep-Dive Technical Dossier Grid */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Main Narrative Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-10 md:gap-14">
              {/* Professional Narrative Overview */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-muted/60 border border-border/50 text-foreground">
                    <Layers className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                    {t("labels.overview")}
                  </h2>
                </div>

                <div className="rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-7 sm:p-8 space-y-5 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  <p>{t(`${member.slug}.overviewP1`)}</p>
                  <p>{t(`${member.slug}.overviewP2`)}</p>
                  {memberMessages.overviewP3 && (
                    <p>{t(`${member.slug}.overviewP3`)}</p>
                  )}
                </div>
              </motion.div>

              {/* Key Competencies & Specializations */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-muted/60 border border-border/50 text-foreground">
                    <Sparkles className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                    {t("labels.expertise")}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {specialties.map((spec, i) => (
                    <div
                      key={i}
                      className="group p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl flex items-start gap-4 hover:border-foreground/40 hover:bg-card/70 transition-all duration-200"
                    >
                      <span className="font-mono text-xs text-muted-foreground/60 font-semibold group-hover:text-foreground transition-colors shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium text-foreground leading-snug">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Column: Tech Stack & Architecture Specs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Core Technologies & Tooling Matrix */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl p-7 sm:p-8 flex flex-col gap-6 shadow-xs"
              >
                <div className="flex items-center gap-2.5 pb-4 border-b border-border/40">
                  <div className="p-2 rounded-xl bg-muted/60 border border-border/50 text-foreground">
                    <Cpu className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {t("labels.technologies")}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-muted/40 border border-border/60 text-xs font-mono text-foreground/90 hover:border-foreground/40 hover:bg-muted/70 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Engagement & Collaboration Card */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl border border-border/60 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl p-7 sm:p-8 flex flex-col gap-6 shadow-xs"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-muted-foreground font-semibold">
                    {t("labels.workWith")}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {t("labels.workWithDesc")}
                  </h3>
                </div>

                <div className="space-y-3 pt-2 text-xs font-mono text-muted-foreground border-t border-border/40">
                  <div className="flex items-center justify-between py-1.5">
                    <span>{t("labels.department")}:</span>
                    <span className="font-sans font-medium text-foreground">{t(`${member.slug}.department`)}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span>{t("labels.location")}:</span>
                    <span className="font-sans font-medium text-foreground">{t("labels.locationVal")}</span>
                  </div>
                </div>

                <Link
                  href={`/contact?team=${member.slug}`}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "rounded-full w-full justify-center gap-2 mt-2 bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs tracking-wider uppercase"
                  )}
                >
                  <span>{t("labels.discussProject")}</span>
                  <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Other Team Members Row */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-10 border-t border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  {t("labels.allMembers")}
                </h3>
              </div>
              <Link
                href="/team"
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>{t("labels.back")}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
              {otherMembers.map((other) => {
                const shortKey = other.slug.split("_")[0]
                return (
                  <Link
                    key={other.slug}
                    href={`/team/${other.slug}`}
                    className="group flex flex-col items-center text-center p-4 rounded-2xl border border-border/50 bg-card/40 hover:bg-card hover:border-foreground/40 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="relative w-14 h-14 rounded-2xl bg-muted/60 border border-border/50 flex items-center justify-center p-2.5 mb-3 group-hover:scale-105 group-hover:border-foreground/30 transition-all">
                      <Image
                        src={other.image}
                        alt={tTeam(`members.${shortKey}.name`)}
                        width={42}
                        height={42}
                        className="object-contain max-h-full max-w-full drop-shadow-xs"
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground truncate w-full group-hover:text-foreground">
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
        </motion.div>
      </div>
    </div>
  )
}
