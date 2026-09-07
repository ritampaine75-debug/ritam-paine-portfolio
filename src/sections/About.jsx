import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead, Chip } from '../components/ui';
import { FOCUS_AREAS } from '../data/journey';
import { SOCIAL } from '../data/site';

const QUICK_FACTS = [
  ['user', 'Independent web developer', 'Designing and building products end-to-end.'],
  ['globe', 'Based in India', 'Building for the web, anywhere.'],
  ['github', '83 public repositories', 'An open archive of experiments, tools and apps.'],
  ['rocket', 'Publicly active since October 2025', 'Learning in public, one shipped project at a time.'],
];

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <Eyebrow>About</Eyebrow>
          <SectionTitle>About Ritam Paine</SectionTitle>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <p>
                I&rsquo;m Ritam Paine, an independent <strong>web developer</strong> who builds
                things that actually run &mdash; modern web applications, mobile-first interfaces,
                real-time systems and increasingly, intelligent tools. My work sits between product
                design and engineering: I care about how something looks and feels, and I care even
                more that it works quickly and reliably.
              </p>
              <p>
                A large part of my development life revolves around <strong>Firebase</strong>{' '}
                applications and real-time experiences &mdash; chat concepts, live presence, shared
                game state. I also experiment with AI-powered applications, automation workflows,
                progressive web apps and experimental software. When I want to move fast, I reach
                for modern, lightweight stacks and sometimes build straight from a phone using
                Termux and Git.
              </p>
              <p>
                Everything on this site is real work: documented projects, honest statuses and open
                source. You can follow along on{' '}
                <a href={SOCIAL.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  GitHub <Icon name="external" />
                </a>{' '}
                or read the longer version of the story{' '}
                <Link to="/about-ritam-paine" className="text-link">
                  on the About page <Icon name="arrowRight" />
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="focus-cloud" aria-label="Areas I work on">
                {FOCUS_AREAS.map((f) => (
                  <Chip key={f}>{f}</Chip>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <aside className="side-card">
              <p className="card-label">At a glance</p>
              <ul className="side-list" style={{ marginTop: 18 }}>
                {QUICK_FACTS.map(([icon, title, sub]) => (
                  <li key={title}>
                    <Icon name={icon} />
                    <span>
                      <strong>{title}.</strong> {sub}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
