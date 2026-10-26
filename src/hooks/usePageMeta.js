import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'

/** Updates <title> and meta description for the current page and language. */
export default function usePageMeta(pageTitle) {
  const { pick } = useLanguage()
  const siteTitle = pick(siteConfig.siteTitle)
  const description = pick(siteConfig.siteDescription)

  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${pick(siteConfig.name)}` : siteTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [pageTitle, siteTitle, description, pick])
}
