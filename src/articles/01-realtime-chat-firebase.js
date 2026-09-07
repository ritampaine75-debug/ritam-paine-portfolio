/**
 * Article — How I built a real-time chat application with Firebase.
 */

export const meta = {
  slug: 'how-i-built-a-realtime-chat-application-with-firebase',
  title: 'How I Built a Real-Time Chat Application with Firebase',
  description:
    'A practical walkthrough of building a real-time chat web app with Firebase Realtime Database — data shape, presence, typing indicators, and the lessons I keep re-learning.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Firebase',
  readingTime: '7 min read',
  tags: ['Firebase', 'Real-time', 'Chat', 'React'],
  relatedProjects: ['ritamchat', 'otp-gmail-verification'],
};

export const content = [
  ['p', 'I have spent a lot of my development time on one question: what does it actually take to build a messaging app for the web? The result is an ongoing project called **RitamChat**, a WhatsApp-inspired, mobile-first messaging web app. This article is a condensed version of what that journey taught me about real-time applications with **Firebase Realtime Database**.'],
  ['h2', 'Why Firebase Realtime Database?'],
  ['p', 'A chat app is the classic real-time problem: many clients must see the same state change within milliseconds. Firebase Realtime Database is built exactly for this — every connected client receives updates over a persistent connection instead of polling for changes. For an independent builder it also removes the server work of websocket management, at least at the start.'],
  ['p', 'The trade-off is that you are renting somebody else architecture decisions, so you have to think hard about your **data shape** from day one.'],
  ['h2', 'The data shape that made sense to me'],
  ['ul', [
    'A messages node keyed by conversation, where each message stores sender id, timestamp and body.',
    'A users node for profiles — display name and a friend id used to find people.',
    'Presence keys written when a client connects and cleared automatically when it disconnects.',
  ]],
  ['p', 'Something like:'],
  ['code', 'js', `conversations/
  conv_1/
    messages/
      m1: { from: "u1", text: "hi", ts: 1690000000 }
      m2: { from: "u2", text: "hey", ts: 1690000001 }
users/
  u1: { name: "Ritam", status: "online" }`],
  ['h2', 'Presence without the drama'],
  ['p', 'Typing indicators and online status look easy and are quietly the hardest part. The trick I use is a two-step state: when a client connects it writes its presence value, and it registers a disconnect handler so Firebase clears that value if the connection drops. Without the disconnect step your app shows ghost users who are long gone.'],
  ['code', 'js', `// pseudo-code for presence
presenceRef.onDisconnect().remove();

ref.child("status").set("online");`],
  ['h2', 'Where Base64 media taught me a lesson'],
  ['p', 'I started by passing image messages as Base64 strings straight through the database — it works, and it is a fantastic learning step. Then you notice every kilobyte of a photo becomes a few more kilobytes of text travelling to every participant. That is the moment you understand why production chat systems use object storage and only sync a reference. Knowing why a pattern exists is worth more than memorising the pattern.'],
  ['h2', 'What I would tell my past self'],
  ['ul', [
    'Model the domain before wiring the UI: users, conversations, messages.',
    'Write presence with the disconnect path from the very first commit.',
    'Keep messages small; media belongs in references, not in rows of text.',
    'Test with two browser windows — real-time bugs only show up with two clients.',
  ]],
  ['p', 'You can read more about this specific build in [What I learned building RitamChat](/blog/what-i-learned-building-ritamchat), and the related project page is right here: [RitamChat](/projects/ritamchat).'],
];
