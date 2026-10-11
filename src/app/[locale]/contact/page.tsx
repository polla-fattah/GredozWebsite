"use client"

import { useState } from "react"
import { useTranslations, useMessages } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Loader2,
  Check,
  Calendar
} from "lucide-react"
import { TechGrid, AmbientGlow, GridLines } from "@/components/ui/background-patterns"

export default function ContactPage() {
  const t = useTranslations("ContactPage")
  const messages = useMessages() as any
  const schedule = messages?.ContactPage?.info?.schedule || []
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Zod schema with localized error triggers
  const contactSchema = z.object({
    fullName: z.string().min(2, { message: t("errors.nameRequired") }),
    email: z.string().email({ message: t("errors.emailInvalid") }),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().min(1, { message: t("errors.serviceRequired") }),
    message: z.string().min(10, { message: t("errors.messageMin") }),
  })

  type ContactFormData = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  })

  const selectedService = watch("service")

  const serviceOptions = [
    { id: "custom", label: t("form.services.custom") },
    { id: "web", label: t("form.services.web") },
    { id: "mobile", label: t("form.services.mobile") },
    { id: "cloud", label: t("form.services.cloud") },
    { id: "other", label: t("form.services.other") },
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@gredoz.krd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: data.fullName,
          Email: data.email,
          Phone: data.phone || "Not provided",
          Company: data.company || "Not provided",
          Service: data.service,
          Message: data.message,
          _subject: `New Contact Request: ${data.service} - ${data.fullName}`,
          _template: "box", // Beautiful email template
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    reset()
    setIsSubmitted(false)
  }

  return (
    <div className="relative bg-background min-h-screen pb-24">
      {/* Background Architectural Grid & Depth (Constrained to top screen area) */}
      <div className="absolute inset-x-0 top-0 h-[100vh] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top-right" className="opacity-50 md:opacity-60" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 pt-28 md:pt-36 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Header (No badges, all normal font, no italic) */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.3] py-2">
              {t.rich("title", {
                italic: (chunks) => <span>{chunks}</span>,
              })}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Main Grid: Info + Form (Equal Balanced Space & Height) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Office Details & Direct Channels */}
            <motion.div variants={fadeInUp} className="w-full h-full flex flex-col">
              {/* Erbil Office Card */}
              <Card className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden group h-full flex flex-col">
                <CardContent className="p-0 flex flex-col gap-6 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-wider font-semibold text-foreground">
                        {t("info.officeTitle")}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {t("info.responseTime")}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Location */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            {t("info.locationTitle")}
                          </span>
                          <span className="text-base font-medium text-foreground">
                            {t("info.locationAddress")}
                          </span>
                          <span className="text-xs text-muted-foreground/80 mt-0.5">
                            {t("info.locationNote")}
                          </span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                          <Mail className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            {t("info.emailTitle")}
                          </span>
                          <a
                            href={`mailto:${t("info.emailAddress")}`}
                            className="text-base font-medium text-foreground hover:underline"
                          >
                            {t("info.emailAddress")}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                          <Phone className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            {t("info.phoneTitle")}
                          </span>
                          <a
                            href="tel:+9647514003545"
                            className="text-base font-medium text-foreground hover:underline w-fit"
                            dir="ltr"
                            style={{ unicodeBidi: "plaintext" }}
                          >
                            {t("info.phoneNumber")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours (Structured Table) */}
                  <div className="pt-4 border-t border-border/40 flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2.5">
                        {t("info.hoursTitle")}
                      </span>

                      {Array.isArray(schedule) && schedule.length > 0 && (
                        <div className="rounded-2xl border border-border/40 overflow-hidden bg-background/50">
                          <table className="w-full text-xs">
                            <tbody>
                              {schedule.map((item: any, idx: number) => {
                                const isClosed =
                                  item.hours === "Closed" ||
                                  item.hours === "مغلق" ||
                                  item.hours === "داخراوە"
                                return (
                                  <tr
                                    key={idx}
                                    className={cn(
                                      "border-b border-border/30 last:border-0 transition-colors",
                                      isClosed
                                        ? "text-muted-foreground/50 bg-muted/20"
                                        : "text-foreground"
                                    )}
                                  >
                                    <td className="py-2 px-3 font-medium">
                                      {item.day}
                                    </td>
                                    <td className="py-2 px-3 text-right rtl:text-left font-mono">
                                      {item.hours}
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column: React Hook Form with Zod Validation */}
            <motion.div variants={fadeInUp} className="w-full h-full flex flex-col">
              <Card className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden group h-full flex flex-col">
                <CardContent className="p-0 flex flex-col flex-1 justify-between">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 flex flex-col items-center justify-center text-center gap-6 min-h-[550px] sm:min-h-[600px]"
                    >
                      <div className="w-16 h-16 rounded-3xl bg-muted text-foreground flex items-center justify-center border border-border/60">
                        <Check className="w-8 h-8 stroke-[2]" />
                      </div>
                      <div className="space-y-2 max-w-md">
                        <h3 className="text-3xl font-medium tracking-tight text-foreground">
                          {t("form.successTitle")}
                        </h3>
                        <p className="text-muted-foreground text-base font-light leading-relaxed">
                          {t("form.successDesc")}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleReset}
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "rounded-full px-8 text-sm font-semibold tracking-wider mt-4"
                        )}
                      >
                        {t("form.sendAnother")}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                            {t("form.fullName")} <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder={t("form.fullNamePlaceholder")}
                            {...register("fullName")}
                            className={cn(
                              "h-12 px-4 rounded-2xl border bg-background text-foreground text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                              errors.fullName ? "border-destructive focus:ring-destructive/20" : "border-border/60"
                            )}
                          />
                          {errors.fullName && (
                            <span className="text-xs text-destructive font-medium mt-0.5">
                              {errors.fullName.message}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                            {t("form.email")} <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder={t("form.emailPlaceholder")}
                            {...register("email")}
                            className={cn(
                              "h-12 px-4 rounded-2xl border bg-background text-foreground text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                              errors.email ? "border-destructive focus:ring-destructive/20" : "border-border/60"
                            )}
                          />
                          {errors.email && (
                            <span className="text-xs text-destructive font-medium mt-0.5">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Phone & Company Row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                            {t("form.phone")}
                          </label>
                          <input
                            type="tel"
                            placeholder={t("form.phonePlaceholder")}
                            {...register("phone")}
                            className="h-12 px-4 rounded-2xl border border-border/60 bg-background text-foreground text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 text-left"
                            dir="ltr"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                            {t("form.company")}
                          </label>
                          <input
                            type="text"
                            placeholder={t("form.companyPlaceholder")}
                            {...register("company")}
                            className="h-12 px-4 rounded-2xl border border-border/60 bg-background text-foreground text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                          {t("form.service")} <span className="text-destructive">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {serviceOptions.map((srv) => {
                            const isSelected = selectedService === srv.label
                            return (
                              <button
                                key={srv.id}
                                type="button"
                                onClick={() => setValue("service", srv.label, { shouldValidate: true })}
                                className={cn(
                                  "px-4 py-2.5 rounded-full text-xs font-medium transition-all border",
                                  isSelected
                                    ? "bg-foreground text-background border-foreground shadow-sm"
                                    : "bg-muted/50 hover:bg-muted text-foreground/80 border-border/50"
                                )}
                              >
                                {srv.label}
                              </button>
                            )
                          })}
                        </div>
                        {errors.service && (
                          <span className="text-xs text-destructive font-medium mt-0.5">
                            {errors.service.message}
                          </span>
                        )}
                      </div>


                      {/* Message Field */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                          {t("form.message")} <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder={t("form.messagePlaceholder")}
                          {...register("message")}
                          className={cn(
                            "p-4 rounded-2xl border bg-background text-foreground text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-y",
                            errors.message ? "border-destructive focus:ring-destructive/20" : "border-border/60"
                          )}
                        />
                        {errors.message && (
                          <span className="text-xs text-destructive font-medium mt-0.5">
                            {errors.message.message}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "rounded-full h-14 text-sm font-semibold tracking-wider uppercase bg-foreground text-background hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 cursor-pointer"
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{t("form.submitting")}</span>
                          </>
                        ) : (
                          <>
                            <span>{t("form.submit")}</span>
                            <Send className="w-4 h-4 rtl:rotate-180" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* What Happens Next - Full-width Spanning Steps Card */}
          <motion.div variants={fadeInUp}>
            <Card className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden group">
              <CardContent className="p-0 flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-5">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                    {t.rich("process.title", {
                      italic: (chunks) => <span>{chunks}</span>,
                    })}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    {t("info.guaranteeBadge")} · {t("info.guaranteeDesc")}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-muted/30 border border-border/40 hover:border-foreground/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold font-mono flex items-center justify-center shrink-0">
                        01
                      </span>
                      <h4 className="text-base font-medium text-foreground">
                        {t("process.step1_title")}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {t("process.step1_desc")}
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-muted/30 border border-border/40 hover:border-foreground/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold font-mono flex items-center justify-center shrink-0">
                        02
                      </span>
                      <h4 className="text-base font-medium text-foreground">
                        {t("process.step2_title")}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {t("process.step2_desc")}
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col gap-3 p-5 rounded-2xl bg-muted/30 border border-border/40 hover:border-foreground/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold font-mono flex items-center justify-center shrink-0">
                        03
                      </span>
                      <h4 className="text-base font-medium text-foreground">
                        {t("process.step3_title")}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {t("process.step3_desc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
