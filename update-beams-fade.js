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
  top: 30%;
  bottom: 0;
  width: 40vw; /* Más ancho para permitir el difuminado sin cortar de golpe */
  max-width: 500px;
}

.beam-left { 
  left: 0; 
}
.beam-right { 
  right: 0; 
}

.beam {
  position: absolute;
  height: 400px; /* Largo suficiente para que el gradiente se difumine bien */
  top: 0;
  transform-origin: center;
  will-change: transform;
  border-radius: 0;
}

/* Lado Izquierdo: difumina hacia abajo/derecha */
.beam-left .beam { transform: rotate(35deg) translateY(var(--py, 0px)); }
/* Lado Derecho: difumina hacia abajo/izquierda */
.beam-right .beam { transform: rotate(-35deg) translateY(var(--py, 0px)); }

/* Gradientes suaves que terminan en transparente */
.beam-blue-dark {
  background: linear-gradient(to bottom, #0055ff 0%, transparent 80%);
  width: 80px;
  left: -20px;
  opacity: 0.8;
}

.beam-blue-light {
  background: linear-gradient(to bottom, #00ccff 0%, transparent 70%);
  width: 15px;
  left: 80px;
  top: 50px; 
  opacity: 0.9;
}

.beam-red {
  background: linear-gradient(to bottom, #ff0033 0%, transparent 85%);
  width: 35px;
  left: 100px;
  top: 20px;
  opacity: 0.9;
}

.beam-yellow {
  background: linear-gradient(to bottom, #ffcc00 0%, transparent 90%);
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
