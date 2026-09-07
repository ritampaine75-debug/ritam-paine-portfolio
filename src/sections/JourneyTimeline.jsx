import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';
import { JOURNEY } from '../data/journey';

/**
 * Development Journey — personal milestone timeline.
 * Milestones intentionally carry no dates.
 */
export function DevelopmentJourney() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head">
          <Eyebrow>My Development Journey</Eyebrow>
          <SectionTitle>
            How I got <span className="gradient-text">here</span>
          </SectionTitle>
          <Lead>
            From my first experiments with how websites work to real-time Firebase systems and
            AI-powered applications &mdash; without inventing dates, this is the honest arc.
          </Lead>
        </div>

        <Reveal>
          <ol className="timeline" style={{ listStyle: 'none' }}>
            {JOURNEY.map((step) => (
              <li key={step.id} className={`timeline-item ${step.current ? 'current' : ''}`}>
                <span className="timeline-tag">{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

const PHASES = [
  {
    n: '01',
    title: 'Interactive experiments',
    text: 'First games, quizzes and creative web pages that taught me how HTML, CSS and JavaScript fit together.',
    repos: [
      ['game', 'first game builds'],
      ['Quiz-user', 'quiz experiments'],
    ],
    url: 'https://github.com/ritampaine75-debug?tab=repositories',
  },
  {
    n: '02',
    title: 'Real-time & Firebase',
    text: 'Chat applications and a multiplayer Tic Tac Toe build exploring Realtime Database sync, presence and shared state.',
    repos: [
      ['Ritam-Tac-Toe-Multiplayer', 'multiplayer board'],
      ['Chatting-app', 'chat builds'],
    ],
    url: 'https://github.com/ritampaine75-debug/Ritam-Tac-Toe-Multiplayer',
  },
  {
    n: '03',
    title: 'AI applications',
    text: 'A family of AI experiments &mdash; chat apps and assistant concepts that wire language models into real interfaces.',
    repos: [
      ['ai-chat', 'public AI chat'],
      ['chef-ai', 'AI chef assistant'],
    ],
    url: 'https://github.com/ritampaine75-debug/ai-chat',
  },
  {
    n: '04',
    title: 'Automation & tooling',
    text: 'Automation scripts and GitHub Actions experiments that made me think in pipelines, not just pages.',
    repos: [
      ['ritam-automation', 'automation scripts'],
      ['GitHub-Actions', 'CI experiments'],
    ],
    url: 'https://github.com/ritampaine75-debug/GitHub-Actions',
  },
  {
    n: '05',
    title: 'Mobile-first tools & PWA',
    text: 'Photo editing, QR scanning and the 25-tool Web Tools Hub &mdash; fast, installable and dependency-free.',
    repos: [
      ['web-tools-hub', '25 live tools'],
      ['photo-editor', 'mobile photo editor'],
    ],
    url: 'https://github.com/ritampaine75-debug/web-tools-hub',
  },
  {
    n: '06',
    title: 'Web products & verification',
    text: 'A Gmail OTP verification system, e-commerce interface experiments and deeper React & Firebase builds.',
    repos: [
      ['OTP-verification-free-', 'OTP experiment'],
      ['shopverse-ecommerce', 'storefront build'],
    ],
    url: 'https://github.com/ritampaine75-debug/OTP-verification-free-',
  },
];

/**
 * Project Timeline — the arc of public builds over time.
 * Phase windows come from public repository history; phases carry no invented
 * dates or metrics.
 */
export function ProjectTimeline() {
  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Project Timeline</Eyebrow>
          <SectionTitle>
            The arc of the <span className="gradient-text">builds</span>
          </SectionTitle>
          <Lead>
            How the public projects on GitHub evolved in focus &mdash; each phase points to real
            repositories you can open.
          </Lead>
        </div>

        <div className="phase-list">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.n} delay={(i % 3) * 80}>
              <article className="phase">
                <span className="phase-num">{phase.n}</span>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
                  {phase.repos.map(([name, hint]) => (
                    <a
                      key={name}
                      href={`https://github.com/ritampaine75-debug/${name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip chip-sm"
                      title={hint}
                    >
                      {name}
                    </a>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <a href={phase.url} target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: 13.5 }}>
                    Open on GitHub <Icon name="arrowUpRight" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
