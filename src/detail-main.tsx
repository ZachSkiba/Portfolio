import { createRoot } from 'react-dom/client'
import DetailPage from './detail-page'
import './styles.css'
import './detail-styles.css'

const slug = document.body.dataset.slug ?? 'retail-demand-forecasting'
createRoot(document.getElementById('root')!).render(<DetailPage slug={slug} />)
