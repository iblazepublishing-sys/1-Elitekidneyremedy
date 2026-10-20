// All page copy lives here so KidneyRestorationMastery.jsx stays about layout,
// and copy edits never require touching component logic.

import vslPosterImage from '../assets/vsl-poster.jpg'
import frankLabThumb from '../assets/labs/frank-thumb.jpg'
import frankLabFull from '../assets/labs/frank-full.jpg'
import sueLabThumb from '../assets/labs/sue-thumb.jpg'
import sueLabFull from '../assets/labs/sue-full.jpg'
import stanleyLabThumb from '../assets/labs/stanley-thumb.jpg'
import stanleyLabFull from '../assets/labs/stanley-full.jpg'
import frankStoryPoster from '../assets/videos/frank-story-poster.jpg'
import customerProgressPoster from '../assets/videos/customer-progress-poster.jpg'
import morePatientsPoster from '../assets/videos/more-patients-poster.jpg'
import closerLookPoster from '../assets/videos/closer-look-poster.jpg'
import realResultsPoster from '../assets/videos/real-results-poster.jpg'

// Shared hero copy, used by both the full landing page and the shorter
// call-funnel/VSL page (src/CallFunnelPage.jsx), so the two always match.
export const heroEyebrow = 'Elite Medical-Grade Program'
export const heroHeadlineLine1 = 'You Didn’t Get Here By Accepting Average.'
export const heroHeadlineLine2 = 'Why Accept Dialysis?'
export const heroSubheadline =
  'Elite medical-grade kidney restoration for serious patients. Premium personalization. Measurable results. Guaranteed.'

// The VSL itself, hosted on Shopify's CDN. Used by both the hero VSL slot
// on the main page and the call-funnel page.
export const vslSrc =
  'https://cdn.shopify.com/videos/c/o/v/46fcafe38cfd41d1888772127dab162d.mp4'

// Freeze-frame cover image shown before the video plays/loads.
export const vslPoster = vslPosterImage

// Supporting proof videos shown in the carousel further down the
// confirmation page, after someone has already applied and wants more
// detail before deciding. `posterUrl` is left undefined until a freeze
// frame from each video is supplied — VideoCarousel/VslEmbed render a
// generic placeholder until then rather than a broken image.
export const moreProofVideos = [
  {
    title: 'Watch Frank’s Story',
    src: 'https://cdn.shopify.com/videos/c/o/v/a0e825800fe54f7ab75c5ae9f47d045e.mp4',
    posterUrl: closerLookPoster,
  },
  {
    title: 'Customer Reported Progress',
    src: 'https://cdn.shopify.com/videos/c/o/v/67b302f9e89443f9b56b973fd24e8e5b.mov',
    posterUrl: morePatientsPoster,
  },
  {
    title: 'More From Our Patients',
    src: 'https://cdn.shopify.com/videos/c/o/v/64aee025bc3e4ff7954fe1155b019b04.mp4',
    posterUrl: realResultsPoster,
  },
  {
    title: 'A Closer Look',
    src: 'https://cdn.shopify.com/videos/c/o/v/d66a35a345cb454fa68523d62cae1a50.mp4',
    posterUrl: customerProgressPoster,
  },
  {
    title: 'Real Results, Real Talk',
    src: 'https://cdn.shopify.com/videos/c/o/v/1c7737b515e644f9b2945917f9c14614.mov',
    posterUrl: frankStoryPoster,
  },
]

// Shown at the very top of the page for people arriving after they've
// already applied (e.g. a Typeform post-submit redirect): confirms the
// application landed, then frames the rest of the page as the full detail
// they get now that they're in: real pricing, lab proof, more videos.
export const confirmationBanner = {
  eyebrow: 'Application Received',
  message:
    'You’re in. Here’s everything you need: full pricing, real lab results, and more of the story, before your call.',
}

// VSL chapter markers, shown as a clickable table of contents under the
// video. `seconds` is used to actually seek the <video> when clicked.
// Note: "7:142" as given didn't parse as a timestamp (142 seconds would
// land before 6:44): read as 7:14, between "Not sure yet?" and "Apply
// now". Flag it if that's not what was meant.
export const vslChapters = [
  { time: '0:00', seconds: 0, title: 'Intro' },
  { time: '0:30', seconds: 30, title: 'Why the standard options feel limiting' },
  { time: '1:40', seconds: 100, title: 'How the program works' },
  { time: '3:30', seconds: 210, title: 'Why this approach is different' },
  { time: '4:55', seconds: 295, title: 'Coaching tiers and pricing' },
  { time: '6:44', seconds: 404, title: 'Not sure yet? Start here' },
  { time: '7:14', seconds: 434, title: 'Next steps: book a strategy call' },
  { time: '8:22', seconds: 502, title: 'Apply now' },
]

