import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to #section links (also across pages) and to the top on page change. */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    // Wait a frame so the target page has rendered
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
      // Move keyboard focus to the section for screen-reader / keyboard users
      const heading = el.querySelector('h1, h2')
      if (heading) {
        heading.setAttribute('tabindex', '-1')
        heading.focus({ preventScroll: true })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
