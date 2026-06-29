import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'

interface QuizSection {
  id: string
  name: string
  start: number
  end: number
}

interface QuizLayoutProps {
  title: string
  sections: QuizSection[]
  children: ReactNode
}

export default function QuizLayout({ title, sections, children }: QuizLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sentinelRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section') ?? sections[0]?.id ?? '')
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    for (const s of sections) {
      const el = sentinelRefs.current[s.id]
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id: string) => {
    setActiveSection(id)
    const el = document.querySelector(`[data-section="${id}"]`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="module-layout">
      <aside className={`module-layout__sidebar${sidebarOpen ? ' module-layout__sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <Link to="/" className="sidebar__back" onClick={() => setSidebarOpen(false)}>
            <ArrowLeft size={14} />
            Kembali
          </Link>
          <div className="sidebar__title">{title}</div>
        </div>

        <ul className="sidebar__nav">
          {sections.map(s => {
            const isActive = activeSection === s.id
            return (
              <li
                key={s.id}
                className={`sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`}
                onClick={() => { scrollTo(s.id); setSidebarOpen(false) }}
              >
                <span>{s.name}</span>
              </li>
            )
          })}
        </ul>
      </aside>

      {sidebarOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 55, background: 'var(--overlay)' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="module-layout__content">
        <div style={{ maxWidth: 800 }}>
          {children}
        </div>
      </main>

      <button
        className="sidebar__mobile-toggle"
        onClick={() => setSidebarOpen(true)}
        aria-label="Buka navigasi"
      >
        <BookOpen size={20} />
      </button>
    </div>
  )
}
