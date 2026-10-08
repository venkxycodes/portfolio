import { Navigate, Route, Routes } from 'react-router-dom'
import Terminal from './pages/Terminal'
import Layout from './components/Layout'
import { misc } from './data/misc'
import { notes } from './data/notes'
import EntryPage from './pages/EntryPage'
import ExperiencePage from './pages/ExperiencePage'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import Projects from './pages/Projects'
import Work from './pages/Work'

export default function App() {
  if (import.meta.env.VITE_PORTFOLIO_UI === 'terminal') return <Routes>
    <Route path="/" element={<Terminal />} />
    <Route path="/:section" element={<Terminal />} />
    <Route path="/:section/:slug" element={<Terminal />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/notes" element={<ListingPage title="Notes" intro="Technical explanations, ideas, and things I am learning." entries={notes} basePath="/notes" />} />
    <Route path="/notes/:slug" element={<EntryPage entries={notes} basePath="/notes" />} />
    <Route path="/work" element={<Work />} />
    <Route path="/work/:slug" element={<ExperiencePage />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/misc" element={<ListingPage title="Misc" intro="straight out of my mind, no AI generated slop" entries={misc} basePath="/misc" sectionTitle="Thoughts" />} />
    <Route path="/misc/:slug" element={<EntryPage entries={misc} basePath="/misc" />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></Layout>
}
