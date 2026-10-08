const fs = require('fs');

// 1. Update HTML to remove 'on-light' from the section
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<section class="section on-light escuela" id="escuela" data-rail="Escuela">', '<section class="section escuela" id="escuela" data-rail="Escuela">');
fs.writeFileSync('index.html', html);

// 2. Update CSS to halve the padding-block ("margen lila")
let css = fs.readFileSync('css/sections/escuela.css', 'utf8');

const regexEscuela = /\.escuela\s*\{[\s\S]*?\}/;
css = css.replace(regexEscuela, `.escuela {
  padding-block: clamp(25px, 3.5vw, 45px); /* Reducido a la mitad */
  background: #00163B !important;
  position: relative;
  overflow: hidden;
}`);

// If they want the dark gradient back so it looks like the reference image, I will add it back, but they specifically said "ese degrade de la targeta de abajo eliminalo" in the previous prompt. 
// I will just make sure the padding is reduced.
fs.writeFileSync('css/sections/escuela.css', css);
console.log('Success!');
