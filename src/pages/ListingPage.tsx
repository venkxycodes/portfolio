import EntryList from '../components/EntryList'
import Section from '../components/Section'
import type { Entry } from '../data/types'

export default function ListingPage({ title, intro, entries, basePath }: { title: string; intro: string; entries: Entry[]; basePath: string }) {
  return <div className="pt-16 sm:pt-24"><p className="text-sm text-neutral-500">A collection of</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1><p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500">{intro}</p><Section title="Entries"><EntryList entries={entries} basePath={basePath} /></Section></div>
}
