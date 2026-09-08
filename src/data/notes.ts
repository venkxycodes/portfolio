import type { Entry } from './types'

export const notes: Entry[] = [
  { 
    slug: 'understanding-tf-idf-and-bm25', 
    title: 'Understanding TF-IDF and BM25', 
    description: 'A practical mental model for how search engines rank text.', 
    date: '08 Sep 2026', 
    body: ['TF stands for term frequency and IDF stands for inverse document frequency. It measures how important a word is to a particular document relative to the entire collection of documents',
      'Say there is a sentence: "Redis is a fast in-memory database."', 'TF is the number of times the word "Redis" appears in the sentence. IDF is the inverse of the number of documents that contain the word "Redis".', 'TF-IDF is the product of TF and IDF.', 
      'Documents can then be represented as TF-IDF vectors and compared with the query (commonly using **cosine similarity**) to rank the most relevant documents. The right mental model is:',
      'TF → Is this word important *here*?',
      'IDF → Is this word special *globally*?',
      'TF-IDF → How strongly does this word characterize *this document*?',

      'BM25 (Best Matching 25) is a search ranking algorithm that can be thought of as a more practical refinement of TF-IDF.',
      'It asks how relevant is this document to the query?',
      '## Core Idea',
      'Like TF-IDF, BM25 rewards terms that are:',
      '- **Rare across documents** → higher importance (IDF)',
      '- **Present frequently in this document** → higher relevance',
    ],
  },
]
