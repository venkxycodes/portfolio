import type { Entry } from './types'

export const notes: Entry[] = [
  { slug: 'sample-note', title: 'A sample note', description: 'A starting point for a new idea or something I am learning.', date: '08 Sep 2026', body: ['This is a sample note. Replace this text with a technical explanation, an idea, or something I want to remember.', 'To add another note, copy this object, change the slug, title, description, date, and body, and it will automatically get its own page.'] },
  { slug: 'understanding-bm25', title: 'Understanding BM25', description: 'A practical mental model for how search engines rank text.', date: '12 Feb 2025', body: ['BM25 is a useful reminder that relevance is not the same thing as matching words. It balances term frequency with how rare a term is across the corpus.', 'The part I keep coming back to is saturation: seeing a word twice can matter a lot more than seeing it once, but seeing it fifty times should not make a document fifty times more relevant.'] },
]
