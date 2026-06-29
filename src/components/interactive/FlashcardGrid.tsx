import { useState, type ReactNode } from 'react'

interface FlashcardData {
  front: string
  back: string
}

interface FlashcardGridProps {
  flashcards: FlashcardData[]
}

function Flashcard({ card }: { card: FlashcardData }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="flashcard"
      onClick={() => setFlipped(prev => !prev)}
      role="button"
      aria-pressed={flipped}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped(prev => !prev)
        }
      }}
    >
      <div className={`flashcard__inner${flipped ? ' flashcard__inner--flipped' : ''}`}>
        <div className="flashcard__front">{card.front}</div>
        <div className="flashcard__back">{card.back}</div>
      </div>
    </div>
  )
}

export default function FlashcardGrid({ flashcards }: FlashcardGridProps) {
  if (!flashcards.length) return null

  return (
    <div>
        <div className="theory-block__label" style={{ marginBottom: '0.75rem' }}>Flashcard</div>
      <div className="flashcard-grid">
        {flashcards.map((card, i) => (
          <Flashcard key={i} card={card} />
        ))}
      </div>
    </div>
  )
}
