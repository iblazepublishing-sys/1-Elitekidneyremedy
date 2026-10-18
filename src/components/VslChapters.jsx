import { Play } from 'lucide-react'

/**
 * Clickable chapter list for the VSL. Clicking a chapter seeks the video
 * when `videoRef` is a plain HTML5 <video> element; it's a no-op (still
 * fine as a visual table of contents) when the video is an iframe embed,
 * since cross-origin iframes can't be seeked from the parent page.
 */
export default function VslChapters({ chapters, onSeek }) {
  return (
    <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-white/5 p-5 sm:p-6 ring-1 ring-white/10">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-mint">
        In This Video
      </p>
      <ol className="space-y-1">
        {chapters.map((chapter) => (
          <li key={chapter.time}>
            <button
              type="button"
              onClick={() => onSeek?.(chapter.time)}
              className="group flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-150 hover:bg-white/10"
            >
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors duration-150 group-hover:bg-teal group-hover:text-white">
                <Play className="h-3 w-3 translate-x-px" fill="currentColor" />
              </span>
              <span className="font-mono text-xs text-gray-400">{chapter.time}</span>
              <span className="text-sm text-gray-100">{chapter.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
