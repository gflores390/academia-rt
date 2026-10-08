const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const correctHeroContent = `        <div class="container hero-grid">
          <div class="hero-copy">
            <!-- letra0: FÚTBOL / Formación de Grandes Talentos -->
            <h1 class="hero-titulo">
              <span class="hero-titulo__linea">Disciplina.</span>
              <span class="hero-titulo__linea hero-titulo__linea--acento">Talento.</span>
              <span class="hero-titulo__linea">Futuro.</span>
            </h1>
      
            <!-- Bloque de texto + botones -->
            <div class="hero-content" aria-label="Presentación de la academia">
              <p class="hero-desc">
                Escuela de fútbol en La Paz para niños y jóvenes de todas
                las edades. Aquí, formamos jugadores con valores, técnica
                y mentalidad ganadora.
              </p>
              <div class="hero-btns">
                <a class="btn btn-primary btn-pelota" href="https://wa.me/" data-wa>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="12 6 16 9 14.5 14 9.5 14 8 9"></polygon>
                    <line x1="12" y1="6" x2="12" y2="2"></line>
                    <line x1="16" y1="9" x2="21" y2="8"></line>
                    <line x1="14.5" y1="14" x2="17" y2="20"></line>
                    <line x1="9.5" y1="14" x2="7" y2="20"></line>
                    <line x1="8" y1="9" x2="3" y2="8"></line>
                  </svg>
                  CLASE DE PRUEBA
                </a>
                <a class="btn btn-outline" href="#ruta">
                  VER RUTA &rarr;
                </a>
              </div>
            </div>
          </div>
          <div class="hero-crest">
            <img src="assets/img/letra1.png" alt="Sueña Entrena Logra" loading="lazy">
          </div>
        </div>`;

// Delete the broken restored part
const regex = /        <!-- letra0: Formación de Grandes Talentos -->[\s\S]*?(?=      <\/header>)/;
if (html.match(regex)) {
  html = html.replace(regex, correctHeroContent + '\n');
  fs.writeFileSync('index.html', html);
  console.log('Restored correct hero grid');
} else {
  console.log('Regex failed');
}
