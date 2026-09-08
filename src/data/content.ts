export type Entry = { slug: string; title: string; description: string; date: string; body: string[] }

export const notes: Entry[] = [
  { slug: 'understanding-bm25', title: 'Understanding BM25', description: 'A practical mental model for how search engines rank text.', date: '12 Feb 2025', body: ['BM25 is a useful reminder that relevance is not the same thing as matching words. It balances term frequency with how rare a term is across the corpus.', 'The part I keep coming back to is saturation: seeing a word twice can matter a lot more than seeing it once, but seeing it fifty times should not make a document fifty times more relevant.'] },
  { slug: 'small-tools-are-good-tools', title: 'Small tools are good tools', description: 'On making software that earns its place in a workflow.', date: '28 Jan 2025', body: ['The best tools I use tend to do one thing and make that one thing feel calm. They fit into the shape of a day instead of asking me to reorganise the day around them.', 'This is a useful constraint for side projects: start with the smallest useful surface, then wait for a real reason to add more.'] },
  { slug: 'learning-in-public', title: 'Learning in public', description: 'Notes on leaving a trail while figuring things out.', date: '04 Jan 2025', body: ['A knowledge garden does not need to be polished to be useful. A half-formed idea can still be a good signpost for a future version of the idea.', 'Writing down the question, the wrong turn, and the next experiment is often more valuable than writing the final answer.'] },
]

export const misc: Entry[] = [
  { slug: 'a-good-walk', title: 'A good walk', description: 'Some problems only need an hour without a screen.', date: '19 Feb 2025', body: ['I am trying to remember that thinking is also an activity. A walk with no podcast is sometimes the fastest way to find the shape of a problem.'] },
  { slug: 'keep-a-little-space', title: 'Keep a little space', description: 'A note to leave room for things not on the plan.', date: '07 Feb 2025', body: ['Plans are useful until they make the day too narrow. I want to keep a little space for conversations, detours, and ideas that arrive sideways.'] },
]

export const projects = [
  { name: 'venkxyslittleworld', description: 'This small corner of the internet: notes, experiments, and the things between them.', stack: 'React · TypeScript', url: 'https://github.com/venkxycodes/venkxyslittleworld-' },
  { name: 'Deployment challenge', description: 'An exploration of building a reliable, useful system from an open-ended problem.', stack: 'Python · Evaluation', url: 'https://github.com/venkxycodes' },
]
