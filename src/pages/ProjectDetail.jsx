import { Link, useParams } from 'react-router-dom';
import useSiteMeta from '../hooks/useSiteMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import { Chip, StatusPill } from '../components/ui';
import { Icon } from '../components/Icons';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import { getProject, relatedProjectsFor } from '../data/projects';
import { getAccentIcon } from '../lib/project-visuals';
import { breadcrumbSchema, personSchema, webPageSchema, projectSchema } from '../lib/schema';
import { SITE_URL } from '../data/site';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useSiteMeta({
    title: project ? project.metaTitle : 'Project not found — Ritam Paine',
    description: project
      ? project.metaDescription
      : 'This project page could not be found on the Ritam Paine developer portfolio.',
    path: project ? `/projects/${project.slug}` : `/projects/${slug}`,
    type: 'website',
    image: project
      ? `${SITE_URL}/og-images/${project.slug}.png`
      : `${SITE_URL}/og-image.png`,
    noIndex: !project,
    jsonLd: project
      ? [
          personSchema(),
          webPageSchema({
            name: project.name,
            description: project.metaDescription,
            path: `/projects/${project.slug}`,
          }),
          projectSchema(project, project.status === 'published'),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: project.name, path: `/projects/${project.slug}` },
          ]),
        ]
      : [],
  });

  if (!project) {
    return <NotFound />;
  }

  const related = relatedProjectsFor(project);
  const accentIcon = getAccentIcon(project.slug);
  const published = project.status === 'published';

  return (
    <main id="main" className="section tight" style={{ paddingTop: 30 }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: project.name, path: `/projects/${project.slug}` },
          ]}
        />

        <header className="pd-header">
          <div>
            <div className="pc-meta-row" style={{ marginBottom: 16 }}>
              <div className="pc-accent" aria-hidden="true">
                <Icon name={accentIcon} />
              </div>
              <StatusPill status={project.status} />
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5.4vw, 3.4rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              {project.name}
            </h1>
            {project.formerName ? (
              <p style={{ color: 'var(--text-3)', fontStyle: 'italic', marginTop: 6 }}>
                {project.formerName}
              </p>
            ) : null}
            <p style={{ color: 'var(--text-2)', marginTop: 14, fontSize: '1.08rem', maxWidth: '64ch' }}>
              {project.tagline}
            </p>
          </div>
          <div className="pd-actions">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Icon name="github" /> GitHub
              </a>
            ) : (
              <span className="chip" style={{ fontSize: 13, padding: '10px 14px' }}>
                Source not public yet
              </span>
            )}
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="external" /> Live Demo
              </a>
            ) : null}
          </div>
        </header>

        {project.noteIfNoRepo && !project.repo ? (
          <div
            className="card"
            style={{
              marginBottom: 26,
              borderColor: 'rgba(148,163,184,.4)',
              background: 'var(--surface)',
              fontSize: 14.5,
            }}
          >
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Icon name="flask" style={{ fontSize: 20, color: 'var(--text-3)', marginTop: 1 }} />
              <div>
                <strong style={{ color: 'var(--text)' }}>Status note: </strong>
                {project.noteIfNoRepo} This project is presented as honest work-in-progress rather
                than a finished product.
              </div>
            </div>
          </div>
        ) : null}

        <div className="pd-layout">
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>Overview</h2>
            <p>{project.summary}</p>

            <h2>Problem</h2>
            <p>{project.problem}</p>

            <h2>Solution</h2>
            <p>{project.solution}</p>

            <h2>Key features</h2>
            <ul className="feature-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
              {project.features.map((f) => (
                <li key={f}>
                  <Icon name="check" /> {f}
                </li>
              ))}
            </ul>

            <h2>Architecture</h2>
            <ul>
              {project.architecture.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            <h2>Technology stack</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.technologies.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            {project.securityNote ? (
              <>
                <h2>Security note</h2>
                <blockquote style={{ marginTop: 0 }}>{project.securityNote}</blockquote>
              </>
            ) : null}

            <h2>Development notes &amp; lessons learned</h2>
            <ul>
              {project.lessons.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>

            {project.stack && (
              <>
                <h2>What runs underneath</h2>
                <ul>
                  {project.stack.map((s) => (
                    <li key={s.label}>
                      <strong>{s.label}</strong> — {s.detail}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {project.blogLink ? (
              <>
                <h2>Read the full story</h2>
                <p>
                  A write-up of this project lives in the blog:{' '}
                  <Link to={project.blogLink} className="text-link">
                    open the technical article <Icon name="arrowRight" />
                  </Link>
                  .
                </p>
              </>
            ) : null}
          </div>

          <aside className="pd-panel">
            <div className="card">
              <p className="card-label" style={{ marginBottom: 10 }}>
                Project facts
              </p>
              <div className="panel-row">
                <Icon name="tag" /> Status: <StatusPill status={project.status} />
              </div>
              <div className="panel-row">
                <Icon name="layers" />
                <div>
                  Categories: {project.categoryLabels.join(', ')}
                </div>
              </div>
              <div className="panel-row">
                <Icon name="activity" /> {published ? 'Public and live today' : 'Active work in progress'}
              </div>
              {project.repo ? (
                <div className="panel-row">
                  <Icon name="github" />
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    Open repository
                  </a>
                </div>
              ) : null}
              {project.live ? (
                <div className="panel-row">
                  <Icon name="external" />
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Open live demo
                  </a>
                </div>
              ) : null}
            </div>

            {project.relatedBlog ? (
              <div className="card">
                <p className="card-label" style={{ marginBottom: 12 }}>
                  Related article
                </p>
                <Link to={project.relatedBlog} className="text-link" style={{ fontSize: 14.5, lineHeight: 1.5 }}>
                  {project.relatedBlog
                    .replace('/blog/', '')
                    .split('-')
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ')}
                </Link>
                <p style={{ color: 'var(--text-3)', fontSize: 12.5, marginTop: 10 }}>
                  Published in the developer journal
                </p>
              </div>
            ) : null}

            {project.status === 'concept' || project.status === 'in-development' ? (
              <div className="card">
                <p className="card-label" style={{ marginBottom: 10 }}>
                  Where it goes next
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: 14 }}>
                  {project.status === 'concept'
                    ? 'This is a concept: interaction design and planning before implementation. Nothing here is claimed as shipped.'
                    : 'This project is being actively developed. The public status will be updated as milestones land.'}
                </p>
              </div>
            ) : null}

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-ghost btn-sm">
                <Icon name="arrowRight" style={{ transform: 'rotate(180deg)' }} /> All projects
              </Link>
              <a
                href="https://github.com/ritampaine75-debug"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <Icon name="github" /> GitHub profile
              </a>
            </div>
          </aside>
        </div>

        {related.length ? (
          <section style={{ marginTop: 64 }}>
            <div className="section-head" style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: '1.7rem' }}>Related projects</h2>
              <p style={{ color: 'var(--text-2)' }}>Continue exploring related builds and ideas.</p>
            </div>
            <div className="project-grid">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <ProjectCard project={p} compact />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
