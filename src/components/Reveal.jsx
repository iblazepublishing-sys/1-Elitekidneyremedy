import { useReveal } from '../hooks/useReveal.js'

/**
 * Wraps children in a fade-up-on-scroll animation. `as` lets callers pick
 * the rendered element (section/div/etc) so this stays semantically neutral.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children }) {
  const { ref, isVisible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
