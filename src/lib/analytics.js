// Lightweight GA4 tracking hooks. Each call is a no-op when gtag isn't present
// (e.g. local dev, or GA4 not yet wired into index.html), so instrumentation
// never breaks the page.

function sendEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

export function trackCtaClick(tier, path) {
  sendEvent('cta_click', { tier, path })
}

export function trackFormSubmit(tier) {
  sendEvent('form_submit', { tier })
}

export function trackScrollDepth(sectionId) {
  sendEvent('scroll_depth', { section: sectionId })
}

export function trackVideoPlay(videoId) {
  sendEvent('video_play', { video: videoId })
}
