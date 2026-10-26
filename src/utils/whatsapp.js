import siteConfig from '../config/siteConfig'

/** True when siteConfig.whatsappNumber looks like a real international number. */
export function isWhatsAppConfigured(number = siteConfig.whatsappNumber) {
  return /^[1-9]\d{9,14}$/.test(String(number || '').trim())
}

/**
 * Builds a wa.me link with an optional prefilled message.
 * Returns null when no valid number is configured, so callers can show
 * a "not configured" state instead of a broken link.
 */
export function buildWhatsAppLink(message = '', number = siteConfig.whatsappNumber) {
  if (!isWhatsAppConfigured(number)) return null
  const base = `https://wa.me/${String(number).trim()}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
