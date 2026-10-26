import { useEffect } from 'react'

/**
 * Adds a subtle fade-up to elements with the `.reveal` class as they scroll
 * into view. Skipped entirely for visitors who prefer reduced motion.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    const observe = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
    observe()

    // Pick up cards added later (filters, "show more", language switch)
    const mutation = new MutationObserver(observe)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
