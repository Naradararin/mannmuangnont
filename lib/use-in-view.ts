'use client'

import { useEffect, useRef, useState } from 'react'

/** True once the ref'd element has entered the viewport (or come within `rootMargin`). Latches on — never reverts to false. */
export function useInView<T extends Element>(rootMargin = '400px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView || !ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, rootMargin])

  return { ref, inView }
}
