const fs = require('fs');

// Copy the image
const srcImg = 'C:\\Users\\Lupe\\.gemini\\antigravity-ide\\brain\\ec221ed4-e0b9-4086-ad3a-7bd4cc6f5e6f\\entrenamiento_coach_1791303360652.jpg';
const destImg = 'assets/img/coach_training_new.jpg';
fs.copyFileSync(srcImg, destImg);

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');

const newBannerHtml = `    <!-- 2. BANNER: ENTRENAMOS PARA COMPETIR -->
    <div class="entrenamos-banner" data-reveal>
      <div class="entrenamos-bg-number" aria-hidden="true">01</div>
      
      <div class="container entrenamos-container">
        <div class="entrenamos-copy">
          <span class="entrenamos-subtitle">NUESTROS ENTRENAMIENTOS</span>
          <h2 class="entrenamos-title">
            <span class="text-white">ENTRENAMOS</span><br>
            <span class="text-yellow">PARA COMPETIR</span>
          </h2>
          <p class="entrenamos-lead">
            Formación, disciplina y trabajo en equipo para alcanzar grandes objetivos.
          </p>
          <p class="entrenamos-sub">
            En Nuevas Estrellas entrenan juntos niños y jóvenes que quieren mejorar su fútbol. Cada jugador parte de donde está y sube a su ritmo, con un trabajo técnico pensado para el futuro.
          </p>
          <div class="entrenamos-actions">
            <a href="#ruta" class="btn btn-yellow-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 6 16 9 14.5 14 9.5 14 8 9"></polygon>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="16" y1="9" x2="21" y2="8"></line>
                <line x1="14.5" y1="14" x2="17" y2="20"></line>
                <line x1="9.5" y1="14" x2="7" y2="20"></line>
                <line x1="8" y1="9" x2="3" y2="8"></line>
              </svg>
              Conoce nuestra metodología &rarr;
            </a>
          </div>
        </div>
        
        <div class="entrenamos-media">
          <div class="entrenamos-frame-deco-red"></div>
          <div class="entrenamos-frame-deco-yellow"></div>
          <div class="entrenamos-frame-img">
            <img src="assets/img/coach_training_new.jpg" alt="Entrenamiento en Nuevas Estrellas" loading="lazy">
          </div>
        </div>
      </div>
    </div>`;

const regexBanner = /    <!-- 2\. BANNER: ENTRENAMOS PARA COMPETIR -->[\s\S]*?(?=    <!-- 3\. NUESTRAS CATEGORÍAS -->)/;
if (html.match(regexBanner)) {
  html = html.replace(regexBanner, newBannerHtml + '\n\n');
  fs.writeFileSync('index.html', html);
  console.log('HTML updated');
} else {
  console.log('Banner regex failed');
}

// 2. UPDATE CSS
let css = fs.readFileSync('css/components.css', 'utf8');

const newCSS = `

/* =========================================================
   ENTRENAMOS BANNER
========================================================= */
.entrenamos-banner {
  position: relative;
  background: #011438;
  padding: 4rem 0;
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 2rem;
  border-top: 2px solid #ffcc00;
  border-bottom: 2px solid #0055ff;
}

.entrenamos-bg-number {
  position: absolute;
  top: 50%;
  right: 40%;
  transform: translateY(-50%);
  font-size: 25rem;
  font-family: var(--font-heading);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.05);
  line-height: 1;
  z-index: 0;
  pointer-events: none;
}

.entrenamos-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.entrenamos-copy {
  flex: 1;
  max-width: 500px;
}

.entrenamos-subtitle {
  display: block;
  color: #ffcc00;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.entrenamos-subtitle::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 3px;
  background: #ffcc00;
  vertical-align: middle;
  margin-right: 10px;
}

.entrenamos-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.entrenamos-title .text-white {
  color: #ffffff;
}

.entrenamos-title .text-yellow {
  color: #ffcc00;
}

.entrenamos-lead {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.entrenamos-sub {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.btn-yellow-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffcc00;
  color: #011438;
  font-weight: 800;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  text-transform: uppercase;
}

.btn-yellow-pill:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 204, 0, 0.4);
}

.entrenamos-media {
  flex: 1.2;
  position: relative;
  height: 450px;
}

.entrenamos-frame-img {
  width: 100%;
  height: 100%;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  position: relative;
  z-index: 3;
}

.entrenamos-frame-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.entrenamos-frame-deco-yellow {
  position: absolute;
  top: 0; left: -10px; right: 0; bottom: 0;
  background: #ffcc00;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 2;
}

.entrenamos-frame-deco-red {
  position: absolute;
  top: 0; left: -20px; right: 0; bottom: 0;
  background: #ff0033;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 1;
}

@media (max-width: 900px) {
  .entrenamos-container {
    flex-direction: column;
  }
  .entrenamos-media {
    width: 100%;
    height: 300px;
  }
  .entrenamos-bg-number {
    font-size: 15rem;
    right: 10%;
  }
  .entrenamos-frame-img,
  .entrenamos-frame-deco-yellow,
  .entrenamos-frame-deco-red {
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
  }
}
`;

if (!css.includes('.entrenamos-banner')) {
  css += newCSS;
  fs.writeFileSync('css/components.css', css);
  console.log('CSS updated');
}
