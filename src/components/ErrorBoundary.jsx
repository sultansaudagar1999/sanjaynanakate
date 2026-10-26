import { Component } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function Fallback() {
  const { t } = useLanguage()
  return (
    <div className="container page-message" role="alert">
      <h1>{t('errorBoundary.title')}</h1>
      <p>{t('errorBoundary.text')}</p>
      <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
        {t('errorBoundary.reload')}
      </button>
    </div>
  )
}

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unexpected error:', error, info)
  }

  render() {
    return this.state.hasError ? <Fallback /> : this.props.children
  }
}
