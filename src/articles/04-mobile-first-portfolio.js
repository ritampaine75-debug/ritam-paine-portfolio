/**
 * Article — Designing a mobile-first developer portfolio.
 */

export const meta = {
  slug: 'designing-a-mobile-first-developer-portfolio',
  title: 'How I Designed a Mobile-First Developer Portfolio',
  description:
    'The real design decisions behind a premium developer portfolio: hierarchy, typography, motion restraint, theme support and content honesty.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Design',
  readingTime: '6 min read',
  tags: ['Design', 'UI/UX', 'Portfolio', 'Mobile-first'],
  relatedProjects: ['ritamchat', 'sayan'],
};

export const content = [
  ['p', 'This website you are reading is itself one of my design experiments. Building it forced me to decide what a serious developer portfolio should communicate in the first few seconds: who I am, what I build, and where the code lives. This article collects the decisions I made, starting with the mobile viewport.'],
  ['h2', 'Design for the phone first, always'],
  ['p', 'Most visitors will arrive on a phone. So the layout starts at 360px wide: one column, generous spacing, thumb-reachable controls, and typography that does not need a desktop to breathe. The desktop layout is then an enhancement — wider grids and extra whitespace — never the starting point.'],
  ['h2', 'One job per screen'],
  ['p', 'A portfolio is not a wall of everything at once. The homepage leads with a single statement — name, role, one sentence of what I build — then lets the visitor choose a path: projects, about, GitHub or contact. Every section has one clear purpose and links forward to deeper content. That structure also happens to be great for search engines: clear hierarchy, semantic sections, clean internal links.'],
  ['h2', 'Premium without noise'],
  ['p', 'Premium feels come from restraint: a limited palette, subtle borders instead of heavy shadows, glass surfaces with careful blur, and motion that explains rather than entertains. I animate reveals at most once per section and I fully respect the reduced-motion preference. There are no emojis and no marquee effects — polish should be felt, not watched.'],
  ['h2', 'Dark and light as equal citizens'],
  ['p', 'A developer portfolio will be read at midnight. I ship both themes, defaulting to the visitor system preference, persisting their choice, and making the toggle keyboard accessible. The design tokens live as CSS custom properties so neither theme feels bolted on.'],
  ['h2', 'Content honesty is a design decision'],
  ['p', 'The most important layout choice I made is honest labels. Experiments say "Experiment", concepts say "Concept", shipped tools link to their live URL. A portfolio that respects its own content earns trust faster than any gradient can.'],
  ['p', 'If this subject interests you, the full build notes for this site — performance, SEO and accessibility — are described in [My Web Development Journey](/blog/my-web-development-journey).'],
];
