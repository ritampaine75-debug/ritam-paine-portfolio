/**
 * Article — Building useful browser-based tools.
 */

export const meta = {
  slug: 'building-useful-browser-based-tools',
  title: 'Building Useful Browser-Based Tools',
  description:
    'How a single, fast, dependency-free PWA became home to 25 online tools — and the pattern that makes utility sites worth building.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Tools',
  readingTime: '5 min read',
  tags: ['Tools', 'PWA', 'JavaScript', 'Utilities'],
  relatedProjects: ['web-tools-hub', 'smart-billing-inventory'],
};

export const content = [
  ['p', 'Web Tools Hub started with a small frustration: every useful little calculator or converter lived on a different heavy website. I wanted one fast place where utilities live together, load instantly and still work offline. The project grew to 25 tools and became a running experiment in restraint.'],
  ['h2', 'The rules I set myself'],
  ['ul', [
    'No frameworks and no dependencies — every tool is plain HTML, CSS and JavaScript.',
    'Every page must load in the time it takes to glance at it.',
    'Tools must work offline once the PWA shell is cached.',
    'The mobile experience comes first — most users are on a phone.',
  ]],
  ['h2', 'Why zero dependencies matters'],
  ['p', 'A dependency is code you did not write that you must cache, update and trust. For tools that are five functions long, a framework adds more weight than value. Going dependency-free means the pre-cached shell is tiny, the service worker has little to manage, and nothing breaks when a package in the middle of the chain changes.'],
  ['h2', 'The pattern that makes it easy to grow'],
  ['p', 'Each tool is a self-contained unit with the same skeleton: a clear title, one input area, one output area, and a copy button. Shared design tokens keep 25 tools looking like one product instead of a folder of random pages. Adding tool 26 is a copy of a proven template, not a new architecture.'],
  ['h2', 'Boring tools deserve polish too'],
  ['p', 'A calculator has no wow factor, so the craft shows in the details: correct number formatting, sensible defaults, keyboard support, obvious feedback and a layout that works at 360 pixels. Utility software wins by being quiet and correct.'],
  ['p', 'Try the collection at [Web Tools Hub](https://ritampaine75-debug.github.io/web-tools-hub/). The same modular thinking points toward bigger things, like the [Smart Billing & Inventory concept](/projects/smart-billing-inventory) for real business workflows.'],
];
