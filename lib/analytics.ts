'use client'

type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
  }
}

export type ContactChannel = 'call' | 'line' | 'facebook'

/**
 * Fires a GA4 "contact_click" event whenever someone clicks a call, LINE, or
 * Facebook link. Safe to call even if gtag.js hasn't finished loading yet
 * (e.g. slow connection, ad blocker) — it just silently no-ops instead of
 * throwing.
 *
 * `location` records *where on the site* the click happened (navbar, footer,
 * booking section, mobile menu, ...) so the GA4 report can show which spot
 * actually drives contact clicks, not just how many happened in total.
 */
export function trackContactClick(channel: ContactChannel, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_click', {
      channel,
      link_location: location,
    })
  }
}

/** Derives the channel from a href, so call sites don't need to hardcode it. */
export function channelFromHref(href: string): ContactChannel {
  if (href.startsWith('tel:')) return 'call'
  if (href.includes('line.me')) return 'line'
  return 'facebook'
}
