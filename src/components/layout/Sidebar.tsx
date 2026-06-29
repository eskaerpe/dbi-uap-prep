import { Link } from 'react-router-dom'
import { ArrowLeft, Check, X } from 'lucide-react'

export interface Section {
  id: string
  title: string
}

interface SidebarProps {
  slug: string
  title: string
  sections: Section[]
  activeSection: string
  completedSections: Set<string>
  completedCount: number
  totalSections: number
  onSectionClick: (id: string) => void
  onToggleComplete: (id: string) => void
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({
  slug,
  title,
  sections,
  activeSection,
  completedSections,
  completedCount,
  totalSections,
  onSectionClick,
  onToggleComplete,
  isOpen,
  onClose,
}: SidebarProps) {
  const progress = totalSections > 0 ? (completedCount / totalSections) * 100 : 0

  return (
    <>
      <aside className={`module-layout__sidebar${isOpen ? ' module-layout__sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <Link to="/" className="sidebar__back" onClick={onClose}>
            <ArrowLeft size={14} />
            Back to modules
          </Link>
          <div className="sidebar__title">{title}</div>
        </div>

        <div className="sidebar__progress">
          <span>{completedCount}/{totalSections} completed</span>
          <div className="sidebar__progress-bar">
            <div className="sidebar__progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <ul className="sidebar__nav">
          {sections.map(section => {
            const isActive = activeSection === section.id
            const isCompleted = completedSections.has(section.id)

            return (
              <li
                key={section.id}
                className={`sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`}
                onClick={() => {
                  onSectionClick(section.id)
                  onClose()
                }}
              >
                <div
                  className={`sidebar__checkbox${isCompleted ? ' sidebar__checkbox--checked' : ''}`}
                  onClick={e => {
                    e.stopPropagation()
                    onToggleComplete(section.id)
                  }}
                  role="checkbox"
                  aria-checked={isCompleted}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onToggleComplete(section.id)
                    }
                  }}
                >
                  {isCompleted && <Check size={10} strokeWidth={3} />}
                </div>
                <span>{section.title}</span>
              </li>
            )
          })}
        </ul>
      </aside>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 55,
            background: 'var(--overlay)',
          }}
          onClick={onClose}
        />
      )}
    </>
  )
}
