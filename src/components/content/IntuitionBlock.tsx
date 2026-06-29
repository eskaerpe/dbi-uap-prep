import type { ReactNode } from 'react'

interface IntuitionBlockProps {
  children: ReactNode
}

export default function IntuitionBlock({ children }: IntuitionBlockProps) {
  return (
    <div className="intuition-block">
      <div className="intuition-block__label">Intuition</div>
      <div>{children}</div>
    </div>
  )
}
