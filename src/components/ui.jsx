/**
 * Shared small presentational components used across the site.
 */

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionTitle({ children, as: H = 'h2' }) {
  return <H className="section-title">{children}</H>;
}

export function Lead({ children }) {
  return <p className="section-lead">{children}</p>;
}

/** Chip for categories / tags. */
export function Chip({ children, small }) {
  return <span className={`chip ${small ? 'chip-sm' : ''}`}>{children}</span>;
}

/** Status pill using project status metadata. */
import { STATUS_META } from '../data/projects';

export function StatusPill({ status, label }) {
  const meta = STATUS_META[status];
  if (!meta) return null;
  return (
    <span className={`status-pill ${meta.className}`}>
      <span className="status-dot" aria-hidden="true" />
      {label || meta.label}
    </span>
  );
}

/** Small decorative gradient hairline used as section separator. */
export function Divider() {
  return <div className="gradient-rule" role="presentation" aria-hidden="true" />;
}
