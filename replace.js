const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newCards = `
      <!-- 01 TÉCNICA -->
      <article class="pillar-col card-blue">
        <div class="pillar-bg-wrap"><img class="pillar-bg-img" src="assets/img/f1.jpg" alt="Técnica"></div>
        <div class="pillar-content-overlay">
          <div class="pillar-icon-wrap">
            <svg class="pillar-hex" viewBox="0 0 100 115" aria-hidden="true">
              <polygon points="50 3, 95 28.75, 95 86.25, 50 112, 5 86.25, 5 28.75"/>
            </svg>
            <div class="pillar-symbol">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 3v5"/>
                <path d="M12 16v5"/>
                <path d="m4.9 7 4.3 2.5"/>
                <path d="m14.8 14.5 4.3 2.5"/>
                <path d="m19.1 7-4.3 2.5"/>
                <path d="m9.2 14.5-4.3 2.5"/>
                <circle cx="12" cy="12" r="2.8"/>
              </svg>
            </div>
          </div>
          <div class="pillar-text-content">
            <h3 class="pillar-title">TÉCNICA</h3>
            <p class="pillar-keywords">Control · Pase · Conducción · Remate</p>
            <p class="pillar-desc">Dominamos los fundamentos del juego mediante práctica constante, precisión y repetición.</p>
          </div>
        </div>
      </article>

      <!-- 02 DISCIPLINA -->
      <article class="pillar-col card-yellow">
        <div class="pillar-bg-wrap"><img class="pillar-bg-img" src="assets/img/f3.jpg" alt="Disciplina"></div>
        <div class="pillar-content-overlay">
          <div class="pillar-icon-wrap">
            <svg class="pillar-hex" viewBox="0 0 100 115" aria-hidden="true">
              <polygon points="50 3, 95 28.75, 95 86.25, 50 112, 5 86.25, 5 28.75"/>
            </svg>
            <div class="pillar-symbol">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3 20 6v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V6l8-3z"/>
                <path d="m8.5 12 2.2 2.2 4.8-5"/>
              </svg>
            </div>
          </div>
          <div class="pillar-text-content">
            <h3 class="pillar-title">DISCIPLINA</h3>
            <p class="pillar-keywords">Puntualidad · Esfuerzo · Respeto</p>
            <p class="pillar-desc">Construimos hábitos, compromiso y respeto que trascienden la cancha.</p>
          </div>
        </div>
      </article>

      <!-- 03 COMPETENCIA -->
      <article class="pillar-col card-red">
        <div class="pillar-bg-wrap"><img class="pillar-bg-img" src="assets/img/f2.jpg" alt="Competencia"></div>
        <div class="pillar-content-overlay">
          <div class="pillar-icon-wrap">
            <svg class="pillar-hex" viewBox="0 0 100 115" aria-hidden="true">
              <polygon points="50 3, 95 28.75, 95 86.25, 50 112, 5 86.25, 5 28.75"/>
            </svg>
            <div class="pillar-symbol">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 4h12v6a6 6 0 0 1-12 0V4z"/>
                <path d="M6 7H4.5a2.5 2.5 0 0 0 0 5H6"/>
                <path d="M18 7h1.5a2.5 2.5 0 0 1 0 5H18"/>
                <path d="M12 16v4"/>
                <path d="M8 21h8"/>
              </svg>
            </div>
          </div>
          <div class="pillar-text-content">
            <h3 class="pillar-title">COMPETENCIA</h3>
            <p class="pillar-keywords">Partidos · Torneos · Desarrollo</p>
            <p class="pillar-desc">Llevamos lo aprendido a partidos y torneos para crecer frente a rivales reales.</p>
          </div>
        </div>
      </article>
`;

const startIndex = html.indexOf('<!-- 01 TÉCNICA -->');
const sectionEnd = html.indexOf('</section>', startIndex);
const endIndex = html.lastIndexOf('</div>', sectionEnd - 1);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = html.substring(0, startIndex) + newCards + '\n    ' + html.substring(endIndex);
  fs.writeFileSync('index.html', newHtml);
  console.log('Success!');
} else {
  console.log('Markers not found');
}
