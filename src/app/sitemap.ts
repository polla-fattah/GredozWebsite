import { MetadataRoute } from 'next'
import { TEAM_MEMBERS_DATA } from '@/lib/team-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gredoz.com'
  const locales = ['en', 'ku', 'ar']
  
  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/team',
    '/contact',
  ]

  const memberRoutes = TEAM_MEMBERS_DATA.map((member) => `/team/${member.slug}`)
  const allRoutes = [...staticRoutes, ...memberRoutes]
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  allRoutes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : route.startsWith('/team/') ? 'monthly' : 'weekly',
        priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
      })
    })
  })

  return sitemapEntries
}
