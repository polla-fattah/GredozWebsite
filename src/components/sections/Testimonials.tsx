"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Triangle, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const t = useTranslations("Testimonials")

  const reviews = Array.from({ length: 4 }).map(() => ({
    review: t("review"),
    author: t("author"),
    role: t("role"),
  }))

  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-8 items-start"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                {t.rich("title", {
                  italic: (chunks) => <span>{chunks}</span>
                })}
              </h2>
              <div className="hidden md:flex gap-4 relative">
                {/* We can render the standard carousel buttons here but override their absolute positioning to static */}
                <CarouselPrevious className="static translate-y-0 h-12 w-12 hover:bg-muted" />
                <CarouselNext className="static translate-y-0 h-12 w-12 hover:bg-muted" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full">
              <CarouselContent className="-ml-4">
                {reviews.map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <div className="h-full">
                      <Card className="h-full border-none bg-muted/20 hover:bg-muted/30 transition-colors rounded-3xl p-6 md:p-8">
                        <CardContent className="flex flex-col gap-8 p-0 h-full">
                          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter opacity-40">
                            <Triangle className="w-6 h-6 fill-current" /> LOGOSIPUM
                          </div>
                          
                          <p className="text-foreground leading-relaxed font-medium md:text-lg flex-1">
                            {item.review}
                          </p>
                          
                          <div className="flex flex-col gap-1 mt-auto">
                            <span className="font-bold text-[15px]">{item.author}</span>
                            <span className="text-sm text-muted-foreground">{item.role}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex md:hidden gap-4 mt-8 justify-center">
                <CarouselPrevious className="static translate-y-0 h-12 w-12" />
                <CarouselNext className="static translate-y-0 h-12 w-12" />
              </div>
            </motion.div>
          </motion.div>
        </Carousel>
      </div>
    </section>
  )
}
