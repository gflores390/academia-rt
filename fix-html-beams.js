const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The exact correct block:
const correctBeams = `    <!-- SPORTS BEAMS (PARALLAX DECO) -->
    <div class="sports-beams" aria-hidden="true">
      <div class="beam-group beam-left">
        <div class="beam beam-blue-dark" data-speed="0.25"></div>
        <div class="beam beam-blue-light" data-speed="0.1"></div>
        <div class="beam beam-red" data-speed="0.35"></div>
        <div class="beam beam-thin beam-thin-yellow" data-speed="0.45"></div>
        <div class="beam beam-thin beam-thin-white" data-speed="0.3"></div>
        <div class="beam beam-thin beam-thin-red" data-speed="0.2"></div>
      </div>
      <div class="beam-group beam-right">
        <div class="beam beam-blue-dark" data-speed="0.2"></div>
        <div class="beam beam-yellow" data-speed="0.4"></div>
        <div class="beam beam-blue-light" data-speed="0.15"></div>
        <div class="beam beam-thin beam-thin-yellow" data-speed="0.35"></div>
        <div class="beam beam-thin beam-thin-white" data-speed="0.25"></div>
        <div class="beam beam-thin beam-thin-red" data-speed="0.45"></div>
      </div>
    </div>`;

// Remove the old block entirely
const regex = /    <!-- SPORTS BEAMS \(PARALLAX DECO\) -->[\s\S]*?(?=      <div class="container">)/;

html = html.replace(regex, correctBeams + '\n\n');
fs.writeFileSync('index.html', html);
console.log('Fixed HTML beams structure');
