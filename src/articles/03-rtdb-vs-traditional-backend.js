/**
 * Article — Firebase Realtime Database vs traditional backend approaches.
 */

export const meta = {
  slug: 'firebase-realtime-database-vs-traditional-backend',
  title: 'Firebase Realtime Database vs Traditional Backend Approaches',
  description:
    'When real-time sync genuinely helps, when it costs you, and how to choose between Firebase Realtime Database, Firestore, and a classic REST/websocket backend.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Firebase',
  readingTime: '8 min read',
  tags: ['Firebase', 'Backend', 'Real-time', 'Architecture'],
  relatedProjects: ['ritamchat', 'tic-tac-toe-multiplayer', 'otp-gmail-verification'],
};

export const content = [
  ['p', 'Every project I build starts with the same argument in my head: do I need a real-time backend, and if so, which one? This article is my honest framework after building chat, multiplayer and verification experiments on **Firebase Realtime Database** and comparing it with the classic server approach.'],
  ['h2', 'What Firebase Realtime Database actually gives you'],
  ['p', 'It is a JSON tree hosted by Google with one superpower: clients subscribe to paths and receive changes instantly over a persistent connection. There is no polling loop you write and no websocket server you maintain. For solo builders, the authentication and security-rules layer also removes a whole category of plumbing.'],
  ['h2', 'Where it shines'],
  ['ul', [
    'Chat and messaging — many clients, frequent small writes.',
    'Presence, typing indicators, online/offline state.',
    'Turn-based or live multiplayer board state.',
    'Any app where two users must see the same change this second.',
  ]],
  ['h2', 'Where it bites'],
  ['ul', [
    'Complex relational queries. Realtime Database is a tree, not SQL — deep joins are your problem to design around.',
    'Large media files. Storing blobs in the database bloats every sync; object storage with a stored reference is the better shape.',
    'Heavy read traffic on weak devices. Every connected listener re-syncs, so the shape and depth of your data decides your cost.',
    'Long, ad-hoc analytics queries — better in Firestore, BigQuery-style tooling or a real backend.',
  ]],
  ['h2', 'Traditional backend: when to reach for it'],
  ['p', 'A classic backend with an API and a websocket layer gives you complete control: your own database schema, your own auth, your own deployment. That freedom has a price — you now run servers, migrations, websocket infrastructure and security patches. For a solo developer shipping an experiment quickly, that overhead is often the difference between finishing and abandoning.'],
  ['h2', 'My practical rule of thumb'],
  ['blockquote', 'Start with the fastest path to a working product. If the product is inherently collaborative and live, Firebase Realtime Database is usually that path. The moment you need control over queries, compliance or scale, or you want to own the platform, move the logic behind your own API. Most projects never need the move.'],
  ['p', 'You can see this thinking applied in [RitamChat](/projects/ritamchat) and in my multiplayer [Tic Tac Toe](/projects/tic-tac-toe-multiplayer) experiment, where live state is the whole point of the app.'],
];
