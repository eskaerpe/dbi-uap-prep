import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import type { Components } from 'react-markdown'
import 'katex/dist/katex.min.css'

import { modules } from '../modules/registry'
import ModuleLayout from '../components/layout/ModuleLayout'
import TheoryBlock from '../components/content/TheoryBlock'
import WorkedExample from '../components/content/WorkedExample'
import IntuitionBlock from '../components/content/IntuitionBlock'
import ConclusionBox from '../components/content/ConclusionBox'
import FlashcardGrid from '../components/interactive/FlashcardGrid'
import QuizCard from '../components/interactive/QuizCard'
import ScrollToTop from '../components/ui/ScrollToTop'
import SearchModal from '../components/interactive/SearchModal'
import { Copy, Check } from 'lucide-react'

interface Section {
  id: string
  title: string
  text: string
}

function CodeBlock({ className, children, ...props }: any) {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)/.exec(className || '')
  const lang = match ? match[1] : 'python'
  const code = String(children).replace(/\n$/, '')

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span>{lang}</span>
        <button className="code-block__copy" onClick={copy}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>
        <code className={className} {...props}>{children}</code>
      </pre>
    </div>
  )
}

function InlineCode(props: any) {
  return <code className="inline-code" {...props} />
}

function extractSections(content: string): Section[] {
  const headingRegex = /^##\s+(.+)$/gm
  const sections: Section[] = []
  const plainText = content.replace(/<[^>]*>/g, '')
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[1]
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const startIdx = match.index
    const prevLastIndex = headingRegex.lastIndex
    const nextMatch = headingRegex.exec(content)
    const endIdx = nextMatch ? nextMatch.index : content.length
    const sectionText = plainText.slice(startIdx, endIdx).trim()
    sections.push({ id, title, text: sectionText })
    headingRegex.lastIndex = nextMatch ? nextMatch.index : content.length
    if (!nextMatch) break
  }
  return sections
}

function SectionHeading({ children, ...props }: any) {
  const text = extractText(children)
  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  return (
    <h2 id={id} className="section-heading" {...props}>
      {children}
    </h2>
  )
}

function extractText(children: any): string {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(extractText).join('')
  if (children?.props?.children) return extractText(children.props.children)
  return ''
}

export default function ModuleView() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [searchOpen, setSearchOpen] = useState(false)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  const mod = modules.find(m => m.slug === slug)

  useEffect(() => {
    if (!mod) {
      navigate('/', { replace: true })
      return
    }

    setLoading(true)
    mod.loadContent().then(md => {
      setContent(md)
      setLoading(false)
    })
  }, [slug, mod, navigate])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  if (!mod) return null

  if (loading) {
    return (
      <div className="home">
        <p style={{ color: 'var(--text-secondary)' }}>Loading module...</p>
      </div>
    )
  }

  const sections = extractSections(content)

  const components: Components = {
    code({ className, children, ...props }) {
      if (className) {
        return <CodeBlock className={className} {...props}>{children}</CodeBlock>
      }
      return <InlineCode {...props}>{children}</InlineCode>
    },
    h2: SectionHeading as any,
  }

  return (
    <>
      <ModuleLayout
        slug={slug!}
        title={mod.title}
        sections={sections}
      >
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={components as any}
        >
          {content}
        </ReactMarkdown>

        {mod.features?.flashcards && mod.flashcards && mod.flashcards.length > 0 && (
          <FlashcardGrid flashcards={mod.flashcards} />
        )}

        {mod.features?.quiz && mod.quiz && mod.quiz.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <div
              className="section-heading"
              style={{ fontSize: '1.25rem', borderBottom: 'none' }}
            >
              Practice Quiz
            </div>
            {mod.quiz.map((q, i) => (
              <QuizCard key={i} question={q} index={i + 1} />
            ))}
          </div>
        )}

        <ScrollToTop />
      </ModuleLayout>

      <button
        onClick={() => setSearchOpen(true)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '5rem',
          zIndex: 40,
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
          fontSize: '0.65rem',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
        }}
        aria-label="Search"
      >
        Ctrl+K
      </button>

      <SearchModal
        sections={sections}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  )
}
