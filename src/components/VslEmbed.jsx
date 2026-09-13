import { Play } from 'lucide-react'

/**
 * Responsive 16:9 video slot for the top-of-page VSL.
 *
 * Pass `embedUrl` (a Wistia/Vimeo/YouTube embed URL, or your own hosted
 * player's embed src) once the video is ready, and it renders as a live
 * iframe. Until then it shows a placeholder so the page still looks
 * intentional rather than broken.
 */
export default function VslEmbed({ embedUrl, posterUrl, title = 'Program overview video' }) {
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
}
