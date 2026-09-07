import { Link } from 'react-router-dom';
import useSiteMeta from '../hooks/useSiteMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import { Eyebrow, Chip } from '../components/ui';
import { Icon } from '../components/Icons';
import Reveal from '../components/Reveal';
import { FOCUS_AREAS } from '../data/journey';
import { SOCIAL, SITE_URL } from '../data/site';
import { personSchema, websiteSchema, webPageSchema, breadcrumbSchema } from '../lib/schema';

export default function AboutPage() {
  useSiteMeta({
    title: 'About Ritam Paine — Web Developer & Digital Product Builder',
    description:
      'Learn about Ritam Paine, an independent web developer building modern web applications, real-time Firebase systems, AI-powered tools, PWAs and experimental digital products.',
    path: '/about-ritam-paine',
    type: 'profile',
    image: `${SITE_URL}/og-image.png`,
    jsonLd: [
      personSchema(),
      websiteSchema(),
      webPageSchema({
        name: 'About Ritam Paine',
        description: 'The developer profile and story of Ritam Paine.',
        path: '/about-ritam-paine',
      }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Ritam Paine', path: '/about-ritam-paine' },
      ]),
    ],
  });

  return (
    <main id="main" className="section tight" style={{ paddingTop: 30 }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'About Ritam Paine', path: '/about-ritam-paine' },
          ]}
        />

        <div className="section-head">
          <Eyebrow>Profile</Eyebrow>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.1rem, 5.4vw, 3.4rem)' }}>
            About <span className="gradient-text">Ritam Paine</span>
          </h1>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <p className="section-lead" style={{ fontSize: '1.15rem' }}>
                I&rsquo;m an independent web developer who turns ideas into working applications —
                fast, mobile-first and honest about where every project stands.
              </p>
              <p>
                My development story began with a simple question: how do websites and applications
                actually work? Answering it became a habit of building. Early projects were games,
                quizzes and experimental pages. Then I discovered <strong>Firebase Realtime
                Database</strong> and real-time state, which unlocked chat applications, live
                presence, typing indicators and online game concepts. Later came{' '}
                <strong>AI-powered applications</strong>, where I learned to wire language models
                into calm, useful interfaces rather than gimmicky demos.
              </p>
              <p>
                Today I focus on building modern <strong>web applications</strong>,{' '}
                <strong>progressive web apps</strong>, real-time systems, developer tools,
                automation workflows and experimental software. I care deeply about the details most
                people never notice: load speed, typography, touch targets, offline behaviour and
                accessibility — because those are what make software feel premium.
              </p>
              <p>
                A meaningful part of my workflow happens from a phone using Termux, Git and modern
                tooling. That constraint shaped how I build: lightweight, dependency-free, and
                respectful of slow connections. You can verify everything above through{' '}
                <a href={SOCIAL.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  83 public repositories on GitHub <Icon name="external" />
                </a>{' '}
                and the <Link to="/projects" className="text-link">projects on this site <Icon name="arrowRight" /></Link>.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 style={{ fontSize: '1.5rem', marginTop: 34, marginBottom: 14 }}>What I work on</h2>
              <div className="focus-cloud">
                {FOCUS_AREAS.map((f) => (
                  <Chip key={f}>{f}</Chip>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h2 style={{ fontSize: '1.5rem', margin: '34px 0 16px' }}>How this site is built</h2>
              <p>
                This portfolio is a production-ready React + Vite website with semantic HTML,
                structured data, project pages, a technical blog, dark and light themes and a
                mobile-first premium design. You can read how it was designed in{' '}
                <Link to="/blog/designing-a-mobile-first-developer-portfolio" className="text-link">
                  my portfolio article <Icon name="arrowRight" />
                </Link>{' '}
                and browse the full blog <Link to="/blog" className="text-link">here <Icon name="arrowRight" /></Link>.
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <Reveal delay={80}>
              <aside className="side-card">
                <p className="card-label">Identity</p>
                <ul className="side-list" style={{ marginTop: 18 }}>
                  <li><Icon name="user" /><span><strong>Ritam Paine</strong> — Web Developer &amp; Digital Product Builder</span></li>
                  <li><Icon name="globe" /><span><strong>Based in India</strong>, building for the whole web</span></li>
                  <li><Icon name="terminal" /><span><strong>Independent developer</strong> — designing and engineering end-to-end</span></li>
                  <li><Icon name="book" /><span><strong>Learning in public</strong> since October 2025</span></li>
                </ul>
              </aside>
            </Reveal>
            <Reveal delay={140}>
              <aside className="side-card">
                <p className="card-label">Connect</p>
                <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
                  <a href={SOCIAL.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
                    <Icon name="github" /> GitHub — {SOCIAL.githubUsername}
                  </a>
                  <a href={SOCIAL.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
                    <Icon name="instagram" /> Instagram — {SOCIAL.instagramHandle}
                  </a>
                  <Link to="/projects" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                    Explore the projects <Icon name="arrowRight" />
                  </Link>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
