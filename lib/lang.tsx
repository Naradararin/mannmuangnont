'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'th' | 'en'

interface LangCtx {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangCtx>({ lang: 'th', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('th')
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => (l === 'th' ? 'en' : 'th')) }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
