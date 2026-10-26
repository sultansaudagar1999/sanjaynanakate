import { Link } from 'react-router-dom'
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import { SmartImage, Val, WhatsAppIcon } from './ui'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  const { t, pick } = useLanguage()
  const name = pick(siteConfig.name)

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            {t('hero.eyebrow')}
          </p>
          <p className="hero-name">{name}</p>
          <p className="hero-role">
            {pick(siteConfig.designation)}
            <span className="sep" aria-hidden="true">·</span>
            <Val>{pick(siteConfig.wardNumber)}</Val>
          </p>
          <h1 id="hero-title" className="hero-title">
            {t('hero.headline')}
          </h1>
          <p className="hero-text">{t('hero.text')}</p>
          <div className="hero-ctas">
            <Link to="/#contact" className="btn btn-primary btn-lg">
              <Phone size={18} aria-hidden="true" />
              {t('hero.ctaContact')}
            </Link>
            <Link to="/#work" className="btn btn-outline btn-lg">
              {t('hero.ctaWork')}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <SmartImage
              src={siteConfig.photo}
              alt={t('hero.photoAlt', { name })}
              className="hero-photo"
              eager
              fetchpriority="high"
              width="1080"
              height="1080"
            />
            <div className="hero-photo-card">
              <img src={siteConfig.logo} alt="" width="36" height="36" />
              <div>
                <strong>{name}</strong>
                <span>{pick(siteConfig.designationShort)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="hero-info">
          <li>
            <span className="hero-info-icon"><Clock size={20} aria-hidden="true" /></span>
            <span>
              <small>{t('hero.hoursLabel')}</small>
              <Val>{pick(siteConfig.visitingHours)}</Val>
            </span>
          </li>
          <li>
            <span className="hero-info-icon"><MapPin size={20} aria-hidden="true" /></span>
            <span>
              <small>{t('hero.officeLabel')}</small>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">{t('hero.officeShort')}</a>
            </span>
          </li>
          <li>
            <span className="hero-info-icon is-wa"><WhatsAppIcon size={20} /></span>
            <span>
              <small>{t('hero.chatLabel')}</small>
              <WhatsAppButton message={t('contact.greeting', { name })} className="link-btn" showIcon={false}>
                {t('hero.chatValue')}
              </WhatsAppButton>
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
