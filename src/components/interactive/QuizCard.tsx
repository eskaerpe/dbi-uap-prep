import { useState } from 'react'

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
}

interface QuizCardProps {
  question: QuizQuestion
  index: number
}

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuizCard({ question, index }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [locked, setLocked] = useState(false)

  const handleSelect = (i: number) => {
    if (locked) return
    setSelected(i)
    setLocked(true)
  }

  const isCorrect = selected === question.correctIndex

  return (
    <div className="quiz-card">
      <div className="quiz-card__question">
        {index}. {question.question}
      </div>

      <div className="quiz-card__options">
        {question.options.map((option, i) => {
          let variant = ''
          if (locked && i === question.correctIndex) variant = ' quiz-card__option--correct'
          else if (locked && i === selected && !isCorrect) variant = ' quiz-card__option--wrong'
          else if (i === selected) variant = ' quiz-card__option--selected'

          return (
            <button
              key={i}
              className={`quiz-card__option${variant}`}
              onClick={() => handleSelect(i)}
              disabled={locked}
            >
              <span className="quiz-card__option-letter">
                {LETTERS[i]}
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {locked && (
        <div className={`quiz-card__feedback${isCorrect ? ' quiz-card__feedback--correct' : ' quiz-card__feedback--wrong'}`}>
          {isCorrect
            ? 'Benar! Bagus.'
            : `Salah. Jawaban yang benar adalah ${LETTERS[question.correctIndex]}.`
          }
        </div>
      )}
    </div>
  )
}
