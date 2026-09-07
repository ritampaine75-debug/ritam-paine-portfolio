import { Link } from 'react-router-dom';
import useSiteMeta from '../hooks/useSiteMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import { Eyebrow } from '../components/ui';
import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { ARTICLES, articleUrl } from '../articles';
import { breadcrumbSchema, personSchema, webPageSchema } from '../lib/schema';
import { SITE_URL } from '../data/site';

function fmtDate(iso) {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return iso;
  }
}

export default function BlogIndex() {
  useSiteMeta({
    title: 'Blog — Ritam Paine Developer Journal',
    description:
      'Technical articles and build notes by Ritam Paine: real-time Firebase apps, Progressive Web Apps, AI-powered web applications, mobile-first design and web development.',
    path: '/blog',
    type: 'website',
    image: `${SITE_URL}/og-image.png`,
    jsonLd: [
      personSchema(),
      webPageSchema({
        name: 'Blog — Ritam Paine',
        description: 'The developer journal of Ritam Paine.',
        path: '/blog',
        isPartOfBlog: true,
      }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  });

  return (
    <main id="main" className="section tight" style={{ paddingTop: 30 }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]}
        />
        <div className="section-head">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Notes from the <span className="gradient-text">workbench</span>
          </h1>
          <p className="section-lead">
            Original technical articles tied to real projects — how real-time chat works with
            Firebase, what building a PWA actually takes, and lessons from shipping tools and
            AI-powered apps.
          </p>
        </div>

        <div className="blog-grid">
          {ARTICLES.map((article, i) => {
            const m = article.meta;
            return (
              <Reveal key={m.slug} delay={(i % 2) * 80}>
                <article className="post-card">
                  <div className="post-meta">
                    <span className="cat">{m.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={m.date}>{fmtDate(m.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{m.readingTime}</span>
                  </div>
                  <h3>
                    <Link to={articleUrl(m.slug)}>{m.title}</Link>
                  </h3>
                  <p className="post-excerpt">{m.description}</p>
                  <div className="post-foot">
                    <div className="post-tags">
                      {m.tags.slice(0, 3).map((t) => (
                        <span className="chip chip-sm" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link to={articleUrl(m.slug)} className="text-link">
                      Read article <Icon name="arrowRight" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
