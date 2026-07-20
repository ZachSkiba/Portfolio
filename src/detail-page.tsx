import { Icon, TagList } from './components'

type DetailData = {
  type: 'Project' | 'Experience'
  eyebrow: string
  title: string
  meta: string
  description: string
  tags: string[]
  image?: string
  repoLabel: string
}

const details: Record<string, DetailData> = {
  'retail-demand-forecasting': { type: 'Project', eyebrow: 'Featured project', title: 'Retail Demand Forecasting', meta: '2026 / In progress', description: 'A placeholder case study for a forecasting project focused on turning historical retail data into clearer planning decisions.', tags: ['Python', 'Forecasting', 'PostgreSQL'], image: '../placeholder-project-1.svg', repoLabel: 'View repository' },
  'roommate-expense-tracker': { type: 'Project', eyebrow: 'Product system', title: 'Roommate Expense Tracker', meta: '2025 / Prototype', description: 'A placeholder case study for a shared household expense product designed to make balances simple to understand and maintain.', tags: ['React', 'Flask', 'SQLite'], image: '../placeholder-project-2.svg', repoLabel: 'View repository' },
  'diabetes-prediction': { type: 'Project', eyebrow: 'Machine learning', title: 'Diabetes Prediction', meta: '2025 / Completed study', description: 'A placeholder case study for an interpretable classification model exploring the signals behind diabetes risk.', tags: ['Python', 'scikit-learn', 'Jupyter'], image: '../placeholder-project-3.svg', repoLabel: 'View repository' },
  dexcom: { type: 'Experience', eyebrow: 'Dexcom', title: 'Business Intelligence Intern', meta: '2024 — 2025', description: 'Worked with data and operations teams to turn business questions into clear analytical stories. This page is a placeholder for the projects, responsibilities, and outcomes from the internship.', tags: ['Business intelligence', 'Analytics', 'Data'], repoLabel: 'Back to portfolio' },
  'it-business-analyst': { type: 'Experience', eyebrow: 'Information Technology', title: 'IT Business Analyst Intern', meta: '2023 — 2024', description: 'Built a foundation in systems thinking, process improvement, and the human side of technical work. This page is a placeholder for the role details and selected work.', tags: ['Business analysis', 'Systems', 'Process'], repoLabel: 'Back to portfolio' },
}

export default function DetailPage({ slug }: { slug: string }) {
  const data = details[slug] ?? details['retail-demand-forecasting']
  const backHref = '../index.html'
  return (
    <div className="site-shell detail-shell">
      <header className="detail-header section-wrap"><a className="footer-name" href={backHref}><span className="identity-mark">Z</span><span>Zach</span></a><a className="back-link" href={backHref}>← Back to portfolio</a></header>
      <main className="detail-main section-wrap">
        <p className="section-kicker">{data.type} / {data.eyebrow}</p>
        <div className="detail-heading"><h1>{data.title}</h1><span>{data.meta}</span></div>
        <TagList items={data.tags} className="detail-tags" />
        {data.image && <img className="detail-image" src={data.image} alt="Project placeholder" />}
        <div className="detail-body"><p className="detail-lede">{data.description}</p><div><h2>Overview</h2><p>[PLACEHOLDER: describe the problem, context, and why this work mattered.]</p><p>[PLACEHOLDER: describe your approach, your role, and the tools or methods you used.]</p><p>[PLACEHOLDER: describe the result, what you learned, and what you would improve next.]</p></div></div>
        <div className="detail-actions"><a className="read-more" href={backHref}>← Back to portfolio</a><a className="detail-repo" href="#contact">{data.repoLabel} <Icon name="arrow" size={15} /></a></div>
      </main>
      <footer className="site-footer section-wrap"><a className="footer-name" href={backHref}><span className="identity-mark">Z</span><span>Zach</span></a><span className="footer-year">© 2026</span></footer>
    </div>
  )
}
