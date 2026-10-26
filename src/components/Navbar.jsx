import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import LanguageSwitcher from './LanguageSwitcher'
import WhatsAppButton from './WhatsAppButton'

export const NAV_ITEMS = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'work', key: 'nav.work' },
  { id: 'news', key: 'nav.news' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'contact', key: 'nav.contact' },
]

/** Highlights the section currently in view (home page only). */
function useActiveSection(enabled) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (!enabled) return
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [enabled])
  return enabled ? active : null
}

export default function Navbar() {
  const { t, pick } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(location.pathname === '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation, Escape, or when resizing to desktop
  useEffect(() => setOpen(false), [location.key])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1120 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const greeting = t('contact.greeting', { name: pick(siteConfig.name) })

  const links = NAV_ITEMS.map((item) => (
    <li key={item.id}>
      <Link
        to={`/#${item.id}`}
        className={`nav-link ${active === item.id ? 'is-active' : ''}`}
        aria-current={active === item.id ? 'true' : undefined}
        onClick={() => setOpen(false)}
      >
        {t(item.key)}
      </Link>
    </li>
  ))

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container nav-bar">
        <Link to="/#home" className="brand" onClick={() => setOpen(false)}>
          <img src={siteConfig.logo} alt="" width="40" height="40" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">{pick(siteConfig.name)}</span>
            <span className="brand-role">{pick(siteConfig.designationShort)}</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label={t('nav.mainNav')}>
          <ul>{links}</ul>
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher className="hide-sm" />
          <WhatsAppButton message={greeting} className="btn btn-whatsapp btn-sm hide-xs" iconSize={18}>
            <span>{t('nav.whatsapp')}</span>
          </WhatsAppButton>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav-mobile ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav className="container" aria-label={t('nav.mainNav')}>
          <ul>{links}</ul>
          <div className="nav-mobile-actions">
            <LanguageSwitcher />
            <WhatsAppButton message={greeting} className="btn btn-whatsapp">
              <span>{t('contact.whatsappBtn')}</span>
            </WhatsAppButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
