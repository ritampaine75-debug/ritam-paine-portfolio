import { TECH_CLOUD } from '../data/skills';

function Row({ hidden }) {
  return (
    <div className="tech-band-inner" aria-hidden={hidden || undefined}>
      {TECH_CLOUD.map((t) => (
        <span className="tech-pill" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}

/**
 * Technologies — a horizontally scrollable (no JS marquee needed) band of the
 * technologies used in real projects. Screen readers get a simple list.
 */
export default function Technologies() {
  return (
    <section className="tech-band" aria-labelledby="tech-heading">
      <h2 id="tech-heading" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        Technologies I work with
      </h2>
      <div className="container">
        <Row />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(90deg, var(--bg), transparent 8%, transparent 92%, var(--bg))',
        }}
        aria-hidden="true"
      />
    </section>
  );
}
