import { FILTERS } from '../data/projects';

/**
 * Accessible filter bar. Filters are rendered as a radiogroup so keyboard and
 * screen-reader users can move through them without page reloads.
 */
export default function ProjectFilterBar({ active, onChange }) {
  return (
    <div
      role="radiogroup"
      aria-label="Filter projects"
      className="filter-bar"
    >
      {FILTERS.map((f) => {
        const isActive = active === f.id;
        return (
          <button
            key={f.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`filter-btn ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange(f.id)}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
