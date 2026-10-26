import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import { mailHref, telHref } from '../utils/format'
import { NAV_ITEMS } from './Navbar'
import WhatsAppButton from './WhatsAppButton'
import { Val } from './ui'

const SOCIAL = [
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'x', label: 'X (Twitter)', Icon: Twitter },
  { key: 'youtube', label: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  const { t, pick } = useLanguage()
  const name = pick(siteConfig.name)
  const year = new Date().getFullYear()
  const tel = telHref(siteConfig.phone)
  const mail = mailHref(siteConfig.email)
  const socials = SOCIAL.filter((s) => siteConfig.social[s.key])

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <img src={siteConfig.logo} alt="" width="44" height="44" className="brand-logo" />
            <span className="brand-text">
              <span className="brand-name">{name}</span>
              <span className="brand-role">{pick(siteConfig.designationShort)}</span>
            </span>
          </div>
          <p>{t('footer.tagline')}</p>
          {socials.length > 0 && (
            <ul className="social" aria-label={t('footer.follow')}>
              {socials.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a href={siteConfig.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label={t('footer.quickLinks')}>
          <h2 className="footer-h">{t('footer.quickLinks')}</h2>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link to={`/#${item.id}`}>{t(item.key)}</Link>
              </li>
            ))}
            <li>
              <Link to="/privacy">{t('footer.privacy')}</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-h">{t('footer.contact')}</h2>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} aria-hidden="true" />
              <address>{pick(siteConfig.officeAddress)}</address>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              {tel ? <a href={tel}>{siteConfig.phone}</a> : <Val>{siteConfig.phone}</Val>}
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              {mail ? <a href={mail}>{siteConfig.email}</a> : <Val>{siteConfig.email}</Val>}
            </li>
          </ul>
          <WhatsAppButton message={t('contact.greeting', { name })} className="btn btn-whatsapp btn-sm">
            <span>{t('contact.whatsappBtn')}</span>
          </WhatsAppButton>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{t('footer.rights', { year, name })}</p>
          <p>{t('footer.maintained', { name })}</p>
          <p>{t('footer.notOfficial')}</p>
        </div>
      </div>
    </footer>
  )
}
