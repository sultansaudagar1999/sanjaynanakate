import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, Loader2, Pencil, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { MESSAGE_MAX, normalizeIndianMobile, validateInquiry } from '../utils/validation'
import Modal from './Modal'
import { WhatsAppIcon } from './ui'

const CATEGORIES = ['general', 'civic', 'documents', 'appointment', 'suggestion', 'other']
const FIELD_ORDER = ['name', 'phone', 'email', 'category', 'message']
const EMPTY = { name: '', phone: '', email: '', category: '', message: '' }

/**
 * Inquiry form (starter version — no backend).
 * Flow: validate → review dialog → visitor opens WhatsApp themselves → visitor presses Send.
 * Nothing is stored or transmitted by this website.
 */
export default function ContactForm() {
  const { t } = useLanguage()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  // idle → processing → review → done
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const fieldRefs = useRef({})
  const successRef = useRef(null)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])
  useEffect(() => {
    if (status === 'done') successRef.current?.focus()
  }, [status])

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    if (touched[field] || errors[field]) {
      const all = validateInquiry(next)
      setErrors((prev) => ({ ...prev, [field]: all[field] }))
    }
  }

  const blur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validateInquiry(values)[field] }))
  }

  const composeMessage = () => {
    const lines = [
      `*${t('form.msgHeader')}*`,
      `${t('form.msgName')}: ${values.name.trim()}`,
      `${t('form.msgPhone')}: +91 ${normalizeIndianMobile(values.phone)}`,
    ]
    if (values.email.trim()) lines.push(`${t('form.msgEmail')}: ${values.email.trim()}`)
    lines.push(`${t('form.msgCategory')}: ${t(`form.categories.${values.category}`)}`)
    lines.push('', `${t('form.msgMessage')}:`, values.message.trim())
    return lines.join('\n')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (status !== 'idle') return // guards against double submits
    const found = validateInquiry(values)
    setErrors(found)
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])))
    const firstInvalid = FIELD_ORDER.find((f) => found[f])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus()
      return
    }
    setStatus('processing')
    timer.current = setTimeout(() => {
      setMessage(composeMessage())
      setStatus('review')
    }, 350)
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setTouched({})
    setMessage('')
    setStatus('idle')
  }

  const waLink = buildWhatsAppLink(message)
  const busy = status !== 'idle'
  const hasErrors = FIELD_ORDER.some((f) => errors[f])

  const fieldProps = (field) => ({
    id: `f-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    onBlur: blur(field),
    ref: (el) => (fieldRefs.current[field] = el),
    'aria-invalid': errors[field] ? 'true' : undefined,
    'aria-describedby': errors[field] ? `f-${field}-err` : undefined,
    disabled: busy,
  })

  const fieldError = (field) =>
    errors[field] ? (
      <p className="field-error" id={`f-${field}-err`}>
        {t(`form.errors.${errors[field]}`)}
      </p>
    ) : null

  if (status === 'done') {
    return (
      <div className="form-card form-success" ref={successRef} tabIndex={-1} aria-live="polite">
        <CheckCircle2 size={44} className="success-icon" aria-hidden="true" />
        <h3>{t('form.successTitle')}</h3>
        <p>{t('form.successText')}</p>
        <div className="form-actions">
          {waLink && (
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <WhatsAppIcon size={18} />
              {t('form.successRetry')}
            </a>
          )}
          <button type="button" className="btn btn-outline" onClick={reset}>
            {t('form.sendAnother')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card">
      <h3 className="form-title">{t('form.title')}</h3>
      <p className="muted">{t('form.intro')}</p>

      <form onSubmit={onSubmit} noValidate className="form">
        {hasErrors && (
          <p className="form-alert" role="alert">
            <AlertTriangle size={18} aria-hidden="true" />
            {t('form.errors.summary')}
          </p>
        )}

        <div className="field">
          <label htmlFor="f-name">
            {t('form.name')} <span className="req" aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" maxLength={80} placeholder={t('form.namePh')} required {...fieldProps('name')} />
          {fieldError('name')}
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="f-phone">
              {t('form.phone')} <span className="req" aria-hidden="true">*</span>
            </label>
            <div className="input-prefix">
              <span aria-hidden="true">+91</span>
              <input type="tel" inputMode="tel" autoComplete="tel-national" maxLength={16} placeholder={t('form.phonePh')} required {...fieldProps('phone')} />
            </div>
            {fieldError('phone')}
          </div>

          <div className="field">
            <label htmlFor="f-email">
              {t('form.email')} <span className="optional">{t('form.optional')}</span>
            </label>
            <input type="email" inputMode="email" autoComplete="email" maxLength={120} placeholder={t('form.emailPh')} {...fieldProps('email')} />
            {fieldError('email')}
          </div>
        </div>

        <div className="field">
          <label htmlFor="f-category">
            {t('form.category')} <span className="req" aria-hidden="true">*</span>
          </label>
          <select required {...fieldProps('category')}>
            <option value="">{t('form.categoryPlaceholder')}</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {t(`form.categories.${c}`)}
              </option>
            ))}
          </select>
          {fieldError('category')}
        </div>

        <div className="field">
          <label htmlFor="f-message">
            {t('form.message')} <span className="req" aria-hidden="true">*</span>
          </label>
          <textarea rows={5} maxLength={MESSAGE_MAX} placeholder={t('form.messagePh')} required {...fieldProps('message')} />
          <div className="field-foot">
            {fieldError('message')}
            <span className="counter" aria-hidden="true">
              {t('form.counter', { count: values.message.length })}
            </span>
          </div>
        </div>

        <p className="privacy-note">
          <ShieldCheck size={18} aria-hidden="true" />
          <span>
            {t('form.privacy')} <Link to="/privacy">{t('form.privacyLink')}</Link>
          </span>
        </p>

        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={busy} aria-busy={status === 'processing'}>
          {status === 'processing' ? (
            <>
              <Loader2 size={18} className="spin" aria-hidden="true" />
              {t('form.processing')}
            </>
          ) : (
            <>
              <WhatsAppIcon size={18} />
              {t('form.submit')}
            </>
          )}
        </button>
      </form>

      <Modal open={status === 'review'} onClose={() => setStatus('idle')} labelledBy="review-title" className="modal-panel-sm">
        <div className="review">
          <h3 id="review-title">{t('form.confirmTitle')}</h3>
          {waLink ? (
            <p className="muted">{t('form.confirmIntro')}</p>
          ) : (
            <div className="form-alert is-warn" role="alert">
              <AlertTriangle size={18} aria-hidden="true" />
              <div>
                <strong>{t('form.notConfiguredTitle')}</strong>
                <p>{t('form.notConfiguredText')}</p>
              </div>
            </div>
          )}
          <pre className="review-msg" aria-label={t('form.message')}>
            {message}
          </pre>
          <div className="form-actions">
            <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
              <Pencil size={16} aria-hidden="true" />
              {t('form.confirmCancel')}
            </button>
            {waLink ? (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={() => setStatus('done')}
              >
                <WhatsAppIcon size={18} />
                {t('form.confirmOpen')}
              </a>
            ) : (
              <button type="button" className="btn btn-whatsapp" disabled>
                <WhatsAppIcon size={18} />
                {t('form.confirmOpen')}
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
