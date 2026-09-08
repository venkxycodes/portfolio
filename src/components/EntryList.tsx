import { Link } from 'react-router-dom'
import type { Entry } from '../data/types'

export default function EntryList({ entries, basePath }: { entries: Entry[]; basePath: string }) {
  return <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
    {entries.map((entry) => <Link key={entry.slug} to={`${basePath}/${entry.slug}`} className="block py-5 hover:pl-1">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"><h2 className="font-medium">{entry.title}</h2><time className="text-xs text-neutral-500">{entry.date}</time></div>
      <p className="mt-1 text-sm text-neutral-500">{entry.description}</p>
    </Link>)}
  </div>
}
