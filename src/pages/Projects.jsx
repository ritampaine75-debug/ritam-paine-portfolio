import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSiteMeta from '../hooks/useSiteMeta';
import { Eyebrow } from '../components/ui';
import ProjectFilterBar from '../components/ProjectFilterBar';
import ProjectCard from '../components/ProjectCard';
import Breadcrumbs from '../components/Breadcrumbs';
import Reveal from '../components/Reveal';
import { PROJECTS, FILTERS } from '../data/projects';
import { breadcrumbSchema, personSchema, webPageSchema } from '../lib/schema';

const VALID = new Set(FILTERS.map((f) => f.id));

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat');
  const [active, setActive] = useState(VALID.has(catParam) ? catParam : 'all');

  const handleChange = (id) => {
    setActive(id);
    if (id === 'all') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ cat: id }, { replace: true });
    }
  };

  const shown = useMemo(
    () => (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active))),
    [active]
  );

  useSiteMeta({
    title: 'Projects & Experiments — Ritam Paine Web Developer',
    description:
      'Browse projects by Ritam Paine: web applications, real-time Firebase apps, AI-powered tools, browser tools, games and experimental concepts with honest status labels.',
    path: '/projects',
    type: 'website',
    image: `${'https://ritampaine75-debug.github.io/ritam-paine-portfolio'}/og-image.png`,
    jsonLd: [
      personSchema(),
      webPageSchema({
        name: 'Projects — Ritam Paine',
        description: 'The project archive of Ritam Paine, web developer and digital product builder.',
        path: '/projects',
      }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
      ]),
    ],
  });

  const activeLabel = FILTERS.find((f) => f.id === active)?.label || 'All';

  return (
    <main id="main" className="section tight" style={{ paddingTop: 34 }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
          ]}
        />
        <div className="section-head">
          <Eyebrow>Projects &amp; Experiments</Eyebrow>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Every project, honestly <span className="gradient-text">labelled</span>
          </h1>
          <p className="section-lead">
            The full archive of builds documented here — shipped tools, active development,
            prototypes and clear concepts. Filter by what you want to see.
          </p>
        </div>

        <ProjectFilterBar active={active} onChange={handleChange} />

        <p aria-live="polite" style={{ color: 'var(--text-3)', fontSize: 14, margin: '-14px 0 24px' }}>
          Showing {shown.length} {shown.length === 1 ? 'project' : 'projects'} under “{activeLabel}”.
        </p>

        {shown.length ? (
          <div className="project-grid">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="card" style={{ color: 'var(--text-2)' }}>
            No projects in this category yet — the filter shows real work only.
          </div>
        )}
      </div>
    </main>
  );
}
