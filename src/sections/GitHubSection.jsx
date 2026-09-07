import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';
import { GitHubPanel, GitHubRepos } from '../components/GitHubPanel';
import { SOCIAL } from '../data/site';

export default function GitHubSection() {
  return (
    <section className="section" id="github">
      <div className="container">
        <div className="section-head">
          <Eyebrow>GitHub</Eyebrow>
          <SectionTitle>
            Code, in the <span className="gradient-text">open</span>
          </SectionTitle>
          <Lead>
            Public repositories, honest statuses and a live view of the profile &mdash; data is
            fetched from the GitHub API and shown with graceful fallbacks.
          </Lead>
        </div>

        <div className="gh-grid">
          <Reveal>
            <GitHubPanel />
          </Reveal>
          <Reveal delay={120}>
            <div className="card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  marginBottom: 18,
                  flexWrap: 'wrap',
                }}
              >
                <h3 style={{ fontSize: '1.2rem' }}>Selected public repositories</h3>
                <a
                  href={SOCIAL.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <Icon name="github" /> All repositories
                </a>
              </div>
              <GitHubRepos />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
