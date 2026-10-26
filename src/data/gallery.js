/**
 * PHOTO GALLERY
 * ----------------------------------------------------------------
 * ⚠ Placeholder entries only. Add real photos ONLY with permission from
 * the office and from people clearly visible in them.
 *
 * To add a photo:
 *  1. Put the file in /public/images/gallery/ (JPG or WebP, ideally
 *     under 300 KB and about 1600 px wide).
 *  2. Add an entry below with `src: '/images/gallery/your-file.jpg'`.
 *
 * Fields
 *  id        unique short text
 *  category  'development' | 'events' | 'meetings'
 *  src       image path, or null to show a placeholder
 *  caption   { en, mr }
 *  demo      true while this is a placeholder
 */

const gallery = [
  {
    id: 'g1',
    category: 'development',
    src: null,
    caption: { en: 'Placeholder: Road work site', mr: 'नमुना: रस्ते कामाचे ठिकाण' },
    demo: true,
  },
  {
    id: 'g2',
    category: 'events',
    src: null,
    caption: { en: 'Placeholder: Community event', mr: 'नमुना: सामुदायिक कार्यक्रम' },
    demo: true,
  },
  {
    id: 'g3',
    category: 'meetings',
    src: null,
    caption: { en: 'Placeholder: Residents’ meeting', mr: 'नमुना: नागरिकांची बैठक' },
    demo: true,
  },
  {
    id: 'g4',
    category: 'development',
    src: null,
    caption: { en: 'Placeholder: Garden improvement', mr: 'नमुना: उद्यान सुधारणा' },
    demo: true,
  },
  {
    id: 'g5',
    category: 'events',
    src: null,
    caption: { en: 'Placeholder: Health camp', mr: 'नमुना: आरोग्य शिबिर' },
    demo: true,
  },
  {
    id: 'g6',
    category: 'meetings',
    src: null,
    caption: { en: 'Placeholder: Site inspection', mr: 'नमुना: कामाची पाहणी' },
    demo: true,
  },
  {
    id: 'g7',
    category: 'development',
    src: null,
    caption: { en: 'Placeholder: Street lighting', mr: 'नमुना: पथदिवे' },
    demo: true,
  },
  {
    id: 'g8',
    category: 'events',
    src: null,
    caption: { en: 'Placeholder: Festival celebration', mr: 'नमुना: सण-उत्सव' },
    demo: true,
  },
]

export default gallery
