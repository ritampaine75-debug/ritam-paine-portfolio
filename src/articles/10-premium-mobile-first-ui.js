/**
 * Article — Designing premium mobile-first web interfaces.
 */

export const meta = {
  slug: 'designing-premium-mobile-first-web-interfaces',
  title: 'Designing Premium Mobile-First Web Interfaces',
  description:
    'Typography, spacing, restraint, motion and theme discipline — the practical system I use to make mobile-first interfaces feel premium without slowing them down.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Design',
  readingTime: '6 min read',
  tags: ['Design', 'UI/UX', 'Mobile-first', 'Typography'],
  relatedProjects: ['sayan', 'ritamchat', 'web-tools-hub'],
};

export const content = [
  ['p', 'Premium is a feeling before it is a style: the interface is quiet, confident and never in the way. After designing several mobile-first products — from a chat interface to a wellbeing concept — I have settled on a small system of rules that produce that feeling consistently.'],
  ['h2', '1. Typography is the interface'],
  ['p', 'On a phone screen there is almost no room for decoration, so type does the work. I choose a strong hierarchy over ornament: a confident display size for the headline, comfortable reading sizes for body text, and generous line height. Large, well-spaced type reads premium; small, cramped type reads cheap, no matter the colour scheme.'],
  ['h2', '2. Spacing before styling'],
  ['p', 'Whitespace is the cheapest luxury in design. Before adding gradients or shadows I give every section room to breathe. A consistent spacing scale keeps related things close and separates unrelated things — and that rhythm alone carries most of the perceived quality.'],
  ['h2', '3. Restraint in effects'],
  ['p', 'Glass effects, gradients and blurs should support, never shout. I use them in small doses: a subtle border, a faint blur behind a floating navigation, a soft glow on one accent. If an effect draws the eye away from content, it is removed.'],
  ['h2', '4. Motion that explains'],
  ['p', 'Animation exists to orient the user — a section revealing as it scrolls into view, a menu that responds, a button that acknowledges a tap. Everything is short, gentle and honours the reduced-motion preference. Interfaces that animate everything feel like games; interfaces that animate nothing feel dead.'],
  ['h2', '5. Theme support from day one'],
  ['p', 'Dark and light are equal products, not an afterthought. Design tokens as CSS custom properties mean one palette switch re-skins the whole interface consistently. I default to the visitor system preference, persist their choice, and keep contrast strong in both themes.'],
  ['h2', '6. Honest states'],
  ['p', 'Premium interfaces tell the truth about state: loading, empty, error, offline. A skeleton or a clear message beats a frozen screen. Users trust an app that explains what is happening.'],
  ['p', 'This system shaped the interface you are looking at now, and the same principles guide product concepts like [Sayan](/projects/sayan) (a digital wellbeing app) and [RitamChat](/projects/ritamchat).'],
];
