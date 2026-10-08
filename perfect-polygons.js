const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

const regex = /\/\* Poligonos irregulares[\s\S]*?\.collage-item-4 [^}]+\}/;

const perfectPolygons = `/* Poligonos irregulares (Diseño preciso para paralelogramo) */
.collage-item-1 { clip-path: polygon(0 0, 65% 0, 49% 49%, 0 35%); }
.collage-item-2 { clip-path: polygon(67% 0, 100% 0, 100% 65%, 51% 49%); }
.collage-item-3 { clip-path: polygon(0 37%, 49% 51%, 35% 100%, 0 100%); }
.collage-item-4 { clip-path: polygon(51% 51%, 100% 67%, 100% 100%, 37% 100%); }`;

if (regex.test(css)) {
  css = css.replace(regex, perfectPolygons);
  fs.writeFileSync('css/components.css', css);
  console.log('Updated to mathematically perfect polygons');
} else {
  console.log('Regex failed');
}
