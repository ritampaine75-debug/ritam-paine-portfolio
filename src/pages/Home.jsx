import useSiteMeta from '../hooks/useSiteMeta';
import Hero from '../sections/Hero';
import AboutSection from '../sections/About';
import WhatIBuild from '../sections/WhatIBuild';
import Skills from '../sections/Skills';
import FeaturedProjects from '../sections/FeaturedProjects';
import { ProjectTimeline, DevelopmentJourney } from '../sections/JourneyTimeline';
import Technologies from '../sections/Technologies';
import GitHubSection from '../sections/GitHubSection';
import Experiments from '../sections/Experiments';
import Services from '../sections/Services';
import Philosophy from '../sections/Philosophy';
import Contact from '../sections/Contact';
import { personSchema, websiteSchema, webPageSchema } from '../lib/schema';
import { SITE, SITE_URL } from '../data/site';

export default function Home() {
  useSiteMeta({
    title: 'Ritam Paine | Web Developer & Digital Product Builder',
    description:
      'Ritam Paine is a web developer building modern web applications, AI-powered tools, real-time systems, Firebase projects and experimental digital products.',
    path: '/',
    type: 'website',
    image: `${SITE_URL}/og-image.png`,
    jsonLd: [personSchema(), websiteSchema(), webPageSchema({
      name: 'Ritam Paine — Web Developer & Digital Product Builder',
      description: SITE.tagline,
      path: '/',
    })],
  });

  return (
    <main id="main">
      <Hero />
      <AboutSection />
      <WhatIBuild />
      <Skills />
      <FeaturedProjects />
      <ProjectTimeline />
      <DevelopmentJourney />
      <Technologies />
      <GitHubSection />
      <Experiments />
      <Services />
      <Philosophy />
      <Contact />
    </main>
  );
}
