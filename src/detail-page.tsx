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
  'retail-demand-forecasting': { type: 'Project', eyebrow: 'Featured project', title: 'Retail Demand Forecasting', meta: '2026 / In progress', description: 'A retail demand forecasting and inventory decision-support system built on the M5 Walmart dataset.', tags: ['Python', 'Forecasting', 'LightGBM'], image: '../placeholder-project-1.svg', repoLabel: 'View repository' },
  'roommate-expense-tracker': { type: 'Project', eyebrow: 'Product system', title: 'Roommate Expense Tracker', meta: '2025 / Prototype', description: 'A placeholder case study for a shared household expense product designed to make balances simple to understand and maintain.', tags: ['React', 'Flask', 'SQLite'], image: '../placeholder-project-2.svg', repoLabel: 'View repository' },
  'diabetes-prediction': { type: 'Project', eyebrow: 'Machine learning', title: 'Diabetes Prediction', meta: '2025 / Completed study', description: 'A placeholder case study for an interpretable classification model exploring the signals behind diabetes risk.', tags: ['Python', 'scikit-learn', 'Jupyter'], image: '../placeholder-project-3.svg', repoLabel: 'View repository' },
  dexcom: { type: 'Experience', eyebrow: 'Dexcom', title: 'Business Intelligence Intern', meta: '2024 — 2025', description: 'Worked with data and operations teams to turn business questions into clear analytical stories. This page is a placeholder for the projects, responsibilities, and outcomes from the internship.', tags: ['Business intelligence', 'Analytics', 'Data'], repoLabel: 'Back to portfolio' },
  'it-business-analyst': { type: 'Experience', eyebrow: 'Information Technology', title: 'IT Business Analyst Intern', meta: '2023 — 2024', description: 'Built a foundation in systems thinking, process improvement, and the human side of technical work. This page is a placeholder for the role details and selected work.', tags: ['Business analysis', 'Systems', 'Process'], repoLabel: 'Back to portfolio' },
}

