import type { MetadataRoute } from 'next'
import { PORTFOLIO, detailPath } from '@/lib/portfolio-data'

const BASE = 'https://mannmuangnont.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolio = PORTFOLIO.filter(e => !e.isPlaceholder).map(e => ({
    url: `${BASE}${detailPath(e)}`,
    lastModified: new Date(e.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/curtains`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/wallpaper`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
    ...portfolio,
  ]
}
