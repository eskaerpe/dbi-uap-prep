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
          Materi lengkap ISYS6898003 — Algoritma dan Pemrograman.
        </p>
        <div className="home__divider" />
      </header>

      {comprehensiveModule && (
        <>
          <h2 className="home__section-title">Quick Review</h2>
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
              </div>
            </div>
            <div
              className="module-card"
              onClick={() => navigate('/quiz')}
              style={{ borderColor: 'var(--warning)', borderWidth: '2px' }}
            >
              <div className="module-card__badge">Kuis Teori</div>
              <div className="module-card__title">Kuis Latihan 30 Soal</div>
              <div className="module-card__desc">
                Uji pemahaman Sesi 6-10 dengan 30 soal pilihan ganda lengkap dengan penjelasan
              </div>
              <div className="module-card__tags">
                <span className="module-card__tag" style={{ background: 'var(--warning-soft)', color: 'var(--warning)' }}>
                  30 Soal
                </span>
                <span className="module-card__tag">Teori</span>
              </div>
            </div>
            <div
              className="module-card"
              onClick={() => navigate('/quiz/practice')}
              style={{ borderColor: 'var(--error)', borderWidth: '2px' }}
            >
              <div className="module-card__badge">Kuis Praktik</div>
              <div className="module-card__title">Kuis Coding 30 Soal</div>
              <div className="module-card__desc">
                Soal coding langsung — baca kode, prediksi output, perbaiki bug, dan implementasi fungsi. Persiapan ujian praktek Python.
              </div>
              <div className="module-card__tags">
                <span className="module-card__tag" style={{ background: 'var(--error-soft)', color: 'var(--error)' }}>
                  30 Soal
                </span>
                <span className="module-card__tag">Praktik Coding</span>
              </div>
            </div>
          </div>
        </>
      )}

      <h2 className="home__section-title" style={comprehensiveModule ? { marginTop: '2rem' } : {}}>
        Materi
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
