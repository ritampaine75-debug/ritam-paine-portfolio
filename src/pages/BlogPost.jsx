import { Link, useParams } from 'react-router-dom';
import useSiteMeta from '../hooks/useSiteMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import { Chip } from '../components/ui';
import ArticleBody from '../components/ArticleBody';
import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import ProjectCard from '../components/ProjectCard';
import { getArticle, articleUrl, ARTICLES } from '../articles';
import { getProject } from '../data/projects';
import { articleSchema, breadcrumbSchema, personSchema } from '../lib/schema';
import { SITE_URL } from '../data/site';
import NotFound from './NotFound';

function fmtDate(iso) {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) {
    return iso;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useSiteMeta({
    title: article ? `${article.meta.title} — Ritam Paine Blog` : 'Article not found — Ritam Paine',
    description: article
      ? article.meta.description
      : 'This article could not be found on the Ritam Paine developer portfolio.',
    path: article ? `/blog/${article.meta.slug}` : `/blog/${slug}`,
    type: 'article',
    image: `${SITE_URL}/og-image.png`,
    noIndex: !article,
    jsonLd: article
      ? [
          personSchema(),
          articleSchema({
            headline: article.meta.title,
            description: article.meta.description,
            path: `/blog/${article.meta.slug}`,
            date: article.meta.date,
            updated: article.meta.updated,
            category: article.meta.category,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: article.meta.title, path: `/blog/${article.meta.slug}` },
          ]),
        ]
      : [],
  });

  if (!article) {
    return <NotFound />;
  }

  const m = article.meta;
  const relatedProjects = (m.relatedProjects || [])
    .map((ps) => getProject(ps))
    .filter(Boolean)
    .slice(0, 3);

  // 1 earlier, 1 later for "keep reading"
  const idx = ARTICLES.findIndex((a) => a.meta.slug === m.slug);
  const neighbors = [];
  if (idx > 0) neighbors.push(ARTICLES[idx - 1]);
  if (idx >= 0 && idx < ARTICLES.length - 1) neighbors.push(ARTICLES[idx + 1]);

  return (
    <main id="main" className="section tight" style={{ paddingTop: 30 }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: m.title, path: `/blog/${m.slug}` },
          ]}
        />

        <div className="article-wrap">
          <header className="article-header">
            <div className="post-meta">
              <span className="cat">{m.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={m.date}>{fmtDate(m.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{m.readingTime}</span>
            </div>
            <h1>{m.title}</h1>
            <div className="article-meta-row">
              <span className="avatar-sm" aria-hidden="true">
                R
              </span>
              <span>
                <span className="author-name">Ritam Paine</span> · Web Developer &amp; Digital
                Product Builder
              </span>
            </div>
          </header>

          <ArticleBody content={article.content} />

          <div
            style={{
              marginTop: 42,
              paddingTop: 26,
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span style={{ color: 'var(--text-3)', fontSize: 13.5, fontWeight: 650 }}>Tags:</span>
            {m.tags.map((t) => (
              <Chip key={t} small>
                {t}
              </Chip>
            ))}
          </div>

          <div
            style={{
              marginTop: 26,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <span>
              Last updated <time dateTime={m.updated}>{fmtDate(m.updated)}</time>
            </span>
            <Link to="/blog" className="text-link">
              <Icon name="arrowRight" style={{ transform: 'rotate(180deg)' }} /> Back to all articles
            </Link>
          </div>
        </div>

        {relatedProjects.length ? (
          <section style={{ marginTop: 60 }}>
            <div className="section-head" style={{ marginBottom: 26 }}>
              <h2 style={{ fontSize: '1.7rem' }}>Projects mentioned in this article</h2>
              <p style={{ color: 'var(--text-2)' }}>See the real builds behind the ideas.</p>
            </div>
            <div className="project-grid">
              {relatedProjects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <ProjectCard project={p} compact />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {neighbors.length ? (
          <section style={{ marginTop: 56 }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: 18 }}>Keep reading</h2>
            <div className="blog-grid">
              {neighbors.map((n) => (
                <article className="post-card" key={n.meta.slug}>
                  <div className="post-meta">
                    <span className="cat">{n.meta.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{n.meta.readingTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem' }}>
                    <Link to={articleUrl(n.meta.slug)}>{n.meta.title}</Link>
                  </h3>
                  <p className="post-excerpt">{n.meta.description}</p>
                  <div className="post-foot">
                    <Link to={articleUrl(n.meta.slug)} className="text-link">
                      Read article <Icon name="arrowRight" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
