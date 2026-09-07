/**
 * Maps a project slug to an accent icon used on cards and previews.
 */

const MAP = {
  ritamchat: 'chat',
  'web-tools-hub': 'grid',
  'tic-tac-toe-multiplayer': 'star',
  'otp-gmail-verification': 'shield',
  'ai-chat-applications': 'spark',
  shopverse: 'briefcase',
  'ai-life-planner': 'compass',
  sayan: 'heart',
  'smart-billing-inventory': 'bolt',
  'file-manager': 'folder',
  'screen-recorder': 'camera',
  default: 'code',
};

export function getAccentIcon(slug) {
  return MAP[slug] || MAP.default;
}
