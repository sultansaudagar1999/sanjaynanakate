/** Placeholder values in siteConfig are written as "[ ... ]". */
export function isPlaceholder(value) {
  return typeof value === 'string' && /^\[.*\]$/s.test(value.trim())
}

/** Strip brackets so placeholders read naturally while still being highlighted. */
export function stripBrackets(value) {
  return isPlaceholder(value) ? value.trim().slice(1, -1) : value
}

/** Returns a tel: href, or null for placeholders / invalid numbers. */
export function telHref(phone) {
  if (isPlaceholder(phone)) return null
  const digits = String(phone || '').replace(/[^\d+]/g, '')
  return digits.length >= 10 ? `tel:${digits}` : null
}

export function mailHref(email) {
  if (isPlaceholder(email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) return null
  return `mailto:${email}`
}

export function formatDate(iso, lang) {
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(lang === 'mr' ? 'mr-IN' : 'en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}
