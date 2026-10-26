import { Clock, Construction, Droplets, GraduationCap, HeartHandshake, Lightbulb, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import { mailHref, telHref } from '../utils/format'
import { SectionTitle, SmartImage, Val } from './ui'

const PRIORITY_ICONS = [Construction, Droplets, Sparkles, GraduationCap, HeartHandshake, Lightbulb]

export default function About() {
  const { t, pick } = useLanguage()
  const name = pick(siteConfig.name)
  const priorities = t('about.priorities')
  const tel = telHref(siteConfig.phone)
  const mail = mailHref(siteConfig.email)

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle id="about-title" eyebrow={t('about.eyebrow')} title={t('about.title')} />

        <div className="about-grid">
          <figure className="about-photo reveal">
            <SmartImage src={siteConfig.photo} alt={t('hero.photoAlt', { name })} width="1080" height="1080" />
            <figcaption>
              <strong>{name}</strong>
              <span>{pick(siteConfig.designation)}</span>
              <dl className="about-ward">
                <div>
                  <dt>{t('about.wardLabel')}</dt>
                  <dd><Val>{pick(siteConfig.wardNumber)}</Val></dd>
                </div>
                <div>
                  <dt>{t('about.areaLabel')}</dt>
                  <dd><Val>{pick(siteConfig.areaName)}</Val></dd>
                </div>
              </dl>
            </figcaption>
          </figure>

          <div className="about-body">
            <p className="about-lead reveal">
              {t('about.bioLead', { name, designation: pick(siteConfig.designation) })}
            </p>
            <Val as="p" className="about-bio reveal">{t('about.bioPlaceholder')}</Val>

            <h3 className="about-h3">{t('about.prioritiesTitle')}</h3>
            <p className="muted small">{t('about.prioritiesNote')}</p>
            <ul className="priorities">
              {priorities.map((label, i) => {
                const Icon = PRIORITY_ICONS[i % PRIORITY_ICONS.length]
                return (
                  <li key={label} className="reveal">
                    <span className="priority-icon"><Icon size={20} aria-hidden="true" /></span>
                    {label}
                  </li>
                )
              })}
            </ul>

            <div className="info-cards">
              <div className="info-card">
                <Clock size={20} aria-hidden="true" />
                <h3>{t('about.hoursTitle')}</h3>
                <p><Val>{pick(siteConfig.visitingHours)}</Val></p>
                <p className="muted small">{pick(siteConfig.visitingNote)}</p>
              </div>
              <div className="info-card">
                <MapPin size={20} aria-hidden="true" />
                <h3>{t('about.addressTitle')}</h3>
                <address>{pick(siteConfig.officeAddress)}</address>
              </div>
              <div className="info-card">
                <Phone size={20} aria-hidden="true" />
                <h3>{t('about.contactTitle')}</h3>
                <p>
                  {tel ? <a href={tel}>{siteConfig.phone}</a> : <Val>{siteConfig.phone}</Val>}
                </p>
                <p className="with-icon">
                  <Mail size={16} aria-hidden="true" />
                  {mail ? <a href={mail}>{siteConfig.email}</a> : <Val>{siteConfig.email}</Val>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
