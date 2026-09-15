import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import "lenis/dist/lenis.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import SmoothScroll from "@/components/SmoothScroll";

const arkanGraphik = localFont({
  src: [
    {
      path: "../../fonts/Arkan_Graphik-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Arkan_Graphik-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-arkan",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await getTranslations({ locale: (await params).locale, namespace: "Navbar" });
  return {
    title: "NexStudio Clone",
    description: "Generated for the NexStudio design system",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ar" | "ku")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const dir = locale === "ar" || locale === "ku" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${arkanGraphik.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-foreground selection:text-background`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </ThemeProvider>
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
