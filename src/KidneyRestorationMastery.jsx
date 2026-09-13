import { useCallback, useState } from 'react'
import {
  Building2,
  Hourglass,
  Award,
  Salad,
  Dumbbell,
  Droplet,
  UserRound,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  DollarSign,
  BarChart3,
} from 'lucide-react'

import Reveal from './components/Reveal.jsx'
import FAQItem from './components/FAQItem.jsx'
import PricingCard from './components/PricingCard.jsx'
import CaseStudyCard from './components/CaseStudyCard.jsx'
import ApplicationForm from './components/ApplicationForm.jsx'
import StickyHeader from './components/StickyHeader.jsx'
import { useScrollDepthTracking } from './hooks/useReveal.js'
import { trackCtaClick, trackScrollDepth } from './lib/analytics.js'
import {
  pillars,
  coreInclusions,
  pricingTiers,
  caseStudies,
  fitYes,
  fitNo,
  timeline,
  faqs,
} from './data/content.js'

const PILLAR_ICONS = { Salad, Dumbbell, Droplet, UserRound }

function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${
            light ? 'text-mint' : 'text-teal'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-h2-mobile sm:text-h2-desktop ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function TrackedSection({ id, className = '', children }) {
  const ref = useScrollDepthTracking(id, trackScrollDepth)
  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  )
}

