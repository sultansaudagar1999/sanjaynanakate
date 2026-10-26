import { useState } from 'react'
import { Camera, ImageOff, Info } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { assetUrl, isPlaceholder, stripBrackets } from '../utils/format'
import siteConfig from '../config/siteConfig'

/** Renders a config value; "[placeholder]" values get a dotted highlight. */
export function Val({ children, as: Tag = 'span', className = '' }) {
  const { t } = useLanguage()
  if (isPlaceholder(children)) {
    return (
      <Tag className={`ph ${className}`} title={t('common.placeholderTitle')}>
        {stripBrackets(children)}
      </Tag>
    )
  }
  return <Tag className={className}>{children}</Tag>
}

export function DemoBadge({ show = true }) {
  const { t } = useLanguage()
  if (!show || !siteConfig.showDemoNotices) return null
  return <span className="demo-badge">{t('common.demoBadge')}</span>
}

export function DemoNote() {
  const { t } = useLanguage()
  if (!siteConfig.showDemoNotices) return null
  return (
    <p className="demo-note" role="note">
      <Info size={18} aria-hidden="true" />
      <span>{t('common.demoSectionNote')}</span>
    </p>
  )
}

export function PhotoPlaceholder({ label, icon: Icon = Camera, className = '' }) {
  const { t } = useLanguage()
  return (
    <div className={`photo-ph ${className}`} role="img" aria-label={label || t('common.photoPlaceholder')}>
      <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
      <span>{label || t('common.photoPlaceholder')}</span>
    </div>
  )
}

/**
 * Image with lazy loading, a soft loading state and a graceful fallback
 * when the file is missing (src = null) or fails to load.
 */
export function SmartImage({ src, alt, className = '', eager = false, placeholderIcon, placeholderLabel, ...rest }) {
  const { t } = useLanguage()
  const [state, setState] = useState('loading')

  if (!src) return <PhotoPlaceholder className={className} icon={placeholderIcon} label={placeholderLabel} />
  if (state === 'error') return <PhotoPlaceholder className={className} icon={ImageOff} label={t('common.imageError')} />

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={`smart-img ${state === 'loading' ? 'is-loading' : ''} ${className}`}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setState('loaded')}
      onError={() => setState('error')}
      {...rest}
    />
  )
}

export function SectionTitle({ eyebrow, title, subtitle, id, align = 'center' }) {
  return (
    <header className={`section-title align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </header>
  )
}

/** Accessible pill filter used by projects and gallery. */
export function FilterChips({ options, value, onChange, label }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`chip ${value === opt.value ? 'is-active' : ''}`}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
          {typeof opt.count === 'number' && <span className="chip-count">{opt.count}</span>}
        </button>
      ))}
    </div>
  )
}

export function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.04c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.79a9.43 9.43 0 0 1 2.78 6.72c0 5.24-4.27 9.5-9.5 9.5m8.09-17.59A11.36 11.36 0 0 0 12.05.5C5.74.5.6 5.63.6 11.94c0 2.02.53 3.98 1.53 5.72L.5 23.5l5.98-1.57a11.4 11.4 0 0 0 5.46 1.39h.01c6.3 0 11.44-5.13 11.44-11.44 0-3.06-1.19-5.93-3.35-8.09" />
    </svg>
  )
}
