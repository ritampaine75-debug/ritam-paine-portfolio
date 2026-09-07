import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import { Chip, StatusPill } from './ui';
import { projectUrl } from '../data/projects';
import { getAccentIcon } from '../lib/project-visuals';

export default function ProjectCard({ project, compact }) {
  const accentIcon = getAccentIcon(project.slug);
  return (
    <article className="project-card">
      <div className="pc-top">
        <div className="pc-meta-row">
          <div className="pc-accent" aria-hidden="true">
            <Icon name={accentIcon} />
          </div>
          <StatusPill status={project.status} />
        </div>
        <div className="pc-cat">
          {project.categoryLabels.slice(0, 3).map((c) => (
            <Chip key={c} small>
              {c}
            </Chip>
          ))}
        </div>
        <h3 className="pc-title">
          <Link to={projectUrl(project.slug)}>{project.name}</Link>
        </h3>
        {project.formerName ? <span className="pc-former">{project.formerName}</span> : null}
      </div>

      <p className="pc-summary">{compact ? project.tagline : project.summary}</p>

      <div className="pc-chips">
        {project.technologies.slice(0, 5).map((t) => (
          <Chip key={t} small>
            {t}
          </Chip>
        ))}
      </div>

      <div className="pc-actions">
        <Link to={projectUrl(project.slug)} className="btn btn-ghost btn-sm">
          View Details
          <Icon name="arrowRight" />
        </Link>
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            aria-label={`${project.name} on GitHub`}
          >
            <Icon name="github" />
            GitHub
          </a>
        ) : (
          project.live && null
        )}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            aria-label={`Open live demo of ${project.name}`}
          >
            <Icon name="external" />
            Live Demo
          </a>
        ) : project.status === 'published' ? null : null}
      </div>
    </article>
  );
}
