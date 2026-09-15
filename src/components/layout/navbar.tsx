"use client"

import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/routing"
import { ThemeToggle } from "../ThemeToggle"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer"

export function Navbar() {
  const t = useTranslations("Navbar")
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4">
      <Drawer>
        <div className="container flex h-14 max-w-5xl mx-auto items-center justify-between px-6 rounded-full border border-border/40 bg-background/70 backdrop-blur-md shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-2">
            <Link href="/" className="font-bold text-xl tracking-tighter">
              NexStudio
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-[13px] tracking-wide uppercase font-semibold">
            <Link href="/projects" className={cn("transition-colors hover:text-foreground", isActive("/projects") ? "text-foreground" : "text-muted-foreground")}>
              {t("projects")}
            </Link>
            <Link href="/about" className={cn("transition-colors hover:text-foreground", isActive("/about") ? "text-foreground" : "text-muted-foreground")}>
              {t("about")}
            </Link>
            <Link href="/services" className={cn("transition-colors hover:text-foreground", isActive("/services") ? "text-foreground" : "text-muted-foreground")}>
              {t("services")}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <DrawerTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden rounded-full")}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </DrawerTrigger>
            <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "hidden md:inline-flex rounded-full px-6 text-[13px] tracking-wide font-semibold bg-foreground text-background hover:bg-foreground/90")}>
              {t("getStarted")}
            </Link>
          </div>
        </div>

        <DrawerContent>
          <div className="px-6 pb-8 pt-4">
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <nav className="flex flex-col gap-6 mt-4">
              <DrawerClose asChild>
                <Link href="/" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/") ? "text-foreground" : "text-muted-foreground")}>
                  {t("home")}
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href="/projects" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/projects") ? "text-foreground" : "text-muted-foreground")}>
                  {t("projects")}
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href="/about" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/about") ? "text-foreground" : "text-muted-foreground")}>
                  {t("about")}
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href="/services" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/services") ? "text-foreground" : "text-muted-foreground")}>
                  {t("services")}
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href="/contact" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/contact") ? "text-foreground" : "text-muted-foreground")}>
                  {t("getStarted")}
                </Link>
              </DrawerClose>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
