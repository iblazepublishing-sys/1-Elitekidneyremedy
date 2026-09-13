import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { trackFormSubmit } from '../lib/analytics.js'

// Replace with your Formspree endpoint (https://formspree.io/f/xxxxxxxx).
// Left as a placeholder so the form fails safely (shows an inline error)
// instead of silently losing submissions until this is wired up.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const STAGE_OPTIONS = ['Stage 3', 'Stage 4', 'Stage 5', 'On Dialysis']
const DURATION_OPTIONS = ['< 1 year', '1-3 years', '3-5 years', '5+ years']
const GOAL_OPTIONS = ['Prevent Dialysis', 'Exit Dialysis', 'Optimize Health']
const INCOME_OPTIONS = ['$100k-250k', '$250k-500k', '$500k-1M', '$1M+']
const TIER_OPTIONS = ['Foundation', 'Mastery', 'Elite']

const initialState = {
  stage: '',
  duration: '',
  goal: '',
  email: '',
  phone: '',
  income: '',
  tier: '',
}

function validate(values) {
  const errors = {}
  if (!values.stage) errors.stage = 'Please select your kidney stage.'
  if (!values.duration) errors.duration = 'Please select how long you’ve had kidney disease.'
  if (!values.goal) errors.goal = 'Please select your primary goal.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[\d()+\-.\s]{7,}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!values.tier) errors.tier = 'Please select which tier interests you most.'
  return errors
}

export default function ApplicationForm({ defaultTier = '', id = 'apply' }) {
  const [values, setValues] = useState({ ...initialState, tier: defaultTier })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const setField = (field) => (e) => {
    const value = e.target.value
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('submission_failed')
      trackFormSubmit(values.tier)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        id={id}
        className="rounded-2xl bg-white p-8 sm:p-10 text-center shadow-premium ring-1 ring-gray-100"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal" />
        <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-navy">
          Your application is submitted.
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-gray-600">
          We review all applications personally within 24 hours. If you&rsquo;re a fit,
          we&rsquo;ll contact you to schedule your premium consultation (30 minutes). On
          the call, we&rsquo;ll assess your situation, design your custom protocol, and
          answer all questions. No pressure. Only serious patients move forward. This is
          how we maintain our results. Thanks for applying.
        </p>
      </div>
    )
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 sm:p-10 shadow-premium ring-1 ring-gray-100"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-navy">
            What&rsquo;s your kidney stage?
          </label>
          <select
            value={values.stage}
            onChange={setField('stage')}
            className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal ${
              errors.stage ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Select stage&hellip;</option>
            {STAGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.stage && <p className="mt-1 text-xs text-red-500">{errors.stage}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy">
            How long have you had kidney disease?
          </label>
          <select
            value={values.duration}
            onChange={setField('duration')}
            className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal ${
              errors.duration ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Select duration&hellip;</option>
            {DURATION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.duration && <p className="mt-1 text-xs text-red-500">{errors.duration}</p>}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">
          What&rsquo;s your primary goal?
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {GOAL_OPTIONS.map((opt) => (
            <label
              key={opt}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors ${
                values.goal === opt
                  ? 'border-teal bg-mint/50 font-semibold text-navy'
                  : 'border-gray-300 text-gray-600 hover:border-teal/60'
              }`}
            >
              <input
                type="radio"
                name="goal"
                value={opt}
                checked={values.goal === opt}
                onChange={setField('goal')}
                className="h-4 w-4 accent-teal"
              />
              {opt}
            </label>
          ))}
        </div>
        {errors.goal && <p className="mt-1 text-xs text-red-500">{errors.goal}</p>}
      </fieldset>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-navy">Email for strategy call</label>
          <input
            type="email"
            value={values.email}
            onChange={setField('email')}
            placeholder="you@company.com"
            className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy">Phone number</label>
          <input
            type="tel"
            value={values.phone}
            onChange={setField('phone')}
            placeholder="(555) 123-4567"
            className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal ${
              errors.phone ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">
          Household income range <span className="font-normal text-gray-400">(optional, helps us qualify fit)</span>
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-4">
          {INCOME_OPTIONS.map((opt) => (
            <label
              key={opt}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-3 text-sm transition-colors ${
                values.income === opt
                  ? 'border-teal bg-mint/50 font-semibold text-navy'
                  : 'border-gray-300 text-gray-600 hover:border-teal/60'
              }`}
            >
              <input
                type="radio"
                name="income"
                value={opt}
                checked={values.income === opt}
                onChange={setField('income')}
                className="h-4 w-4 accent-teal"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">
          Which tier interests you most?
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {TIER_OPTIONS.map((opt) => (
            <label
              key={opt}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors ${
                values.tier === opt
                  ? 'border-teal bg-mint/50 font-semibold text-navy'
                  : 'border-gray-300 text-gray-600 hover:border-teal/60'
              }`}
            >
              <input
                type="radio"
                name="tier"
                value={opt}
                checked={values.tier === opt}
                onChange={setField('tier')}
                className="h-4 w-4 accent-teal"
              />
              {opt}
            </label>
          ))}
        </div>
        {errors.tier && <p className="mt-1 text-xs text-red-500">{errors.tier}</p>}
      </fieldset>

      {status === 'error' && (
        <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong submitting your application. Please try again, or email us
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-4 text-base font-bold text-white transition-colors duration-200 hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' && <Loader2 className="h-5 w-5 animate-spin" />}
        {status === 'submitting' ? 'Submitting…' : 'Apply Now'}
      </button>
    </form>
  )
}
