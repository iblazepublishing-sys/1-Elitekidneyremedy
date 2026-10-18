import { forwardRef } from 'react'
import { Play } from 'lucide-react'

/**
 * Responsive 16:9 video slot for the VSL. Three states:
 *   1. `src` set: a self-hosted video file (e.g. your Shopify CDN .mp4) —
 *      renders a native <video>. `ref` is forwarded to the <video> element
 *      so a parent (e.g. VslChapters) can seek it directly.
 *   2. `embedUrl` set instead: a Wistia/Vimeo/YouTube embed URL — renders
 *      as an iframe. Chapter seeking can't reach into a cross-origin
 *      iframe, so VslChapters just acts as a visual table of contents.
 *   3. Neither set: a placeholder, so the page still looks intentional
 *      rather than broken while the video isn't wired up yet.
 */
const VslEmbed = forwardRef(function VslEmbed(
  { src, embedUrl, posterUrl, title = 'Program overview video' },
  ref,
) {
  if (src) {
    return (
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/10">
        <div className="aspect-video">
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
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/10">
        <div className="aspect-video">
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
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/10">
      <div
        className="relative flex aspect-video items-center justify-center bg-navy-light"
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
