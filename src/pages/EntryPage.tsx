import { Link, useParams } from 'react-router-dom'
import type { Entry } from '../data/content'

export default function EntryPage({ entries, basePath }: { entries: Entry[]; basePath: string }) {
  const { slug } = useParams(); const entry = entries.find(item => item.slug === slug)
  if (!entry) return <div className="pt-24"><h1 className="text-2xl font-semibold">Not found.</h1><Link className="mt-4 inline-block text-sm underline" to={basePath}>Back to {basePath.slice(1)}</Link></div>
  return <article className="pt-16 sm:pt-24"><Link to={basePath} className="text-sm text-neutral-500">← Back to {basePath.slice(1)}</Link><h1 className="mt-10 text-3xl font-semibold tracking-tight">{entry.title}</h1><time className="mt-3 block text-sm text-neutral-500">{entry.date}</time><div className="prose mt-12 max-w-xl text-neutral-700 dark:text-neutral-300">{entry.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></article>
}
