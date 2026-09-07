/**
 * Project data for the Ritam Paine portfolio.
 *
 * HONESTY RULES APPLIED HERE:
 *  · Projects with a public repository link to the real repo + live demo.
 *  · Ideas without a public repository are labelled "Concept" or "Experiment"
 *    and never presented as shipped, production products.
 *  · No invented metrics (users, downloads, stars) anywhere.
 */

/**
 * Filter ids used across the site:
 *  all | web | ai | firebase | tools | games | experiments
 */
export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ai', label: 'AI' },
  { id: 'firebase', label: 'Firebase' },
  { id: 'tools', label: 'Tools' },
  { id: 'games', label: 'Games' },
  { id: 'experiments', label: 'Experiments' },
];

/**
 * status: 'published' | 'in-development' | 'prototype' | 'experiment' | 'concept'
 */
const statusMeta = {
  published: { label: 'Published', className: 'st-published' },
  'in-development': { label: 'In Development', className: 'st-indev' },
  prototype: { label: 'Prototype', className: 'st-prototype' },
  experiment: { label: 'Experiment', className: 'st-experiment' },
  concept: { label: 'Concept / Experiment', className: 'st-concept' },
};

export const STATUS_META = statusMeta;

export const PROJECTS = [
  {
    slug: 'ritamchat',
    name: 'RitamChat',
    formerName: 'formerly the PixelChat concept',
    tagline: 'A WhatsApp-inspired, mobile-first real-time messaging web app.',
    categories: ['web', 'firebase'],
    categoryLabels: ['Web Apps', 'Firebase', 'Real-time'],
    featured: true,
    featuredOrder: 1,
    status: 'in-development',
    accent: 'chat',
    summary:
      'RitamChat is my long-running exploration of real-time messaging on the web. It grew out of an earlier concept I called PixelChat and has become the project where I learn the most about Firebase Realtime Database, presence, media messaging, PWA behaviour and mobile-first UI.',
    problem:
      'I wanted to understand, from first principles, how modern messaging applications behave: how messages travel between users in near-real time, how typing indicators and presence work, how media is handled on the web, and how an app like this can be built to feel native on a phone.',
    solution:
      'RitamChat is designed as a WhatsApp-inspired interface backed by Firebase Realtime Database. The architecture is deliberately mobile-first with a Material-inspired visual language, and the feature set is being built incrementally — messaging first, then profiles, friends, presence and media workflows.',
    features: [
      'Real-time text messaging through Firebase Realtime Database',
      'User profiles and friend IDs for connecting accounts',
      'Friend system with add/accept flows explored',
      'Typing indicators and presence tracking',
      'Message status concepts (sent / delivered / read)',
      'Image and video message workflows explored (Base64 media handling)',
      'Client-side encryption concepts explored experimentally (not production E2E)',
      'Mobile-first, Material-inspired interface',
      'PWA support so the app can be installed and run offline-first',
      'Image processing and media preview workflows',
    ],
    architecture: [
      'Firebase Realtime Database as the real-time data layer',
      'Unidirectional data flow into a React-style component tree',
      'Presence handled through on-disconnect style patterns in Firebase',
      'Media encoded and staged through Base64 pipelines for the web',
      'Mobile-first layout with touch-first interaction targets',
    ],
    technologies: ['JavaScript', 'React', 'Firebase', 'Firebase Realtime Database', 'HTML', 'CSS', 'PWA', 'Vite'],
    repo: null,
    live: null,
    noteIfNoRepo:
      'This project is in active development and its source is not public yet. The concept history and lessons are documented on this page and in the blog.',
    stack: [
      { label: 'React', detail: 'Component UI and state-driven screens' },
      { label: 'Firebase Realtime Database', detail: 'Live message sync, presence, status' },
      { label: 'PWA', detail: 'Installable, offline-aware mobile experience' },
      { label: 'Vanilla + Vite tooling', detail: 'Fast local builds and iteration' },
    ],
    lessons: [
      'Real-time apps force you to think in events, not page loads — most state bugs come from forgetting that data arrives at any time.',
      'Presence and typing indicators look simple but are surprisingly subtle to get right (connection drops, stale states, multi-tab users).',
      'Media over Base64 taught me why the web moved to object storage — size, latency and memory all scale badly without it.',
      'A mobile-first canvas forces better decisions about information density and touch targets.',
    ],
    relatedProject: ['web-tools-hub', 'otp-gmail-verification', 'tic-tac-toe-multiplayer'],
    blogLink: '/blog/what-i-learned-building-ritamchat',
    relatedBlog: '/blog/how-i-built-a-realtime-chat-application-with-firebase',
    metaTitle: 'RitamChat — Real-Time Chat Web App by Ritam Paine',
    metaDescription:
      'RitamChat is a WhatsApp-inspired real-time messaging web app by Ritam Paine, built with Firebase Realtime Database, presence, media messaging concepts and PWA support.',
    tags: ['real-time', 'firebase', 'messaging', 'pwa'],
  },

  {
    slug: 'web-tools-hub',
    name: 'Web Tools Hub',
    tagline: '25 free browser tools in one fast, mobile-first, offline-ready PWA.',
    categories: ['tools', 'web'],
    categoryLabels: ['Tools', 'Web Apps', 'PWA'],
    featured: true,
    featuredOrder: 2,
    status: 'published',
    accent: 'tools',
    summary:
      'Web Tools Hub is a published collection of 25 online tools — calculators, converters, generators and developer utilities — in a single mobile-first PWA. It is built with plain HTML, CSS and JavaScript: no framework, no dependencies, fast on any device.',
    problem:
      'Online tools are scattered across dozens of sites, each one loading heavy frameworks and ads. I wanted a fast, installable hub where everyday calculators and utilities live together and work even with a weak connection.',
    solution:
      'I built every tool as a self-contained module and shipped them inside one offline-capable PWA. The whole project deliberately avoids frameworks so each page stays tiny, and the GitHub Pages deployment keeps it free and always live.',
    features: [
      '25 individual tools across calculators, converters, generators and utilities',
      'Mobile-first responsive interface',
      'PWA install and offline capability',
      'Zero-framework, zero-dependency vanilla JavaScript',
      'Fast static deployment on GitHub Pages',
    ],
    architecture: [
      'Static site architecture with one page per tool family',
      'Vanilla JS modules with no build step on the client',
      'Service-worker caching for offline-first loading',
      'Shared design tokens so every tool looks consistent',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Service Workers', 'GitHub Pages'],
    repo: 'https://github.com/ritampaine75-debug/web-tools-hub',
    live: 'https://ritampaine75-debug.github.io/web-tools-hub/',
    stack: [
      { label: 'Vanilla JavaScript', detail: 'Every tool is dependency-free' },
      { label: 'PWA / Service Workers', detail: 'Installable and offline-capable' },
      { label: 'HTML + CSS', detail: 'Shared tokens, mobile-first layout' },
      { label: 'GitHub Pages', detail: 'Live static deployment' },
    ],
    lessons: [
      'Sites full of utilities do not need a framework — plain modules keep load time near zero.',
      'An installable PWA feels like a real app to users even when it is a folder of static pages.',
      'Consistent design tokens make adding the 26th tool trivial.',
    ],
    relatedProject: ['ritamchat', 'file-manager', 'ai-life-planner'],
    blogLink: '/blog/building-useful-browser-based-tools',
    relatedBlog: '/blog/building-a-progressive-web-app-from-scratch',
    metaTitle: 'Web Tools Hub — 25 Free Browser Tools & PWA by Ritam Paine',
    metaDescription:
      'Web Tools Hub is a collection of 25 free browser tools — calculators, converters, generators and developer utilities — built by Ritam Paine as a fast, mobile-first, offline-ready PWA.',
    tags: ['tools', 'pwa', 'javascript', 'utilities'],
  },

  {
    slug: 'tic-tac-toe-multiplayer',
    name: 'Tic Tac Toe Multiplayer',
    tagline: 'An online multiplayer Tic Tac Toe experiment around a Firebase backend.',
    categories: ['games', 'firebase', 'experiments'],
    categoryLabels: ['Games', 'Firebase', 'Multiplayer'],
    featured: true,
    featuredOrder: 3,
    status: 'prototype',
    accent: 'game',
    summary:
      'Tic Tac Toe multiplayer is where I study game logic, match flows and online play. A public early build exists on GitHub, and concepts like an AI opponent, difficulty levels, ELO-style ranking, leaderboards and XP are on the roadmap.',
    problem:
      'Games taught me to think about state machines: whose turn is it, is the move legal, has the match ended? I wanted to add an online layer — two players sharing one live board through Firebase.',
    solution:
      'The board and win logic live in the browser, while Firebase keeps both players in sync. The public repository is an early, playable step; ranking, leaderboards and AI opponents are active experiment territory rather than finished features.',
    features: [
      'Playable board with win/draw detection',
      'Multiplayer concepts wired through a Firebase backend',
      'Explored: AI opponent and difficulty levels',
      'Explored: match history and ELO-style ranking concepts',
      'Explored: leaderboards, achievements, XP and level ideas',
    ],
    architecture: [
      'Client-side game state machine (moves, turns, terminal states)',
      'Firebase-backed room/match sync for online play',
      'Clean separation between game rules and rendering',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    repo: 'https://github.com/ritampaine75-debug/Ritam-Tac-Toe-Multiplayer',
    live: null,
    stack: [
      { label: 'JavaScript', detail: 'Game logic and rendering' },
      { label: 'Firebase', detail: 'Live board sync between players' },
    ],
    lessons: [
      'Write game rules as a pure state machine before touching the UI.',
      'Multiplayer sync makes even a simple game a distributed-systems exercise.',
    ],
    relatedProject: ['ritamchat', 'otp-gmail-verification'],
    blogLink: '/blog/building-realtime-features-with-firebase',
    relatedBlog: '/blog/firebase-realtime-database-vs-traditional-backend',
    metaTitle: 'Tic Tac Toe Multiplayer — Firebase Game Experiment by Ritam Paine',
    metaDescription:
      'A Tic Tac Toe multiplayer game experiment by Ritam Paine: online play concepts with a Firebase backend, plus explored ideas for AI opponents, ELO ranking and leaderboards.',
    tags: ['games', 'firebase', 'multiplayer'],
  },

  {
    slug: 'otp-gmail-verification',
    name: 'Gmail OTP Verification',
    tagline: 'An OTP email-verification experiment with React, Firebase and GitHub Actions.',
    categories: ['web', 'firebase', 'experiments'],
    categoryLabels: ['Web Apps', 'Firebase', 'Authentication'],
    featured: true,
    featuredOrder: 4,
    status: 'experiment',
    accent: 'shield',
    summary:
      'A working authentication/verification experiment: generate a one-time password, deliver it through a Gmail-based workflow, and validate it with expiry, attempt limits and resend cooldowns. Built with React and Firebase Realtime Database.',
    problem:
      'I wanted to understand the full lifecycle of an email OTP — generation, delivery, expiry, attempts and resend rules — and how such a flow could be automated and deployed safely.',
    solution:
      'The repository combines a React client with Firebase Realtime Database for OTP state, a Gmail-based delivery workflow, and GitHub Actions to experiment with automated deployment. All secrets (app passwords, API keys, GitHub secrets) are kept strictly out of source code.',
    features: [
      'React-based verification screen',
      'Firebase Realtime Database storage for OTP state',
      'OTP generation with an expiry window',
      'Attempt limits after failed verification',
      'Resend cooldown between new codes',
      'Gmail-based delivery workflow experiments',
      'GitHub Actions experimentation for automation',
    ],
    architecture: [
      'Client: React UI for entering and resending codes',
      'State: OTP records with expiry + attempt counters in Firebase RTDB',
      'Delivery: Gmail workflow (server-side / automated steps only — never in frontend code)',
      'CI: GitHub Actions for automated steps and deployment experiments',
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'Firebase Realtime Database', 'Gmail workflow', 'GitHub Actions'],
    repo: 'https://github.com/ritampaine75-debug/OTP-verification-free-',
    live: null,
    securityNote:
      'Security note: this experiment never exposes API keys, app passwords, GitHub secrets or Firebase private credentials. Sensitive values only ever live in protected server/CI environments.',
    stack: [
      { label: 'React + TypeScript', detail: 'Client UI for the verification flow' },
      { label: 'Firebase RTDB', detail: 'OTP state, expiry and attempt tracking' },
      { label: 'GitHub Actions', detail: 'Automation and deployment experiments' },
    ],
    lessons: [
      'An OTP is only as strong as its expiry and rate-limit rules.',
      'Secrets handling is a skill: every delivery step must run outside the browser.',
    ],
    relatedProject: ['ritamchat', 'tic-tac-toe-multiplayer', 'web-tools-hub'],
    blogLink: '/blog/building-realtime-features-with-firebase',
    relatedBlog: '/blog/firebase-realtime-database-vs-traditional-backend',
    metaTitle: 'Gmail OTP Verification — React & Firebase Experiment by Ritam Paine',
    metaDescription:
      'A Gmail OTP verification experiment by Ritam Paine using React, Firebase Realtime Database, expiry rules, attempt limits, resend cooldowns and GitHub Actions automation.',
    tags: ['firebase', 'authentication', 'otp', 'react'],
  },

  {
    slug: 'ai-chat-applications',
    name: 'AI Chat Applications',
    tagline: 'A series of live AI chat experiments: AI chat, video-flavoured chat and chef-style assistants.',
    categories: ['ai', 'experiments', 'web'],
    categoryLabels: ['AI', 'Experiments', 'Web Apps'],
    featured: true,
    featuredOrder: 5,
    status: 'experiment',
    accent: 'ai',
    summary:
      'A family of AI-powered chat experiments exploring how language-model APIs behave inside real web apps — including a public AI chat app, a video-themed AI chat and an AI chef that suggests recipes.',
    problem:
      'Large language models are exciting, but wiring one into a usable web interface raises real questions: streaming, prompts, context, cost and mobile UX. I wanted hands-on answers, so I built several small chat apps.',
    solution:
      'Each experiment is a small standalone web app that talks to an AI API from the client through an application layer. Some are deployed live on Vercel so the results can actually be used from a phone.',
    features: [
      'AI chat with conversational interface (deployed on Vercel)',
      'Video-themed AI chat experiment',
      'AI chef experiment for recipe ideas',
      'Each app is mobile-first and fast to load',
      'Public repositories so the approach can be inspected',
    ],
    architecture: [
      'Browser UI → application layer → AI API',
      'Lightweight frontends built to run on Vercel',
      'Prompts kept simple and predictable per use case',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'AI APIs', 'Vercel'],
    repo: 'https://github.com/ritampaine75-debug/ai-chat',
    live: 'https://ai-chat-sepia-seven.vercel.app',
    stack: [
      { label: 'AI APIs', detail: 'Conversational model calls' },
      { label: 'Vercel', detail: 'Live public deployments' },
      { label: 'JavaScript', detail: 'Interfaces and state' },
    ],
    lessons: [
      'Streaming output completely changes the perceived speed of an AI app.',
      'Small focused prompts beat giant prompt libraries for predictable results.',
    ],
    relatedProject: ['ai-life-planner', 'ritamchat'],
    blogLink: '/blog/building-ai-powered-web-applications',
    relatedBlog: '/blog/building-ai-powered-web-applications',
    metaTitle: 'AI Chat Applications — Live AI Web Experiments by Ritam Paine',
    metaDescription:
      'AI chat applications by Ritam Paine — a series of live experiments wiring AI language APIs into mobile-first web apps, deployed on Vercel with public source code.',
    tags: ['ai', 'chat', 'llm', 'vercel'],
  },

  {
    slug: 'shopverse-ecommerce',
    name: 'ShopVerse E-Commerce',
    tagline: 'A premium e-commerce interface experiment built with HTML, CSS, JavaScript and Firebase.',
    categories: ['web', 'firebase'],
    categoryLabels: ['Web Apps', 'Firebase'],
    featured: true,
    featuredOrder: 6,
    status: 'prototype',
    accent: 'commerce',
    summary:
      'ShopVerse is a storefront experiment built with plain HTML, CSS and JavaScript, with Firebase ideas in the data layer. It is a study of premium product interfaces rather than a live shop.',
    problem:
      'E-commerce interfaces combine a lot of craft — product grids, detail views, carts — with real data problems. I wanted to build a believable storefront and keep the code simple enough to read.',
    solution:
      'The public repository implements the storefront experience with vanilla web technologies and experiments with a Firebase-backed approach for catalogue data and the cart.',
    features: [
      'Product catalogue and storefront layout',
      'Product detail and cart flows explored',
      'Firebase concepts for catalogue/cart data',
      'Clean HTML/CSS/JS architecture, no heavy framework',
    ],
    architecture: [
      'Static storefront shell in HTML/CSS/JS',
      'Firebase as an experimental data layer',
      'Component-free structure for easy reading',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    repo: 'https://github.com/ritampaine75-debug/shopverse-ecommerce',
    live: null,
    stack: [
      { label: 'JavaScript', detail: 'Storefront behaviour' },
      { label: 'Firebase', detail: 'Experimental data layer' },
    ],
    lessons: [
      'Storefront UI quality is mostly typography, spacing and imagery discipline.',
    ],
    relatedProject: ['web-tools-hub', 'smart-billing-inventory'],
    blogLink: '/blog/designing-premium-mobile-first-web-interfaces',
    relatedBlog: '/blog/building-a-progressive-web-app-from-scratch',
    metaTitle: 'ShopVerse E-Commerce — HTML/CSS/JS & Firebase Experiment by Ritam Paine',
    metaDescription:
      'ShopVerse is an e-commerce interface experiment by Ritam Paine built with HTML, CSS, JavaScript and Firebase — a study in premium storefront UI and simple architectures.',
    tags: ['ecommerce', 'firebase', 'ui'],
  },

  {
    slug: 'ai-life-planner',
    name: 'AI Life Planner',
    tagline: 'An experimental AI-guided life-planning concept.',
    categories: ['ai', 'experiments'],
    categoryLabels: ['AI', 'Experiments'],
    featured: true,
    featuredOrder: 7,
    status: 'concept',
    accent: 'planner',
    summary:
      'AI Life Planner is an early concept for an AI-powered planning experience: guided questions help someone think clearly about goals, and the AI structures personalised recommendations. It explores both Bengali and English experiences.',
    problem:
      'Real planning rarely starts from a blank page. People think better when asked the right questions, in a language they are comfortable with, and when the output is structured rather than a wall of text.',
    solution:
      'The concept pairs an AI-guided question flow with goal analysis. It deliberately explores a bilingual (Bengali + English) experience so the guidance can feel natural to more people.',
    features: [
      'AI-guided question flow for personal planning',
      'Goal analysis and structured recommendations',
      'Bengali and English experience concepts',
      'Designed as a calm, mobile-first experience',
    ],
    architecture: [
      'Conversation-driven UI (question → answer → next)',
      'AI layer turns answers into a structured plan',
      'Bilingual content model from day one',
    ],
    technologies: ['AI APIs', 'JavaScript', 'Concept design'],
    repo: null,
    live: null,
    noteIfNoRepo: 'Concept stage — ideas and interaction design only for now.',
    stack: [
      { label: 'AI guided flow', detail: 'Question → analysis → structured output' },
      { label: 'Bilingual', detail: 'Bengali and English experiences' },
    ],
    lessons: [
      'Good digital products can start as a clear interaction concept before a single line of code.',
    ],
    relatedProject: ['ai-chat-applications', 'sayan'],
    blogLink: '/blog/building-ai-powered-web-applications',
    relatedBlog: '/blog/building-ai-powered-web-applications',
    metaTitle: 'AI Life Planner — AI Life-Planning Concept by Ritam Paine',
    metaDescription:
      'AI Life Planner is an experimental AI-powered life-planning concept by Ritam Paine: guided questions, goal analysis, structured recommendations, with Bengali and English experiences.',
    tags: ['ai', 'planning', 'concept'],
  },

  {
    slug: 'sayan',
    name: 'Sayan',
    tagline: 'Maximize Life, Minimize Screen Time!',
    categories: ['web', 'experiments'],
    categoryLabels: ['Digital Wellbeing', 'Experiments'],
    featured: true,
    featuredOrder: 8,
    status: 'concept',
    accent: 'wellbeing',
    summary:
      'Sayan is a digital wellbeing concept focused on screen time and healthy phone habits. The working tagline is “Maximize Life, Minimize Screen Time!”, and the design direction is a calm, modern mobile interface for usage insights.',
    problem:
      'Phones are designed to hold attention, and most people have little idea where their time actually goes. Sayan is a concept for an app that makes screen usage visible, calm and actionable.',
    solution:
      'As a concept, Sayan focuses on clear screen-time tracking, honest usage insights and gentle nudges toward healthier patterns — wrapped in a modern, minimal mobile UI that does not feel punishing.',
    features: [
      'Screen time and usage insight concepts',
      'Digital wellbeing focus (time, apps, patterns)',
      'Calm, modern mobile-first interface',
      'Personal productivity angles explored',
    ],
    architecture: [
      'Mobile-first screen flow (dashboard → insights → settings)',
      'Concept-stage interaction design',
    ],
    technologies: ['Concept design', 'Mobile-first UI'],
    repo: null,
    live: null,
    noteIfNoRepo: 'Concept stage — the identity and interaction concept exist; implementation is next.',
    stack: [
      { label: 'Concept design', detail: 'Screens, flows, tone' },
      { label: 'Mobile-first UI', detail: 'Calm, readable, insight-driven' },
    ],
    lessons: [
      'Wellbeing products need restraint — the UI itself must not compete for attention.',
    ],
    relatedProject: ['ai-life-planner', 'ritamchat'],
    blogLink: '/blog/designing-premium-mobile-first-web-interfaces',
    relatedBlog: '/blog/designing-premium-mobile-first-web-interfaces',
    metaTitle: 'Sayan — Digital Wellbeing & Screen Time Concept by Ritam Paine',
    metaDescription:
      'Sayan is a digital wellbeing concept by Ritam Paine — screen time, usage insights and healthier phone habits in a calm, modern, mobile-first interface.',
    tags: ['wellbeing', 'screen-time', 'concept', 'mobile'],
  },

  {
    slug: 'smart-billing-inventory',
    name: 'Smart Billing & Inventory',
    tagline: 'A business-management concept: billing, inventory, barcodes and invoices.',
    categories: ['tools', 'experiments', 'web'],
    categoryLabels: ['Tools', 'Business Software', 'Experiments'],
    featured: true,
    featuredOrder: 9,
    status: 'concept',
    accent: 'business',
    summary:
      'A concept for a small-business management system: product inventory, barcode scanning, QR codes, billing, invoices and Indian-currency workflows — designed as a mobile-first web application.',
    problem:
      'Small shops and businesses in India often run billing on paper or in disconnected tools. A single mobile-first system for inventory, billing and invoices could remove a lot of daily friction.',
    solution:
      'The concept maps the full business loop — add stock, scan a barcode or QR code, bill a customer, print a GST-friendly invoice — into one web app designed to run on the phone already sitting on the counter.',
    features: [
      'Product inventory management',
      'Barcode scanning and QR code workflows',
      'Billing and invoice generation',
      'Indian currency and business workflow considerations',
      'Mobile-first design for counter use',
    ],
    architecture: [
      'Inventory model (products, stock levels, prices)',
      'Billing flow tied to scanned products',
      'Invoice output with Indian currency formatting',
    ],
    technologies: ['Web app concept', 'Mobile-first UI', 'Barcode/QR concepts'],
    repo: null,
    live: null,
    noteIfNoRepo: 'Concept stage — the workflow model is designed; implementation has not started.',
    stack: [
      { label: 'Workflow model', detail: 'Inventory → scan → bill → invoice' },
      { label: 'Mobile-first', detail: 'Counter-side phone experience' },
    ],
    lessons: [
      'Domain research matters: billing software lives or dies on real shop workflows.',
    ],
    relatedProject: ['web-tools-hub', 'shopverse-ecommerce', 'file-manager'],
    blogLink: '/blog/building-useful-browser-based-tools',
    relatedBlog: '/blog/building-useful-browser-based-tools',
    metaTitle: 'Smart Billing & Inventory System — Concept by Ritam Paine',
    metaDescription:
      'Smart Billing & Inventory is a business-management concept by Ritam Paine: inventory, barcode and QR scanning, billing, invoices and Indian-currency workflows in a mobile-first web app.',
    tags: ['billing', 'inventory', 'concept', 'business'],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured).sort(
  (a, b) => a.featuredOrder - b.featuredOrder
);

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectBySlug(slug) {
  return getProject(slug);
}

export function projectUrl(slug) {
  return `/projects/${slug}`;
}

/** Related projects given a project slug (falls back to a default set). */
export function relatedProjectsFor(project) {
  if (!project || !project.relatedProject || project.relatedProject.length === 0) {
    return FEATURED_PROJECTS.filter((p) => p.slug !== (project && project.slug)).slice(0, 3);
  }
  const list = project.relatedProject
    .map((slug) => getProject(slug))
    .filter(Boolean)
    .slice(0, 3);
  if (list.length < 3) {
    for (const p of FEATURED_PROJECTS) {
      if (list.length >= 3) break;
      if (p.slug !== project.slug && !list.includes(p)) list.push(p);
    }
  }
  return list.slice(0, 3);
}
