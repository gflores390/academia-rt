const fs = require('fs');

// 1. Fix Parallax.js
let js = fs.readFileSync('js/parallax.js', 'utf8');
js = js.replace(/const section = el\.closest\('\.section'\);/g, "const section = el.closest('.section, header, .entrenamos-banner');");
fs.writeFileSync('js/parallax.js', js);
console.log('Fixed parallax.js');

// 2. Fix positions in HTML so they don't clip at the bottom
let html = fs.readFileSync('index.html', 'utf8');

// For the hero banner, move them slightly up so they don't hit the bottom edge.
// And they will move up when scrolling anyway due to parallax.
html = html.replace(/<div class="beam-group beam-left" style="top: 75%; left: -5vw;">/g, '<div class="beam-group beam-left" style="top: 45%; left: -5vw;">');
html = html.replace(/<div class="beam-group beam-right" style="top: 35%; right: 0;">/g, '<div class="beam-group beam-right" style="top: 15%; right: 5vw;">');

fs.writeFileSync('index.html', html);
console.log('Adjusted beam positions in HTML');
