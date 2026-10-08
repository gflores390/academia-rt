const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const beamsHtml = `
    <!-- SPORTS BEAMS (PARALLAX DECO) -->
    <div class="sports-beams" aria-hidden="true">
      <div class="beam-group beam-left">
        <div class="beam beam-blue-dark" data-speed="0.25"></div>
        <div class="beam beam-blue-light" data-speed="0.1"></div>
        <div class="beam beam-red" data-speed="0.35"></div>
      </div>
      <div class="beam-group beam-right">
        <div class="beam beam-blue-dark" data-speed="0.2"></div>
        <div class="beam beam-yellow" data-speed="0.4"></div>
        <div class="beam beam-blue-light" data-speed="0.15"></div>
      </div>
    </div>
`;

html = html.replace('<div class="pillars-header" data-reveal>', beamsHtml + '\n        <div class="pillars-header" data-reveal>');
fs.writeFileSync('index.html', html);
console.log('Success HTML');
