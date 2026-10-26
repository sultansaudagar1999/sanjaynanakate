import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import { mailHref, telHref } from '../utils/format'
import ContactForm from './ContactForm'
import WhatsAppButton from './WhatsAppButton'
import { SectionTitle, Val } from './ui'

export default function Contact() {
  const { t, pick } = useLanguage()
  const tel = telHref(siteConfig.phone)
  const mail = mailHref(siteConfig.email)

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle id="contact-title" eyebrow={t('contact.eyebrow')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="contact-grid">
          <div className="contact-info">
            <ul className="contact-list">
              <li>
                <span className="ci-icon"><MapPin size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{t('contact.address')}</h3>
                  <address>{pick(siteConfig.officeAddress)}</address>
                  <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                    {t('contact.maps')} <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </li>
              <li>
                <span className="ci-icon"><Phone size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{t('contact.phone')}</h3>
                  <p>{tel ? <a href={tel}>{siteConfig.phone}</a> : <Val>{siteConfig.phone}</Val>}</p>
                </div>
              </li>
              <li>
                <span className="ci-icon"><Mail size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{t('contact.email')}</h3>
                  <p>{mail ? <a href={mail}>{siteConfig.email}</a> : <Val>{siteConfig.email}</Val>}</p>
                </div>
              </li>
              <li>
                <span className="ci-icon"><Clock size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{t('contact.hours')}</h3>
                  <p><Val>{pick(siteConfig.visitingHours)}</Val></p>
                  <p className="muted small">{pick(siteConfig.visitingNote)}</p>
                </div>
              </li>
            </ul>

            <div className="contact-ctas">
              <WhatsAppButton message={t('contact.greeting', { name: pick(siteConfig.name) })}>
                <span>{t('contact.whatsappBtn')}</span>
              </WhatsAppButton>
              {tel && (
                <a href={tel} className="btn btn-outline">
                  <Phone size={18} aria-hidden="true" />
                  {t('contact.call')}
                </a>
              )}
            </div>

            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="map-card">
              <span className="map-pin" aria-hidden="true"><MapPin size={26} /></span>
              <span>
                <strong>{t('hero.officeShort')}</strong>
                <span>{t('contact.maps')}</span>
              </span>
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
