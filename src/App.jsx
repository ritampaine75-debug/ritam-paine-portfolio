import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

/** Handles scrolling on route change, plus cross-page section anchors. */
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state || {};
    const target = state.scrollTo || (location.hash ? location.hash.slice(1) : null);

    if (target) {
      const attempt = (tries = 0) => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        if (tries < 12) setTimeout(() => attempt(tries + 1), 100);
      };
      requestAnimationFrame(() => attempt());
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.state]);

  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-ritam-paine" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
