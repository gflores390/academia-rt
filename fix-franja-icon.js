const fs = require('fs');

// 1. Remove borders from .entrenamos-banner
let css = fs.readFileSync('css/components.css', 'utf8');
css = css.replace(/  border-top: 2px solid #ffcc00;\r\n  border-bottom: 2px solid #0055ff;\r\n/g, '');
css = css.replace(/  border-top: 2px solid #ffcc00;\n  border-bottom: 2px solid #0055ff;\n/g, '');
fs.writeFileSync('css/components.css', css);
console.log('Removed borders from entrenamos-banner');

// 2. Replace the ball SVG in index.html
let html = fs.readFileSync('index.html', 'utf8');

const newBallSvg = `<img class="icon-ball" src="assets/icons/iconpelota.png" alt="Balón" width="22" height="22" style="object-fit: contain;">`;

// We have two different old SVG structures. We'll use regex to match them.
// The hero one might just have <circle> and <path>
const regexHero = /<svg class="icon-ball"[^>]*>[\s\S]*?<\/svg>/g;
html = html.replace(regexHero, newBallSvg);

const regexBanner = /<svg width="2[04]" height="2[04]" viewBox="0 0 24 24" fill="none"[^>]*>[\s\S]*?<\/svg>/g;
html = html.replace(regexBanner, newBallSvg);

fs.writeFileSync('index.html', html);
console.log('Replaced ball SVGs with filled version');
