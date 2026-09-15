"use client"

import * as React from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const locales = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "ku", label: "Kurdî" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(buttonVariants({ variant: "outline", size: "icon" }), "shrink-0")}>
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchLocale(l.code)}
            className={locale === l.code ? "bg-muted" : ""}
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
