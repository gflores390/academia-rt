const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="beam-group beam-left" style="top: -10%;">/g;
html = html.replace(regex, '<div class="beam-group beam-left" style="top: -10%; left: 8vw;">');

const regex2 = /<div class="beam-group beam-right" style="top: -20%;">/g;
html = html.replace(regex2, '<div class="beam-group beam-right" style="top: -20%; right: 8vw;">');

fs.writeFileSync('index.html', html);
console.log('Pushed beams inward');
