/**
 * Article — Building real-time features with Firebase.
 */

export const meta = {
  slug: 'building-realtime-features-with-firebase',
  title: 'Building Real-Time Features with Firebase',
  description:
    'A field guide to the real-time features you can ship with Firebase: presence, typing indicators, live lists and shared state — with honest notes on where each one gets tricky.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Firebase',
  readingTime: '7 min read',
  tags: ['Firebase', 'Real-time', 'Presence', 'Realtime Database'],
  relatedProjects: ['ritamchat', 'tic-tac-toe-multiplayer', 'otp-gmail-verification'],
};

export const content = [
  ['p', 'Real-time is a feature, not a product. The useful question is always: which parts of my app should update the moment something changes somewhere else? Firebase makes that answer cheap to build. This article is a field guide to the real-time features I have actually shipped or prototyped — and where each one quietly gets hard.'],
  ['h2', 'Live lists: the foundation'],
  ['p', 'The simplest real-time feature is a list that stays in sync — messages in a chat, moves in a game, items in a shared board. With Realtime Database you subscribe to a path and every child change arrives automatically.'],
  ['code', 'js', `// listen to every message in a conversation
ref.child("conversations/conv_1/messages")
  .on("value", (snap) => renderMessages(snap.val()));`],
  ['h2', 'Presence: who is really here?'],
  ['p', 'Presence means tracking who is online. The reliable pattern uses a disconnect handler so the record cleans itself up when a connection drops. The edge cases — a phone sleeping, a tab closing, a network blip — are exactly why the disconnect handler matters.'],
  ['code', 'js', `userRef.onDisconnect().set({ status: "offline" });
userRef.set({ status: "online" });`],
  ['h2', 'Typing indicators: small writes, big effect'],
  ['p', 'Typing state is a boolean per user in a conversation. The trick is keeping it cheap: write on input start, clear after a pause, and never let it block the actual message write. Done right it adds enormous life to a chat; done lazily it spams your database.'],
  ['h2', 'Shared game state: turns and rooms'],
  ['p', 'In my Tic Tac Toe multiplayer experiment the board is shared state: one client writes a move, the other sees it. The lesson is to keep the game rules pure on the client and use the database only as the source of truth for whose turn it is and what the board looks like.'],
  ['h2', 'Verification state: OTP with real-time rules'],
  ['p', 'In my Gmail OTP verification experiment the real-time layer holds time-sensitive state — the code record with an expiry, an attempt counter and a resend cooldown. Real-time here means the client sees the correct state of its own attempt window, enforced by rules rather than by hope.'],
  ['h2', 'The meta-lesson'],
  ['blockquote', 'Real-time features are judged by how they fail. A list that lags is fine; a presence system that lies is not. Decide what "correct" means for each feature, then design the cleanup path before the happy path.'],
  ['p', 'See these patterns in action on [RitamChat](/projects/ritamchat), the [Tic Tac Toe multiplayer build](/projects/tic-tac-toe-multiplayer) and the [Gmail OTP verification experiment](/projects/otp-gmail-verification).'],
];
