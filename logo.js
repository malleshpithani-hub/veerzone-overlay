const params = new URLSearchParams(window.location.search);
const anchor = document.getElementById('logoAnchor');
const brand = document.getElementById('brandWord');

const size = params.get('size');
const scale = params.get('scale');
const left = params.get('left');
const bottom = params.get('bottom');
const word = params.get('word');
const hideText = params.get('text') === 'off' || params.get('word') === 'off';

if (anchor) {
  if (size) anchor.style.setProperty('--logo-size', size);
  if (scale) anchor.style.setProperty('--logo-scale', scale);
  if (left) anchor.style.setProperty('--logo-left', left);
  if (bottom) anchor.style.setProperty('--logo-bottom', bottom);
  if (hideText) anchor.style.setProperty('--word-opacity', '0');
}

if (brand && word && word !== 'off') {
  brand.textContent = word.toUpperCase();
}
