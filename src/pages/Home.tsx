import { useNavigate } from 'react-router-dom'
import { modules } from '../modules/registry'

export default function Home() {
  const navigate = useNavigate()

  const mainModules = modules.filter(m => !m.slug.startsWith('uap-prep-comprehensive'))
  const comprehensiveModule = modules.find(m => m.slug === 'uap-prep-comprehensive')

  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">Persiapan UAP</h1>
        <p className="home__subtitle">
          Modul belajar interaktif untuk ISYS6898003 — Algoritma dan Pemrograman.
          Sesi 6 sampai 12, dikurasi khusus untuk ujian praktikum akhir.
        </p>
        <div className="home__divider" />
      </header>

      {comprehensiveModule && (
        <>
          <h2 className="home__section-title">Review Komprehensif</h2>
          <div className="module-grid">
            <div
              className="module-card"
              onClick={() => navigate(`/${comprehensiveModule.slug}`)}
              style={{ borderColor: 'var(--accent)', borderWidth: '2px' }}
            >
              <div className="module-card__badge">Persiapan UAP</div>
              <div className="module-card__title">{comprehensiveModule.title}</div>
              <div className="module-card__desc">{comprehensiveModule.description}</div>
              <div className="module-card__tags">
                {comprehensiveModule.tags.map(tag => (
                  <span key={tag} className="module-card__tag">{tag}</span>
                ))}
                <span className="module-card__tag" style={{ background: 'var(--success-soft)', color: 'var(--success)' }}>
                  Flashcard
                </span>
                <span className="module-card__tag" style={{ background: 'var(--warning-soft)', color: 'var(--warning)' }}>
                  Kuis
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      <h2 className="home__section-title" style={comprehensiveModule ? { marginTop: '2rem' } : {}}>
        Sesi
      </h2>

      <div className="module-grid">
        {mainModules.map(mod => (
          <div
            key={mod.slug}
            className="module-card"
            onClick={() => navigate(`/${mod.slug}`)}
          >
            <div className="module-card__badge">
              {mod.slug.includes('sesi-6') ? 'Sesi 6' :
               mod.slug.includes('sesi-7') ? 'Sesi 7' :
               mod.slug.includes('sesi-8') ? 'Sesi 8' :
               mod.slug.includes('sesi-9') ? 'Sesi 9' :
               mod.slug.includes('sesi-10') ? 'Sesi 10' :
               mod.slug.includes('sesi-11') ? 'Sesi 11' :
               mod.slug.includes('sesi-12') ? 'Sesi 12' : 'Modul'}
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
