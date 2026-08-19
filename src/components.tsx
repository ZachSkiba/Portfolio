import type { ReactNode } from 'react'

export type IconName = 'arrow' | 'github' | 'mail' | 'linkedin'

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const }
  if (name === 'arrow') return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'github') return <svg {...common}><path d="M15 22v-3.87a3.39 3.39 0 0 0-.94-2.61c3.12-.35 6.4-1.53 6.4-6.9a5.4 5.4 0 0 0-1.44-3.75 5.02 5.02 0 0 0-.14-3.71s-1.17-.37-3.84 1.43a13.36 13.36 0 0 0-7 0C5.37.8 4.2 1.17 4.2 1.17a5.02 5.02 0 0 0-.14 3.71 5.4 5.4 0 0 0-1.44 3.75c0 5.35 3.27 6.56 6.39 6.91A3.39 3.39 0 0 0 8.07 18.1V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  return <svg {...common}><path d="M6 9v9M6 6.5v.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" /></svg>
}

export function TagList({ items, className = '' }: { items: string[]; className?: string }) {
  return <div className={`tag-list ${className}`.trim()}>{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
}

type CardProps = {
  image?: string
  imageFit?: 'cover' | 'contain'
  eyebrow?: string
  title: string
  meta?: string
  description: string
  tags?: string[]
  href: string
  externalHref?: string
  externalLabel?: string
}

export function Card({ image, imageFit = 'cover', eyebrow, title, meta, description, tags, href, externalHref, externalLabel = 'GitHub' }: CardProps) {
  const hrefIsExternal = href.startsWith('http')
  const hrefProps = hrefIsExternal ? { target: '_blank' as const, rel: 'noreferrer' } : {}
  return (
    <article className={`card${image ? ' card--project' : ' card--experience'}`} data-reveal>
      {image && <a className={`card-image${imageFit === 'contain' ? ' card-image--contain' : ''}`} href={href} {...hrefProps}><img src={image} alt="" /></a>}
      <div className="card-content">
        {(eyebrow || meta) && <div className="card-heading">{eyebrow && <p className="card-eyebrow">{eyebrow}</p>}{meta && <span className="card-meta">{meta}</span>}</div>}
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        {tags && <TagList items={tags} className="card-tags" />}<div className="card-footer"><a className="read-more" href={href} {...hrefProps}>Read More <Icon name="arrow" size={15} /></a>{externalHref && <a className="external-link" href={externalHref} target={externalHref.startsWith('http') ? '_blank' : undefined} rel={externalHref.startsWith('http') ? 'noreferrer' : undefined} aria-label={`${externalLabel} for ${title}`}><Icon name={externalLabel === 'GitHub' ? 'github' : 'arrow'} size={16} /><span>{externalLabel}</span></a>}</div>
      </div>
    </article>
  )
}
