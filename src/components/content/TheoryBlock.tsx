import type { ReactNode } from 'react'

interface TheoryBlockProps {
  children: ReactNode
}

export default function TheoryBlock({ children }: TheoryBlockProps) {
  return (
    <div className="theory-block">
      <div className="theory-block__label">Theory</div>
      <div>{children}</div>
    </div>
  )
}
