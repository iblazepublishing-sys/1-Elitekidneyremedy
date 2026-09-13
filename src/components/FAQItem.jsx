import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const panelRef = useRef(null)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded-sm"
      >
        <span className="text-base sm:text-lg font-semibold text-navy">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-teal transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        ref={panelRef}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm sm:text-base leading-relaxed text-gray-600 pr-8">{answer}</p>
        </div>
      </div>
    </div>
  )
}
