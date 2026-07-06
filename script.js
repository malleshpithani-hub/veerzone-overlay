const params = new URLSearchParams(location.search);

const values = {
  statusText: params.get('status') || 'REGISTRATION LIVE',
  matchTitle: params.get('match') || 'BO2 SCRIMS',
  startTime: params.get('time') || '10:30 PM',
  slotsLeft: params.get('slots') || '3 LEFT',
  mainMessage: params.get('message') || 'BOOK YOUR SLOT',
  subMessage: params.get('sub') || 'Verified players only • leaderboard every battle',
  rewardTotal: params.get('total') || '₹600',
  winnerReward: params.get('winner') || 'Winner ₹350',
  runnerReward: params.get('runner') || 'Runner ₹150',
  fragReward: params.get('frag') || 'Top Fraggers Rewards',
  ctaText: params.get('cta') || "REGISTER NOW — IT'S FREE",
  siteUrl: params.get('site') || 'veerzone.com'
};

for (const id in values) {
  const element = document.getElementById(id);
  if (element) element.textContent = values[id];
}

const rotation = [
  values.mainMessage,
  'FREE ENTRY ONLY',
  'VERIFIED PLAYERS ONLY',
  'LEADERBOARD EVERY BATTLE',
  values.ctaText
];

let current = 0;
setInterval(() => {
  current = (current + 1) % rotation.length;
  const title = document.getElementById('mainMessage');
  if (title) title.textContent = rotation[current];
}, 4500);
