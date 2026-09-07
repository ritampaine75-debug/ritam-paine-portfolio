import { useEffect } from 'react';
import { SITE_URL } from '../data/site';

/**
 * useSiteMeta — client-side SEO head manager.
 * Sets title, description, canonical, Open Graph / Twitter meta, robots and
 * JSON-LD structured data for the current page, and cleans up on unmount so
 * every route carries its own accurate metadata.
 */
export default function useSiteMeta({
  title,
  description,
  path = '',
  type = 'website',
  image = null,
  noIndex = false,
  jsonLd = [],
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    const fullTitle = title;
    const metas = [
      ['title', fullTitle],
      ['description', description],
      ['robots', noIndex ? 'noindex, nofollow' : 'index, follow'],
      ['og:title', fullTitle],
      ['og:description', description],
      ['og:type', type],
      ['og:url', url],
      ['twitter:title', fullTitle],
      ['twitter:description', description],
      ['twitter:card', image ? 'summary_large_image' : 'summary'],
      ['twitter:creator', '@ritam_2024_0'],
    ];
    if (image) {
      metas.push(['og:image', image]);
      metas.push(['twitter:image', image]);
    }

    const owned = new Set();
    document.title = fullTitle;

    // Set or create meta tags.
    metas.forEach(([prop, content]) => {
      if (!content) return;
      let el = document.head.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(prop.startsWith('og:') || prop.startsWith('twitter:') ? 'property' : 'name', prop);
        document.head.appendChild(el);
        owned.add(el);
      }
      el.setAttribute('content', content);
    });

    // Canonical link.
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      owned.add(canonical);
    }
    canonical.setAttribute('href', url);

    // JSON-LD structured data (keyed so we can replace safely).
    const existing = document.getElementById('page-jsonld');
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    if (jsonLd.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      owned.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      const s = document.getElementById('page-jsonld');
      if (s && s.parentNode) s.parentNode.removeChild(s);
    };
  }, [title, description, path, type, image, noIndex, JSON.stringify(jsonLd)]);
}
