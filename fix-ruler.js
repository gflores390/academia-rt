const fs = require('fs');

// Fix the HTML by putting back the class and id
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<section>', '<section class="section escuela" id="escuela" data-rail="Escuela">');
fs.writeFileSync('index.html', html);

// Hide the ruler in CSS for this specific section
let css = fs.readFileSync('css/sections/escuela.css', 'utf8');
if (!css.includes('.escuela::before')) {
  css += `\n\n/* Ocultar la regla superior (adornada en components.css) solo para esta sección */\n.escuela::before {\n  display: none !important;\n}\n`;
  fs.writeFileSync('css/sections/escuela.css', css);
}

console.log('Fixed HTML and added CSS rule.');
