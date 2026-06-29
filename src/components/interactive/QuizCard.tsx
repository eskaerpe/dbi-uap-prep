import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import '../../styles/vscode-dark-prism.css'

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface QuizCardProps {
  question: QuizQuestion
  index: number
  setRef?: (el: HTMLDivElement | null) => void
}

const LETTERS = ['A', 'B', 'C', 'D']

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="code-block quiz-card__code-block-wrap">
      <div className="code-block__header">
        <span>python</span>
        <button className="code-block__copy" onClick={handleCopy}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Disalin' : 'Salin'}
        </button>
      </div>
      <pre>
        <code ref={codeRef} className="language-python">{code}</code>
      </pre>
    </div>
  )
}

function renderText(text: string) {
  type Part = { type: 'code' | 'text'; content: string }
  const raw: Part[] = []
  let remaining = text

  while (remaining.length > 0) {
    const codeStart = remaining.indexOf('`')
    if (codeStart === -1) {
      raw.push({ type: 'text', content: remaining })
      break
    }

    if (codeStart > 0) {
      raw.push({ type: 'text', content: remaining.slice(0, codeStart) })
    }

    const codeEnd = remaining.indexOf('`', codeStart + 1)
    if (codeEnd === -1) {
      raw.push({ type: 'text', content: remaining.slice(codeStart) })
      break
    }

    raw.push({ type: 'code', content: remaining.slice(codeStart + 1, codeEnd) })
    remaining = remaining.slice(codeEnd + 1)
  }

  // merge consecutive code parts separated by newline-only text into one code block
  const merged: Part[] = []
  let i = 0
  while (i < raw.length) {
    if (raw[i].type === 'code') {
      let code = raw[i].content
      i++
      while (
        i < raw.length &&
        raw[i].type === 'text' &&
        /^(\n|\s)*$/.test(raw[i].content) &&
        i + 1 < raw.length &&
        raw[i + 1].type === 'code'
      ) {
        code += '\n' + raw[i + 1].content
        i += 2
      }
      merged.push({ type: 'code', content: code })
    } else {
      merged.push(raw[i])
      i++
    }
  }

  return merged.map((part, idx) => {
    if (part.type === 'code') {
      const isMultiLine = part.content.includes('\n')
      if (isMultiLine) {
        return <CodeBlock key={idx} code={part.content} />
      }
      return (
        <code key={idx} className="quiz-card__code-inline">{part.content}</code>
      )
    }

    const lines = part.content.split('\n')
    return (
      <span key={idx}>
        {lines.map((line, li) => (
          <span key={li}>
            {li > 0 && <br />}
            {line}
          </span>
        ))}
      </span>
    )
  })
}

export default function QuizCard({ question, index, setRef }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [locked, setLocked] = useState(false)

  const handleSelect = (i: number) => {
    if (locked) return
    setSelected(i)
    setLocked(true)
  }

  const isCorrect = selected === question.correctIndex

  return (
    <div className="quiz-card" ref={setRef ?? null}>
      <div className="quiz-card__question">
        <span className="quiz-card__question-num">{index}.</span>
        <span className="quiz-card__question-text">
          {renderText(question.question)}
        </span>
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
          <div className="quiz-card__feedback-verdict">
            {isCorrect ? 'Benar!' : 'Salah.'}
          </div>
          <div className="quiz-card__feedback-detail">
            {question.explanation}
          </div>
        </div>
      )}
    </div>
  )
}
