import { Check, Star, Lock } from 'lucide-react'
import { trackCtaClick } from '../lib/analytics.js'

export default function PricingCard({
  tier,
  name,
  term,
  positioning,
  features,
  whoChooses,
  featured = false,
  ctaLabel,
  onApply,
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
        featured
          ? 'bg-navy text-white shadow-premium ring-2 ring-teal lg:-translate-y-3'
          : 'bg-white text-ink shadow-card ring-1 ring-gray-100'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-teal px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
          <Star className="h-3.5 w-3.5" fill="currentColor" />
          Most Chosen
        </div>
      )}

      <p
        className={`text-xs font-bold uppercase tracking-widest ${
          featured ? 'text-mint' : 'text-teal'
        }`}
      >
        {positioning}
      </p>
      <h3 className={`mt-2 text-2xl font-extrabold ${featured ? 'text-white' : 'text-navy'}`}>
        {name}
      </h3>

      <div
        className={`mt-4 flex items-center gap-2.5 rounded-lg px-4 py-3 ${
          featured ? 'bg-white/10' : 'bg-cloud'
        }`}
      >
        <Lock className={`h-4 w-4 flex-shrink-0 ${featured ? 'text-mint' : 'text-teal'}`} />
        <div>
          <p className={`text-sm font-bold ${featured ? 'text-white' : 'text-navy'}`}>
            Investment revealed on your call
          </p>
          <p className={`text-xs ${featured ? 'text-gray-300' : 'text-gray-500'}`}>
            {term} program &middot; financing available
          </p>
        </div>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm sm:text-[15px]">
            <Check
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${featured ? 'text-mint' : 'text-teal'}`}
            />
            <span className={featured ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>

      <p
        className={`mt-6 text-xs italic ${featured ? 'text-gray-300' : 'text-gray-500'}`}
      >
        {whoChooses}
      </p>

      <button
        type="button"
        onClick={() => {
          trackCtaClick(tier, 'pricing_card')
          onApply(tier)
        }}
        className={`mt-6 w-full rounded-lg px-6 py-3.5 text-base font-bold transition-colors duration-200 ${
          featured
            ? 'bg-teal text-white hover:bg-teal-dark'
            : 'bg-navy text-white hover:bg-navy-light'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  )
}
