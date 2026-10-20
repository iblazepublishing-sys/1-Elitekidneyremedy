import { ImageOff, TrendingUp, Expand } from 'lucide-react'

/**
 * One verified lab-result slot. Pass `image` (the cropped thumbnail) and
 * `fullImage` (the complete report) once the real scan/chart is available;
 * until then it renders a placeholder so the gallery still reads as
 * intentional, not broken.
 */
export default function LabResultCard({ name, metric, change, note, image, fullImage }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-100">
      {image ? (
        <a
          href={fullImage ?? image}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
        >
          <img
            src={image}
            alt={`${name}'s ${metric} lab report`}
            className="h-48 w-full object-cover object-top"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-200 group-hover:bg-navy/40 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-navy">
              <Expand className="h-3.5 w-3.5" />
              View Full Report
            </span>
          </span>
        </a>
      ) : (
        <div className="flex h-48 w-full flex-col items-center justify-center gap-2 border-b-2 border-dashed border-gray-200 bg-cloud text-gray-400">
          <ImageOff className="h-7 w-7" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            Lab result image goes here
          </span>
        </div>
      )}
      <div className="p-5">
        <p className="font-extrabold text-navy leading-tight">{name}</p>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-mint px-3 py-2">
          <TrendingUp className="h-4 w-4 flex-shrink-0 text-teal-dark" />
          <p className="text-sm font-bold text-teal-dark">
            {metric}: {change}
          </p>
        </div>
        <p className="mt-2 text-xs text-gray-500">{note}</p>
      </div>
    </div>
  )
}