export const pillars = [
  {
    icon: 'Salad',
    title: 'Personalized Metabolic Nutrition',
    points: [
      'Algorithm-designed protocol based on your labs, your body, your kidney stage',
      'Macro optimization: carbs, protein, and fat calculated to exact specifications',
      'Weekly personalized meal plans, recipes, and restaurant guidance handled for you',
      'Mineral management: potassium, phosphorus, and sodium adjusted for your stage',
      'Concierge-level nutrition support',
    ],
  },
  {
    icon: 'Dumbbell',
    title: 'Advanced Body Composition Optimization',
    points: [
      '3x/week elite strength protocol with personalized progression, never a template',
      'Real-time energy modulation: intensity adjusted to your biomarkers',
      'Progressive overload system to get stronger, lose fat, and gain health simultaneously',
      'Performance metrics tracking so you know exactly what’s changing',
    ],
  },
  {
    icon: 'Droplet',
    title: 'Medical-Grade Monitoring',
    points: [
      'Comprehensive blood work every 60 days tracking eGFR, creatinine, and minerals',
      'Monthly lab interpretation calls so you understand exactly what your numbers mean',
      'Protocol adjustments based on your data, not guesswork, not textbooks',
      'Nephrologist partnership for medical coordination, not conflict',
      'Real-time monitoring that catches trends before they become problems',
    ],
  },
  {
    icon: 'UserRound',
    title: 'Personal Premium Coaching',
    points: [
      'Monthly 1-on-1 calls, not group, not app, not automated: real human accountability',
      'Direct text/email access with fast response times',
      'Weekly check-ins from someone actually tracking your progress',
      'Real-time protocol adjustments based on your results and your feedback',
      'Personalized motivation designed around your goals and values',
    ],
  },
]

export const coreInclusions = [
  'Kidney Remedy Elite Therapy: your premium monthly supply',
  'Personalized nutrition protocol, algorithm-designed for your stage',
  'Macro optimization with customized carb, protein, and fat calculations',
  'Weekly personalized meal plans plus a restaurant ordering guide',
  'Monthly 1-on-1 coaching calls (not group)',
  'Blood work tracking every 60 days',
  'Lab interpretation with real-time protocol adjustments',
  'Elite strength training protocol, kidney-friendly and progressive',
  'Detailed macro tracking sheets, never generic',
  'Private email/text support with direct access',
  'Quarterly progress reports with transparent metrics',
  'Guarantee: 50% refund if no eGFR improvement at 6 months',
]

// Full pricing is shown here: this page is the confirmation/full-info
// page people land on after they've already applied (via /apply/'s
// Typeform), so transparency is the right call. The pre-call VSL funnel
// page intentionally doesn't show these numbers.
export const pricingTiers = [
  {
    tier: 'Foundation',
    name: 'Foundation',
    price: '$6,000',
    term: '6 Months',
    positioning: 'Entry-Level Premium',
    features: [
      'All core program elements',
      'Bi-weekly accountability calls',
      'Standard community access',
      'Labs every 60 days',
      'Email support',
    ],
    whoChooses: 'Serious Stage 3 prevention patients, and those testing the system.',
    ctaLabel: 'Apply for Foundation',
  },
  {
    tier: 'Mastery',
    name: 'Mastery',
    price: '$9,000',
    term: '12 Months',
    monthlyNote: '$750/month with financing',
    positioning: 'Full Elite Program',
    featured: true,
    features: [
      'All core program elements',
      'Monthly 1-on-1 accountability calls',
      'Private elite community',
      'Labs every 60 days with monthly interpretation',
      'Hormone optimization: baseline plus quarterly',
      'Email/text support',
      'Payment plans available',
    ],
    whoChooses: 'Most elite customers, dialysis patients, and serious Stage 4-5 patients.',
    ctaLabel: 'Apply for Mastery',
  },
  {
    tier: 'Elite',
    name: 'Elite',
    price: '$30,000',
    term: '12 Months',
    positioning: 'Maximum Premium Access',
    features: [
      'All core program elements',
      'Biweekly 1-on-1 calls: 24 calls vs. 12',
      'Advanced lab monitoring with more frequent tracking',
      'Body composition analysis: DEXA and metabolic testing',
      'Hormone therapy coordination with MD partnership',
      'Direct phone/text/email access, 24-hour response guaranteed',
      'Weekly accountability via text',
      'In-person consultation options',
      'Limited to 20–30 spots per year',
    ],
    whoChooses: 'Ultra-serious patients, executives, and those exiting dialysis fast.',
    ctaLabel: 'Apply for Elite',
  },
]

