"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/routing"
import { ThemeToggle } from "../ThemeToggle"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { buttonVariants } from "@/components/ui/button"
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Smooth gradient blur background */}
      <div 
        className={cn(
          "absolute top-0 left-0 right-0 z-[-1] pointer-events-none transition-all duration-500",
          isScrolled ? "h-32 bg-background/20 backdrop-blur-xl" : "h-28 bg-transparent backdrop-blur-md"
        )}
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 25%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 25%, transparent 100%)"
        }}
      />
      <Drawer>
        <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-2 drop-shadow-sm">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo/base-light-mode.png" 
                alt="Gredoz Logo" 
                width={140}
                height={32}
                fetchPriority="high"
                decoding="async"
                className="block dark:hidden h-8 w-auto hover:opacity-80 transition-opacity" 
              />
              <img 
                src="/logo/base-dark-mode.png" 
                alt="Gredoz Logo" 
                width={140}
                height={32}
                fetchPriority="high"
                decoding="async"
                className="hidden dark:block h-8 w-auto hover:opacity-80 transition-opacity" 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-[13px] tracking-wide uppercase font-semibold drop-shadow-sm">
            <Link href="/" className={cn("transition-colors hover:text-foreground", isActive("/") ? "text-foreground" : "text-foreground/80")}>
              {t("home")}
            </Link>
            <Link href="/services" className={cn("transition-colors hover:text-foreground", isActive("/services") ? "text-foreground" : "text-foreground/80")}>
              {t("services")}
            </Link>
            <Link href="/about" className={cn("transition-colors hover:text-foreground", isActive("/about") ? "text-foreground" : "text-foreground/80")}>
              {t("about")}
            </Link>
            <Link href="/team" className={cn("transition-colors hover:text-foreground", isActive("/team") ? "text-foreground" : "text-foreground/80")}>
              {t("team")}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-2 drop-shadow-sm">
            <ThemeToggle />
            <LanguageSwitcher />
            <DrawerTrigger className={cn(buttonVariants({ variant: "outline", size: "icon" }), "md:hidden shrink-0")}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </DrawerTrigger>
            <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "hidden md:inline-flex rounded-xl px-6 h-10 text-[13px] tracking-wide font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all")}>
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
                <Link href="/services" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/services") ? "text-foreground" : "text-muted-foreground")}>
                  {t("services")}
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href="/about" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/about") ? "text-foreground" : "text-muted-foreground")}>
                  {t("about")}
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link href="/team" className={cn("block px-2 py-1 text-2xl font-medium transition-colors hover:text-foreground", isActive("/team") ? "text-foreground" : "text-muted-foreground")}>
                  {t("team")}
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
