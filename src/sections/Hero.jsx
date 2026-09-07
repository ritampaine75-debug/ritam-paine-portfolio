import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import Reveal from '../components/Reveal';
import { useSectionNavigation } from '../components/Nav';
import { useGitHubData } from '../hooks/useGitHubData';
import { GITHUB_FACTS, SOCIAL } from '../data/site';

function HeroStat({ value, label, title }) {
  return (
    <div className="stat-card" title={title}>
      <div className="stat-num gradient-text">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const goToSection = useSectionNavigation();
  const gh = useGitHubData();
  const repos = gh.status === 'ready' && gh.data ? gh.data.publicRepos : GITHUB_FACTS.publicReposAtCheck;

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="hero-kicker">
                <span className="pulse-dot" aria-hidden="true" />
                Developer Portfolio · Building in public
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1>
                Ritam Paine <span className="hero-role">&mdash; Web Developer &amp; Digital Product Builder</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero-tagline">
                I build modern web applications, intelligent tools, real-time systems, automation
                workflows and experimental digital products.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-credibility">
                {['Building', 'Experimenting', 'Learning', 'Shipping'].map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary hero-btn">
                  <span>Explore My Work</span>
                  <Icon name="arrowRight" />
                </Link>
                <button
                  type="button"
                  className="btn btn-ghost hero-btn"
                  onClick={(e) => goToSection('contact', e)}
                >
                  <span>Contact Me</span>
                  <Icon name="chat" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="hero-panel">
            <Reveal delay={200}>
              <div className="id-card">
                <p className="card-label">
                  <Icon name="github" /> GitHub
                </p>
                <div className="id-top" style={{ marginTop: 16 }}>
                  <div className="avatar" aria-hidden="true">
                    R
                  </div>
                  <div>
                    <h2 style={{ fontSize: 19 }}>Ritam Paine</h2>
                    <p style={{ fontSize: 13.5 }}>Web Developer · GitHub Developer Profile</p>
                  </div>
                </div>
                <p className="id-handle">
                  <Icon name="link" /> {SOCIAL.githubProfileLabel}
                </p>
                <p style={{ marginTop: 12, color: 'var(--text-2)', fontSize: 14 }}>
                  A public archive of web apps, tools, games and experiments &mdash; built one
                  project at a time.
                </p>
                <div className="id-actions" style={{ marginTop: 18 }}>
                  <a
                    href={SOCIAL.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Icon name="github" /> View GitHub
                  </a>
                  <Link
                    to="/projects"
                    className="btn btn-ghost btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    Projects <Icon name="arrowRight" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero-stats" aria-label="Quick facts">
                <HeroStat value={repos} label="Public Repos" title="Verified from the public GitHub API (September 2026)" />
                <HeroStat value="25" label="Live Web Tools" title="Tools shipped inside Web Tools Hub" />
                <HeroStat value="9" label="Projects Here" title="Featured projects documented on this site" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={420}>
          <a
            href="#about"
            className="hero-scroll"
            onClick={(e) => {
              e.preventDefault();
              goToSection('about', e);
            }}
          >
            <span className="mouse" aria-hidden="true" /> Scroll to explore
          </a>
        </Reveal>
      </div>
    </section>
  );
}
