import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string, slug: string }> 
}): Promise<Metadata> {
  const { locale, slug } = await params;
  
  const isValidProject = ["financial-management", "ecommerce-dashboard"].includes(slug)
  if (!isValidProject) return {}
  
  const t = await getTranslations({ locale, namespace: "ProjectDetails" });
  
  const title = t(`${slug}.title`);
  const description = t(`${slug}.challenge`);
  
  const imageSrc = slug === "financial-management" 
    ? "/images/isometric_financial_dashboard.jpg" 
    : "/images/isometric_ecommerce_dashboard.jpg"

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
