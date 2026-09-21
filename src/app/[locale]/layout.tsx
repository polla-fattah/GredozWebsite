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
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL("https://gredoz.com"),
    title: {
      template: `%s | ${t("defaultTitle")}`,
      default: t("defaultTitle"),
    },
    description: t("defaultDescription"),
    keywords: ["software development", "web apps", "mobile apps", "Gredoz", "Erbil", "Kurdistan", "UI/UX design", "digital products"],
    authors: [{ name: "Gredoz" }],
    creator: "Gredoz",
    publisher: "Gredoz",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/en",
        "ar": "/ar",
        "ku": "/ku",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: {
        template: `%s | ${t("defaultTitle")}`,
        default: t("defaultTitle"),
      },
      description: t("defaultDescription"),
      url: `https://gredoz.com/${locale}`,
      siteName: t("defaultTitle"),
      locale: locale,
      type: "website",
      images: [
        {
          url: "/images/isometric_financial_dashboard.jpg",
          width: 1200,
          height: 630,
          alt: "Gredoz Software Solutions",
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: {
        template: `%s | ${t("defaultTitle")}`,
        default: t("defaultTitle"),
      },
      description: t("defaultDescription"),
      images: ["/images/isometric_financial_dashboard.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
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
              defaultTheme="dark"
              enableSystem={false}
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
