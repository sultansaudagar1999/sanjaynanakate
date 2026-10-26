import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollManager from './components/ScrollManager'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'

const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoading() {
  const { t } = useLanguage()
  return (
    <div className="page-loading" role="status">
      <span className="spinner" aria-hidden="true" />
      {t('common.loading')}
    </div>
  )
}

function Layout() {
  const { t } = useLanguage()
  return (
    <>
      <a href="#main" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  )
}
