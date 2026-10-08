const fs = require('fs');
let css = fs.readFileSync('css/components.css', 'utf8');

const regex = /\/\* Poligonos irregulares[\s\S]*?\.collage-item-4 [^}]+\}/;

const precisePolygons = `/* Poligonos irregulares (Diseño preciso para paralelogramo) */
.collage-item-1 { clip-path: polygon(0 0, 39% 0, 59% 39%, 0 69%); }
.collage-item-2 { clip-path: polygon(41% 0, 100% 0, 100% 29%, 61% 39%); }
.collage-item-3 { clip-path: polygon(0 71%, 59% 41%, 69% 100%, 0 100%); }
.collage-item-4 { clip-path: polygon(61% 41%, 100% 31%, 100% 100%, 71% 100%); }`;

if (regex.test(css)) {
  css = css.replace(regex, precisePolygons);
  fs.writeFileSync('css/components.css', css);
  console.log('Updated to precise polygons');
} else {
  console.log('Regex failed');
}