// Where each of the three "ready to move forward" CTAs actually sends
// someone. Replace every placeholder below with your real links before
// launch, nothing here is wired to a real destination yet.
//   - store: the product page on your main store for that tier (pay in full)
//   - financing: your Affirm or WHOP checkout/financing link for that tier
//   - calendar: your booking link (Calendly, Acuity, etc.), shared across
//     tiers, the tier name is appended as a query param so you can see
//     which tier someone was looking at when they booked
//   - typeform: the application form for the call-funnel page's "Apply Now"
//     button. Typeform's own post-submit redirect handles sending people
//     on to book a call (or wherever else) after they finish the form,
//     that's configured inside Typeform, not here.
export const ctaLinks = {
  calendar: 'https://calendly.com/YOUR-LINK/strategy-call',
  typeform: 'https://form.typeform.com/to/sr0lkdHv',
  tiers: {
    Foundation: {
      store: 'https://YOUR-STORE.com/products/foundation-program',
      financing: 'https://YOUR-STORE.com/products/foundation-program?financing=true',
    },
    Mastery: {
      store: 'https://YOUR-STORE.com/products/mastery-program',
      financing: 'https://YOUR-STORE.com/products/mastery-program?financing=true',
    },
    Elite: {
      store: 'https://YOUR-STORE.com/products/elite-program',
      financing: 'https://YOUR-STORE.com/products/elite-program?financing=true',
    },
  },
}

export const caseStudies = [
  {
    name: 'Sue Lynn Gross Fisher',
    role: 'RN · Stage 4 CKD → Stage 3',
    timeline: '4 months',
    result: 'eGFR improved measurably, decline trajectory reversed',
    quote:
      'As a nurse, I know what standard care looks like. This reversed my decline. I’m not on the dialysis track anymore. I have my life back.',
  },
  {
    name: 'Stanley Shepherd',
    role: 'Entrepreneur · Stage 4 CKD, Diabetic',
    timeline: '5 months',
    result: 'eGFR 19% → 29% (↑10), Creatinine 3.8 → 2.6, dialysis avoided',
    quote:
      'I was terrified I’d end up on dialysis and lose my business. My labs prove something is actually working. For the first time in years, I have hope. I got my productivity back.',
  },
  {
    name: 'Frank Williams',
    role: 'Executive · Stage 5 ESRD, Active Dialysis',
    timeline: '9 months',
    result: 'eGFR 11% → 46% (↑35), OFF DIALYSIS, back running his company',
    quote:
      'I didn’t have time for guessing. I needed certainty and premium results. This program delivered. Off dialysis, back to running my company full-time. Energy I hadn’t felt in 5 years.',
  },
]

// Verified lab result images. `image` is the cropped thumbnail (the
// biomarker table, the dramatic part); `fullImage` is the complete report
// for the "View Full Report" link.
export const labResults = [
  {
    name: 'Frank Williams',
    metric: 'eGFR',
    change: '11% → 46%',
    note: 'Active dialysis to off dialysis, 9 months',
    image: frankLabThumb,
    fullImage: frankLabFull,
  },
  {
    name: 'Sue Lynn Gross Fisher',
    metric: 'A1C',
    change: '8.8% → 6.2%',
    note: 'No protein in urine within 3 weeks',
    image: sueLabThumb,
    fullImage: sueLabFull,
  },
  {
    name: 'Stanley Shepherd',
    metric: 'eGFR / Creatinine',
    change: '19%→29% eGFR · 3.8→2.6 Cr',
    note: 'Dialysis avoided, 5 months',
    image: stanleyLabThumb,
    fullImage: stanleyLabFull,
  },
]

export const fitYes = [
  '$100k+ household income: a premium mindset that can invest in premium care',
  'Kidney stage 3 through ESRD: timeline varies, but results apply across stages',
  'Ready to commit 100% to the protocol, no half-measures',
  'Want measurable lab improvement backed by data, not hope',
  'Willing to invest in personalized nutrition, training, and accountability',
  'Believe your kidneys can improve: you refuse to accept "manage and decline"',
  'Demand premium medical partnership, not a fight with your doctor',
  'Results-driven: you want metrics, not platitudes',
]

export const fitNo = [
  'Price-shopping for the "cheapest" kidney program',
  'Want a generic, template-based program (we specialize in bespoke)',
  'Not ready for a lifestyle commitment: diet, exercise, tracking, accountability',
  'Looking for a quick fix: this is 6–12 months of real work',
  'Believe supplements alone are enough: they aren’t, the system is',
  'Prefer minimal accountability, but we require it',
]

