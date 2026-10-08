const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const beamsHeroHtml = `
      <!-- BEAMS ALEATORIOS PARA EL HERO -->
      <div class="sports-beams" aria-hidden="true" style="z-index: 1; opacity: 0.7;">
        <div class="beam-group beam-left" style="top: 25%; left: 5vw;">
          <div class="beam beam-blue-light" data-speed="0.25"></div>
          <div class="beam beam-thin beam-thin-yellow" data-speed="0.4"></div>
        </div>
        
        <div class="beam-group beam-left" style="top: 75%; left: -5vw;">
          <div class="beam beam-red" data-speed="0.15"></div>
          <div class="beam beam-thin beam-thin-white" data-speed="0.35"></div>
        </div>

        <div class="beam-group beam-right" style="top: 35%; right: 0;">
          <div class="beam beam-yellow" data-speed="0.3"></div>
          <div class="beam beam-thin beam-thin-red" data-speed="0.2"></div>
        </div>
      </div>
`;

// Insert after hero-media
const match = html.match(/<div class="hero-media"[^>]*>[\s\S]*?<\/div>/);
if (match) {
  html = html.replace(match[0], match[0] + '\n' + beamsHeroHtml);
  fs.writeFileSync('index.html', html);
  console.log('Added beams to hero banner');
} else {
  console.log('Hero media not found');
}
