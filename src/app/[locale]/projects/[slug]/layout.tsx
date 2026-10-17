import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

const VALID_SLUGS = [
  "financial-management",
  "ecommerce-dashboard",
  "enterprise-logistics",
  "healthcare-platform",
]

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string, slug: string }> 
}): Promise<Metadata> {
  const { locale, slug } = await params;
  
  const PROJECT_IMAGES: Record<string, string> = {
    "financial-management": "/images/isometric_financial_dashboard.jpg",
    "ecommerce-dashboard": "/images/isometric_ecommerce_dashboard.jpg",
    "enterprise-logistics": "/images/isometric_mobile_app.jpg",
    "healthcare-platform": "/images/isometric_ai_platform.jpg",
  }

  const isValidProject = Object.keys(PROJECT_IMAGES).includes(slug)
  if (!isValidProject) return {}
  
  const t = await getTranslations({ locale, namespace: "ProjectDetails" });
  
  const title = t(`${slug}.title`);
  const description = t(`${slug}.challenge`);
  
  const imageSrc = PROJECT_IMAGES[slug] || "/images/isometric_financial_dashboard.jpg"

  return {
    title,
    description,
    openGraph: { 
      title, 
      description,
      images: [{ url: imageSrc, width: 1200, height: 630, alt: title }]
    },
    twitter: { 
      title, 
      description,
      images: [imageSrc]
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
