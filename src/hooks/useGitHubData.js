import { useEffect, useState } from 'react';

/**
 * useGitHubData — fetch the public developer profile + featured repos from the
 * GitHub REST API. Pure client-side, public data only.
 *
 *  · Handles loading, empty, error and rate-limit states.
 *  · No token is ever sent (public endpoints work unauthenticated).
 *  · Results are cached in memory for the session to avoid hammering the API.
 */

const USERNAME = 'ritampaine75-debug';
const REPO_NAMES = [
  'web-tools-hub',
  'ritam-paine-portfolio',
  'OTP-verification-free-',
  'Ritam-Tac-Toe-Multiplayer',
  'shopverse-ecommerce',
  'ai-chat',
  'photo-editor',
  'QR-code-scanner',
  'whatsapp-chat-viewer',
  'pixel-tools',
];

let cached = null;

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
  if (!res.ok) {
    const err = new Error(`GitHub request failed (${res.status})`);
    if (res.status === 403 || res.status === 429) err.rateLimited = true;
    throw err;
  }
  return res.json();
}

export function useGitHubData() {
  const [state, setState] = useState(() => cached || { status: 'loading', data: null });

  useEffect(() => {
    if (cached) return undefined;
    let cancelled = false;

    (async () => {
      try {
        const [profile, repos] = await Promise.all([
          fetchJson(`https://api.github.com/users/${USERNAME}`),
          fetchJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed&type=owner`),
        ]);
        if (cancelled) return;

        const byName = {};
        repos.forEach((r) => {
          if (r && r.name) byName[r.name] = r;
        });

        const featured = REPO_NAMES.filter((n) => byName[n])
          .map((n) => byName[n])
          .filter((r) => !r.fork);

        const fallbackList = featured.length
          ? featured
          : repos.filter((r) => !r.fork).slice(0, 6);

        const totalStars = repos.filter((r) => !r.fork).reduce((s, r) => s + (r.stargazers_count || 0), 0);
        const languages = {};
        repos
          .filter((r) => !r.fork && r.language)
          .forEach((r) => {
            languages[r.language] = (languages[r.language] || 0) + 1;
          });
        const topLanguages = Object.entries(languages)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));

        const data = {
          login: profile.login,
          avatarUrl: profile.avatar_url,
          publicRepos: profile.public_repos,
          followers: profile.followers,
          following: profile.following,
          totalStars,
          topLanguages,
          featured: fallbackList.map((r) => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count || 0,
            forks: r.forks_count || 0,
            url: r.html_url,
            homepage: r.homepage,
            updatedAt: r.updated_at,
            archived: r.archived,
          })),
        };
        cached = { status: 'ready', data };
        if (!cancelled) setState(cached);
      } catch (e) {
        if (cancelled) return;
        setState({ status: 'error', error: e, data: null });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
