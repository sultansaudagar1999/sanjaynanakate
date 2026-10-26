/**
 * NEWS & PUBLIC ANNOUNCEMENTS
 * ----------------------------------------------------------------
 * ⚠ SAMPLE DATA ONLY. These are not real announcements. Replace them with
 * approved notices before launch and set `demo: false` on each.
 *
 * Fields
 *  id       unique short text
 *  type     'meeting' | 'event' | 'notice' | 'health' | 'service'
 *  date     'YYYY-MM-DD'  (shown in the visitor's language)
 *  title    { en, mr }
 *  summary  { en, mr }
 *  image    path inside /public/images, or null
 *  demo     true while this is sample content
 *
 * Items are shown newest first automatically.
 */

const announcements = [
  {
    id: 'sample-meeting',
    type: 'meeting',
    date: '2026-11-08',
    title: {
      en: 'Sample: Ward residents’ meeting',
      mr: 'नमुना: प्रभागातील नागरिकांची बैठक',
    },
    summary: {
      en: 'Example of how a public meeting notice will look — venue, time and agenda go here.',
      mr: 'सार्वजनिक बैठकीची सूचना कशी दिसेल याचे उदाहरण — ठिकाण, वेळ आणि विषय येथे.',
    },
    image: null,
    demo: true,
  },
  {
    id: 'sample-health',
    type: 'health',
    date: '2026-10-30',
    title: {
      en: 'Sample: Free health check-up camp',
      mr: 'नमुना: मोफत आरोग्य तपासणी शिबिर',
    },
    summary: {
      en: 'Example health camp announcement. Add the date, venue and partner organisation once confirmed.',
      mr: 'आरोग्य शिबिराच्या सूचनेचे उदाहरण. तारीख, ठिकाण आणि सहयोगी संस्था निश्चित झाल्यावर लिहा.',
    },
    image: null,
    demo: true,
  },
  {
    id: 'sample-notice',
    type: 'notice',
    date: '2026-10-20',
    title: {
      en: 'Sample: Public notice',
      mr: 'नमुना: जाहीर सूचना',
    },
    summary: {
      en: 'Example layout for a public notice. Only publish notices that have been approved by the office.',
      mr: 'जाहीर सूचनेचा नमुना. कार्यालयाने मंजूर केलेल्याच सूचना प्रसिद्ध कराव्यात.',
    },
    image: null,
    demo: true,
  },
  {
    id: 'sample-service',
    type: 'service',
    date: '2026-10-12',
    title: {
      en: 'Sample: Local service update',
      mr: 'नमुना: स्थानिक सेवा अद्यतन',
    },
    summary: {
      en: 'Example of a service update such as a water-supply schedule change or road work diversion.',
      mr: 'पाणीपुरवठा वेळापत्रकातील बदल किंवा रस्ते कामामुळे वाहतूक वळवणे यासारख्या सेवा अद्यतनाचे उदाहरण.',
    },
    image: null,
    demo: true,
  },
  {
    id: 'sample-event',
    type: 'event',
    date: '2026-10-02',
    title: {
      en: 'Sample: Community cleanliness drive',
      mr: 'नमुना: सामूहिक स्वच्छता मोहीम',
    },
    summary: {
      en: 'Example community event post. Add photos to the gallery after the event.',
      mr: 'सामुदायिक कार्यक्रमाचे उदाहरण. कार्यक्रमानंतर फोटो गॅलरीत जोडा.',
    },
    image: null,
    demo: true,
  },
  {
    id: 'sample-meeting-2',
    type: 'meeting',
    date: '2026-09-21',
    title: {
      en: 'Sample: Senior citizens’ interaction',
      mr: 'नमुना: ज्येष्ठ नागरिक संवाद',
    },
    summary: {
      en: 'Example of a smaller meeting announcement with a short description.',
      mr: 'लहान बैठकीच्या सूचनेचे उदाहरण, थोडक्यात माहितीसह.',
    },
    image: null,
    demo: true,
  },
]

export default announcements
