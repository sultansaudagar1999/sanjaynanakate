/**
 * ============================================================
 *  SITE CONFIGURATION — edit this file to update the website
 * ============================================================
 *
 *  HOW TO READ THIS FILE
 *  - Any value written inside square brackets, e.g. "[Prabhag No. __]",
 *    is a PLACEHOLDER. It shows on the site with a dotted highlight so
 *    nobody mistakes it for real information. Replace it with the
 *    approved value and remove the brackets.
 *  - Values that have both `en` (English) and `mr` (Marathi) must be
 *    updated in both languages.
 *  - Leave a value as an empty string "" to hide it (e.g. social links).
 *
 *  Never put passwords, API keys or other secrets in this file —
 *  everything here is visible to the public.
 */

const siteConfig = {
  // ---- Representative -------------------------------------------------
  name: {
    en: 'Sanjay Nana Kate',
    mr: 'संजय नाना काटे', // Confirm Marathi spelling with the office
  },
  designation: {
    en: 'Sabhapati & Nagarsevak, PCMC',
    mr: 'सभापती व नगरसेवक, पिंपरी चिंचवड महानगरपालिका',
  },
  // Short form used in the header beside the name
  designationShort: {
    en: 'Sabhapati & Nagarsevak · PCMC',
    mr: 'सभापती व नगरसेवक · पिं.चिं.म.न.पा.',
  },

  // ---- Ward -----------------------------------------------------------
  wardNumber: {
    en: '[Prabhag No. __]',
    mr: '[प्रभाग क्र. __]',
  },
  areaName: {
    en: '[Dapodi & nearby areas — confirm ward area]',
    mr: '[दापोडी व परिसर — प्रभाग क्षेत्र निश्चित करा]',
  },
  city: {
    en: 'Pimpri-Chinchwad, Pune',
    mr: 'पिंपरी-चिंचवड, पुणे',
  },

  // ---- Contact --------------------------------------------------------
  // Phone shown on the site and used for "Call" links.
  phone: '[+91 XXXXX XXXXX]',

  // WhatsApp number in INTERNATIONAL format: digits only, country code
  // first, no "+", spaces or dashes. Example format: 919800000000
  // While this is empty, WhatsApp buttons show a "not configured" notice
  // instead of opening WhatsApp.
  whatsappNumber: '',

  email: '[office-email@example.com]',

  officeAddress: {
    en: 'Kate Bungalow, 146, Old Sangvi Bopodi Rd, Mahatma Phule Nagar, Dapodi, Pune, Pimpri-Chinchwad, Maharashtra 411012',
    // Marathi version — please have the office verify spelling.
    mr: 'काटे बंगला, १४६, जुना सांगवी-बोपोडी रस्ता, महात्मा फुले नगर, दापोडी, पुणे, पिंपरी-चिंचवड, महाराष्ट्र ४११०१२',
  },

  // Opens Google Maps searching for the office address.
  // Replace with the exact "Share → Copy link" URL from Google Maps if preferred.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Kate Bungalow, 146, Old Sangvi Bopodi Rd, Mahatma Phule Nagar, Dapodi, Pimpri-Chinchwad, Maharashtra 411012'
    ),

  visitingHours: {
    en: '[Mon – Sat, 10:00 AM – 1:00 PM — confirm timings]',
    mr: '[सोम – शनि, सकाळी १०:०० – दुपारी १:०० — वेळ निश्चित करा]',
  },
  visitingNote: {
    en: 'Closed on public holidays. Please call ahead for urgent matters.',
    mr: 'सार्वजनिक सुट्टीच्या दिवशी कार्यालय बंद. तातडीच्या कामासाठी आधी फोन करा.',
  },

  // ---- Social media (leave "" to hide) --------------------------------
  social: {
    facebook: '',
    instagram: '',
    x: '',
    youtube: '',
  },

  // ---- Images (files live in /public/images) --------------------------
  logo: '/images/logo.png',
  photo: '/images/corporator.jpg',

  // ---- Website --------------------------------------------------------
  // Language shown on a visitor's first visit: 'mr' (Marathi) or 'en' (English)
  defaultLanguage: 'mr',

  siteTitle: {
    en: 'Sanjay Nana Kate — Sabhapati & Nagarsevak, PCMC',
    mr: 'संजय नाना काटे — सभापती व नगरसेवक, पिंपरी चिंचवड',
  },
  siteDescription: {
    en: 'Public information website of Sanjay Nana Kate, Sabhapati & Nagarsevak, Pimpri Chinchwad Municipal Corporation. Development work, announcements, gallery and office contact.',
    mr: 'संजय नाना काटे, सभापती व नगरसेवक, पिंपरी चिंचवड महानगरपालिका यांचे माहिती संकेतस्थळ. विकासकामे, सूचना, फोटो गॅलरी आणि कार्यालय संपर्क.',
  },

  // Show "Demo content" labels on sample projects, news and gallery.
  // Set to false ONLY after all sample data has been replaced with real,
  // approved content.
  showDemoNotices: true,
}

export default siteConfig
