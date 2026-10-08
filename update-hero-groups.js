const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="sports-beams"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newBeams = `<div class="sports-beams" aria-hidden="true" style="z-index: 1; opacity: 1;">
          
          <!-- Lado Izquierdo: 2 Grupos -->
          <!-- Grupo Izquierdo Arriba -->
          <div class="beam-group beam-left" style="top: -15%; left: -5vw;">
            <div class="beam beam-blue-dark" data-speed="0.15"></div>
            <div class="beam beam-thin beam-thin-yellow" data-speed="0.25"></div>
          </div>
          
          <!-- Grupo Izquierdo Abajo -->
          <div class="beam-group beam-left" style="top: 45%; left: -8vw;">
            <div class="beam beam-red" data-speed="0.35"></div>
            <div class="beam beam-thin beam-thin-white" data-speed="0.45"></div>
          </div>

          <!-- Lado Derecho: 1 Grupo -->
          <!-- Grupo Derecho Centro -->
          <div class="beam-group beam-right" style="top: 10%; right: -5vw;">
            <div class="beam beam-yellow" data-speed="0.2"></div>
            <div class="beam beam-thin beam-thin-red" data-speed="0.3"></div>
            <div class="beam beam-blue-dark" style="left: auto; right: 50px;" data-speed="0.1"></div>
          </div>

        </div>`;

if (html.match(regex)) {
  html = html.replace(regex, newBeams);
  fs.writeFileSync('index.html', html);
  console.log('Replaced hero beams with 3 groups');
} else {
  console.log('Regex failed');
}
