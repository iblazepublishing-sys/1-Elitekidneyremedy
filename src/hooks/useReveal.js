import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element with a fade/slide-up animation the first time it
 * enters the viewport. Backed by IntersectionObserver so it costs nothing
 * for content the visitor never scrolls to.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced-motion users by just showing content immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/**
 * Fires a callback once when a section scrolls into view — used for
 * scroll-depth / engagement tracking (GA4).
 */
export function useScrollDepthTracking(sectionId, onEnter) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter(sectionId)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [sectionId, onEnter])

  return ref
}
