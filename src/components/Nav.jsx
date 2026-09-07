import { useEffect, useRef, useState, useCallback } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from './Icons';
import { useTheme } from '../theme';
import { SOCIAL } from '../data/site';

const LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about-ritam-paine' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'GitHub', to: SOCIAL.githubUrl, external: true },
];

export function useSectionNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId, e) => {
      if (e) e.preventDefault();
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      navigate('/', { state: { scrollTo: sectionId } });
    },
    [location.pathname, navigate]
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const goToSection = useSectionNavigation();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(p);
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on escape; keep focus inside while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        if (menuButtonRef.current) menuButtonRef.current.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Return focus when the menu closes from a link.
  useEffect(() => {
    if (!open && menuButtonRef.current) menuButtonRef.current.focus();
  }, [open]);

  const handleNavClick = (link) => (e) => {
    if (!link.external && link.to.includes('#')) {
      const id = link.to.slice(2);
      goToSection(id, e);
    }
    setOpen(false);
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        role="presentation"
        aria-hidden="true"
      />
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} role="banner">
        <div className="container nav-inner">
          <Link to="/" className="brand" aria-label="Ritam Paine — home">
            <span className="brand-mark" aria-hidden="true">
              RP
            </span>
            <span className="brand-text">
              <strong>Ritam Paine</strong>
              <small>Web Developer</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {link.label}
                  <Icon name="external" className="nav-ext" />
                </a>
              ) : link.to.includes('#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="nav-link"
                  onClick={handleNavClick(link)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={handleNavClick(link)}
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-btn theme-toggle"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goToSection('contact', e);
              }}
              className="btn btn-primary nav-cta"
            >
              <span>Let&rsquo;s Work Together</span>
              <Icon name="arrowRight" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              className="icon-btn menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`mobile-menu ${open ? 'is-open' : ''}`}
          aria-hidden={!open}
        >
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-link-label">{link.label}</span>
                  <Icon name="arrowUpRight" />
                </a>
              ) : link.to.includes('#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="mobile-link"
                  tabIndex={open ? 0 : -1}
                  onClick={handleNavClick(link)}
                >
                  <span className="mobile-link-label">{link.label}</span>
                  <Icon name="arrowUpRight" />
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="mobile-link"
                  onClick={handleNavClick(link)}
                  tabIndex={open ? 0 : -1}
                >
                  <span className="mobile-link-label">{link.label}</span>
                  <Icon name="arrowUpRight" />
                </NavLink>
              )
            )}
            <a
              href="#contact"
              className="btn btn-primary mobile-cta"
              tabIndex={open ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                goToSection('contact', e);
                setOpen(false);
              }}
            >
              <span>Let&rsquo;s Work Together</span>
              <Icon name="arrowRight" />
            </a>
            {isHome && (
              <p className="mobile-nav-hint" aria-hidden="true">
                Building &middot; Experimenting &middot; Learning &middot; Shipping
              </p>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
