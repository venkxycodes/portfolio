import type { Experience } from './types'

export const experiences: Experience[] = [
  {
    slug: 'lassie-ai', company: 'Lassie AI', role: 'Software Engineer', dates: 'December 2025 - Present', location: 'San Francisco, CA (Remote)',
    stack: 'Python, Django, Pydantic AI, PostgreSQL, Redis, GCP',
    highlight: 'Built PMS sync and AI insurance payment posting workflows, cutting sync time from 2 hours to minutes and improving claim matching to 98%.',
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
    slug: 'appsforbharat', company: 'AppsForBharat', role: 'Software Engineer - Backend and Data Platform', dates: 'January 2023 - November 2025', location: 'Bengaluru, India',
    stack: 'Go, PostgreSQL, MongoDB, Redis, AWS, GCP BigQuery, Bitbucket CI/CD',
    highlight: 'Built event-driven backend systems, data platforms, and customer-facing integrations across three roles at AppsForBharat.',
    bullets: [],
    timeline: [
      {
        role: 'SDE Intern', dates: 'January 2023 - April 2023', bullets: [
          'Built an event property aggregator service in Go to provide centralized access to event properties across microservices, simplifying data access across the platform.',
          'Developed a reminder feature for festive task management, implementing backend workflows and data persistence using Go and MongoDB.',
        ],
      },
      {
        role: 'SDE', dates: 'May 2023 - February 2025', bullets: [
          'Built and maintained Go microservices for event capture and data ingestion, enabling low-latency and reliable processing of application events across distributed systems.',
          'Led the development of a real-time event verification system to validate incoming event data against defined requirements and automate ticket generation for invalid or incomplete instrumentation.',
          'Designed and developed backend services for an event instrumentation system to monitor, validate, and manage event definitions and blueprints across Android, iOS, and Web applications.',
          'Designed and developed REST APIs to receive, process, and route events from the SriMandir website, enabling downstream analytics, data processing, and real-time event-driven workflows.',
          'Enhanced website tracking and guest-user identification workflows, improving analytics funnel completion from 10% to 77% and enabling more complete attribution of user activity.',
          'Integrated event and user-data flows with AppsFlyer, Mixpanel, MoEngage, Interakt, LeadSquared, and BigQuery to power product analytics, user attribution, marketing automation, and CRM workflows.',
        ],
      },
      {
        role: 'SDE-2', dates: 'March 2025 - November 2025', bullets: [
          'Built an end-to-end WhatsApp customer support rating workflow, integrating customer interactions with internal systems and increasing user feedback rates from 38% to 79%.',
          'Built the ClickToCall feature and a bidirectional call-log connector between Exotel and LeadSquared using AWS Lambda, enabling customer calls and call metadata to be synchronized between communication and CRM systems.',
          'Optimized AWS ECS infrastructure by redesigning consumer workloads and improving resource utilization, reducing cloud infrastructure costs by $1,500 per month without performance degradations.',
          'Refactored the API Gateway authorizer Lambda into a structured and maintainable codebase, reducing development effort and improving the maintainability of authorization logic.',
          'Designed and implemented reverse ETL pipelines to aggregate user attributes from GCP BigQuery and ingest enriched user data into CRM platforms through scheduled batch jobs.',
        ],
      },
    ],
  },
]
