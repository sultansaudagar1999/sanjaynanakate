/**
 * DEVELOPMENT WORK
 * ----------------------------------------------------------------
 * ⚠ Everything below is SAMPLE DATA used only to demonstrate the layout.
 * None of these projects should be read as real work. Replace each entry
 * with approved project details before launch, and set `demo: false`.
 *
 * Fields
 *  id          unique short text, no spaces
 *  status      'planned' | 'in-progress' | 'completed'
 *  title       { en, mr }
 *  location    { en, mr }
 *  description { en, mr }
 *  period      { en, mr }   e.g. "Jan 2026 – Mar 2026"
 *  images      { before, after }  paths inside /public/images, or null
 *  demo        true while this is sample content
 */

const projects = [
  {
    id: 'sample-road',
    status: 'completed',
    title: {
      en: 'Sample: Internal road resurfacing',
      mr: 'नमुना: अंतर्गत रस्त्याचे डांबरीकरण',
    },
    location: { en: '[Lane / colony name]', mr: '[गल्ली / वसाहतीचे नाव]' },
    description: {
      en: 'Demonstration card showing how a completed road project will appear, with before-and-after photos.',
      mr: 'पूर्ण झालेले रस्ते काम कसे दिसेल हे दाखवणारे नमुना कार्ड, आधी व नंतरच्या फोटोसह.',
    },
    period: { en: '[Month YYYY – Month YYYY]', mr: '[महिना वर्ष – महिना वर्ष]' },
    images: { before: null, after: null },
    demo: true,
  },
  {
    id: 'sample-drainage',
    status: 'in-progress',
    title: {
      en: 'Sample: Storm-water drainage line',
      mr: 'नमुना: पावसाळी पाण्याची निचरा वाहिनी',
    },
    location: { en: '[Area name]', mr: '[परिसराचे नाव]' },
    description: {
      en: 'Demonstration card for a project currently under way. Add progress notes here once real details are approved.',
      mr: 'सध्या सुरू असलेल्या कामाचे नमुना कार्ड. अधिकृत माहिती मिळाल्यावर प्रगतीची नोंद येथे लिहा.',
    },
    period: { en: '[Start month YYYY – ongoing]', mr: '[सुरुवात महिना वर्ष – सुरू]' },
    images: { before: null, after: null },
    demo: true,
  },
  {
    id: 'sample-garden',
    status: 'planned',
    title: {
      en: 'Sample: Neighbourhood garden upgrade',
      mr: 'नमुना: परिसरातील उद्यान सुधारणा',
    },
    location: { en: '[Garden / ground name]', mr: '[उद्यान / मैदानाचे नाव]' },
    description: {
      en: 'Demonstration card for a planned project. Planned work can be listed once it is formally approved.',
      mr: 'नियोजित कामाचे नमुना कार्ड. काम अधिकृतपणे मंजूर झाल्यावर येथे दाखवता येईल.',
    },
    period: { en: '[Expected: Month YYYY]', mr: '[अपेक्षित: महिना वर्ष]' },
    images: { before: null, after: null },
    demo: true,
  },
  {
    id: 'sample-lights',
    status: 'completed',
    title: {
      en: 'Sample: LED street lighting',
      mr: 'नमुना: एलईडी पथदिवे',
    },
    location: { en: '[Road name]', mr: '[रस्त्याचे नाव]' },
    description: {
      en: 'Demonstration card. Replace with the real project name, exact location and an approved description.',
      mr: 'नमुना कार्ड. खऱ्या कामाचे नाव, नेमके ठिकाण आणि मंजूर वर्णन येथे लिहा.',
    },
    period: { en: '[Month YYYY]', mr: '[महिना वर्ष]' },
    images: { before: null, after: null },
    demo: true,
  },
  {
    id: 'sample-water',
    status: 'in-progress',
    title: {
      en: 'Sample: Water pipeline replacement',
      mr: 'नमुना: जलवाहिनी बदलणे',
    },
    location: { en: '[Society / lane name]', mr: '[सोसायटी / गल्लीचे नाव]' },
    description: {
      en: 'Demonstration card for an ongoing utility project in the ward.',
      mr: 'प्रभागातील सुरू असलेल्या सुविधा कामाचे नमुना कार्ड.',
    },
    period: { en: '[Start month YYYY – ongoing]', mr: '[सुरुवात महिना वर्ष – सुरू]' },
    images: { before: null, after: null },
    demo: true,
  },
  {
    id: 'sample-toilet',
    status: 'planned',
    title: {
      en: 'Sample: Public toilet renovation',
      mr: 'नमुना: सार्वजनिक स्वच्छतागृह नूतनीकरण',
    },
    location: { en: '[Location]', mr: '[ठिकाण]' },
    description: {
      en: 'Demonstration card for a sanitation project at the planning stage.',
      mr: 'नियोजन टप्प्यातील स्वच्छता कामाचे नमुना कार्ड.',
    },
    period: { en: '[Expected: Month YYYY]', mr: '[अपेक्षित: महिना वर्ष]' },
    images: { before: null, after: null },
    demo: true,
  },
]

export default projects
