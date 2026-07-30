import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PORTFOLIO, getRecommended, type PortfolioEntry } from '@/lib/portfolio-data'
import { ProjectDetail } from '@/components/sections/project-detail'

// Prerender every project that doesn't have a bespoke page (i.e. no detailHref).
export function generateStaticParams() {
  return PORTFOLIO.filter(e => !e.detailHref).map(e => ({ id: e.id }))
}

/** Title from real fields only: categories + property type + location + province. */
function entryTitle(e: PortfolioEntry): string {
  const cats = e.mainCategories.map(c => c.th).join(' ')
  const property = e.propertyType.th !== '-' ? ` ${e.propertyType.th}` : ''
  const loc = e.locationKind === 'descriptor' ? '' : ` ${e.location.th}`
  return `${cats}${property}${loc} ${e.province.th} — ผลงานติดตั้งจริง`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const entry = PORTFOLIO.find(e => e.id === id)
  if (!entry || entry.detailHref) return {}

  return {
    title: entryTitle(entry),
    description: entry.description,
    alternates: { canonical: `/portfolio/${entry.id}` },
    openGraph: {
      title: entryTitle(entry),
      description: entry.description,
      images: entry.imageUrls.length ? [{ url: entry.imageUrls[0] }] : undefined,
    },
  }
}

function entryJsonLd(entry: PortfolioEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: entryTitle(entry),
    description: entry.description,
    dateCreated: entry.date,
    locationCreated: {
      '@type': 'Place',
      name: `${entry.location.th} ${entry.province.th}`,
    },
    image: entry.imageUrls.map(u => `https://maanmuangnont.com${u}`),
    creator: {
      '@type': 'Organization',
      name: 'ม่านเมืองนนท์',
      url: 'https://maanmuangnont.com',
    },
  }
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const entry = PORTFOLIO.find(e => e.id === id)

  // Unknown id, or an entry that owns a custom page (e.g. Thep Rak 49) — the
  // latter is served from its own route, not this generic template.
  if (!entry || entry.detailHref) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entryJsonLd(entry)) }}
      />
      <ProjectDetail entry={entry} recommended={getRecommended(entry)} />
    </>
  )
}
