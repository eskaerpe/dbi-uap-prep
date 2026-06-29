import { useNavigate } from 'react-router-dom'
import { modules } from '../modules/registry'

export default function Home() {
  const navigate = useNavigate()

  const mainModules = modules.filter(m => !m.slug.startsWith('uap-prep-comprehensive'))
  const comprehensiveModule = modules.find(m => m.slug === 'uap-prep-comprehensive')

  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">UAP Prep</h1>
        <p className="home__subtitle">
          Interactive study modules for ISYS6898003 — Algorithm and Programming.
          Sessions 6 through 12, curated for your final practical exam.
        </p>
        <div className="home__divider" />
      </header>

      {comprehensiveModule && (
        <>
          <h2 className="home__section-title">Comprehensive Review</h2>
          <div className="module-grid">
            <div
              className="module-card"
              onClick={() => navigate(`/${comprehensiveModule.slug}`)}
              style={{ borderColor: 'var(--accent)', borderWidth: '2px' }}
            >
              <div className="module-card__badge">UAP Prep</div>
              <div className="module-card__title">{comprehensiveModule.title}</div>
              <div className="module-card__desc">{comprehensiveModule.description}</div>
              <div className="module-card__tags">
                {comprehensiveModule.tags.map(tag => (
                  <span key={tag} className="module-card__tag">{tag}</span>
                ))}
                <span className="module-card__tag" style={{ background: 'var(--success-soft)', color: 'var(--success)' }}>
                  Flashcards
                </span>
                <span className="module-card__tag" style={{ background: 'var(--warning-soft)', color: 'var(--warning)' }}>
                  Quiz
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      <h2 className="home__section-title" style={comprehensiveModule ? { marginTop: '2rem' } : {}}>
        Sessions
      </h2>

      <div className="module-grid">
        {mainModules.map(mod => (
          <div
            key={mod.slug}
            className="module-card"
            onClick={() => navigate(`/${mod.slug}`)}
          >
            <div className="module-card__badge">
              {mod.slug.includes('sesi-6') ? 'Session 6' :
               mod.slug.includes('sesi-7') ? 'Session 7' :
               mod.slug.includes('sesi-8') ? 'Session 8' :
               mod.slug.includes('sesi-9') ? 'Session 9' :
               mod.slug.includes('sesi-10') ? 'Session 10' :
               mod.slug.includes('sesi-11') ? 'Session 11' :
               mod.slug.includes('sesi-12') ? 'Session 12' : 'Module'}
            </div>
            <div className="module-card__title">{mod.title}</div>
            <div className="module-card__desc">{mod.description}</div>
            <div className="module-card__tags">
              {mod.tags.map(tag => (
                <span key={tag} className="module-card__tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
