const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const originalHero = `    <header class="hero on-navy" id="inicio" data-rail="Inicio">
        <div class="hero-media" data-parallax-hero aria-hidden="true">
          <img class="hero-bg-img" src="assets/img/banner_1919x900.png" alt="" decoding="async">
        </div>
  
        <!-- letra0: FÚTBOL / Formación de Grandes Talentos – lado izquierdo -->
        <!-- <img class="hero-deco--titulo" src="assets/img/letra0.png" alt="Formación de Grandes Talentos" loading="lazy"> -->
        
        <h1 class="hero-titulo">
          <span class="hero-titulo__linea">Disciplina.</span>
          <span class="hero-titulo__linea hero-titulo__linea--acento">Talento.</span>
          <span class="hero-titulo__linea">Futuro.</span>
        </h1>
  
        <!-- Bloque de texto + botones – lado derecho -->
        <div class="hero-content" aria-label="Presentación de la academia">
          <p class="hero-desc">
            Escuela de fútbol en La Paz para niños y jóvenes de todas
            las edades. Aquí, formamos jugadores con valores, técnica
            y mentalidad ganadora.
          </p>
          <div class="hero-btns">
            <a class="btn btn-primary btn-pelota" href="https://wa.me/" data-wa>
              <img class="icon-ball" src="assets/icons/iconpelota.png" alt="Balón" width="22" height="22" style="object-fit: contain;">
              CLASE DE PRUEBA
            </a>
            <a class="btn btn-outline" href="#ruta">
              VER RUTA &rarr;
            </a>
          </div>
        </div>

        <img class="hero-deco--rincon" src="assets/img/letra1.png" alt="Sueña Entrena Logra" loading="lazy">
    </header>`;

const regex = /    <header class="hero on-navy" id="inicio" data-rail="Inicio">[\s\S]*?<\/header>/;

if (html.match(regex)) {
  html = html.replace(regex, originalHero);
  fs.writeFileSync('index.html', html);
  console.log('Restored absolute original hero');
} else {
  console.log('Regex failed to find hero header');
}
