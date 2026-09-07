import { Icon } from './Icons';
import { useGitHubData } from '../hooks/useGitHubData';
import { GITHUB_FACTS } from '../data/site';

function LangDot({ name }) {
  const colors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Kotlin: '#A97BFF',
    Java: '#b07219',
  };
  return <span className="lang-dot" style={{ background: colors[name] || '#8b949e' }} />;
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  } catch (e) {
    return '';
  }
}

export function GitHubStat({ value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-num gradient-text">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function GitHubRepos() {
  const { status, data, error } = useGitHubData();

  if (status === 'loading') {
    return (
      <div className="repo-list" aria-label="Loading GitHub repositories">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="skeleton-row" style={{ height: 88 }} />
        ))}
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="gh-fallback">
        <p>
          GitHub data is currently unavailable
          {error && error.rateLimited ? ' (public API rate limit reached for this network)' : ''}.
          Browse the live profile directly instead.
        </p>
        <a
          className="btn btn-outline btn-sm"
          href="https://github.com/ritampaine75-debug"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 14 }}
        >
          <Icon name="github" /> View GitHub Profile
        </a>
      </div>
    );
  }

  const repos = (data && data.featured) || [];
  if (repos.length === 0) {
    return (
      <div className="gh-fallback">
        <p>No public repositories found to feature right now.</p>
      </div>
    );
  }

  return (
    <ul className="repo-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {repos.slice(0, 5).map((r) => (
        <li key={r.name} className="repo-row">
          <div className="repo-top">
            <a
              className="repo-name"
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" /> {r.name}
            </a>
            <div className="repo-actions">
              {r.homepage ? (
                <a
                  href={r.homepage}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${r.name}`}
                >
                  <Icon name="external" /> Live
                </a>
              ) : null}
              <a
                href={r.url}
                className="btn btn-ghost btn-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${r.name} on GitHub`}
              >
                <Icon name="external" /> Open
              </a>
            </div>
          </div>
          {r.description ? <p className="repo-desc">{r.description}</p> : null}
          <div className="repo-meta">
            {r.language ? (
              <span>
                <LangDot name={r.language} /> {r.language}
              </span>
            ) : null}
            <span>
              <Icon name="star" /> {r.stars}
            </span>
            <span>
              <Icon name="clock" /> Updated {formatDate(r.updatedAt)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function GitHubPanel() {
  const { status, data } = useGitHubData();
  const publicRepos =
    status === 'ready' && data ? data.publicRepos : GITHUB_FACTS.publicReposAtCheck;

  return (
    <div className="card gh-profile">
      <div className="id-top">
        <div className="avatar" aria-hidden="true">
          {status === 'ready' && data && data.avatarUrl ? (
            <img src={data.avatarUrl} alt="" width={62} height={62} loading="lazy" />
          ) : (
            'R'
          )}
        </div>
        <div>
          <h3 style={{ fontSize: 20 }}>Ritam Paine</h3>
          <p style={{ color: 'var(--text-2)', fontSize: 14 }}>GitHub Developer Profile</p>
        </div>
      </div>

      <p className="id-handle" style={{ marginTop: 14 }}>
        <Icon name="github" /> ritampaine75-debug
      </p>
      <p style={{ marginTop: 12, color: 'var(--text-2)', fontSize: 14.5 }}>
        Public repositories, open experiments and a growing archive of web projects, tools and
        builds-in-progress.
      </p>

      <div className="gh-stats-grid">
        <GitHubStat
          value={publicRepos}
          label="Repositories"
        />
        <GitHubStat
          value={status === 'ready' && data ? data.totalStars : '—'}
          label="Total Stars"
        />
        <GitHubStat
          value={status === 'ready' && data ? data.followers : '—'}
          label="Followers"
        />
      </div>

      <a
        href="https://github.com/ritampaine75-debug"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost"
        style={{ marginTop: 22, justifyContent: 'center' }}
      >
        <Icon name="github" /> View GitHub Profile
      </a>
    </div>
  );
}
