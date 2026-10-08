const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

const regex = /\/\* =========================================================\r?\n   SPORTS BEAMS[\s\S]*?(?=\.section > \.container)/;

const newBeamsCSS = `/* =========================================================
   SPORTS BEAMS (PARALLAX DECORATION)
========================================================= */
.sports-beams {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden; /* Corta los rayos para que no salgan de la seccion */
}

.beam-group {
  position: absolute;
  top: -20%;
  bottom: -20%;
  width: 30vw; /* Solo ocupan el 30% del borde de la pantalla, no llegan al centro */
  max-width: 400px;
}

.beam-left { 
  left: 0; 
}
.beam-right { 
  right: 0; 
}

.beam {
  position: absolute;
  height: 150%;
  top: -25%;
  transform-origin: center;
  will-change: transform;
  /* Bordes afilados, sin blur, como en la imagen */
  border-radius: 0;
  filter: none; 
}

.beam-left .beam { transform: rotate(35deg) translateY(var(--py, 0px)); }
.beam-right .beam { transform: rotate(-35deg) translateY(var(--py, 0px)); }

/* Colores sólidos y afilados como en la referencia */
.beam-blue-dark {
  background: linear-gradient(180deg, #0055ff, rgba(0, 85, 255, 0.2));
  width: 150px;
  left: -60px;
  opacity: 0.8;
}

.beam-blue-light {
  background: #00ccff;
  width: 15px;
  left: 100px;
  opacity: 0.9;
}

.beam-red {
  background: linear-gradient(180deg, #ff0033, rgba(255, 0, 51, 0));
  width: 35px;
  left: 120px;
  opacity: 0.9;
}

.beam-yellow {
  background: linear-gradient(180deg, #ffcc00, rgba(255, 204, 0, 0));
  width: 50px;
  left: -20px;
  opacity: 1;
}

/* Espejo para el lado derecho */
.beam-right .beam-blue-dark { left: auto; right: -60px; }
.beam-right .beam-blue-light { left: auto; right: 100px; }
.beam-right .beam-yellow { left: auto; right: -20px; }
.beam-right .beam-red { left: auto; right: 120px; } /* Añadimos el rojo al lado derecho tambien si hace falta o lo ocultamos */

`;

if (css.match(regex)) {
  css = css.replace(regex, newBeamsCSS);
  fs.writeFileSync('css/components.css', css);
  console.log('Replaced successfully');
} else {
  console.log('Regex failed');
}
