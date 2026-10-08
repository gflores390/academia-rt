const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The hero has:
// <div class="beam-group beam-left" style="top: -10%; left: 8vw;">
// <div class="beam-group beam-right" style="top: -20%; right: 8vw;">
html = html.replace(/<div class="beam-group beam-left" style="top: -10%; left: 8vw;">/g, '<div class="beam-group beam-left" style="top: -10%; left: -2vw;">');
html = html.replace(/<div class="beam-group beam-right" style="top: -20%; right: 8vw;">/g, '<div class="beam-group beam-right" style="top: -20%; right: -2vw;">');

fs.writeFileSync('index.html', html);
console.log('Fixed inline left/right in hero');
