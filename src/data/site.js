/**
 * Central site configuration for the Ritam Paine developer portfolio.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  IMPORTANT — content accuracy & security
 *  · Only real, public facts about Ritam Paine are used below.
 *  · No jobs, companies, degrees, certifications, awards, clients, revenue,
 *    GitHub stars, user counts, downloads or years of experience are invented.
 *  · NEVER place API keys, tokens, passwords or private credentials here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Canonical origin. Defaults to GitHub Pages for this repository
// (https://<user>.github.io/<repository>/).
// When deploying to a custom domain, change this one constant, e.g.:
//   'https://ritampaine.dev'
// and rebuild. The value is used for canonical URLs and Open Graph images.
export const SITE_URL = 'https://ritampaine75-debug.github.io/ritam-paine-portfolio';

// Repository that hosts this source code (used for footer & README links).
export const SITE_REPO_URL = 'https://github.com/ritampaine75-debug/ritam-paine-portfolio';

export const SITE = {
  name: 'Ritam Paine',
  firstName: 'Ritam',
  lastName: 'Paine',
  role: 'Web Developer',
  roleLong: 'Web Developer & Digital Product Builder',
  roleShort: 'Developer & Digital Product Builder',
  headline: 'Ritam Paine — Web Developer & Digital Product Builder',
  tagline:
    'I build modern web applications, intelligent tools, real-time systems, automation workflows and experimental digital products.',
  credibility: ['Building', 'Experimenting', 'Learning', 'Shipping'],
  location: 'India',
  ogImage: `${SITE_URL}/og-image.png`,
};

export const SOCIAL = {
  githubUsername: 'ritampaine75-debug',
  githubUrl: 'https://github.com/ritampaine75-debug',
  githubProfileLabel: 'ritampaine75-debug',
  instagramHandle: '@ritam_2024_0',
  instagramUsername: 'ritam_2024_0',
  instagramUrl: 'https://www.instagram.com/ritam_2024_0',
  // Public contact email is intentionally NOT set (none supplied).
  // To enable the "Email Me" button later, set contactEmail below to a real
  // address. Leave as an empty string to keep the email CTA hidden.
  contactEmail: '',
};

// Facts verified from the public GitHub API (checked September 2026).
export const GITHUB_FACTS = {
  accountCreatedLabel: 'October 2025', // account created 2025-10-18
  publicReposAtCheck: 83, // snapshot value shown before live fetch resolves
};
