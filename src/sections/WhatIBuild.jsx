import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow, SectionTitle, Lead } from '../components/ui';

const CATS = [
  {
    icon: 'code',
    title: 'Web Applications',
    text: 'Mobile-first web apps built with modern JavaScript, React and clean interfaces.',
    example: { label: 'Browse web apps', to: '/projects?cat=web' },
  },
  {
    icon: 'database',
    title: 'Real-Time & Firebase',
    text: 'Live messaging, presence and shared state powered by Firebase Realtime Database.',
    example: { label: 'RitamChat', to: '/projects/ritamchat' },
  },
  {
    icon: 'spark',
    title: 'AI-Powered Apps',
    text: 'Applications that put AI APIs into calm, useful workflows instead of gimmicks.',
    example: { label: 'AI experiments', to: '/projects?cat=ai' },
  },
  {
    icon: 'wrench',
    title: 'Tools & Utilities',
    text: 'Browser-based tools and developer utilities that are fast, offline and dependency-free.',
    example: { label: 'Web Tools Hub', to: '/projects/web-tools-hub' },
  },
  {
    icon: 'play',
    title: 'Games & Interactions',
    text: 'Game logic, multiplayer concepts and interactive prototypes with a clean state machine.',
    example: { label: 'Tic Tac Toe', to: '/projects/tic-tac-toe-multiplayer' },
  },
  {
    icon: 'flask',
    title: 'Experiments & Concepts',
    text: 'Unfinished ideas explored honestly &mdash; from wellbeing apps to AI life planning.',
    example: { label: 'Ideas I explore', to: '/projects?cat=experiments' },
  },
];

export default function WhatIBuild() {
  return (
    <section className="section" id="what-i-build">
      <div className="container">
        <div className="section-head">
          <Eyebrow>What I Build</Eyebrow>
          <SectionTitle>
            Digital products, <span className="gradient-text">in every shape</span>
          </SectionTitle>
          <Lead>
            Six directions that most of my work falls into. Each one has real projects behind it.
          </Lead>
        </div>

        <div className="grid-3">
          {CATS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80}>
              <article className="feature-tile">
                <div className="tile-icon" aria-hidden="true">
                  <Icon name={c.icon} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="tile-foot">
                  <Link to={c.example.to} className="text-link" style={{ fontSize: 13.5 }}>
                    {c.example.label} <Icon name="arrowRight" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
