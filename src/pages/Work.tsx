import { Link } from 'react-router-dom'
import Section from '../components/Section'
import { experiences } from '../data/experiences'

export default function Work() {
  return <div className="pt-16 sm:pt-24"><p className="text-sm text-neutral-500">Where I’ve worked</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Work experience</h1><Section title="Experience"><div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">{experiences.map(experience => <Link key={experience.slug} to={`/work/${experience.slug}`} className="block py-6 hover:pl-1"><div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"><h2 className="font-medium">{experience.company}</h2><time className="text-xs text-neutral-500">{experience.dates}</time></div><p className="mt-1 text-sm text-neutral-500">{experience.role} · {experience.location}</p><p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{experience.highlight}</p></Link>)}</div></Section></div>
}