export const timeline = [
  {
    range: 'Months 1–3',
    title: 'Assessment, Protocol Design & Foundation',
    points: [
      'Week 1: Premium consultation and biometric assessment for your stage and metrics',
      'Week 2: Personalized protocol design, never a template',
      'Week 3: Blood work baseline ordered',
      'Month 1: Energy begins returning as the protocol is fine-tuned',
      'Month 2: Urination, energy, and mood improving; labs show early movement',
      'Month 3: First comprehensive labs. Most see a 1–3% eGFR improvement',
    ],
  },
  {
    range: 'Months 4–6',
    title: 'Acceleration & Proof',
    points: [
      'Monthly coaching calls refine the protocol based on your feedback',
      'Blood work tracked every 60 days, watching the trend, not one number',
      'Strength returning, training noticeably easier',
      'Confidence building: something is actually working',
      'Lab improvements accelerating; some see a 5–10% eGFR jump by month 6',
    ],
  },
  {
    range: 'Months 7–9',
    title: 'Proof & Momentum',
    points: [
      'Cumulative improvements visible; dialysis patients may reduce frequency',
      'Energy noticeably different: activities you couldn’t do before are back on the table',
      'Doctors start asking what you’re doing differently',
      'Body composition changing: leaner, stronger, healthier metrics',
      'Your own confidence in the process growing',
    ],
  },
  {
    range: 'Months 10–12',
    title: 'Transformation & Sustainability',
    points: [
      'Cumulative results become undeniable: dialysis patients exiting, prevention patients thriving',
      'Labs confirm the trend is real, not a fluke',
      'The lifestyle is now just how you live',
      'Decision point: continue at full intensity, or transition to maintenance',
    ],
  },
]

export const faqs = [
  {
    question: 'Which tier should I choose?',
    answer:
      'Mastery ($9,000/12mo) is our primary tier for most elite customers: the full program, monthly coaching, and comprehensive tracking. Foundation ($6,000/6mo) is for testing the system first. Elite ($30,000/12mo) is for biweekly coaching, advanced medical oversight, and premium access. Start where it fits your commitment level.',
  },
  {
    question: 'Will this actually work for my specific stage?',
    answer:
      'Yes. We’ve optimized for both Stage 3 prevention and dialysis exit. Frank went from 11% to 46% eGFR in 9 months. Your protocol is 100% customized to your stage. Same system, different application, and the guarantee backs it across all stages.',
  },
  {
    question: 'Can I finance this?',
    answer:
      'Yes. Mastery tier is $9,000/year, payable in full or split into 12 monthly payments of $750 through Affirm at 0% APR. We also offer flexible WHOP payment plans. If budget is a concern, Foundation tier is $6,000 over 6 months. Go straight to financing from the options below, or talk to us first if you want to walk through the numbers together.',
  },
  {
    question: 'What if I’m already on dialysis? Will this actually work?',
    answer:
      'Yes. Frank went from 11% eGFR on active dialysis to 46% and off dialysis in 9 months. Your timeline depends on your stage, consistency, and how long you’ve been declining, but measurable eGFR improvement is guaranteed, or you get 50% refunded.',
  },
  {
    question: 'How much time per week does this actually require?',
    answer:
      'Nutrition: about 30 minutes for meal planning and shopping. Training: 90 minutes across three 30-minute sessions. Tracking: 10 minutes a day. Calls: one hour a month. Total: roughly 3 hours a week, far less than most executives spend dealing with unmanaged health complications.',
  },
  {
    question: 'Does this conflict with my current medications?',
    answer:
      'No. Our medical partner reviews everything and there are no conflicts with standard kidney medications. We coordinate with your nephrologist. We’re not fighting your doctor, we’re enhancing their care. This is a partnership model.',
  },
  {
    question: 'How do I know the results are real?',
    answer:
      'Blood work every 60 days that you can show your own nephrologist. Lab data doesn’t lie, and we publish real, verified lab results from our own patients. Our 50% money-back guarantee at 6 months is us putting our money behind measurable results.',
  },
  {
    question: 'Is this just premium supplements?',
    answer:
      'No. Supplements are roughly 10% of the system. The rest is personalized nutrition (70%), training (15%), medical monitoring (20%), and accountability coaching (25%). It’s the system that works, not the supplement alone. Most people try the supplement without the system and quit.',
  },
  {
    question: 'What happens after my commitment ends?',
    answer:
      'You keep the habits, the knowledge, and the results. Most elite patients continue because the results are real and the lifestyle is sustainable. We offer month-to-month continuation at a lower cost ($300–500/month) for maintenance once the real transformation work is done.',
  },
  {
    question: 'How is this different from hiring a trainer and nutritionist?',
    answer:
      'Most trainers and nutritionists don’t understand kidney disease at all. We integrate kidney-specific nutrition, metabolic optimization, medical monitoring, protocol adjustments based on your labs, and accountability purpose-built for kidney regeneration, which is why it works where generic fitness doesn’t.',
  },
  {
    question: 'I already applied. Do I need to do anything else?',
    answer:
      'Not necessarily. You can pick your tier above and go straight to checkout or financing right now, or book a call first if you still have questions. Either way, we review every application personally, so if we reach out before you take action, it’s to make sure the tier you’re choosing actually fits your stage.',
  },
]
