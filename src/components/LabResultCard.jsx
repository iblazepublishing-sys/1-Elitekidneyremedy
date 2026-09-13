import { ImageOff, TrendingUp } from 'lucide-react'

/**
 * One verified lab-result slot. Pass `image` (a URL) once the real
 * screenshot/chart is available; until then it renders a placeholder so
 * the gallery still reads as intentional, not broken.
 */
export default function LabResultCard({ name, metric, change, note, image }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-100">
      {image ? (
        <img src={image} alt={`${name}'s ${metric} lab result`} className="h-48 w-full object-cover" />
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
