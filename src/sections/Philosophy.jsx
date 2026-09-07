import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';

const PRINCIPLES = [
  {
    icon: 'rocket',
    title: 'Ship before it is perfect',
    text: 'A working product teaches more than a perfect plan. I build the smallest honest version first, then improve it in public.',
  },
  {
    icon: 'layers',
    title: 'Simple over clever',
    text: 'If two solutions work, I choose the one I can still understand in six months. Cleverness is a cost, not a feature.',
  },
  {
    icon: 'bolt',
    title: 'Real-time is a feature',
    text: 'Live updates are only worth their complexity when they genuinely change the experience — I add them on purpose, never by default.',
  },
  {
    icon: 'eye',
    title: 'Honest labels',
    text: 'Experiments are called experiments, concepts are called concepts. Trust is built by never overstating where a project really stands.',
  },
  {
    icon: 'phone',
    title: 'Mobile is the default',
    text: 'Almost every visitor is on a phone. If an interface does not feel right at 360px, it is not done.',
  },
  {
    icon: 'activity',
    title: 'Learn by doing',
    text: 'I learn fastest by building something real: a game to understand state, a chat to understand real-time, a tool to understand PWA.',
  },
];

export default function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Developer Philosophy</Eyebrow>
          <SectionTitle>
            Principles I build <span className="gradient-text">by</span>
          </SectionTitle>
          <Lead>The working rules behind my projects and this website.</Lead>
        </div>

        <div className="philosophy-grid">
          {PRINCIPLES.slice(0, 4).map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <article className="principle">
                <span className="principle-num">
                  <Icon name={p.icon} /> 0{i + 1}
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="quote-card" style={{ marginTop: 26 }}>
            <div
              style={{
                display: 'grid',
                gap: 18,
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
              }}
            >
              <div>
                <p className="card-label" style={{ marginBottom: 14 }}>
                  Developer Philosophy
                </p>
                <p className="quote-text">
                  Build small, ship often, label honestly, and let the next project teach the next
                  lesson.
                </p>
              </div>
              <div className="avatar" aria-hidden="true" style={{ width: 56, height: 56 }}>
                R
              </div>
            </div>
            <p style={{ color: 'var(--text-3)', marginTop: 18, fontSize: 13.5 }}>
              &mdash; Ritam Paine, Web Developer
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
