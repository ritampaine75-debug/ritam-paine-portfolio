import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';
import { EXPERIMENTS } from '../data/experiments';

export default function Experiments() {
  return (
    <section className="section" id="experiments">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Experiments &amp; Ideas</Eyebrow>
          <SectionTitle>
            Ideas I&rsquo;m <span className="gradient-text">exploring</span>
          </SectionTitle>
          <Lead>
            Early-stage concepts clearly labelled as experiments. If it isn&rsquo;t shipped, it says
            so &mdash; no idea is dressed up as a finished product.
          </Lead>
        </div>

        <div className="experiment-grid">
          {EXPERIMENTS.map((exp, i) => {
            const inner = (
              <>
                <span className="experiment-kind">{exp.kind}</span>
                <h3>{exp.name}</h3>
                <p>{exp.description}</p>
                {exp.link ? (
                  <span className="experiment-link-note">
                    See the concept <Icon name="arrowRight" />
                  </span>
                ) : null}
              </>
            );
            return (
              <Reveal key={exp.name} delay={(i % 3) * 70}>
                {exp.link ? (
                  <Link to={exp.link} className="experiment-chip is-link">
                    {inner}
                  </Link>
                ) : (
                  <div className="experiment-chip">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
