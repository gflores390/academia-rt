const fs = require('fs');

// 1. UPDATE HTML
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

// Insert the beams right after <div class="container"> inside <section class="section escuela"...>
const marker = '<section class="section escuela" id="escuela" data-rail="Escuela">\r\n\r\n  <div class="container">';
if (html.includes(marker)) {
  html = html.replace(marker, marker + '\n' + beamsHtml);
} else {
  const marker2 = '<section class="section escuela" id="escuela" data-rail="Escuela">\n\n  <div class="container">';
  html = html.replace(marker2, marker2 + '\n' + beamsHtml);
}

fs.writeFileSync('index.html', html);


// 2. UPDATE CSS
let css = fs.readFileSync('css/components.css', 'utf8');

const beamsCSS = `
/* =========================================================
   SPORTS BEAMS (PARALLAX DECORATION)
========================================================= */
.sports-beams {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.beam-group {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 350px;
}

.beam-left { left: -50px; }
.beam-right { right: -50px; }

.beam {
  position: absolute;
  height: 200%;
  top: -50%;
  transform-origin: center;
  will-change: transform;
  border-radius: 100px;
  filter: blur(1px);
}

.beam-left .beam { transform: rotate(35deg) translateY(var(--py, 0px)); }
.beam-right .beam { transform: rotate(-35deg) translateY(var(--py, 0px)); }

/* Colors - Predominantly blue */
.beam-blue-dark {
  background: linear-gradient(180deg, rgba(2, 40, 102, 0.9), transparent);
  width: 180px;
  left: 20px;
  opacity: 0.8;
  box-shadow: 0 0 40px rgba(2, 40, 102, 0.6);
}

.beam-blue-light {
  background: linear-gradient(180deg, rgba(0, 85, 255, 0.7), transparent);
  width: 50px;
  left: 180px;
  opacity: 0.5;
}

.beam-red {
  background: linear-gradient(180deg, rgba(255, 0, 51, 0.9), transparent);
  width: 15px;
  left: 220px;
  opacity: 0.7;
}

.beam-yellow {
  background: linear-gradient(180deg, rgba(255, 204, 0, 0.9), transparent);
  width: 20px;
  left: -10px;
  opacity: 0.8;
}

.beam-right .beam-blue-dark { left: auto; right: 20px; }
.beam-right .beam-blue-light { left: auto; right: 180px; }
.beam-right .beam-yellow { left: auto; right: 220px; }

.section > .container {
  position: relative;
  z-index: 2;
}
`;

if (!css.includes('.sports-beams')) {
  css += '\n' + beamsCSS;
  fs.writeFileSync('css/components.css', css);
}

// 3. UPDATE JS
let js = fs.readFileSync('js/parallax.js', 'utf8');

if (!js.includes('.beam')) {
  // Add beams initialization
  js = js.replace("const heroMedia = document.querySelector('[data-parallax-hero]');", 
    "const heroMedia = document.querySelector('[data-parallax-hero]');\n  const beams = [...document.querySelectorAll('.beam')].map((el) => ({ el, speed: parseFloat(el.dataset.speed) || 0.2 }));");

  // Add beams update logic inside update()
  const jsUpdateMarker = "    banners.forEach(({ el, img, speed }) => {";
  const beamsUpdateJS = `
    beams.forEach(({ el, speed }) => {
      const section = el.closest('.section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      const offset = (rect.top - vh / 2) * -speed;
      el.style.setProperty('--py', \`\${offset.toFixed(1)}px\`);
    });
`;
  js = js.replace(jsUpdateMarker, beamsUpdateJS + '\n' + jsUpdateMarker);
  fs.writeFileSync('js/parallax.js', js);
}

console.log('Success!');
