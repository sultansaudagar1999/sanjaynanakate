import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import usePageMeta from '../hooks/usePageMeta'
import { formatDate } from '../utils/format'

// Update this date whenever the notice text changes
const LAST_UPDATED = '2026-10-26'

export default function Privacy() {
  const { t, pick, lang } = useLanguage()
  usePageMeta(t('privacy.title'))
  const sections = t('privacy.sections')

  return (
    <section className="section page" aria-labelledby="privacy-title">
      <div className="container narrow">
        <p className="eyebrow with-icon">
          <ShieldCheck size={18} aria-hidden="true" />
          {pick(siteConfig.name)}
        </p>
        <h1 id="privacy-title">{t('privacy.title')}</h1>
        <p className="muted small">{t('privacy.updated', { date: formatDate(LAST_UPDATED, lang) })}</p>
        <p className="lead">{t('privacy.intro', { name: pick(siteConfig.name) })}</p>
        {sections.map((s) => (
          <div key={s.h} className="prose-block">
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
        <Link to="/" className="btn btn-outline">
          <ArrowLeft size={18} aria-hidden="true" />
          {t('privacy.back')}
        </Link>
      </div>
    </section>
  )
}
