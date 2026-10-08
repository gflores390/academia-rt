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
  overflow: hidden; 
}

.beam-group {
  position: absolute;
  top: 40%; /* Bajan para no llegar arriba */
  height: 400px; /* Altura máxima del bloque de rayas */
  width: 15vw; /* Entran muy poco en la pantalla (unos "dos centímetros") */
  max-width: 150px;
}

.beam-left { 
  left: 0; 
}
.beam-right { 
  right: 0; 
}

.beam {
  position: absolute;
  height: 250px; /* Rayas muy cortas, no cruzan toda la pantalla */
  top: 0;
  transform-origin: center;
  will-change: transform;
  border-radius: 0;
}

/* Lado Izquierdo */
.beam-left .beam { transform: rotate(35deg) translateY(var(--py, 0px)); }
/* Lado Derecho */
.beam-right .beam { transform: rotate(-35deg) translateY(var(--py, 0px)); }

.beam-blue-dark {
  background: #0055ff;
  width: 80px;
  left: -20px;
  opacity: 0.8;
}

.beam-blue-light {
  background: #00ccff;
  width: 15px;
  left: 80px;
  top: 50px; /* Desfasadas para que no parezcan un bloque cuadrado */
  opacity: 0.9;
}

.beam-red {
  background: #ff0033;
  width: 35px;
  left: 100px;
  top: 20px;
  opacity: 0.9;
}

.beam-yellow {
  background: #ffcc00;
  width: 25px;
  left: 20px;
  top: -30px;
  opacity: 1;
}

/* Posiciones Espejo Lado Derecho */
.beam-right .beam-blue-dark { left: auto; right: -20px; }
.beam-right .beam-blue-light { left: auto; right: 80px; }
.beam-right .beam-yellow { left: auto; right: 20px; }
.beam-right .beam-red { left: auto; right: 100px; }

`;

if (css.match(regex)) {
  css = css.replace(regex, newBeamsCSS);
  fs.writeFileSync('css/components.css', css);
  console.log('Replaced successfully');
} else {
  console.log('Regex failed');
}
