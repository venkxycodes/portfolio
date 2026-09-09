export type Entry = { slug: string; title: string; description: string; date: string; body: string[] }

export type TimelineItem = { role: string; dates: string; bullets: string[] }

export type Experience = {
  slug: string
  company: string
  role: string
  dates: string
  location: string
  stack: string
  highlight: string
  bullets: string[]
  timeline?: TimelineItem[]
}
