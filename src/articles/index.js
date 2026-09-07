/**
 * Article registry — collects all article modules via Vite's glob import.
 * Static and eager so every post is bundled and linkable (great for SEO and
 * for zero-latency navigation between articles).
 */
const modules = import.meta.glob('./[0-9]*.js', { eager: true });

export const ARTICLES = Object.values(modules)
  .map((mod) => ({
    meta: mod.meta,
    content: mod.content,
  }))
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getArticle(slug) {
  return ARTICLES.find((a) => a.meta.slug === slug) || null;
}

export const articleUrl = (slug) => `/blog/${slug}`;
