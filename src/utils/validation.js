export const MESSAGE_MAX = 1000

/** Accepts "98xxxxxxxx", "+91 98xxx xxxxx", "098xxxxxxxx", "91-98xxxxxxxx". */
export function normalizeIndianMobile(input) {
  let digits = String(input || '').replace(/[\s\-().]/g, '')
  if (digits.startsWith('+91')) digits = digits.slice(3)
  else if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  return digits
}

export function isValidIndianMobile(input) {
  return /^[6-9]\d{9}$/.test(normalizeIndianMobile(input))
}

export function isValidEmail(input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(input || '').trim())
}

/** Returns an object of { field: errorKey } — empty when the form is valid. */
export function validateInquiry(values) {
  const errors = {}
  const name = values.name.trim()
  if (!name) errors.name = 'nameRequired'
  else if (name.length < 2 || name.length > 80 || !/\p{L}/u.test(name)) errors.name = 'nameInvalid'

  if (!values.phone.trim()) errors.phone = 'phoneRequired'
  else if (!isValidIndianMobile(values.phone)) errors.phone = 'phoneInvalid'

  if (values.email.trim() && !isValidEmail(values.email)) errors.email = 'emailInvalid'

  if (!values.category) errors.category = 'categoryRequired'

  const message = values.message.trim()
  if (!message) errors.message = 'messageRequired'
  else if (message.length < 10) errors.message = 'messageShort'
  else if (message.length > MESSAGE_MAX) errors.message = 'messageLong'

  return errors
}
