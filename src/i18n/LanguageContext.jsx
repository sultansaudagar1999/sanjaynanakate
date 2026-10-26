import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import translations from './translations'
import siteConfig from '../config/siteConfig'

const STORAGE_KEY = 'site-lang' // only the language code is stored, never personal data
const SUPPORTED = ['en', 'mr']

const LanguageContext = createContext(null)

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(stored)) return stored
  } catch {
    // storage blocked (private mode etc.) — fall back to default
  }
  return SUPPORTED.includes(siteConfig.defaultLanguage) ? siteConfig.defaultLanguage : 'en'
}

function lookup(dict, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict)
}

function interpolate(text, vars) {
  if (typeof text !== 'string' || !vars) return text
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match))
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'mr' ? 'mr' : 'en'
  }, [lang])

  const value = useMemo(() => {
    // t('nav.home') or t('footer.rights', { year: 2026 })
    const t = (key, vars) => {
      const found = lookup(translations[lang], key) ?? lookup(translations.en, key)
      if (found === undefined) {
        if (import.meta.env.DEV) console.warn(`Missing translation: ${key}`)
        return key
      }
      return interpolate(found, vars)
    }
    // pick({ en: 'Road', mr: 'रस्ता' }) — for bilingual values in config / data
    const pick = (value) => {
      if (value == null) return ''
      if (typeof value === 'string') return value
      return value[lang] ?? value.en ?? ''
    }
    const toggle = () => setLang(lang === 'en' ? 'mr' : 'en')
    return { lang, setLang, toggle, t, pick }
  }, [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
