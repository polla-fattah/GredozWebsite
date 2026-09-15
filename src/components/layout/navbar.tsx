"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { ThemeToggle } from "../ThemeToggle"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function Navbar() {
  const t = useTranslations("Navbar")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4">
      <div className="container flex h-14 max-w-5xl mx-auto items-center justify-between px-6 rounded-full border border-border/40 bg-background/70 backdrop-blur-md shadow-sm">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4 md:gap-2">
          <Sheet>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden rounded-full")}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/projects" className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary">
                  {t("projects")}
                </Link>
                <Link href="/#about" className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary">
                  {t("about")}
                </Link>
                <Link href="/#services" className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary">
                  {t("services")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl tracking-tighter">
            NexStudio
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-[13px] tracking-wide uppercase font-semibold text-muted-foreground">
          <Link href="/projects" className="transition-colors hover:text-foreground">
            {t("projects")}
          </Link>
          <Link href="/#about" className="transition-colors hover:text-foreground">
            {t("about")}
          </Link>
          <Link href="/#services" className="transition-colors hover:text-foreground">
            {t("services")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <Link href="/#footer" className={cn(buttonVariants({ variant: "default" }), "hidden md:inline-flex rounded-full px-6 text-[13px] tracking-wide font-semibold bg-foreground text-background hover:bg-foreground/90")}>
            {t("getStarted")}
          </Link>
        </div>
      </div>
    </header>
  )
}
