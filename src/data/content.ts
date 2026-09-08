export type Entry = { slug: string; title: string; description: string; date: string; body: string[] }

export type Experience = {
  slug: string
  company: string
  role: string
  dates: string
  location: string
  stack: string
  highlights: string[]
  bullets: string[]
}

export const siteContent = {
  name: 'Venkatraman Kannan',
  introduction: 'Always curious, trying to build things that help people.',
  currently: 'Currently doing nothing!!',
  homeNote: 'I work on software. My approach towards building software is: understanding a problem, making a small useful thing, and leaving it clearer than I found it.',
  links: {
    github: 'https://github.com/venkxycodes',
    linkedin: 'https://www.linkedin.com/in/venkxy30',
    email: 'mailto:venkatramankannantech@gmail.com',
  },
}

export const experiences: Experience[] = [
  {
    slug: 'lassie-ai', company: 'Lassie AI', role: 'Software Engineer', dates: 'December 2025 - Present', location: 'San Francisco, CA (Remote)',
    stack: 'Python, Django, Pydantic AI, PostgreSQL, Redis, GCP',
    highlights: [
      'Reduced PMS synchronization time from 2 hours to 6-10 minutes with fingerprint-based incremental sync.',
      'Improved long-tail patient and claim matching from 91% to 98%.',
      'Reduced Cloud Run infrastructure costs by $2,000 per month while maintaining performance.',
    ],
    bullets: [
      'Built and maintained the PMS sync ecosystem to fetch and synchronize patient and insurance data from on-premise Windows servers into Lassie\'s GCP infrastructure, enabling reliable data availability for downstream AI and application workflows.',
      'Introduced fingerprint-based incremental synchronization to efficiently detect updates and deletes from on-premise PMS servers, reducing end-to-end synchronization time from 2 hours to 6-10 minutes.',
      'Built an AI-powered insurance payment posting workflow to automate the manual process of accounting for paid insurance claims in dental practices\' PMS systems.',
      'Improved the long tail of patient and claim matching success rates from 91% to 98% by enhancing matching workflows and handling variations in patient, insurance, and claim data across PMS systems.',
      'Designed and implemented write-tools for Dentrix, OpenDental, and Eaglesoft, enabling the AI posting workflow to perform system-specific actions across different practice management systems.',
      'Built and maintained materialized views on PMS data to generate practice payer profiles and payer-status reporting, providing business-level visibility into payer availability.',
      'Developed batch jobs to generate and maintain practice-level payer profiles and canonical payer-level aggregations, enabling better decision-making around payer enrollments and the AI posting workflow.',
      'Built evaluation workflows to measure the quality and reliability of the AI-powered posting planner and developed a golden dataset to provide a consistent benchmark and prevent regressions.',
      'Developed internal developer tooling to test the AI payment posting workflow in development environments using masked PHI data, enabling engineers to reproduce and debug workflows without exposing production patient information.',
      'Built and maintained asynchronous processing infrastructure using Redis-backed task queues to support reliable execution of background processing workflows.',
      'Optimized Cloud Run services through resource rightsizing and request-based provisioning, reducing infrastructure costs by $2,000 per month while maintaining application performance.',
    ],
  },
  {
    slug: 'appsforbharat-software-engineer', company: 'AppsForBharat', role: 'Software Engineer - Backend', dates: 'May 2023 - November 2025', location: 'Bengaluru, India',
    stack: 'Go, PostgreSQL, MongoDB, Redis, AWS, GCP BigQuery, Bitbucket CI/CD',
    highlights: [
      'Improved analytics funnel completion from 10% to 77% through better website tracking and guest-user identification.',
      'Increased customer support feedback rates from 38% to 79% with an end-to-end WhatsApp rating workflow.',
      'Reduced AWS infrastructure costs by $1,500 per month through ECS workload and resource optimization.',
    ],
    bullets: [
      'Built and maintained Go microservices for event capture and data ingestion, enabling low-latency and reliable processing of application events across distributed systems.',
      'Led the development of a real-time event verification system to validate incoming event data against defined requirements and automate ticket generation for invalid or incomplete instrumentation.',
      'Designed and developed backend services for an event instrumentation system to monitor, validate, and manage event definitions and blueprints across Android, iOS, and Web applications.',
      'Designed and developed REST APIs to receive, process, and route events from the SriMandir website, enabling downstream analytics, data processing, and real-time event-driven workflows.',
      'Designed and implemented reverse ETL pipelines to aggregate user attributes from GCP BigQuery and ingest enriched user data into CRM platforms through scheduled batch jobs.',
      'Enhanced website tracking and guest-user identification workflows, improving analytics funnel completion from 10% to 77% and enabling more complete attribution of user activity.',
      'Integrated event and user-data flows with AppsFlyer, Mixpanel, MoEngage, Interakt, LeadSquared, and BigQuery to power product analytics, user attribution, marketing automation, and CRM workflows.',
      'Built an end-to-end WhatsApp customer support rating workflow, integrating customer interactions with internal systems and increasing user feedback rates from 38% to 79%.',
      'Built the ClickToCall feature and a bidirectional call-log connector between Exotel and LeadSquared using AWS Lambda, enabling customer calls and call metadata to be synchronized between communication and CRM systems.',
      'Optimized AWS ECS infrastructure by redesigning consumer workloads and improving resource utilization, reducing cloud infrastructure costs by $1,500 per month without performance degradations.',
      'Refactored the API Gateway authorizer Lambda into a structured and maintainable codebase, reducing development effort and improving the maintainability of authorization logic.',
    ],
  },
  {
    slug: 'appsforbharat-intern', company: 'AppsForBharat', role: 'Software Engineering Intern', dates: 'January 2023 - April 2023', location: 'Bengaluru, India',
    stack: 'Go, MongoDB',
    highlights: [
      'Built an event property aggregator service in Go for centralized access across microservices.',
      'Developed a festive task reminder feature with Go and MongoDB.',
    ],
    bullets: [
      'Built an event property aggregator service in Go to provide centralized access to event properties across microservices, simplifying data access across the platform.',
      'Developed a reminder feature for festive task management, implementing backend workflows and data persistence using Go and MongoDB.',
    ],
  },
]

