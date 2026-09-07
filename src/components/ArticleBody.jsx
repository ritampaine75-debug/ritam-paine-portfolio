import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Inline mini-markup: **bold**, [text](/path), `code`.
 */
function renderInline(text, keyPrefix = '') {
  const tokens = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) tokens.push(text.slice(last, match.index));
    const tok = match[0];
    if (tok.startsWith('**')) {
      tokens.push(
        <strong key={`${keyPrefix}-b${i}`}>{tok.slice(2, -2)}</strong>
      );
    } else if (tok.startsWith('`')) {
      tokens.push(
        <code key={`${keyPrefix}-c${i}`} className="inline-code">
          {tok.slice(1, -1)}
        </code>
      );
    } else {
      const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok);
      const label = m[1];
      const href = m[2];
      const external = /^https?:/i.test(href);
      if (external) {
        tokens.push(
          <a key={`${keyPrefix}-l${i}`} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      } else {
        tokens.push(
          <Link key={`${keyPrefix}-l${i}`} to={href}>
            {label}
          </Link>
        );
      }
    }
    i += 1;
    last = pattern.lastIndex;
  }
  if (last < text.length) tokens.push(text.slice(last));
  return tokens;
}

const LANG_LABELS = { js: 'JavaScript', json: 'JSON', html: 'HTML', css: 'CSS', bash: 'Bash' };

export default function ArticleBody({ content }) {
  return (
    <div className="article-body">
      {content.map((block, idx) => {
        const [kind, ...rest] = block;
        const key = `${kind}-${idx}`;
        switch (kind) {
          case 'h2':
            return <h2 key={key}>{renderInline(rest[0], key)}</h2>;
          case 'h3':
            return <h3 key={key}>{renderInline(rest[0], key)}</h3>;
          case 'p':
            return <p key={key}>{renderInline(rest[0], key)}</p>;
          case 'quote':
            return <blockquote key={key}>{renderInline(rest[0], key)}</blockquote>;
          case 'ul':
            return (
              <ul key={key}>
                {rest[0].map((item, i) => (
                  <li key={i}>{renderInline(item, `${key}-${i}`)}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key}>
                {rest[0].map((item, i) => (
                  <li key={i}>{renderInline(item, `${key}-${i}`)}</li>
                ))}
              </ol>
            );
          case 'code':
            return (
              <div className="code-block" key={key}>
                <div className="code-head">
                  <span className="code-dot" style={{ width: 10, height: 10, borderRadius: 10, background: '#fb7185', display: 'inline-block' }} />
                  <span className="code-dot" style={{ width: 10, height: 10, borderRadius: 10, background: '#fbbf24', display: 'inline-block' }} />
                  <span className="code-dot" style={{ width: 10, height: 10, borderRadius: 10, background: '#34d399', display: 'inline-block' }} />
                  <span style={{ marginLeft: 8 }}>{LANG_LABELS[rest[0]] || rest[0]}</span>
                </div>
                <pre>
                  <code>{rest[1]}</code>
                </pre>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