function TriXpensePage() {
  const backHref = '../index.html'
  return (
    <div className="site-shell detail-shell trixpense-page">
      <header className="detail-header section-wrap"><a className="footer-name" href={backHref}>Zach Skiba</a><a className="back-link" href={backHref}>← Back to portfolio</a></header>
      <main className="trixpense-recruiter section-wrap">
        <header className="trixpense-recruiter-header"><div className="trixpense-recruiter-title"><div><h1>TriXpense</h1><p>A live full-stack expense management application for tracking shared bills, clarifying balances, and helping people manage money together.</p></div><a className="trixpense-live-button" href="https://trixpense.com" target="_blank" rel="noreferrer">Open live app <Icon name="arrow" size={16} /></a></div><div className="trixpense-badges"><span className="trixpense-badge trixpense-badge--live"><i /> Live product</span><span className="trixpense-badge">Production application</span><span className="trixpense-badge">No public repository</span></div></header>

        <section className="trixpense-metrics" aria-label="Product overview"><div><span>Product type</span><strong>Full-stack web app</strong><small>Built for personal and shared finance workflows</small></div><div><span>Primary workflow</span><strong>Expense → balance → settlement</strong><small>Turns scattered transactions into an understandable next step</small></div><div><span>Core users</span><strong>Individuals &amp; groups</strong><small>Personal trackers and shared group trackers</small></div><div><span>Public proof</span><strong>Live at trixpense.com</strong><small>Code is private; the product is available to explore</small></div></section>

        <section className="trixpense-recruiter-section"><h2 className="trixpense-recruiter-section-title">Product evidence</h2><p className="trixpense-evidence-note">Primary interface: the signed-in dashboard brings the tracker, filters, current balances, and suggested settlements into one operational view.</p><div className="trixpense-recruiter-dashboard"><img src="../trixpense-dashboard.webp" alt="TriXpense group tracker dashboard showing transactions, filters, current balances, and suggested settlements" /></div></section>

        <section className="trixpense-recruiter-section"><h2 className="trixpense-recruiter-section-title">System scope</h2><div className="trixpense-scope-grid"><div><span>Core product capabilities</span><ul><li>Shared group tracker and advanced filters</li><li>Suggested settlements and monthly summaries</li><li>Budgeting tables and visual analytics</li><li>Recurring payments and notifications</li><li>PDF/CSV export and subscription flows</li></ul></div><div><span>Technical implementation</span><ul><li>Flask application with server-rendered interfaces</li><li>PostgreSQL data model through SQLAlchemy</li><li>Authentication, account management, and access control</li><li>Receipt pipeline: OCR → parsing → categorization</li><li>Async processing with Gemini Vision and Tesseract fallback</li></ul></div></div></section>

        <section className="trixpense-recruiter-section trixpense-tech-section"><h2 className="trixpense-recruiter-section-title">Technology</h2><TagList items={['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'JavaScript', 'Stripe', 'OCR', 'Gemini Vision', 'Tesseract', 'OpenCV']} /><p className="trixpense-private-note">The codebase is private. The live application is available for product review.</p></section>
      </main>
      <footer className="site-footer section-wrap"><a className="footer-name" href={backHref}>Zach Skiba</a><span className="footer-year">© 2026</span></footer>
    </div>
  )
}

function RetailForecastPage() {
  const backHref = '../index.html'
  return (
    <div className="site-shell detail-shell retail-page">
      <header className="detail-header section-wrap"><a className="footer-name" href={backHref}>Zach Skiba</a><a className="back-link" href={backHref}>← Back to portfolio</a></header>
      <main className="retail-dashboard section-wrap">
        <header className="retail-dashboard-header">
          <div className="retail-dashboard-title"><div><h1>Retail Demand Intelligence System</h1><p>An end-to-end time series forecasting &amp; decision-support pipeline progressing from classical statistical baselines (SARIMA, Prophet) to global gradient-boosted models (LightGBM Tweedie) across 58M+ sales records.</p></div><span className="retail-phase">Phase 1–2 complete<br /><b>Phase 3 in progress</b></span></div>
          <div className="retail-badge-container"><span className="retail-badge retail-badge-status"><i /> In Progress (Phase 1 Complete)</span><span className="retail-badge">M5 Walmart Dataset</span><span className="retail-badge">30,490 Series</span><span className="retail-badge">Fold 3 Reserved</span></div>
        </header>

        <section className="retail-metrics-grid" aria-label="Project metrics"><div className="retail-metric-card retail-metric-card--coral"><span>Leading ML Model</span><strong>3.10 RMSE</strong><small>LightGBM Tweedie (~7.8% WAPE)</small></div><div className="retail-metric-card retail-metric-card--slate"><span>Data Scale</span><strong>58.3M Rows</strong><small>30,490 Product-Store Series</small></div><div className="retail-metric-card retail-metric-card--sage"><span>Zero Inflation</span><strong>68.2%</strong><small>Handled via Gap-Aware Features</small></div><div className="retail-metric-card"><span>Validation Discipline</span><strong>3-Fold Walk</strong><small>Fold 3 Untouched Final Holdout</small></div></section>

        <section className="retail-dashboard-section"><h2 className="retail-dashboard-section-title">Engineering Breakthroughs &amp; Diagnostics</h2><div className="retail-breakthrough-grid"><article className="retail-dashboard-card"><h3>1. The &quot;Signal Ceiling&quot; Discovery</h3><p>Before building heavy ML models, classical baselines (SARIMA &amp; Prophet) were tuned independently. Both models hit an identical performance floor—failing on the exact same 3 months (Apr 2015, May 2015, Jan 2016).</p><div className="retail-callout"><strong>Engineering Takeaway</strong><p>Proved univariate models lacked sufficient context. Feature engineering was explicitly built to target these gaps using SNAP cycles and multi-level price elasticity.</p></div></article><article className="retail-dashboard-card"><h3>2. Rejecting Metric-Winning Calibration</h3><p>Global isotonic calibration improved log-RMSE and mean bias significantly in aggregate. However, a deeper per-SKU distribution audit revealed it badly overcorrected individual sparse series (2–8× actual demand).</p><div className="retail-callout retail-callout--sage"><strong>Operational Rigor</strong><p>Chose to reject the aggregate &quot;win&quot; in favor of Syntetos-Boylan demand-regime routing (routing lumpy SKUs to Croston/TSB models).</p></div></article></div></section>

        <section className="retail-dashboard-section"><h2 className="retail-dashboard-section-title">Model Benchmark Matrix (Fold 2 Diagnostics)</h2><div className="retail-table-wrap"><table className="retail-table"><thead><tr><th>Model Family</th><th>Objective / Approach</th><th>Aggregate Metric</th><th>Representative Series</th><th>Key Assessment</th></tr></thead><tbody><tr><td><strong>Naive Baseline</strong></td><td>Previous Period Carry-over</td><td>—</td><td>55.29% MAPE</td><td>Unusable benchmark</td></tr><tr><td><strong>SARIMA</strong></td><td>(2,0,1)(0,1,1)[12] Classical</td><td>6.91% MAPE</td><td>22.22% MAPE</td><td>Hits univariate signal ceiling</td></tr><tr><td><strong>Prophet</strong></td><td>Multiplicative Seasonality</td><td>5.02% MAPE</td><td>24.25% MAPE</td><td>Struggles with local demand shifts</td></tr><tr><td><strong>XGBoost v2</strong></td><td>log1p Target (39 Features)</td><td>3.39 Unit RMSE</td><td>—</td><td>Retransformation underprediction bias</td></tr><tr className="retail-table-highlight"><td><strong>LightGBM (Winner)</strong></td><td>Native Tweedie Objective</td><td><strong>3.10 Unit RMSE (~7.8% WAPE)</strong></td><td><strong>Closed Ceiling Gaps</strong></td><td><strong>Leading Candidate (Native unit space)</strong></td></tr></tbody></table></div><p className="retail-table-note">Metrics come from different evaluation tiers and are shown as interim diagnostics. Final Fold 3 production performance has not been established.</p></section>

        <section className="retail-dashboard-section"><h2 className="retail-dashboard-section-title">Project Roadmap &amp; Execution Plan</h2><div className="retail-roadmap retail-dashboard-card"><div className="retail-roadmap-item retail-roadmap-item--complete"><i /><div><h3>Phase 1: EDA &amp; Statistical Baseline Diagnosis</h3><p>Quantified 68.2% zero inflation, price elasticity at 3 granularities, and confirmed the SARIMA/Prophet signal ceiling.</p></div></div><div className="retail-roadmap-item retail-roadmap-item--complete"><i /><div><h3>Phase 2: Gap-Aware Feature Engineering &amp; Tree Models</h3><p>Iterated feature set from 34 to 39 features (28-day gap nulling logic); confirmed LightGBM Tweedie outperformance.</p></div></div><div className="retail-roadmap-item retail-roadmap-item--active"><i /><div><h3>Phase 3: Demand-Regime Routing &amp; Uncertainty (Current)</h3><p>Categorizing SKUs via Syntetos-Boylan (ADI/CV²) classification; adding Conformal Prediction for calibrated safety stock bands.</p></div></div><div className="retail-roadmap-item"><i /><div><h3>Phase 4: Inventory Backtest &amp; One-Time Fold 3 Evaluation</h3><p>Simulating reorder point/safety stock outcomes, followed by the single, untouched evaluation on Fold 3.</p></div></div><div className="retail-roadmap-item"><i /><div><h3>Phase 5: Interactive Streamlit Decision-Support App</h3><p>Surfacing inventory risk, SHAP explainability, and backtest results in a fast 5-page dashboard consuming Parquet predictions.</p></div></div></div></section>

        <section className="retail-dashboard-section retail-tech-section"><h2 className="retail-dashboard-section-title">Technology</h2><div className="retail-tech-stack"><TagList items={['Python', 'pandas', 'NumPy', 'statsmodels', 'Prophet', 'scikit-learn', 'XGBoost', 'LightGBM', 'Optuna']} /></div><p className="retail-private-note">This project is actively in development and is not currently shared publicly.</p></section>
      </main>
      <footer className="site-footer section-wrap"><a className="footer-name" href={backHref}>Zach Skiba</a><span className="footer-year">© 2026</span></footer>
    </div>
  )
}

export default function DetailPage({ slug }: { slug: string }) {
  if (slug === 'retail-demand-forecasting') return <RetailForecastPage />
  if (slug === 'roommate-expense-tracker') return <TriXpensePage />
  const data = details[slug] ?? details['retail-demand-forecasting']
  const backHref = '../index.html'
  return (
    <div className="site-shell detail-shell">
      <header className="detail-header section-wrap"><a className="footer-name" href={backHref}><span className="identity-mark">Z</span><span>Zach</span></a><a className="back-link" href={backHref}>← Back to portfolio</a></header>
      <main className="detail-main section-wrap"><p className="section-kicker">{data.type} / {data.eyebrow}</p><div className="detail-heading"><h1>{data.title}</h1><span>{data.meta}</span></div><TagList items={data.tags} className="detail-tags" />{data.image && <img className="detail-image" src={data.image} alt="Project placeholder" />}<div className="detail-body"><p className="detail-lede">{data.description}</p><div><h2>Overview</h2><p>[PLACEHOLDER: describe the problem, context, and why this work mattered.]</p><p>[PLACEHOLDER: describe your approach, your role, and the tools or methods you used.]</p><p>[PLACEHOLDER: describe the result, what you learned, and what you would improve next.]</p></div></div><div className="detail-actions"><a className="read-more" href={backHref}>← Back to portfolio</a><a className="detail-repo" href="#contact">{data.repoLabel} <Icon name="arrow" size={15} /></a></div></main>
      <footer className="site-footer section-wrap"><a className="footer-name" href={backHref}><span className="identity-mark">Z</span><span>Zach</span></a><span className="footer-year">© 2026</span></footer>
    </div>
  )
}
