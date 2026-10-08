import { useEffect, useRef, useState } from 'react'
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { siteContent } from '../data/site'
import { experiences } from '../data/experiences'
import { projects } from '../data/projects'
import { notes } from '../data/notes'
import { misc } from '../data/misc'
import EntryPage from './EntryPage'
import './terminal.css'

const sections = ['home', 'work', 'projects', 'notes', 'misc']
const commands = [
  'help',
  'whoami',
  'work',
  'projects',
  'notes',
  'misc',
  'contact',
  'clear',
]
const symbols = ['⌂', '▤', '◇', '≡', '✳']
function Prompt({ command }: { command: string }) {
  return (
    <div className="term-prompt">
      <span>venkat</span>
      <span className="term-path">~/portfolio</span>
      <span className="term-chevron">❯</span>
      <span className="term-command">{command}</span>
    </div>
  )
}
function WorkOutput() {
  return (
    <div className="term-list">
      {experiences.map((item, i) => (
        <Link to={`/v2/work/${item.slug}`} key={item.slug} className="term-row">
          <span className="term-index">0{i + 1}</span>
          <div>
            <h3>
              {item.company} <span>↗</span>
            </h3>
            <p>{item.role}</p>
            <p className="term-description">{item.highlight}</p>
          </div>
          <time>{item.dates}</time>
        </Link>
      ))}
    </div>
  )
}
function Contact() {
  return (
    <div className="term-socials">
      {Object.entries(siteContent.links).map(([label, href]) => (
        <a
          key={label}
          href={href}
          target={label === 'email' ? undefined : '_blank'}
          rel="noreferrer"
        >
          {label} <span>↗</span>
        </a>
      ))}
    </div>
  )
}
export default function Terminal() {
  const location = useLocation(),
    navigate = useNavigate(),
    { slug } = useParams()
  const section = location.pathname.split('/')[2] || 'home'
  const [input, setInput] = useState(''),
    [history, setHistory] = useState<string[]>([]),
    [historyIndex, setHistoryIndex] = useState(-1)
  const [message, setMessage] = useState(''),
    [cleared, setCleared] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null),
    outputRef = useRef<HTMLElement>(null)
  useEffect(() => {
    setCleared(false)
    setMessage('')
    outputRef.current?.scrollTo(0, 0)
  }, [location.pathname])
  useEffect(() => {
    const focus = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', focus)
    return () => window.removeEventListener('keydown', focus)
  }, [])
  useEffect(() => {
    if (message)
      outputRef.current?.scrollTo({
        top: outputRef.current.scrollHeight,
        behavior: 'smooth',
      })
  }, [message])
  function run(raw: string) {
    const command = raw
      .trim()
      .toLowerCase()
      .replace(/^cd\s+/, '')
      .replace(/^\.\//, '')
    if (!command) return
    setHistory((items) => [...items, raw])
    setHistoryIndex(-1)
    setInput('')
    setCleared(false)
    if (command === 'clear') {
      setCleared(true)
      setMessage('')
      return
    }
    if (command === 'help') {
      setMessage(
        'Commands: whoami, home, work, projects, notes, misc, contact, clear. Use cd <section> to navigate. ↑ / ↓ browse history. Tab completes a command.',
      )
      return
    }
    if (command === 'contact') {
      setMessage('contact')
      return
    }
    const target =
      command === 'whoami' || command === '~' || command === '..'
        ? 'home'
        : command
    if (sections.includes(target)) {
      navigate(target === 'home' ? '/v2' : `/v2/${target}`)
      setMessage('')
      return
    }
    setMessage(
      `Command not found: ${raw}. Type help to see available commands.`,
    )
  }
  const entries = section === 'misc' ? misc : notes
  const experience = experiences.find((item) => item.slug === slug)
  if (!sections.includes(section)) return <Navigate to="/v2" replace />
  return (
    <div className="terminal-v2">
      <div className="term-ambient" />
      <div className="term-window">
        <header className="term-titlebar">
          <div className="term-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span className="term-tab">
            ⌘ &nbsp; venkat — portfolio <span>×</span>
          </span>
          <span className="term-title-meta">personal workspace</span>
          <Link to="/" className="term-classic">
            Classic view ↗
          </Link>
        </header>
        <div className="term-body">
          <aside className="term-sidebar">
            <Link to="/v2" className="term-brand">
              <span className="term-logo">v_</span>
              <div>
                venkat<span>the personal workspace</span>
              </div>
            </Link>
            <p className="term-sidebar-label">EXPLORER</p>
            <nav aria-label="Portfolio sections">
              {sections.map((item, i) => (
                <NavLink
                  end={item === 'home'}
                  to={item === 'home' ? '/v2' : `/v2/${item}`}
                  key={item}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <span>{symbols[i]}</span>
                  {item === 'home' ? 'overview' : item}
                  <span className="term-nav-count">
                    {
                      [
                        null,
                        experiences.length,
                        projects.length,
                        notes.length,
                        misc.length,
                      ][i]
                    }
                  </span>
                </NavLink>
              ))}
            </nav>
            <div className="term-sidebar-bottom">
              <p className="term-sidebar-label">ELSEWHERE</p>
              <Contact />
            </div>
          </aside>
          <div className="term-main">
            <div className="term-toolbar">
              <span>
                ~/portfolio
                <span className="term-toolbar-section">
                  /{section === 'home' ? '~' : section}
                </span>
              </span>
              <button onClick={() => run('help')}>
                ⌘ K <span>commands</span>
              </button>
            </div>
            <main className="term-output" ref={outputRef}>
              {!cleared && (
                <>
                  <div className="term-session-heading">
                    <span>
                      <span className="term-dot" /> INTERACTIVE PORTFOLIO
                    </span>
                    <span>zsh</span>
                  </div>
                  <section className="term-block">
                    <Prompt
                      command={
                        section === 'home'
                          ? 'whoami'
                          : slug
                            ? `cat ${section}/${slug}`
                            : `ls ${section}/`
                      }
                    />
                    {section === 'home' ? (
                      <>
                        <div className="term-hero">
                          <p className="term-comment"># Hello, I’m</p>
                          <h1>
                            {siteContent.name.split(' ').slice(0, -1).join(' ')}
                            <br />
                            <span>
                              {siteContent.name.split(' ').slice(-1)[0]}.
                            </span>
                            <span className="term-cursor" aria-hidden="true">
                              ▌
                            </span>
                          </h1>
                          <p className="term-intro">
                            {siteContent.introduction}
                          </p>
                          <p className="term-muted">{siteContent.currently}</p>
                          <div className="term-hero-footer">
                            <span className="term-tag">software engineer</span>
                            <span className="term-tag">AI generalist</span>
                            <span className="term-tag">builder</span>
                          </div>
                        </div>
                        <div className="term-success">
                          ✓ &nbsp; {siteContent.homeNote}
                        </div>
                      </>
                    ) : section === 'work' ? (
                      slug ? (
                        experience ? (
                          <article className="term-detail">
                            <Link to="/v2/work" className="term-back">
                              ← work/
                            </Link>
                            <h1>{experience.company}</h1>
                            <p className="term-muted">
                              {experience.role} · {experience.dates} ·{' '}
                              {experience.location}
                            </p>
                            <p>{experience.highlight}</p>
                            <h2>Tools & technologies</h2>
                            <p className="term-accent">{experience.stack}</p>
                            {experience.aiTools && (
                              <p>AI tools: {experience.aiTools.join(' · ')}</p>
                            )}
                            <h2>Timeline</h2>
                            {(
                              experience.timeline ?? [
                                {
                                  role: experience.role,
                                  dates: experience.dates,
                                  bullets: experience.bullets,
                                },
                              ]
                            ).map((item) => (
                              <section key={item.role}>
                                <h3>{item.role}</h3>
                                <p className="term-muted">{item.dates}</p>
                                <ul>
                                  {item.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                  ))}
                                </ul>
                              </section>
                            ))}
                          </article>
                        ) : (
                          <p>
                            Experience not found.{' '}
                            <Link to="/v2/work">Back to work →</Link>
                          </p>
                        )
                      ) : (
                        <>
                          <div className="term-section-title">
                            <h1>Work experience</h1>
                            <span>{experiences.length} entries</span>
                          </div>
                          <WorkOutput />
                        </>
                      )
                    ) : section === 'projects' ? (
                      <>
                        <div className="term-section-title">
                          <h1>Things I’ve made</h1>
                          <span>{projects.length} projects</span>
                        </div>
                        <div className="term-projects">
                          {projects.map((item, i) => (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              key={item.name}
                            >
                              <div className="term-project-top">
                                <span>0{i + 1} / PROJECT</span>
                                <span>↗</span>
                              </div>
                              <h2>{item.name}</h2>
                              <p>{item.description}</p>
                              <span className="term-stack">{item.stack}</span>
                            </a>
                          ))}
                        </div>
                      </>
                    ) : slug ? (
                      <EntryPage
                        entries={entries}
                        basePath={`/v2/${section}`}
                      />
                    ) : (
                      <>
                        <div className="term-section-title">
                          <h1>{section === 'misc' ? 'Misc' : 'Notes'}</h1>
                          <span>{entries.length} entries</span>
                        </div>
                        <p className="term-muted">
                          {section === 'misc'
                            ? 'straight out of my mind, no AI generated slop'
                            : 'Technical explanations, ideas, and things I am learning.'}
                        </p>
                        <div className="term-list">
                          {entries.map((item) => (
                            <Link
                              className="term-row"
                              key={item.slug}
                              to={`/v2/${section}/${item.slug}`}
                            >
                              <div>
                                <h3>{item.title} ↗</h3>
                                <p>{item.description}</p>
                              </div>
                              <time>{item.date}</time>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </section>
                  {section === 'home' && (
                    <>
                      <section className="term-block">
                        <Prompt command="ls work/ --recent" />
                        <div className="term-section-title">
                          <h2>Where I’ve been building</h2>
                          <Link to="/v2/work">view all →</Link>
                        </div>
                        <WorkOutput />
                      </section>
                      <section className="term-block">
                        <Prompt command="ls notes/ --recent" />
                        <div className="term-section-title">
                          <h2>Fresh from the notebook</h2>
                          <Link to="/v2/notes">view all →</Link>
                        </div>
                        {notes.slice(0, 3).map((item) => (
                          <Link
                            className="term-row"
                            key={item.slug}
                            to={`/v2/notes/${item.slug}`}
                          >
                            <h3>{item.title}</h3>
                            <time>{item.date}</time>
                          </Link>
                        ))}
                      </section>
                      <section className="term-block">
                        <Prompt command="cat contact.txt" />
                        <p className="term-muted">
                          Glad you are here! Feel free to reach out to me via
                          the links below.
                        </p>
                        <Contact />
                      </section>
                    </>
                  )}
                </>
              )}
              {message && (
                <section
                  className="term-block term-feedback"
                  aria-live="polite"
                >
                  <Prompt command={history[history.length - 1]} />
                  {message === 'contact' ? <Contact /> : <p>{message}</p>}
                </section>
              )}
              {cleared && (
                <p className="term-muted">
                  Session cleared. Type whoami to start again.
                </p>
              )}
            </main>
            <div className="term-input-area">
              <div className="term-suggestions">
                {['whoami', 'work', 'projects', 'notes', 'help'].map(
                  (command) => (
                    <button key={command} onClick={() => run(command)}>
                      {command}
                      <span>↵</span>
                    </button>
                  ),
                )}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  run(input)
                }}
              >
                <div className="term-input-prompt">
                  <span>venkat</span> <span>~/portfolio</span>
                  <span className="term-input-shell">zsh</span>
                </div>
                <div className="term-input-line">
                  <span className="term-chevron">❯</span>
                  <input
                    ref={inputRef}
                    aria-label="Terminal command"
                    placeholder="Type a command, or explore using the sidebar…"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Tab') {
                        e.preventDefault()
                        const match = commands.find((c) =>
                          c.startsWith(input.trim()),
                        )
                        if (match) setInput(match)
                      }
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        e.preventDefault()
                        const next = Math.max(
                          -1,
                          Math.min(
                            history.length - 1,
                            historyIndex + (e.key === 'ArrowUp' ? 1 : -1),
                          ),
                        )
                        setHistoryIndex(next)
                        setInput(
                          next < 0 ? '' : history[history.length - 1 - next],
                        )
                      }
                    }}
                  />
                  <button type="submit" aria-label="Run command">
                    ↵
                  </button>
                </div>
              </form>
              <div className="term-input-hint">
                <span>
                  ↑↓ history <span>·</span> tab autocomplete
                </span>
                <span>⌘ / ctrl + K to focus</span>
              </div>
            </div>
          </div>
        </div>
        <footer className="term-statusbar">
          <span>
            <span className="term-dot" /> local session{' '}
            <span className="term-status-branch">⌥ main</span>
          </span>
          <span>
            built with curiosity <span>·</span> © {new Date().getFullYear()}{' '}
            Venkat
          </span>
        </footer>
      </div>
    </div>
  )
}
