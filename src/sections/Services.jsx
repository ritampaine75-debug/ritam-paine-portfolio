import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';
import { SERVICES } from '../data/services';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Services</Eyebrow>
          <SectionTitle>
            What I can <span className="gradient-text">build</span>
          </SectionTitle>
          <Lead>
            Capabilities, described honestly &mdash; independent development work, one focused
            project at a time.
          </Lead>
        </div>

        <div className="grid-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="feature-tile">
                <div className="tile-icon" aria-hidden="true">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
