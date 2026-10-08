const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const beamsHtml = `
      <!-- BEAMS ALEATORIOS PARA EL BANNER -->
      <div class="sports-beams" aria-hidden="true" style="z-index: 0; opacity: 0.7;">
        <!-- Rayo en medio izquierdo -->
        <div class="beam-group beam-left" style="top: 50%; left: 10vw;">
          <div class="beam beam-blue-light" data-speed="0.3"></div>
          <div class="beam beam-thin beam-thin-yellow" data-speed="0.5"></div>
        </div>
        
        <!-- Rayo inferior izquierdo -->
        <div class="beam-group beam-left" style="top: 80%; left: -5vw;">
          <div class="beam beam-red" data-speed="0.2"></div>
          <div class="beam beam-thin beam-thin-white" data-speed="0.4"></div>
        </div>

        <!-- Rayo superior derecho -->
        <div class="beam-group beam-right" style="top: 15%; right: 5vw;">
          <div class="beam beam-yellow" data-speed="0.35"></div>
          <div class="beam beam-thin beam-thin-red" data-speed="0.15"></div>
        </div>
      </div>
`;

// Insert directly after <div class="entrenamos-bg-number" aria-hidden="true">01</div>
if (html.includes('<div class="entrenamos-bg-number" aria-hidden="true">01</div>')) {
  html = html.replace('<div class="entrenamos-bg-number" aria-hidden="true">01</div>', '<div class="entrenamos-bg-number" aria-hidden="true">01</div>\n' + beamsHtml);
  fs.writeFileSync('index.html', html);
  console.log('Inserted beams in banner');
} else {
  console.log('Failed to find banner insertion point');
}
