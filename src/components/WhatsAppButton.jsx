import { useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './ui'

/**
 * Opens WhatsApp with an optional prefilled message (the visitor still has
 * to press Send). If no number is configured it shows a short notice
 * instead of a broken link.
 */
export default function WhatsAppButton({ message, children, className = 'btn btn-whatsapp', iconSize = 20, showIcon = true, ariaLabel, onClick }) {
  const { t } = useLanguage()
  const [showNotice, setShowNotice] = useState(false)
  const timer = useRef()
  const noticeId = useId()
  const href = buildWhatsAppLink(message)

  useEffect(() => () => clearTimeout(timer.current), [])

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel} onClick={onClick}>
        {showIcon && <WhatsAppIcon size={iconSize} />}
        {children}
      </a>
    )
  }

  return (
    <span className="wa-wrap">
      <button
        type="button"
        className={className}
        aria-label={ariaLabel}
        aria-describedby={showNotice ? noticeId : undefined}
        onClick={() => {
          setShowNotice(true)
          clearTimeout(timer.current)
          timer.current = setTimeout(() => setShowNotice(false), 3500)
        }}
      >
        {showIcon && <WhatsAppIcon size={iconSize} />}
        {children}
      </button>
      <span className={`wa-notice ${showNotice ? 'is-visible' : ''}`} role="status" id={noticeId}>
        {showNotice ? t('contact.notConfigured') : ''}
      </span>
    </span>
  )
}
