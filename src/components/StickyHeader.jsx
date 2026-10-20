import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

export default function StickyHeader() {
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
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:px-8">
          <img src={logo} alt="Kidney Remedy Elite" className="h-8 w-auto sm:h-10" />
        </div>
      </div>
    </header>
  )
}
