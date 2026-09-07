/**
 * generate-static.mjs
 * Regenerates public/sitemap.xml from the real project + article data.
 * Run automatically before every production build (`npm run build`).
 *
 *   npm run build   →   node scripts/generate-static.mjs && vite build
 */
import { writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SRC = join(ROOT, 'src');

const SITE_URL = 'https://ritampaine75-debug.github.io/ritam-paine-portfolio';

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
    lastmod: p.status === 'published' ? TODAY : TODAY,
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

writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml + '\n', 'utf8');
console.log(`[sitemap] Wrote ${routes.length} URLs to public/sitemap.xml`);
