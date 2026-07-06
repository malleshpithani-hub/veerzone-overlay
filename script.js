const params = new URLSearchParams(window.location.search);

const mode = (params.get('mode') || params.get('text') || 'MATCH LIVE').trim().toUpperCase();
const site = (params.get('site') || 'VEERZONE.COM').trim().toUpperCase();

const modeElement = document.getElementById('modeText');
const siteElement = document.getElementById('siteText');

function premiumModeText(value) {
  const words = value.split(/\s+/).filter(Boolean);
  if (words.length <= 1) return value;

  const last = words.pop();
  const first = words.join(' ');
  return `${first} <span class="mode-accent">${last}</span>`;
}

if (modeElement) {
  modeElement.innerHTML = premiumModeText(mode);
}

if (siteElement) {
  siteElement.textContent = site;
}
