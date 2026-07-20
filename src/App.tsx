import { useEffect } from 'react'
import { Card, Icon, TagList } from './components'

const projects = [
  {
    image: './placeholder-project-1.svg',
    eyebrow: 'Featured project',
    title: 'Retail Demand Forecasting',
    description: 'A forecasting system for translating retail history into clearer planning decisions.',
    tags: ['Python', 'Forecasting', 'PostgreSQL'],
    href: './projects/retail-demand-forecasting.html',
    externalHref: '#contact',
  },
  {
    image: './placeholder-project-2.svg',
    eyebrow: 'Product system',
    title: 'Roommate Expense Tracker',
    description: 'A shared space for tracking household expenses and keeping balances transparent.',
    tags: ['React', 'Flask', 'SQLite'],
    href: './projects/roommate-expense-tracker.html',
    externalHref: '#contact',
  },
  {
    image: './placeholder-project-3.svg',
    eyebrow: 'Machine learning',
    title: 'Diabetes Prediction',
    description: 'An interpretable classification model exploring the signals behind diabetes risk.',
    tags: ['Python', 'scikit-learn', 'Jupyter'],
    href: './projects/diabetes-prediction.html',
    externalHref: '#contact',
  },
]

const coursework = ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Machine Learning', 'Database Systems', 'Data Mining', 'Optimization', 'Statistical Modeling']

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      <a href="#contact" aria-label="GitHub"><Icon name="github" size={18} /></a>
      <a href="#contact" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
      <a href="mailto:hello@zach.build" aria-label="Email"><Icon name="mail" size={18} /></a>
    </div>
  )
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="identity section-wrap" id="top">
        <h1>Zach Skiba</h1>
        <p className="identity-role">Chicago, IL · MS Data Science</p>
        <SocialLinks />
        <nav className="jump-links" aria-label="Page sections">
          <a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#coursework">Coursework</a><a href="#education">Education</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="site-main section-wrap">
        <section className="content-section content-section--experience" id="experience">
          <div className="section-header"><h2>Experience</h2></div>
          <div className="card-grid experience-grid">
            <Card eyebrow="Dexcom" title="Business Intelligence Intern" meta="2024 — 2025" description="Worked with data and operations teams to turn business questions into clear analytical stories." href="./experience/dexcom.html" />
            <Card eyebrow="Information Technology" title="IT Business Analyst Intern" meta="2023 — 2024" description="Built a foundation in systems thinking, process improvement, and the human side of technical work." href="./experience/it-business-analyst.html" />
          </div>
        </section>

        <section className="content-section content-section--projects" id="projects">
          <div className="section-header"><h2>Projects</h2></div>
          <div className="card-grid project-grid">{projects.map((project) => <Card key={project.title} {...project} />)}</div>
        </section>

        <section className="content-section content-section--education education-section" id="education">
          <div className="section-header"><h2>Education</h2></div>
          <div className="education-block" data-reveal><div><h3>Master of Science in Data Science</h3><p className="education-school">[University Name]</p></div><div className="education-meta"><span>2024 — Present</span><p>Applied Mathematics background with a focus on data-driven decisions, predictive modeling, and machine learning.</p></div></div>
          <div className="coursework-subsection" id="coursework" data-reveal><h3>Coursework</h3><div><TagList items={coursework} className="coursework-list" /></div></div>
        </section>

      </main>

      <footer className="site-footer section-wrap" id="contact"><a className="footer-name" href="#top">Zach Skiba</a><a className="footer-email" href="mailto:hello@zach.build">hello@zach.build</a><SocialLinks /><span className="footer-year">© 2026</span></footer>
    </div>
  )
}

export default App
