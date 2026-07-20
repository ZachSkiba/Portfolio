import { useEffect, useState, type ReactNode } from 'react'

type IconName = 'arrow' | 'external' | 'github' | 'mail' | 'linkedin' | 'menu' | 'close'

const Icon = ({ name, size = 18 }: { name: IconName; size?: number }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const }

  if (name === 'arrow') return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'external') return <svg {...common}><path d="M14 5h5v5M19 5l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
  if (name === 'github') return <svg {...common}><path d="M15 22v-3.87a3.39 3.39 0 0 0-.94-2.61c3.12-.35 6.4-1.53 6.4-6.9a5.4 5.4 0 0 0-1.44-3.75 5.02 5.02 0 0 0-.14-3.71s-1.17-.37-3.84 1.43a13.36 13.36 0 0 0-7 0C5.37.8 4.2 1.17 4.2 1.17a5.02 5.02 0 0 0-.14 3.71 5.4 5.4 0 0 0-1.44 3.75c0 5.35 3.27 6.56 6.39 6.91A3.39 3.39 0 0 0 8.07 18.1V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'linkedin') return <svg {...common}><path d="M6 9v9M6 6.5v.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" /></svg>
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
  return <svg {...common}><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
}

const ArrowLink = ({ children, href = '#', light = false }: { children: ReactNode; href?: string; light?: boolean }) => (
  <a className={`arrow-link${light ? ' arrow-link--light' : ''}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={17} />
  </a>
)

const SectionLabel = ({ number, children }: { number: string; children: ReactNode }) => (
  <div className="section-label"><span>{number}</span><span>{children}</span></div>
)

const tags = (items: string[]) => <div className="tag-list">{items.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>

const ForecastArt = () => (
  <div className="project-art project-art--forecast" aria-label="Abstract demand forecasting chart illustration">
    <div className="art-topline"><span>DEMAND / WEEK 42</span><span className="art-status"><i /> LIVE MODEL</span></div>
    <div className="forecast-chart">
      <div className="chart-y-labels"><span>120</span><span>80</span><span>40</span><span>0</span></div>
      <svg viewBox="0 0 560 250" preserveAspectRatio="none" role="img" aria-label="Actual and forecast demand curves">
        <defs><linearGradient id="forecast-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#e87355" stopOpacity=".23" /><stop offset="1" stopColor="#e87355" stopOpacity="0" /></linearGradient></defs>
        <path d="M0 210C28 182 38 199 61 174S101 115 125 150s33 20 52-21 24-61 46-33 33 70 57 23 33-80 54-45 26 72 48 42 38-38 57-20 26 42 51 13" fill="none" stroke="#b8b3aa" strokeWidth="1.3" strokeDasharray="5 6" />
        <path d="M0 207C31 188 44 205 66 185s35-55 56-36 34 60 55 35 27-77 48-57 29 70 52 50 29-66 51-43 29 53 51 32 34-34 57-10 44 12 57-3v77H0Z" fill="url(#forecast-fill)" />
        <path d="M0 207C31 188 44 205 66 185s35-55 56-36 34 60 55 35 27-77 48-57 29 70 52 50 29-66 51-43 29 53 51 32 34-34 57-10 44 12 57-3" fill="none" stroke="#e87355" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="454" cy="156" r="5" fill="#f4f1ec" stroke="#e87355" strokeWidth="2" /><circle cx="454" cy="156" r="10" fill="none" stroke="#e87355" strokeOpacity=".25" />
      </svg>
      <div className="chart-x-labels"><span>W38</span><span>W39</span><span>W40</span><span>W41</span><span>W42</span></div>
    </div>
    <div className="forecast-footer"><span><b>ACTUAL</b><i className="legend-line legend-line--actual" /></span><span><b>FORECAST</b><i className="legend-line legend-line--forecast" /></span><strong>+18.4% <small>confidence</small></strong></div>
  </div>
)

const ExpenseArt = () => (
  <div className="project-art project-art--expense" aria-label="Abstract shared expenses interface illustration">
    <div className="expense-window">
      <div className="window-head"><span className="window-dots"><i /><i /><i /></span><span>household / september</span><span className="window-menu">•••</span></div>
      <div className="expense-balance"><div><small>HOUSE BALANCE</small><strong>$1,284<span>.32</span></strong></div><span className="balance-pill">+ 8.2%</span></div>
      <div className="expense-rows">
        <div className="expense-row"><span className="expense-avatar expense-avatar--coral">M</span><span><b>Utilities</b><small>Michael · 2 hours ago</small></span><strong>$148.20</strong></div>
        <div className="expense-row"><span className="expense-avatar expense-avatar--blue">S</span><span><b>Groceries</b><small>Sarah · yesterday</small></span><strong>$86.42</strong></div>
        <div className="expense-row"><span className="expense-avatar expense-avatar--green">D</span><span><b>Internet</b><small>David · Sep 04</small></span><strong>$64.00</strong></div>
      </div>
    </div>
  </div>
)

const DiabetesArt = () => (
  <div className="project-art project-art--diabetes" aria-label="Abstract health prediction model illustration">
    <div className="diabetes-orbit"><div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" /><div className="orbit-core"><span>0.82</span><small>MODEL SCORE</small></div><i className="orbit-dot orbit-dot--one" /><i className="orbit-dot orbit-dot--two" /><i className="orbit-dot orbit-dot--three" /></div>
    <div className="diabetes-caption"><span>DIABETES RISK</span><strong>LOW</strong><small>Classification model / v1</small></div>
  </div>
)

const projects = [
  {
    number: '01', title: 'Retail Demand Forecasting', kicker: 'FLAGSHIP PROJECT', description: 'A decision-support system for seeing demand more clearly — from noisy history to confident next steps.', tags: ['Python', 'Forecasting', 'PostgreSQL'], art: <ForecastArt />, featured: true,
  },
  {
    number: '02', title: 'Roommate Expense Tracker', kicker: 'PRODUCT SYSTEM', description: 'A calm, shared space for keeping household spending transparent and balanced.', tags: ['React', 'Flask', 'SQLite'], art: <ExpenseArt />,
  },
  {
    number: '03', title: 'Diabetes Prediction', kicker: 'MACHINE LEARNING', description: 'An interpretable classification model exploring the signals behind diabetes risk.', tags: ['Python', 'scikit-learn', 'Jupyter'], art: <DiabetesArt />,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top"><span className="wordmark-mark">Z</span><span>ZACH<span className="wordmark-dot">.</span></span></a>
        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <Icon name="arrow" size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={21} /></button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="eyebrow-pulse" /> Available for thoughtful problems</p>
            <h1>Making sense of<br /><em>what&apos;s next.</em></h1>
            <p className="hero-intro">I&apos;m Zach — an Applied Mathematics student and MS Data Science candidate building useful products with data, models, and a little patience.</p>
            <div className="hero-actions"><ArrowLink href="#work">Explore selected work</ArrowLink><a className="text-link" href="#about">More about me <span>↘</span></a></div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="visual-orbit visual-orbit--outer" /><div className="visual-orbit visual-orbit--inner" />
            <div className="hero-signal-card"><div className="signal-header"><span className="signal-label">SIGNAL / 01</span><span className="signal-live"><i /> IN MOTION</span></div><div className="signal-main"><span>RETAIL<br />DEMAND</span><strong>↗</strong></div><svg className="signal-line" viewBox="0 0 390 160" preserveAspectRatio="none"><path d="M0 139C17 132 25 120 42 123s16 21 30 17 20-49 36-48 20 33 36 16 25-71 40-61 25 62 42 42 25-16 38-2 26 16 42-10 27-53 43-55 23 25 41 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg><div className="signal-foot"><span>MODEL / V1.0</span><span>DATA → DECISION</span></div></div>
            <div className="floating-note floating-note--one"><span>01</span><b>Forecasting</b><small>pattern → possibility</small></div><div className="floating-note floating-note--two"><span>02</span><b>Machine learning</b><small>signal → clarity</small></div>
            <div className="hero-coordinate">32°42&apos;N<br />117°09&apos;W</div>
          </div>
          <div className="hero-meta"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span className="hero-year">2026 / 01</span></div>
        </section>

        <section className="intro-strip section-wrap" id="about" data-reveal>
          <p className="intro-quote">The interesting part isn&apos;t just finding the pattern.<br /><em>It&apos;s deciding what to do with it.</em></p>
          <div className="intro-aside"><span className="aside-line" /><p>Curious by default.<br />Precise by practice.</p></div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading" data-reveal><SectionLabel number="01">Experience</SectionLabel><h2>Learning in the<br /><em>real world.</em></h2></div>
          <div className="experience-list">
            <article className="experience-item" data-reveal><div className="experience-date">2024 — 2025</div><div className="experience-marker"><i /></div><div className="experience-detail"><p className="experience-type">INTERNSHIP / BUSINESS INTELLIGENCE</p><h3>Dexcom <span>↗</span></h3><p>Worked across data, operations, and product teams to turn complex business questions into clear analytical stories.</p></div><span className="experience-index">01</span></article>
            <article className="experience-item" data-reveal><div className="experience-date">2023 — 2024</div><div className="experience-marker"><i /></div><div className="experience-detail"><p className="experience-type">INTERNSHIP / INFORMATION TECHNOLOGY</p><h3>IT Business Analyst <span>↗</span></h3><p>Built a foundation in systems thinking, process improvement, and the human side of technical work.</p></div><span className="experience-index">02</span></article>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading section-heading--work" data-reveal><SectionLabel number="02">Selected work</SectionLabel><h2>Ideas, made<br /><em>tangible.</em></h2><p>Early experiments and ongoing builds — each one a way to make a question more concrete.</p></div>
          <div className="projects">{projects.map((project, index) => <article className={`project project--${index % 2 ? 'reverse' : 'normal'}${project.featured ? ' project--featured' : ''}`} key={project.title} data-reveal><div className="project-visual">{project.art}<span className="project-corner">{project.number} / 0{projects.length}</span></div><div className="project-info"><p className="project-kicker">{project.kicker}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>{tags(project.tags)}<div className="project-links"><ArrowLink href="#contact">Case study</ArrowLink><a className="project-github" href="#contact"><Icon name="github" size={17} /> GitHub</a></div></div></article>)}</div>
        </section>

        <section className="education section-wrap" data-reveal><div className="education-card"><div><SectionLabel number="03">Education</SectionLabel><h2>Grounded in<br /><em>the fundamentals.</em></h2></div><div className="education-detail"><span className="education-year">2024 — Present</span><h3>Master of Science<br />Data Science</h3><p>Applied Mathematics background<br />with a focus on data-driven decisions.</p><span className="education-mark">∑</span></div></div></section>

        <section className="contact section-wrap" id="contact" data-reveal><p className="contact-overline">A good question is a good place to start.</p><h2>Have something<br /><em>in mind?</em></h2><a className="contact-email" href="mailto:hello@zach.build">hello@zach.build <Icon name="arrow" size={20} /></a><div className="contact-bottom"><span>Based in San Diego, CA</span><span>Open to the next interesting problem</span></div></section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark" href="#top"><span className="wordmark-mark">Z</span><span>ZACH<span className="wordmark-dot">.</span></span></a><span className="footer-note">Designed & built with intention.</span><div className="footer-links"><a href="#contact" aria-label="Email"><Icon name="mail" size={17} /></a><a href="#contact" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a><a href="#contact" aria-label="GitHub"><Icon name="github" size={17} /></a></div><span className="footer-year">© 2026</span></footer>
    </div>
  )
}

export default App
