import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import { SOCIAL, SITE_REPO_URL } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand footer-brand-link" aria-label="Ritam Paine — home">
            <span className="brand-mark" aria-hidden="true">
              RP
            </span>
            <span className="brand-text">
              <strong>Ritam Paine</strong>
              <small>Web Developer &amp; Digital Product Builder</small>
            </span>
          </Link>
          <p className="footer-tagline">
            Building modern web applications, intelligent tools, real-time systems and experimental
            digital products.
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer navigation">
          <p className="footer-label">Explore</p>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-ritam-paine">About Ritam Paine</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/#skills">Skills</Link></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Contact links">
          <p className="footer-label">Connect</p>
          <ul className="footer-links">
            <li>
              <a href={SOCIAL.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIAL.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>Designed &amp; Developed by Ritam Paine</p>
        <div className="footer-social">
          <a
            href={SOCIAL.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ritam Paine on GitHub"
          >
            <Icon name="github" />
          </a>
          <a
            href={SOCIAL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ritam Paine on Instagram"
          >
            <Icon name="instagram" />
          </a>
          <a
            href={SITE_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code of this website"
            title="View the source of this website"
          >
            <Icon name="code" />
          </a>
        </div>
        <p className="footer-meta">© {year} Ritam Paine · Ritam Paine Web Developer Portfolio</p>
      </div>
    </footer>
  );
}
