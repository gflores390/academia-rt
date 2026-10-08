const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const identicalBeams = `      <!-- SPORTS BEAMS (PARALLAX DECO) -->
      <div class="sports-beams" aria-hidden="true">
        <div class="beam-group beam-left">
          <div class="beam beam-blue-dark" data-speed="0.25"></div>
          <div class="beam beam-red" data-speed="0.35"></div>
          <div class="beam beam-thin beam-thin-yellow" data-speed="0.45"></div>
          <div class="beam beam-thin beam-thin-red" data-speed="0.2"></div>
        </div>
        <div class="beam-group beam-right">
          <div class="beam beam-blue-dark" data-speed="0.2"></div>
          <div class="beam beam-yellow" data-speed="0.4"></div>
          <div class="beam beam-thin beam-thin-yellow" data-speed="0.35"></div>
          <div class="beam beam-thin beam-thin-red" data-speed="0.45"></div>
        </div>
      </div>`;

// Replace beams in hero banner
html = html.replace(/      <!-- BEAMS ALEATORIOS PARA EL HERO -->[\s\S]*?(?=<\/header>|        <!-- letra0: FAsTBOL)/, identicalBeams + '\n');

// Replace beams in entrenamos banner
html = html.replace(/      <!-- BEAMS ALEATORIOS PARA EL BANNER -->[\s\S]*?(?=      <div class="container entrenamos-container">)/, identicalBeams + '\n');

fs.writeFileSync('index.html', html);
console.log('Replaced with identical beams');
