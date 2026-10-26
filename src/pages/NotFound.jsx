import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  const { t } = useLanguage()
  usePageMeta(t('notFound.title'))
  return (
    <section className="section page page-message" aria-labelledby="nf-title">
      <div className="container narrow center">
        <p className="nf-code" aria-hidden="true">404</p>
        <h1 id="nf-title">{t('notFound.title')}</h1>
        <p className="lead">{t('notFound.text')}</p>
        <Link to="/" className="btn btn-primary">
          <Home size={18} aria-hidden="true" />
          {t('notFound.back')}
        </Link>
      </div>
    </section>
  )
}
