/**
 * generate-static.mjs
 * Regenerates public/robots.txt and public/sitemap.xml from the real project
 * + article data. Run automatically before every production build.
 *
 * The canonical origin is read from VITE_SITE_URL (falling back to the GitHub
 * Pages URL) so the generated files always match the deployed domain.
 *
 *   npm run build   →   node scripts/generate-static.mjs && vite build
 */
import { writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SRC = join(ROOT, 'src');

const SITE_URL =
  process.env.VITE_SITE_URL || 'https://ritampaine75-debug.github.io/ritam-paine-portfolio';

async function loadJson(path) {
  const mod = await import(pathToFileURL(join(SRC, path)).href);
  return mod.default || mod;
}

const projects = (await loadJson('data/projects.js')).PROJECTS;
const articleModules = readdirSync(join(SRC, 'articles'))
  .filter((f) => /^[0-9].*\.js$/.test(f))
  .map(async (f) => (await import(pathToFileURL(join(SRC, 'articles', f)).href)).meta);
const articles = await Promise.all(articleModules);

const TODAY = '2026-09-07';

const routes = [
  { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: TODAY },
  { loc: '/about-ritam-paine', priority: '0.9', changefreq: 'monthly', lastmod: TODAY },
  { loc: '/projects', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  { loc: '/blog', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  ...projects.map((p) => ({
    loc: `/projects/${p.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: TODAY,
  })),
  ...articles.map((a) => ({
    loc: `/blog/${a.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: a.updated || a.date,
  })),
];

const urls = routes
  .map(
    (r) =>
      `  <url>\n` +
      `    <loc>${SITE_URL}${r.loc === '/' ? '/' : r.loc}</loc>\n` +
      `    <lastmod>${r.lastmod}</lastmod>\n` +
      `    <changefreq>${r.changefreq}</changefreq>\n` +
      `    <priority>${r.priority}</priority>\n` +
      `  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

// robots.txt — regenerated so the Sitemap directive matches the live domain.
const robots = `# Ritam Paine — robots.txt
# Generated at build time from VITE_SITE_URL (or the default GitHub Pages URL).

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(ROOT, 'public', 'robots.txt'), robots, 'utf8');
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml + '\n', 'utf8');
console.log(
  `[static] Sitemap: ${routes.length} URLs | robots.txt -> ${SITE_URL}/sitemap.xml`
);
