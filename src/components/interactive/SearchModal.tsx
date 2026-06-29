import { useState, useEffect, useRef, useCallback } from 'react'
import { Search } from 'lucide-react'

interface SearchResult {
  sectionId: string
  sectionTitle: string
  text: string
}

interface SearchModalProps {
  sections: { id: string; title: string; text: string }[]
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ sections, isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results: SearchResult[] = query
    ? sections
        .filter(s => s.text.toLowerCase().includes(query.toLowerCase()))
        .map(s => ({
          sectionId: s.id,
          sectionTitle: s.title,
          text: s.text.slice(0, 120),
        }))
    : []

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIdx(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setActiveIdx(0)
  }, [query])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIdx(prev => Math.min(prev + 1, results.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIdx(prev => Math.max(prev - 1, 0))
      }
      if (e.key === 'Enter' && results[activeIdx]) {
        const section = document.getElementById(results[activeIdx].sectionId)
        section?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      }
    },
    [results, activeIdx, onClose]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div style={{ position: 'relative' }}>
          <Search
            size={18}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-tertiary)',
              pointerEvents: 'none',
            }}
          />
          <input
            ref={inputRef}
            className="search-modal__input"
            style={{ paddingLeft: '3rem' }}
            placeholder="Search sections..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="search-modal__results">
          {query && results.length === 0 && (
            <div className="search-modal__empty">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
          {results.map((r, i) => (
            <div
              key={r.sectionId}
              className={`search-modal__result${i === activeIdx ? ' search-modal__result--active' : ''}`}
              onClick={() => {
                document.getElementById(r.sectionId)?.scrollIntoView({ behavior: 'smooth' })
                onClose()
              }}
            >
              <div className="search-modal__result-heading">{r.sectionTitle}</div>
              <div>{r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
