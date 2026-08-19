import { useEffect } from 'react'
import { Card, Icon, TagList } from './components'

const projects = [
  {
    image: './retail-prophet-forecast.png',
    imageFit: 'contain' as const,
    title: 'Retail Demand Forecasting',
    description: 'An in-progress retail demand forecasting and inventory decision-support system built on the M5 Walmart dataset.',
    tags: ['Python', 'LightGBM', 'Forecasting'],
    href: './projects/retail-demand-forecasting.html',
  },
  {
    image: './trixpense-dashboard.webp',
    title: 'TriXpense',
    description: 'A full-stack application for tracking shared expenses, splitting bills, and making household finances easier to understand.',
    tags: ['Python', 'Flask', 'PostgreSQL'],
    href: './projects/roommate-expense-tracker.html',
    externalHref: 'https://trixpense.com',
    externalLabel: 'Live app',
  },
  {
    image: './diabetes-shap-summary.svg',
    title: 'Diabetes Classification',
    description: 'A team-led classification study using CDC survey data, Logistic Regression, XGBoost, and SHAP interpretability.',
    tags: ['R', 'XGBoost', 'SHAP'],
    href: './projects/diabetes-prediction.html',
    externalHref: 'https://github.com/ZachSkiba/CSP571-G7',
    externalLabel: 'GitHub',
  },
  {
    image: './ab-test-power-sample.png',
    title: 'A/B Test Efficiency',
    description: 'A causal-inference study testing whether CUPED can preserve confidence while reducing the users required for an experiment.',
    tags: ['Python', 'CUPED', 'Causal Inference'],
    href: './projects/ab-test-efficiency.html',
    externalHref: 'https://github.com/ZachSkiba/A-B-Test-Efficiency',
    externalLabel: 'GitHub',
  },
  {
    image: './airline-overbooking-revenue.svg',
    imageFit: 'contain' as const,
    title: 'Airline Overbooking Optimization',
    description: 'A probabilistic revenue model balancing no-show behavior, compensation costs, and long-term customer loyalty.',
    tags: ['Python', 'Monte Carlo', 'Optimization'],
    href: './projects/airline-overbooking.html',
    externalHref: 'https://github.com/ZachSkiba/Airline-Overbooking',
    externalLabel: 'GitHub',
  },
  {
    image: './premier-league-goals-rank.png',
    imageFit: 'contain' as const,
    title: 'Exploratory Data Analysis',
    description: 'Two notebook-based analyses: Superstore retail orders and Premier League match results, connected by a focus on cleaning, aggregation, and clear data storytelling.',
    tags: ['Python', 'pandas', 'EDA'],
    href: './projects/data-analysis-eda.html',
    externalHref: 'https://github.com/ZachSkiba/Data-Analysis-Projects',
    externalLabel: 'GitHub',
  },
]

const coursework = ['Machine Learning', 'Regression', 'Statistics', 'Probability', 'Data Preparation and Analysis', 'Data Mining', 'Big Data Technologies', 'Database Organization', 'Time Series', 'Data Structures and Algorithms', 'Agentic AI', 'Innovation with AI']

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      <a href="https://github.com/ZachSkiba" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
      <a href="http://www.linkedin.com/in/zachary-skiba-727490293" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
      <a href="mailto:zskiba@hawk.illinoistech.edu" aria-label="Email"><Icon name="mail" size={18} /></a>
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
          <div className="education-block" data-reveal><div><p className="education-school">Illinois Institute of Technology</p><h3 className="education-degree">B.S. Applied Mathematics<br />M.S. Data Science</h3><p className="education-school">Minor in Computer Science | Coterminal Program</p></div><div className="education-meta"><span>August 2023 - December 2027</span><strong className="education-gpa">GPA: 3.5</strong></div></div>
          <div className="coursework-subsection" id="coursework" data-reveal><h3>Coursework</h3><div><TagList items={coursework} className="coursework-list" /></div></div>
        </section>

      </main>

      <footer className="site-footer section-wrap" id="contact"><a className="footer-name" href="#top">Zach Skiba</a><a className="footer-email" href="mailto:zskiba@hawk.illinoistech.edu">zskiba@hawk.illinoistech.edu</a><SocialLinks /><span className="footer-year">© 2026</span></footer>
    </div>
  )
}

export default App
