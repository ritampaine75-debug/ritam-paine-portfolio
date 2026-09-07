/**
 * Article — Building AI-powered web applications.
 */

export const meta = {
  slug: 'building-ai-powered-web-applications',
  title: 'Building AI-Powered Web Applications',
  description:
    'How to wire AI into web apps without losing your users: focused prompts, streaming, graceful failures and honest limits — learned from real AI chat experiments.',
  date: '2026-09-07',
  updated: '2026-09-07',
  category: 'AI',
  readingTime: '7 min read',
  tags: ['AI', 'LLM', 'Web Apps', 'APIs'],
  relatedProjects: ['ai-chat-applications', 'ai-life-planner'],
};

export const content = [
  ['p', 'I have built a family of AI experiments — chat apps, an AI chef, and planning concepts — and the pattern that emerges every time is the same: the AI is the easy 10 percent, the application around it is the real product. This article covers what I learned wiring language models into mobile-first web applications.'],
  ['h2', 'Treat the model as an API, not a magic box'],
  ['p', 'An LLM call is a network request with a prompt, parameters and a response. The first lesson is to scope every call to one narrow job. A focused prompt with a constrained output beats a giant instruction list on cost, speed and reliability. My chef experiment, for example, asks for recipe ideas with a small structured prompt — not a philosophical essay about food.'],
  ['h2', 'Streaming changes everything'],
  ['p', 'Nobody wants to stare at a spinner for eight seconds. When the interface streams tokens as they arrive, the app feels instant. Implement streaming early; retrofitting it later means redoing your whole state flow.'],
  ['h2', 'Design for failure'],
  ['p', 'AI APIs fail, time out and hallucinate. The app must fail politely:'],
  ['ul', [
    'Always show a clear loading and error state.',
    'Cache successful responses so repeat questions are instant.',
    'Validate and constrain outputs before showing them to users.',
    'Have a graceful default when the model is unreachable.',
  ]],
  ['h2', 'Keep secrets on the server side'],
  ['p', 'A browser page that calls an AI provider directly needs a key in the client — which is how keys leak. Route calls through an application layer or serverless function that holds the key. The frontend should only ever talk to your own endpoint.'],
  ['h2', 'Know what you are not building'],
  ['p', 'Most useful AI products are not chatbots — they are workflows where intelligence is one step. Guided planning (like my AI Life Planner concept), summarisation inside a tool, structured suggestions after input. Ask where the model genuinely adds value, then keep the model there.'],
  ['p', 'For live examples, look at my [AI chat applications](/projects/ai-chat-applications), and for a different take on AI structure, the [AI Life Planner concept](/projects/ai-life-planner).'],
];