export const notes: Entry[] = [
  { slug: 'sample-note', title: 'A sample note', description: 'A starting point for a new idea or something I am learning.', date: '08 Sep 2026', body: ['This is a sample note. Replace this text with a technical explanation, an idea, or something I want to remember.', 'To add another note, copy this object, change the slug, title, description, date, and body, and it will automatically get its own page.'] },
  { slug: 'understanding-bm25', title: 'Understanding BM25', description: 'A practical mental model for how search engines rank text.', date: '12 Feb 2025', body: ['BM25 is a useful reminder that relevance is not the same thing as matching words. It balances term frequency with how rare a term is across the corpus.', 'The part I keep coming back to is saturation: seeing a word twice can matter a lot more than seeing it once, but seeing it fifty times should not make a document fifty times more relevant.'] },
  { slug: 'small-tools-are-good-tools', title: 'Small tools are good tools', description: 'On making software that earns its place in a workflow.', date: '28 Jan 2025', body: ['The best tools I use tend to do one thing and make that one thing feel calm. They fit into the shape of a day instead of asking me to reorganise the day around them.', 'This is a useful constraint for side projects: start with the smallest useful surface, then wait for a real reason to add more.'] },
  { slug: 'learning-in-public', title: 'Learning in public', description: 'Notes on leaving a trail while figuring things out.', date: '04 Jan 2025', body: ['A knowledge garden does not need to be polished to be useful. A half-formed idea can still be a good signpost for a future version of the idea.', 'Writing down the question, the wrong turn, and the next experiment is often more valuable than writing the final answer.'] },
]

export const misc: Entry[] = [
  { slug: 'sample-thought', title: 'A sample thought', description: 'A small place for an observation that does not need a category.', date: '08 Sep 2026', body: ['This is a sample misc entry. It can be replaced with a journal fragment, a passing observation, or anything that does not belong in Notes.', 'The informal entries are intentionally short and easy to add.'] },
  { slug: 'a-good-walk', title: 'A good walk', description: 'Some problems only need an hour without a screen.', date: '19 Feb 2025', body: ['I am trying to remember that thinking is also an activity. A walk with no podcast is sometimes the fastest way to find the shape of a problem.'] },
  { slug: 'keep-a-little-space', title: 'Keep a little space', description: 'A note to leave room for things not on the plan.', date: '07 Feb 2025', body: ['Plans are useful until they make the day too narrow. I want to keep a little space for conversations, detours, and ideas that arrive sideways.'] },
]

export const projects = [
  { name: 'venkxyslittleworld', description: 'This small corner of the internet: notes, experiments, and the things between them.', stack: 'React · TypeScript', url: 'https://github.com/venkxycodes/venkxyslittleworld-' },
  { name: 'Deployment challenge', description: 'An exploration of building a reliable, useful system from an open-ended problem.', stack: 'Python · Evaluation', url: 'https://github.com/venkxycodes' },
]
