import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { findTeamMember, TEAM_MEMBERS_DATA } from "@/lib/team-data"

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  for (const m of TEAM_MEMBERS_DATA) {
    params.push({ slug: m.slug })
    for (const alias of m.aliases) {
      if (alias !== m.slug) {
        params.push({ slug: alias })
      }
    }
  }
  return params
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const member = findTeamMember(slug)

  if (!member) return {}

  const t = await getTranslations({ locale, namespace: "TeamDetails" })
  const title = t(`${member.slug}.title`)
  const role = t(`${member.slug}.role`)
  const description = t(`${member.slug}.overviewP1`)

  return {
    title: `${title} — ${role} | Gredoz`,
    description,
    openGraph: {
      title: `${title} — ${role}`,
      description,
      images: [{ url: member.image, alt: title }]
    },
    twitter: {
      title: `${title} — ${role}`,
      description,
      images: [member.image]
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
