import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { misc, notes } from './data/content'
import EntryPage from './pages/EntryPage'
import ExperiencePage from './pages/ExperiencePage'
import Home from './pages/Home'
import ListingPage from './pages/ListingPage'
import Projects from './pages/Projects'
import Work from './pages/Work'

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/notes" element={<ListingPage title="Notes" intro="Technical explanations, ideas, and things I’m learning." entries={notes} basePath="/notes" />} />
    <Route path="/notes/:slug" element={<EntryPage entries={notes} basePath="/notes" />} />
    <Route path="/work" element={<Work />} />
    <Route path="/work/:slug" element={<ExperiencePage />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/misc" element={<ListingPage title="Misc" intro="Random thoughts, observations, and things that don’t belong elsewhere." entries={misc} basePath="/misc" />} />
    <Route path="/misc/:slug" element={<EntryPage entries={misc} basePath="/misc" />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></Layout>
}
