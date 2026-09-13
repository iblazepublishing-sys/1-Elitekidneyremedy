import { TrendingUp, Quote } from 'lucide-react'

export default function CaseStudyCard({ name, role, timeline, result, quote }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 sm:p-7 shadow-card ring-1 ring-gray-100">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-extrabold text-navy leading-tight">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <span className="flex-shrink-0 rounded-full bg-mint px-3 py-1 text-xs font-bold text-teal-dark">
          {timeline}
        </span>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg bg-cloud px-3 py-2.5">
        <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
        <p className="text-sm font-semibold text-navy">{result}</p>
      </div>

      <div className="mt-4 flex-1">
        <Quote className="h-5 w-5 text-teal/40" />
        <p className="mt-1 text-sm italic leading-relaxed text-gray-600">&ldquo;{quote}&rdquo;</p>
      </div>
    </div>
  )
}
