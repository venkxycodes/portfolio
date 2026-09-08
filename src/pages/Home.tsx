import { Link } from 'react-router-dom'
import { experiences, notes, projects, siteContent } from '../data/content'
import Section from '../components/Section'

export default function Home() {
  return <div className="pt-16 sm:pt-24">
    <p className="text-sm text-neutral-500">Hello, I’m</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{siteContent.name}.</h1>
    <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">{siteContent.introduction}</p>
    <p className="mt-3 text-sm text-neutral-500">{siteContent.currently}</p>
    <Section title="Recent notes"><div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">{notes.slice(0, 3).map(note => <Link key={note.slug} to={`/notes/${note.slug}`} className="flex items-baseline justify-between gap-4 py-4 hover:pl-1"><span>{note.title}</span><time className="shrink-0 text-xs text-neutral-500">{note.date}</time></Link>)}</div><Link to="/notes" className="mt-4 inline-block text-sm text-neutral-500 underline underline-offset-4">All notes →</Link></Section>
    <Section title="Work experience"><div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">{experiences.map(experience => <Link key={experience.slug} to={`/work/${experience.slug}`} className="block py-5 hover:pl-1"><div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"><h3 className="font-medium">{experience.company}</h3><span className="text-xs text-neutral-500">{experience.dates}</span></div><p className="mt-1 text-sm text-neutral-500">{experience.role}</p><ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{experience.highlights.slice(0, 3).map(highlight => <li key={highlight}>{highlight}</li>)}</ul></Link>)}</div></Section>
    <Section title="Selected projects"><div className="space-y-5">{projects.map(project => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="block"><div className="flex items-baseline justify-between gap-4"><h3 className="font-medium">{project.name}</h3><span className="text-xs text-neutral-500">{project.stack}</span></div><p className="mt-1 text-sm text-neutral-500">{project.description}</p></a>)}</div></Section>
    <Section title="A little more"><p className="max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">{siteContent.homeNote}</p><p className="mt-4 text-sm">This is my home page, with a few notes on what I’m making and learning.</p></Section>
    <div className="mt-16 flex gap-5 text-sm text-neutral-500"><a href={siteContent.links.github} target="_blank" rel="noreferrer">GitHub</a><a href={siteContent.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={siteContent.links.email}>Email</a></div>
  </div>
}
