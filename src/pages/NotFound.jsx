import { Link } from 'react-router-dom';
import useSiteMeta from '../hooks/useSiteMeta';
import { Icon } from '../components/Icons';
import { Eyebrow } from '../components/ui';
import Breadcrumbs from '../components/Breadcrumbs';

export default function NotFound() {
  useSiteMeta({
    title: 'Page not found — Ritam Paine',
    description: 'The requested page could not be found on the Ritam Paine developer portfolio.',
    path: '/404',
    noIndex: true,
  });

  return (
    <main id="main" className="section" style={{ minHeight: '60vh', display: 'grid', alignContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Not found', path: '/404' },
          ]}
        />
        <div style={{ fontSize: 'clamp(4rem, 14vw, 8rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em' }}>
          <span className="gradient-text">404</span>
        </div>
        <div style={{ marginTop: 18 }}>
          <Eyebrow>Page not found</Eyebrow>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', margin: '14px 0 12px' }}>
            This page doesn&rsquo;t exist
          </h1>
          <p style={{ color: 'var(--text-2)', marginBottom: 26 }}>
            The link may be outdated, or the page may have moved. Head back to the homepage or
            browse the projects and blog.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Icon name="arrowRight" style={{ transform: 'rotate(180deg)' }} /> Back to Home
          </Link>
          <Link to="/projects" className="btn btn-ghost">
            Explore projects <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </main>
  );
}
