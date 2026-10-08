const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Change z-index to 10
html = html.replace(/<div class="sports-beams" aria-hidden="true" style="z-index: 0; opacity: 0.8;">/g, '<div class="sports-beams" aria-hidden="true" style="z-index: 10; opacity: 1;">');
fs.writeFileSync('index.html', html);
console.log('Set z-index to 10');
