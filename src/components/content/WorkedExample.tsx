import type { ReactNode } from 'react'

interface WorkedExampleProps {
  children: ReactNode
  number?: number
}

export default function WorkedExample({ children, number }: WorkedExampleProps) {
  return (
    <div className="example-block">
      <div className="example-block__label">
        {number ? `Example ${number}` : 'Example'}
      </div>
      <div>{children}</div>
    </div>
  )
}
