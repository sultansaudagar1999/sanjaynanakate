import { useLanguage } from '../i18n/LanguageContext'
import siteConfig from '../config/siteConfig'
import WhatsAppButton from './WhatsAppButton'

export default function FloatingWhatsApp() {
  const { t, pick } = useLanguage()
  return (
    <div className="wa-float">
      <WhatsAppButton
        message={t('contact.greeting', { name: pick(siteConfig.name) })}
        className="wa-float-btn"
        iconSize={30}
        ariaLabel={t('whatsappFloat')}
      />
    </div>
  )
}
