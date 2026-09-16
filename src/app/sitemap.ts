import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gredoz.com'
  const locales = ['en', 'ku', 'ar']
  
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/projects/financial-management',
    '/projects/ecommerce-dashboard',
  ]
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // For each route, we create an entry for each locale
  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemapEntries
}
