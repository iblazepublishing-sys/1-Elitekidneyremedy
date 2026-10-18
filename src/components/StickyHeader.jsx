import { useEffect, useState } from 'react'
import { trackCtaClick } from '../lib/analytics.js'
import logo from '../assets/logo.png'

export default function StickyHeader({ onApply }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80 shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <img src={logo} alt="Kidney Remedy Elite" className="h-8 w-auto sm:h-10" />
          <button
            type="button"
            onClick={() => {
              trackCtaClick('mastery', 'sticky_header')
              onApply('Mastery')
            }}
            className="flex-shrink-0 rounded-lg bg-teal px-4 py-2 text-xs sm:text-sm font-bold text-white transition-colors duration-200 hover:bg-teal-dark"
          >
            Apply for Program
          </button>
        </div>
      </div>
    </header>
  )
}
