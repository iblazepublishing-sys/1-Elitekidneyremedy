import { CreditCard, Banknote, CalendarCheck, ArrowUpRight } from 'lucide-react'
import { trackCtaClick } from '../lib/analytics.js'

const PATHS = [
  {
    key: 'store',
    icon: CreditCard,
    label: 'Pay In Full',
    caption: 'Head straight to checkout on our site. Instant access, nothing else to schedule.',
  },
  {
    key: 'financing',
    icon: Banknote,
    label: 'Break It Into Payments',
    caption: 'Split your investment into interest-free payments through Affirm or WHOP.',
  },
  {
    key: 'call',
    icon: CalendarCheck,
    label: 'Talk To Us First',
    caption: '20 minutes on the calendar. No pressure, just real answers before you decide.',
  },
]

export default function NextStepsSection({ tiers, ctaLinks, selectedTier, onSelectTier }) {
  const activeTier = tiers.find((t) => t.tier === selectedTier) ?? tiers[0]
  const tierLinks = ctaLinks.tiers[activeTier.tier]
  const calendarHref = `${ctaLinks.calendar}${
    ctaLinks.calendar.includes('?') ? '&' : '?'
  }tier=${encodeURIComponent(activeTier.tier)}`

  const hrefFor = (key) => (key === 'call' ? calendarHref : tierLinks[key])

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {tiers.map((t) => (
          <button
            key={t.tier}
            type="button"
            onClick={() => onSelectTier(t.tier)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors duration-200 ${
              activeTier.tier === t.tier
                ? 'bg-navy text-white'
                : 'bg-white text-gray-500 ring-1 ring-gray-200 hover:text-navy'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-gray-500">
        {activeTier.whoChooses}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {PATHS.map(({ key, icon: Icon, label, caption }) => (
          <a
            key={key}
            href={hrefFor(key)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick(activeTier.tier, `next_steps_${key}`)}
            className="group flex h-full flex-col rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-gray-100 transition-shadow duration-200 hover:shadow-premium"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
              <Icon className="h-6 w-6 text-teal-dark" />
            </span>
            <span className="mt-4 inline-flex items-center justify-center gap-1 text-base font-extrabold text-navy">
              {label}
              <ArrowUpRight className="h-4 w-4 text-teal opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </span>
            <span className="mt-2 flex-1 text-sm text-gray-500">{caption}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
