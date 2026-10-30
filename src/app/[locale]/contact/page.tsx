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
  MessageSquare
} from "lucide-react"
import { TechGrid, AmbientGlow } from "@/components/ui/background-patterns"


function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function ContactPage() {
  const t = useTranslations("ContactPage")
  const messages = useMessages() as any
  const schedule = messages?.ContactPage?.info?.schedule || []
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Zod schema with localized error triggers
  const contactSchema = z.object({
    fullName: z.string().min(2, { message: t("errors.nameRequired") }),
    emailOrPhone: z.string().min(4, { message: t("errors.contactRequired") }),
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
      emailOrPhone: "",
      company: "",
      service: "",
      message: "",
    },
  })

  const selectedService = watch("service")

  const serviceOptions = [
    { id: "software", label: t("form.services.software") },
    { id: "hardware", label: t("form.services.hardware") },
    { id: "data", label: t("form.services.data") },
    { id: "not_sure", label: t("form.services.not_sure") },
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
          "Contact (Email/Phone)": data.emailOrPhone,
          Company: data.company || "Not provided",
          "Service Needed": data.service,
          Message: data.message,
          _subject: `New Knot Request (${data.service}): ${data.fullName}`,
          _template: "box",
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
    <div className="relative bg-background min-h-screen pb-16 md:pb-20">
      {/* Background Architectural Grid & Depth (Constrained to top screen area with smooth blend) */}
      <div className="absolute inset-x-0 top-0 h-[85vh] max-h-[720px] overflow-hidden pointer-events-none select-none">
        <TechGrid mask="hero" />
        <AmbientGlow position="top-right" className="opacity-50 md:opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 pt-28 md:pt-32 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.25] py-2">
              {t.rich("title", {
                italic: (chunks) => <span className="text-foreground">{chunks}</span>,
              })}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Main Grid: Info + Form */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Office Details & Direct Channels */}
            <motion.div variants={fadeInUp} className="w-full h-full flex flex-col">
              <Card className="rounded-3xl border border-border/60 bg-card bg-none p-5 sm:p-8 md:p-10 shadow-xs relative overflow-hidden group h-full flex flex-col">
                <CardContent className="p-0 flex flex-col gap-6 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs uppercase tracking-wider font-semibold text-foreground">
                        {t("info.officeTitle")}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {t("info.responseTime")}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {/* Location */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            {t("info.locationTitle")}
                          </span>
                          <span className="text-base font-medium text-foreground mt-0.5">
                            {t("info.locationAddress")}
                          </span>
                          <span className="text-xs text-muted-foreground/80 mt-1 font-light">
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
                            className="text-base font-medium text-foreground hover:underline mt-0.5"
                          >
                            {t("info.emailAddress")}
                          </a>
                        </div>
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                            <Phone className="w-5 h-5 text-foreground" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                              {t("info.phoneTitle")}
                            </span>
                            <span className="text-xs text-muted-foreground/75 font-light">
                              {t("info.phoneSubtitle")}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Phone & WhatsApp Tiles */}
                        <div className="flex flex-col gap-2.5 pt-1">
                          {/* Number 1 */}
                          <div className="p-3.5 sm:p-4 rounded-2xl bg-muted/30 border border-border/40 hover:border-foreground/20 hover:bg-muted/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <a
                              href="tel:+9647874401600"
                              className="text-sm sm:text-base font-semibold font-mono text-foreground hover:underline"
                              dir="ltr"
                            >
                              +964 787 440 1600
                            </a>
                            <div className="flex items-center gap-2 self-stretch sm:self-auto">
                              <a
                                href="tel:+9647874401600"
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-background hover:bg-muted text-foreground border border-border/50 text-xs font-medium transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>{t("info.callAction")}</span>
                              </a>
                              <a
                                href="https://wa.me/9647874401600"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98]"
                              >
                                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                                <span>{t("info.whatsappAction")}</span>
                              </a>
                            </div>
                          </div>

                          {/* Number 2 */}
                          <div className="p-3.5 sm:p-4 rounded-2xl bg-muted/30 border border-border/40 hover:border-foreground/20 hover:bg-muted/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <a
                              href="tel:+9647507700409"
                              className="text-sm sm:text-base font-semibold font-mono text-foreground hover:underline"
                              dir="ltr"
                            >
                              +964 750 770 0409
                            </a>
                            <div className="flex items-center gap-2 self-stretch sm:self-auto">
                              <a
                                href="tel:+9647507700409"
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-background hover:bg-muted text-foreground border border-border/50 text-xs font-medium transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>{t("info.callAction")}</span>
                              </a>
                              <a
                                href="https://wa.me/9647507700409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98]"
                              >
                                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                                <span>{t("info.whatsappAction")}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="pt-6 border-t border-border/40 flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-muted border border-border/40 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2.5">
                        {t("info.hoursTitle")}
                      </span>

                      {Array.isArray(schedule) && schedule.length > 0 ? (
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
                                    <td className="py-2.5 px-3 font-medium">
                                      {item.day}
                                    </td>
                                    <td className="py-2.5 px-3 text-right rtl:text-left font-mono">
                                      {item.hours}
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <span className="text-sm font-medium text-foreground">
                          {t("info.hoursValue")}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column: React Hook Form */}
            <motion.div variants={fadeInUp} className="w-full h-full flex flex-col">
              <Card className="rounded-3xl border border-border/60 bg-card bg-none p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden group h-full flex flex-col">
                <CardContent className="p-0 flex flex-col flex-1 justify-between">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 flex flex-col items-center justify-center text-center gap-6 min-h-[500px]"
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
                      {/* Name & Company */}
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

                      {/* Email or phone */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                          {t("form.emailOrPhone")} <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t("form.emailOrPhonePlaceholder")}
                          {...register("emailOrPhone")}
                          className={cn(
                            "h-12 px-4 rounded-2xl border bg-background text-foreground text-sm transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                            errors.emailOrPhone ? "border-destructive focus:ring-destructive/20" : "border-border/60"
                          )}
                        />
                        {errors.emailOrPhone && (
                          <span className="text-xs text-destructive font-medium mt-0.5">
                            {errors.emailOrPhone.message}
                          </span>
                        )}
                      </div>

                      {/* Service Selection */}
                      <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                          {t("form.service")} <span className="text-destructive">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {serviceOptions.map((srv) => {
                            const isSelected = selectedService === srv.label
                            return (
                              <button
                                key={srv.id}
                                type="button"
                                onClick={() => setValue("service", srv.label, { shouldValidate: true })}
                                className={cn(
                                  "py-2.5 px-3 rounded-2xl text-xs font-medium transition-all border text-center",
                                  isSelected
                                    ? "bg-foreground text-background border-foreground shadow-sm"
                                    : "bg-muted/40 hover:bg-muted text-foreground/80 border-border/50"
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
                          "rounded-full h-14 text-sm font-semibold tracking-wider bg-foreground text-background hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 cursor-pointer"
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

          {/* What Happens Next */}
          <motion.div variants={fadeInUp}>
            <Card className="rounded-3xl border border-border/60 bg-card bg-none p-6 sm:p-10 shadow-xs relative overflow-hidden group">
              <CardContent className="p-0 flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-5">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                    {t.rich("process.title", {
                      italic: (chunks) => <span className="text-foreground">{chunks}</span>,
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
