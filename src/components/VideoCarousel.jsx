import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import VslEmbed from './VslEmbed.jsx'

/**
 * Horizontally scrollable, snap-aligned carousel of vertical (9:16) VSL
 * players. Arrow buttons (desktop) and native touch-swipe (mobile) both
 * work since scrolling is just... scrolling; dots reflect and control the
 * active slide.
 */
export default function VideoCarousel({ videos }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const children = Array.from(track.children)
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let closestDistance = Infinity
      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2
        const distance = Math.abs(childCenter - center)
        if (distance < closestDistance) {
          closestDistance = distance
          closest = index
        }
      })
      setActiveIndex(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToIndex = (index) => {
    const track = trackRef.current
    const child = track?.children[index]
    child?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const scrollByStep = (direction) => {
    trackRef.current?.scrollBy({ left: direction * (trackRef.current.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="flex items-center gap-3 sm:gap-5">
        {videos.length > 1 && (
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            aria-label="Previous video"
            className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <div key={video.title} className="w-full max-w-xs flex-shrink-0 snap-start sm:max-w-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-mint">
                {video.title}
              </p>
              <VslEmbed src={video.src} posterUrl={video.posterUrl} title={video.title} vertical />
            </div>
          ))}
        </div>

        {videos.length > 1 && (
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            aria-label="Next video"
            className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {videos.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {videos.map((video, index) => (
            <button
              key={video.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${video.title}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === activeIndex ? 'w-6 bg-teal' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
