import { Link, useParams } from 'react-router-dom'
import type { Entry } from '../data/types'

type BodyBlock =
  | { type: 'p'; content: string }
  | { type: 'h2'; content: string }
  | { type: 'ul'; items: string[] }
  | { type: 'blockquote'; lines: string[] }

function bodyToBlocks(body: string[]): BodyBlock[] {
  const blocks: BodyBlock[] = []

  for (const paragraph of body) {
    if (/^\d+\.\s+\S/.test(paragraph)) {
      blocks.push({ type: 'h2', content: paragraph.replace(/^\d+\.\s+/, '') })
      continue
    }

    if (paragraph.startsWith('- ')) {
      const last = blocks[blocks.length - 1]
      if (last?.type === 'ul') last.items.push(paragraph.slice(2))
      else blocks.push({ type: 'ul', items: [paragraph.slice(2)] })
      continue
    }

    if (paragraph.startsWith('> ')) {
      const last = blocks[blocks.length - 1]
      if (last?.type === 'blockquote') last.lines.push(paragraph.slice(2))
      else blocks.push({ type: 'blockquote', lines: [paragraph.slice(2)] })
      continue
    }

    blocks.push({ type: 'p', content: paragraph })
  }

  return blocks
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>
    return part
  })
}

function renderBodyBlock(block: BodyBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index}>{renderInline(block.content)}</h2>
    case 'ul':
      return (
        <ul key={index}>
          {block.items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}
        </ul>
      )
    case 'blockquote':
      return (
        <blockquote key={index}>
          {block.lines.map((line, lineIndex) => <p key={lineIndex}>{renderInline(line)}</p>)}
        </blockquote>
      )
    default:
      return <p key={index}>{renderInline(block.content)}</p>
  }
}

export default function EntryPage({ entries, basePath }: { entries: Entry[]; basePath: string }) {
  const { slug } = useParams(); const entry = entries.find(item => item.slug === slug)
  if (!entry) return <div className="pt-24"><h1 className="text-2xl font-semibold">Not found.</h1><Link className="mt-4 inline-block text-sm underline" to={basePath}>Back to {basePath.slice(1)}</Link></div>
  return <article className="pt-16 sm:pt-24"><Link to={basePath} className="text-sm text-neutral-500">← Back to {basePath.slice(1)}</Link><h1 className="mt-10 text-3xl font-semibold tracking-tight">{entry.title}</h1><time className="mt-3 block text-sm text-neutral-500">{entry.date}</time><div className="prose mt-12 max-w-xl text-neutral-700 dark:text-neutral-300">{bodyToBlocks(entry.body).map(renderBodyBlock)}</div></article>
}
