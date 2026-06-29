import { useState, type ReactNode } from 'react'
import { BookOpen } from 'lucide-react'
import Sidebar, { type Section } from './Sidebar'

interface ModuleLayoutProps {
  slug: string
  title: string
  sections: Section[]
  children: ReactNode
}

export default function ModuleLayout({ slug, title, sections, children }: ModuleLayoutProps) {
  const [activeSection, setActiveSection] = useState('')
  const [completedSections, setCompletedSections] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(`progress:${slug}`)
      return new Set<string>(stored ? JSON.parse(stored) : [])
    } catch {
      return new Set<string>()
    }
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleComplete = (id: string) => {
    setCompletedSections(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem(`progress:${slug}`, JSON.stringify([...next]))
      return next
    })
  }

  return (
    <div className="module-layout">
      <Sidebar
        slug={slug}
        title={title}
        sections={sections}
        activeSection={activeSection}
        completedSections={completedSections}
        completedCount={completedSections.size}
        totalSections={sections.length}
        onSectionClick={id => {
          setActiveSection(id)
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }}
        onToggleComplete={toggleComplete}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="module-layout__content">{children}</main>

      <button
        className="sidebar__mobile-toggle"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sections"
      >
        <BookOpen size={20} />
      </button>
    </div>
  )
}
