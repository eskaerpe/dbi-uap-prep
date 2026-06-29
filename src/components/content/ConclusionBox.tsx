import type { ReactNode } from 'react'

interface ConclusionBoxProps {
  children: ReactNode
}

export default function ConclusionBox({ children }: ConclusionBoxProps) {
  return (
    <div className="conclusion-block">
      <div className="conclusion-block__label">Key Takeaway</div>
      <div>{children}</div>
    </div>
  )
}
