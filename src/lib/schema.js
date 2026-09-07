/**
 * Structured-data builders (Schema.org JSON-LD).
 * Only truthful information is emitted — no invented jobs, ratings or orgs.
 */
import { SITE, SOCIAL, SITE_URL } from '../data/site';

export const ORIGIN = SITE_URL;

const abs = (path) => `${ORIGIN}${path === '/' ? '/' : path}`;

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${ORIGIN}/#person`,
    name: SITE.name,
    url: ORIGIN,
    image: `${ORIGIN}/og-image.png`,
    jobTitle: SITE.roleLong,
    description:
      'Ritam Paine is a web developer and digital product builder working on modern web applications, AI-powered tools, real-time systems, Firebase projects, progressive web apps and experimental software.',
    knowsAbout: [
      'Web Development',
      'JavaScript',
      'React',
      'Firebase',
      'Firebase Realtime Database',
      'Progressive Web Apps',
      'AI-powered web applications',
      'Automation',
      'UI/UX',
    ],
    sameAs: [SOCIAL.githubUrl, SOCIAL.instagramUrl],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${ORIGIN}/#website`,
    url: ORIGIN,
    name: 'Ritam Paine — Web Developer',
    description: SITE.tagline,
    publisher: { '@id': `${ORIGIN}/#person` },
    inLanguage: 'en',
  };
}

export function webPageSchema({ name, description, path, isPartOfBlog = false }) {
  const obj = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${ORIGIN}#webpage`,
    url: abs(path),
    name,
    description,
    inLanguage: 'en',
    isPartOf: isPartOfBlog
      ? { '@type': 'Blog', name: 'Ritam Paine — Developer Journal' }
      : { '@id': `${ORIGIN}/#website` },
    about: { '@id': `${ORIGIN}/#person` },
    author: { '@id': `${ORIGIN}/#person` },
  };
  return obj;
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/** Article schema for the /blog pages. */
export function articleSchema({ headline, description, path, date, updated, category }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: abs(path),
    image: `${ORIGIN}/og-image.png`,
    datePublished: date,
    dateModified: updated || date,
    inLanguage: 'en',
    author: { '@id': `${ORIGIN}/#person` },
    publisher: { '@id': `${ORIGIN}/#person` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(path) },
  };
}

/**
 * SoftwareApplication / Project schema for project pages.
 * Published tools get SoftwareApplication; concepts get CreativeWork/Project.
 */
export function projectSchema(project, isSoftwareApplication) {
  const base = {
    '@context': 'https://schema.org',
    '@id': `${ORIGIN}/projects/${project.slug}#project`,
    name: project.name,
    url: abs(`/projects/${project.slug}`),
    description: project.summary,
    author: { '@id': `${ORIGIN}/#person` },
    keywords: project.tags ? project.tags.join(', ') : undefined,
  };
  if (project.repo) base.codeRepository = project.repo;
  if (project.live) base.url = project.live;
  if (project.status && isSoftwareApplication) base.softwareVersion = '1.0';

  const type = isSoftwareApplication ? 'SoftwareApplication' : 'Project';
  const node = { '@context': 'https://schema.org', '@type': type, ...base };
  if (isSoftwareApplication) {
    node.applicationCategory = 'DeveloperApplication';
    if (project.repo) node.sameAs = project.repo;
  }
  return node;
}
