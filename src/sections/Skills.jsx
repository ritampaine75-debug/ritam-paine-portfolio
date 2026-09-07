import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';
import { SKILL_CATEGORIES } from '../data/skills';

const ICONS = {
  frontend: 'code',
  backend: 'database',
  ai: 'spark',
  tools: 'wrench',
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Skills &amp; Technologies</Eyebrow>
          <SectionTitle>
            Tools I actually <span className="gradient-text">use</span>
          </SectionTitle>
          <Lead>
            Only technologies that appear in my real projects and experiments &mdash; nothing padded.
          </Lead>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((group, i) => (
            <Reveal key={group.id} delay={(i % 2) * 100}>
              <article className="skill-group">
                <header className="skill-group-head">
                  <div className="tile-icon" aria-hidden="true">
                    <Icon name={ICONS[group.id]} />
                  </div>
                  <div>
                    <h3>{group.label}</h3>
                    <p className="skill-blurb">{group.blurb}</p>
                  </div>
                </header>
                <div className="skill-list">
                  {group.skills.map((s) => (
                    <div className="skill-row" key={s.name}>
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-detail">{s.detail}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
