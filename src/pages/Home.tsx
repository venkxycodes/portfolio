import { Link } from 'react-router-dom'
import { notes, projects } from '../data/content'
import Section from '../components/Section'

export default function Home() {
  return <div className="pt-16 sm:pt-24">
    <p className="text-sm text-neutral-500">Hello, I’m</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Venkat.</h1>
    <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">I build things, write things down, and try to pay attention to the space between the two.</p>
    <p className="mt-3 text-sm text-neutral-500">Currently thinking about search, useful software, and learning in public.</p>
    <Section title="Recent notes"><div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">{notes.slice(0, 3).map(note => <Link key={note.slug} to={`/notes/${note.slug}`} className="flex items-baseline justify-between gap-4 py-4 hover:pl-1"><span>{note.title}</span><time className="shrink-0 text-xs text-neutral-500">{note.date}</time></Link>)}</div><Link to="/notes" className="mt-4 inline-block text-sm text-neutral-500 underline underline-offset-4">All notes →</Link></Section>
    <Section title="Selected projects"><div className="space-y-5">{projects.map(project => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="block"><div className="flex items-baseline justify-between gap-4"><h3 className="font-medium">{project.name}</h3><span className="text-xs text-neutral-500">{project.stack}</span></div><p className="mt-1 text-sm text-neutral-500">{project.description}</p></a>)}</div></Section>
    <Section title="A little more"><p className="max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">I work on software and enjoy the parts that require care: understanding a problem, making a small useful thing, and leaving it clearer than I found it.</p><p className="mt-4 text-sm"><Link to="/about" className="underline underline-offset-4">A short introduction →</Link></p></Section>
    <div className="mt-16 flex gap-5 text-sm text-neutral-500"><a href="https://github.com/venkxycodes" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@venkat.dev">Email</a></div>
  </div>
}
