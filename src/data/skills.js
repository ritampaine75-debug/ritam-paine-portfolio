/**
 * Skills & technology data.
 * IMPORTANT: only technologies actually used or meaningfully explored are listed.
 */

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    blurb: 'Interfaces that feel fast and native on every screen.',
    skills: [
      { name: 'HTML', detail: 'Semantic, accessible structure' },
      { name: 'CSS', detail: 'Modern layout, design systems, themes' },
      { name: 'JavaScript', detail: 'Core language of my builds' },
      { name: 'React', detail: 'Component-driven interfaces' },
      { name: 'Responsive Web Design', detail: 'Mobile-first, every viewport' },
      { name: 'Progressive Web Apps', detail: 'Installable, offline-aware apps' },
      { name: 'Modern UI/UX', detail: 'Premium, minimal product design' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend / Database',
    blurb: 'Live data, authentication and real-time state.',
    skills: [
      { name: 'Firebase', detail: 'BaaS for apps with live state' },
      { name: 'Firebase Realtime Database', detail: 'Real-time sync, presence, status' },
      { name: 'Real-time data systems', detail: 'Live collaboration-style patterns' },
      { name: 'Authentication concepts', detail: 'OTP, email flows, access rules' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & APIs',
    blurb: 'Bringing intelligence into useful application workflows.',
    skills: [
      { name: 'AI API integration', detail: 'Wiring models into web apps' },
      { name: 'LLM-powered applications', detail: 'Chat, assistants, guided flows' },
      { name: 'AI workflows', detail: 'Prompting, structure, safe defaults' },
      { name: 'API-based application development', detail: 'Fetch, stream, handle failure' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    blurb: 'The daily toolkit behind every shipped experiment.',
    skills: [
      { name: 'Git', detail: 'Version control every project' },
      { name: 'GitHub', detail: 'Hosting, profiles, open builds' },
      { name: 'GitHub Actions', detail: 'Automation and CI experiments' },
      { name: 'Vite', detail: 'Fast modern build tooling' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling when it fits' },
      { name: 'Termux', detail: 'Building from a phone, on the go' },
      { name: 'Modern development workflows', detail: 'From phone to production' },
    ],
  },
];

/** Compact cloud of technologies shown in the homepage Technologies band. */
export const TECH_CLOUD = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Firebase',
  'Firebase Realtime Database', 'PWA', 'Tailwind CSS', 'Git', 'GitHub',
  'GitHub Actions', 'Service Workers', 'TypeScript', 'AI APIs', 'Python',
  'Termux', 'Vercel', 'GitHub Pages', 'Responsive Design',
];
