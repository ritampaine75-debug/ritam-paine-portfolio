import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';
import ProjectCard from '../components/ProjectCard';
import { FEATURED_PROJECTS } from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section className="section" id="featured-projects">
      <div className="container">
        <div className="section-head row">
          <div>
            <Eyebrow>Featured Projects</Eyebrow>
            <SectionTitle>
              Selected work &amp; <span className="gradient-text">experiments</span>
            </SectionTitle>
            <Lead>
              A snapshot of the projects documented on this site &mdash; from shipped tools to
              active experiments. Every status is labelled honestly.
            </Lead>
          </div>
          <Link to="/projects" className="btn btn-ghost">
            View all projects <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="project-grid">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
