import { forwardRef } from 'react'
import { Play } from 'lucide-react'

/**
 * Responsive video slot for a VSL. Defaults to 16:9 (horizontal) — pass
 * `vertical` for a 9:16 (portrait) player, used by the video carousel
 * further down the page. Three states:
 *   1. `src` set: a self-hosted video file (e.g. your Shopify CDN .mp4):
 *      renders a native <video>. `ref` is forwarded to the <video> element
 *      so a parent (e.g. VslChapters) can seek it directly.
 *   2. `embedUrl` set instead: a Wistia/Vimeo/YouTube embed URL, renders
 *      as an iframe. Chapter seeking can't reach into a cross-origin
 *      iframe, so VslChapters just acts as a visual table of contents.
 *   3. Neither set: a placeholder, so the page still looks intentional
 *      rather than broken while the video isn't wired up yet.
 */
const VslEmbed = forwardRef(function VslEmbed(
  { src, embedUrl, posterUrl, vertical = false, title = 'Program overview video' },
  ref,
) {
  const containerClass = `relative mx-auto w-full overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/10 ${
    vertical ? 'max-w-xs sm:max-w-sm' : 'max-w-3xl'
  }`
  const aspectClass = vertical ? 'aspect-[9/16]' : 'aspect-video'

  if (src) {
    return (
      <div className={containerClass}>
        <div className={aspectClass}>
          <video
            ref={ref}
            src={src}
            poster={posterUrl}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full bg-navy-light object-cover"
          >
            Your browser doesn&rsquo;t support embedded video. You can{' '}
            <a href={src} className="underline">
              download the video
            </a>{' '}
            instead.
          </video>
        </div>
      </div>
    )
  }

  if (embedUrl) {
    return (
      <div className={containerClass}>
        <div className={aspectClass}>
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={containerClass}>
      <div
        className={`relative flex items-center justify-center bg-navy-light ${aspectClass}`}
        style={
          posterUrl
            ? { backgroundImage: `url(${posterUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : undefined
        }
      >
        <div aria-hidden="true" className="absolute inset-0 bg-navy-light/40" />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal shadow-lg">
            <Play className="h-7 w-7 translate-x-0.5 text-white" fill="currentColor" />
          </span>
          <p className="px-6 text-sm font-semibold text-white/90">
            Your program overview video goes here
          </p>
        </div>
      </div>
    </div>
  )
})

export default VslEmbed
