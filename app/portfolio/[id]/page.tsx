import { notFound } from 'next/navigation'
import { PORTFOLIO, getRecommended } from '@/lib/portfolio-data'
import { ProjectDetail } from '@/components/sections/project-detail'

// Prerender every project that doesn't have a bespoke page (i.e. no detailHref).
export function generateStaticParams() {
  return PORTFOLIO.filter(e => !e.detailHref).map(e => ({ id: e.id }))
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

  return <ProjectDetail entry={entry} recommended={getRecommended(entry)} />
}
