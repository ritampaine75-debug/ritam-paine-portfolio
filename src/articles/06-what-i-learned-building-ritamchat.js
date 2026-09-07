/**
 * Article — What I learned building RitamChat.
 */

export const meta = {
  slug: 'what-i-learned-building-ritamchat',
  title: 'What I Learned Building RitamChat',
  description:
    'The honest lessons from building a real-time messaging web app: data modelling, presence pitfalls, media handling and knowing when a feature is done enough.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'Build Log',
  readingTime: '7 min read',
  tags: ['RitamChat', 'Real-time', 'Firebase', 'Build Log'],
  relatedProjects: ['ritamchat', 'otp-gmail-verification', 'tic-tac-toe-multiplayer'],
};

export const content = [
  ['p', 'RitamChat started as a concept called PixelChat and grew into my most consistent learning project: a WhatsApp-inspired, mobile-first messaging web app. Building it taught me more about engineering than any tutorial ever has. Here is what I keep coming back to.'],
  ['h2', 'Start with the data model'],
  ['p', 'The temptation with a chat app is to build the pretty screen first. The screen is the easy part. Everything hard lives in the data model: how a conversation is keyed, how a message is stored, how presence is represented, how two users find each other. I redrew the model three times before the UI stopped fighting me.'],
  ['h2', 'Presence is a promise you must keep'],
  ['p', 'Presence and typing indicators are the features that separate a demo from a real-time app — and they are full of edge cases. What happens when the connection drops mid-sentence? When the same account is open in two tabs? When the phone sleeps? My rule: write the disconnect/cleanup path first. A user who appears online forever is worse than one who appears offline.'],
  ['h2', 'Media forced me to think about size'],
  ['p', 'Passing image messages as Base64 through the database worked, and then it stopped being enough the moment the images grew. Every byte travelled to every connected client. That experience taught me why real systems store media somewhere else and share references — I felt the reason, I did not just read about it.'],
  ['h2', 'A feature is done when it is boring'],
  ['p', 'New ideas are cheap and exciting — statuses, reactions, encryption concepts, media polish. The discipline is finishing the boring 80 percent: reliable sending, correct statuses, clean empty states, no flicker on slow networks. I now finish the boring parts first and treat the shiny ones as experiments with honest labels.'],
  ['h2', 'The single-user trap'],
  ['p', 'The biggest bug in my development loop was testing alone. Real-time bugs only appear with two clients, two devices and a flaky network. Now every real-time change gets tested against a second window or a second phone before I call it done.'],
  ['p', 'Read the how-to version in [How I built a real-time chat application with Firebase](/blog/how-i-built-a-realtime-chat-application-with-firebase), or open the [RitamChat project page](/projects/ritamchat) for the full feature list and architecture notes.'],
];