export default function KidneyRestorationMastery() {
  const [selectedTier, setSelectedTier] = useState('Mastery')

  const scrollToApply = useCallback((tier) => {
    if (tier) setSelectedTier(tier)
    const el = document.getElementById('apply')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-cloud text-ink">
      <StickyHeader onApply={scrollToApply} />

      {/* ============ SECTION 1: HERO ============ */}
      <TrackedSection
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-teal-dark px-5 py-16 sm:px-10 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-mint/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-mint ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5" />
            Elite Medical-Grade Program
          </span>

          <h1 className="mt-6 text-h1-mobile sm:text-h1-desktop text-white text-balance">
            You Didn&rsquo;t Get Here By Accepting Average.
            <br className="hidden sm:block" /> Why Accept Dialysis?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-200">
            Elite medical-grade kidney restoration for serious patients. Premium
            personalization. Measurable results. Guaranteed.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => {
                trackCtaClick('mastery', 'hero')
                scrollToApply('Mastery')
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-bold text-white shadow-premium transition-colors duration-200 hover:bg-teal-dark"
            >
              Apply for Program
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <p className="text-sm text-gray-300">
              Premium commitment levels start at $9k/year. Financing available.
            </p>
            <a
              href="#solution"
              className="mt-2 text-sm font-semibold text-gray-300 underline decoration-teal/50 underline-offset-4 transition-colors hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </TrackedSection>

      {/* ============ SECTION 2: THE PROBLEM ============ */}
      <TrackedSection id="problem" className="px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading title="Standard Care Isn&rsquo;t An Option For You" />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              icon: Building2,
              title: 'Dialysis Isn’t Medicine. It’s Management.',
              body: 'Your nephrologist manages decline. They don’t reverse it. If you were interested in management, you wouldn’t be here. You’re interested in results — reversing kidney decline before dialysis, or exiting it entirely if you’re already there.',
            },
            {
              icon: Hourglass,
              title: 'Your Window Is Real. Your Timeline Is Urgent.',
              body: 'Stage 3: 6–12 months before prevention options close. Stage 4–5: every month on dialysis is productivity, freedom, and health you can’t get back. The window to act is now — most people wait until it’s too late.',
            },
            {
              icon: Award,
              title: 'You Demand Premium In Everything',
              body: 'In business, you invest in premium. In health, you deserve better. Most kidney programs are generic, one-size-fits-all, teach-it-yourself systems. This is built for people who won’t accept anything less than premium.',
            },
          ].map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-card ring-1 ring-gray-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint">
                  <Icon className="h-6 w-6 text-teal-dark" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </TrackedSection>

      {/* ============ SECTION 3: THE SOLUTION ============ */}
      <TrackedSection id="solution" className="bg-white px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="The Solution"
            title="What Elite Kidney Restoration Actually Looks Like"
            subtitle="Same personalized system for Stage 3 prevention as for dialysis exit. Medical partnership. Real accountability. Real results."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[pillar.icon]
            return (
              <Reveal key={pillar.title} delay={index * 100}>
                <div className="h-full rounded-2xl bg-cloud p-7 ring-1 ring-gray-100">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                    <Icon className="h-6 w-6 text-mint" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-navy">{pillar.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </TrackedSection>

      {/* ============ SECTION 4: WHAT'S INCLUDED ============ */}
      <TrackedSection id="included" className="px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            title="The Complete Premium System"
            subtitle="Everything elite patients expect. Nothing you don’t."
          />
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-white p-7 sm:p-10 shadow-card ring-1 ring-gray-100">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {coreInclusions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </TrackedSection>

      {/* ============ SECTION 4B: THREE COMMITMENT LEVELS ============ */}
      <TrackedSection id="pricing" className="bg-white px-5 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Investment"
            title="Choose Your Commitment Level"
            subtitle="Same core program. Different intensity of access and oversight."
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.tier} delay={index * 100}>
              <PricingCard {...tier} onApply={scrollToApply} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-500">
            Financing available on all tiers through Affirm and WHOP. Choose based on
            commitment level, not budget.
          </p>
        </Reveal>
      </TrackedSection>

      {/* ============ SECTION 5: THE GUARANTEE ============ */}
      <TrackedSection id="guarantee" className="px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-2xl bg-mint p-8 sm:p-12 ring-1 ring-teal/20">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-9 w-9 text-teal-dark" />
              <h2 className="text-h2-mobile sm:text-h2-desktop text-navy">
                50% Money-Back Guarantee
              </h2>
            </div>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
              If you commit to the protocol for 6 months and your eGFR doesn&rsquo;t improve
              measurably, we refund 50%. We put our money where our mouth is. This is how
              confident we are. Most programs won&rsquo;t guarantee results. We do &mdash;
              this is what separates premium programs from the rest.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                'This system is designed specifically for kidney regeneration, not generic wellness.',
                'You’ll have real accountability — monthly or biweekly — not self-directed guessing.',
                'Your protocol adjusts based on your labs every 60 days, not templates or guesses.',
              ].map((text) => (
                <div key={text} className="rounded-xl bg-white/70 p-5 text-sm text-gray-700">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </TrackedSection>

      {/* ============ SECTION 6: REAL RESULTS ============ */}
      <TrackedSection id="results" className="bg-navy px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="What Happens When Serious Patients Commit"
            subtitle="Real executives. Real professionals. Real lab improvements. Real timelines."
            light
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.name} delay={index * 100}>
              <CaseStudyCard {...study} />
            </Reveal>
          ))}
        </div>
      </TrackedSection>

      {/* ============ SECTION 7: WHO THIS IS FOR ============ */}
      <TrackedSection id="fit" className="px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            title="This Program Is For Serious, High-Income Patients"
            subtitle="Premium pricing for premium results. For people who demand excellence."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-7 shadow-card ring-1 ring-gray-100">
              <h3 className="text-lg font-extrabold text-navy">You&rsquo;re a Perfect Fit If:</h3>
              <ul className="mt-4 space-y-3">
                {fitYes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl bg-white p-7 shadow-card ring-1 ring-gray-100">
              <h3 className="text-lg font-extrabold text-navy">
                You&rsquo;re Probably Not a Fit If:
              </h3>
              <ul className="mt-4 space-y-3">
                {fitNo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </TrackedSection>

      {/* ============ SECTION 8: THE REAL COST COMPARISON ============ */}
      <TrackedSection id="cost" className="bg-white px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="The Math"
            title="The Real Cost Comparison For High-Income Patients"
            subtitle="What this investment actually means to your life and business."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border-2 border-gray-200 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Status Quo
              </p>
              <h3 className="mt-2 text-lg font-extrabold text-navy">Manage the Decline</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-500">Cost</dt>
                  <dd className="text-right font-semibold text-gray-700">
                    $0 now → $100k–150k/yr dialysis
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-500">Productivity lost</dt>
                  <dd className="text-right font-semibold text-gray-700">$50k–500k/yr</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-500">Quality of life</dt>
                  <dd className="text-right font-semibold text-gray-700">Declining</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-500">Independence</dt>
                  <dd className="text-right font-semibold text-gray-700">Eroding</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-500">Timeline</dt>
                  <dd className="text-right font-semibold text-gray-700">
                    3–5 yrs to dialysis
                  </dd>
                </div>
                <div className="flex justify-between gap-3 border-t border-gray-200 pt-3">
                  <dt className="font-bold text-gray-500">ROI</dt>
                  <dd className="text-right font-bold text-red-500">Negative</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl bg-navy p-7 text-white shadow-premium ring-2 ring-teal">
              <p className="text-xs font-bold uppercase tracking-widest text-mint">
                Mastery Tier
              </p>
              <h3 className="mt-2 text-lg font-extrabold text-white">$9,000 / Year</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-300">Cost</dt>
                  <dd className="text-right font-semibold text-white">
                    $9,000/yr ($750/mo financed)
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-300">Productivity gained</dt>
                  <dd className="text-right font-semibold text-white">Returns fast</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-300">Quality of life</dt>
                  <dd className="text-right font-semibold text-white">Improving measurably</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-300">Independence</dt>
                  <dd className="text-right font-semibold text-white">Restored</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-gray-300">Timeline</dt>
                  <dd className="text-right font-semibold text-white">6–9 mo to improvement</dd>
                </div>
                <div className="flex justify-between gap-3 border-t border-white/20 pt-3">
                  <dt className="font-bold text-gray-300">ROI</dt>
                  <dd className="text-right font-bold text-mint">50–100x</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full rounded-2xl bg-mint p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-navy">The Math For You</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Dialysis costs $100k–150k annually, plus lost productivity, plus lost
                freedom. Our program costs $9k. If we help you avoid dialysis, it paid for
                itself in less than a month. If we help you exit dialysis? It&rsquo;s the
                best investment you&rsquo;ll ever make. This isn&rsquo;t a cost &mdash; this
                is getting your life and business back.
              </p>
            </div>
          </Reveal>
        </div>
      </TrackedSection>

      {/* ============ SECTION 9: TRANSFORMATION TIMELINE ============ */}
      <TrackedSection id="timeline" className="px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="The Roadmap"
            title="What 6–12 Months Actually Looks Like"
            subtitle="Real timeline. Measurable milestones. Transparent progress."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative border-l-2 border-teal/30 pl-8 sm:pl-10">
            {timeline.map((phase, index) => (
              <Reveal key={phase.range} delay={index * 80} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] sm:-left-[49px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal ring-4 ring-cloud" />
                <p className="text-xs font-bold uppercase tracking-widest text-teal">
                  {phase.range}
                </p>
                <h3 className="mt-1 text-lg font-extrabold text-navy">{phase.title}</h3>
                <ul className="mt-3 space-y-2">
                  {phase.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* ============ SECTION 10: FAQ ============ */}
      <TrackedSection id="faq" className="bg-white px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading title="Premium Program Questions" />
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-cloud px-6 sm:px-8 shadow-card ring-1 ring-gray-100">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </TrackedSection>

      {/* ============ SECTION 11: APPLICATION / ENROLLMENT ============ */}
      <TrackedSection id="apply-section" className="px-5 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Enrollment"
            title="Apply For Your Premium Program"
            subtitle="Limited spots available. For serious, committed patients only."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          {[
            {
              tier: 'Mastery',
              label: 'Apply for Mastery ($9k/12mo)',
              copy: 'Full premium program, monthly coaching, 12 months. Choose this if you’re ready for the full system.',
              primary: true,
            },
            {
              tier: 'Foundation',
              label: 'Apply for Foundation ($6k/6mo)',
              copy: 'Entry-level premium program, 6 months. Choose this if you want to test the system first.',
            },
            {
              tier: 'Elite',
              label: 'Apply for Elite Program ($30k/12mo)',
              copy: 'Biweekly coaching, advanced medical oversight, premium access. Limited to 20–30 spots/year.',
            },
          ].map((path) => (
            <Reveal key={path.tier}>
              <div
                className={`flex h-full flex-col rounded-2xl p-6 text-center ${
                  path.primary
                    ? 'bg-navy text-white shadow-premium ring-2 ring-teal'
                    : 'bg-white ring-1 ring-gray-100 shadow-card'
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    trackCtaClick(path.tier, 'application_paths')
                    scrollToApply(path.tier)
                  }}
                  className={`w-full rounded-lg px-5 py-3.5 text-sm font-bold transition-colors duration-200 ${
                    path.primary
                      ? 'bg-teal text-white hover:bg-teal-dark'
                      : 'bg-navy text-white hover:bg-navy-light'
                  }`}
                >
                  {path.label}
                </button>
                <p
                  className={`mt-4 flex-1 text-sm ${
                    path.primary ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {path.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <ApplicationForm defaultTier={selectedTier} id="apply" />
          </div>
        </Reveal>
      </TrackedSection>

      {/* ============ SECTION 12: FINANCING ============ */}
      <TrackedSection id="financing" className="bg-white px-5 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Financing Makes Premium Accessible"
            subtitle="Premium results shouldn’t require upfront capital. Flexible payment options are available."
          />
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-cloud p-7 sm:p-9 ring-1 ring-gray-100">
            <p className="flex items-center gap-2 text-sm font-bold text-navy">
              <BarChart3 className="h-4 w-4 text-teal" />
              Mastery Tier ($9,000) Payment Options
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                Full payment: $9,000 one-time
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                Monthly plan: $750/month × 12 (Affirm, 0% APR)
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                Semi-annual: $4,500 × 2 (Affirm, 0% APR)
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                WHOP flexible payment plan available
              </li>
            </ul>
            <p className="mt-5 text-sm text-gray-500">
              No hidden fees. No interest surprises. Just a premium program, premium
              results, and a flexible payment structure.
            </p>
            <a
              href="#apply"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-teal-dark underline decoration-teal/40 underline-offset-4 hover:text-teal"
            >
              See Financing Options
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </TrackedSection>

      {/* ============ SECTION 13: FINAL CTA + FOOTER ============ */}
      <TrackedSection
        id="final-cta"
        className="bg-gradient-to-br from-navy to-teal-dark px-5 py-16 sm:px-10 sm:py-24 text-center"
      >
        <Reveal>
          <h2 className="text-h2-mobile sm:text-h2-desktop text-white text-balance">
            Your Timeline Is Now. Not Tomorrow.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-gray-200">
            Stop accepting decline. Start demanding results.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                trackCtaClick('mastery', 'final_cta')
                scrollToApply('Mastery')
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-bold text-white shadow-premium transition-colors duration-200 hover:bg-teal-dark"
            >
              Apply for Program
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Schedule Free Consultation
            </a>
          </div>
        </Reveal>
      </TrackedSection>

      <footer className="bg-navy px-5 py-12 sm:px-10 text-gray-300">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: '50% Money-Back Guarantee' },
              { icon: CheckCircle2, label: 'Doctor-Reviewed & Coordinated' },
              { icon: Sparkles, label: 'Real Customer Results' },
              { icon: UserRound, label: 'Medical Partnership Model' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm">
                <Icon className="h-5 w-5 flex-shrink-0 text-mint" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-white">
                Cosmic Wellness Botanical Health Organization
              </p>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400">
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
                <a href="#" className="hover:text-white">
                  Medical Disclaimer
                </a>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-xs text-gray-400 sm:items-end">
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> support@cwbotanicshealth.net
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> (555) 010-2026
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-gray-500">
            These statements have not been evaluated by the FDA. This program is
            educational and not medical advice. Consult with your nephrologist before
            starting. Medical partnership is for coordination and oversight only. Work
            with your medical team.
          </p>
        </div>
      </footer>
    </div>
  )
}
