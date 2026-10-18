import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Reveal from './components/Reveal.jsx'
import VslEmbed from './components/VslEmbed.jsx'
import VslChapters from './components/VslChapters.jsx'
import logo from './assets/logo.png'
import { trackCtaClick } from './lib/analytics.js'
import {
  heroEyebrow,
  heroHeadlineLine1,
  heroHeadlineLine2,
  heroSubheadline,
  vslSrc,
  vslPoster,
  vslChapters,
  ctaLinks,
} from './data/content.js'

/**
 * The short "call funnel" / VSL registration page. Deliberately minimal:
 * logo, the same headline and subheadline as the main landing page, the
 * VSL with its chapter list, and a single Apply Now button that sends
 * people to the Typeform application. Nothing else — anything a visitor
 * needs beyond that point (booking a call, next steps) is handled by
 * Typeform's own post-submit flow, not this page.
 */
export default function CallFunnelPage() {
  const videoRef = useRef(null)

  const seekTo = (chapter) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = chapter.seconds
    video.play()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy to-teal-dark text-white">
      <header className="px-5 py-6 sm:px-10 sm:py-8">
        <div className="mx-auto flex max-w-5xl justify-center">
          <img src={logo} alt="Kidney Remedy Elite" className="h-9 w-auto sm:h-11" />
        </div>
      </header>

      <main className="px-5 pb-20 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mint ring-1 ring-white/20">
              <Sparkles className="h-3.5 w-3.5" />
              {heroEyebrow}
            </span>

            <h1 className="mt-6 text-h1-mobile sm:text-h1-desktop text-white text-balance">
              {heroHeadlineLine1}
              <br className="hidden sm:block" /> {heroHeadlineLine2}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-200">
              {heroSubheadline}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <VslEmbed ref={videoRef} src={vslSrc} posterUrl={vslPoster} />
            <VslChapters chapters={vslChapters} onSeek={seekTo} />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <a
              href={ctaLinks.typeform}
              onClick={() => trackCtaClick('call-funnel', 'apply_now')}
              className="group inline-flex items-center gap-2 rounded-lg bg-teal px-10 py-4 text-base font-bold text-white shadow-premium transition-colors duration-200 hover:bg-teal-dark"
            >
              Apply Now
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-gray-300">
              Takes 2 minutes. We review every application personally.
            </p>
          </div>
        </Reveal>
      </main>

      <footer className="px-5 pb-10 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] leading-relaxed text-gray-400">
            These statements have not been evaluated by the FDA. This program is
            educational and not medical advice. Consult with your nephrologist before
            starting.
          </p>
          <p className="mt-3 text-[11px] text-gray-500">
            &copy; {new Date().getFullYear()} Cosmic Wellness Botanical Health Organization
          </p>
        </div>
      </footer>
    </div>
  )
}
