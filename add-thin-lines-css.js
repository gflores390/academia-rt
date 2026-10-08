const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// Add new thin lines
const newCssLines = `
.beam-thin-blue {
  background: linear-gradient(to top, transparent 0%, #00ccff 50%, transparent 100%);
  width: 1px;
  left: 45px;
  top: 150px;
}

.beam-thin-yellow-2 {
  background: linear-gradient(to top, transparent 0%, #ffcc00 50%, transparent 100%);
  width: 2px;
  left: 140px;
  top: -50px;
}

/* Espejo Lado Derecho */
.beam-right .beam-thin-blue { left: auto; right: 45px; }
.beam-right .beam-thin-yellow-2 { left: auto; right: 140px; }
`;

css = css.replace(/\/\* Espejo Lado Derecho \*\//g, newCssLines + '\n/* Espejo Lado Derecho */');
fs.writeFileSync('css/components.css', css);
console.log('Added new thin lines to CSS');
