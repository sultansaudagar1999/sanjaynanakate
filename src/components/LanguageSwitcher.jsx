import { useLanguage } from '../i18n/LanguageContext'

const OPTIONS = [
  { code: 'mr', label: 'मराठी' },
  { code: 'en', label: 'English' },
]

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t('common.language')}>
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          lang={opt.code}
          className={lang === opt.code ? 'is-active' : ''}
          aria-pressed={lang === opt.code}
          onClick={() => setLang(opt.code)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
