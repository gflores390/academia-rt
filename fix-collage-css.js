const fs = require('fs');
let css = fs.readFileSync('css/components.css', 'utf8');

// The file has MULTIPLE blocks for .entrenamos-collage now!
// We need to strip EVERYTHING related to .entrenamos-collage and .collage-item
// And then write the clean version.

// 1. Remove all old blocks using a safe regex or just manual string splitting
// Let's find the first instance of "/* Collage de 4 imagenes para Entrenamos" and delete from there to the end of the file!
const startIndex = css.indexOf('/* Collage de 4 imagenes para Entrenamos');
if (startIndex !== -1) {
  css = css.substring(0, startIndex); // Delete all collage CSS
}

const cleanCollageCss = `
/* Collage de 4 imagenes para Entrenamos (Estilo Fragmentado/Pentagono) */
.entrenamos-collage {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: block;
}
.collage-item {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  background: #010f2c; /* background color for gaps */
  border-radius: 0; /* Remove rounded corners */
  border: none;
  box-shadow: none;
}
.collage-item img {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.4s ease;
}

/* Poligonos irregulares con un punto central en (55%, 45%) para dar el efecto de cristal roto / red */
.collage-item-1 { clip-path: polygon(0 0, 58% 0, 53% 43%, 0 68%); }
.collage-item-2 { clip-path: polygon(62% 0, 100% 0, 100% 38%, 57% 43%); }
.collage-item-3 { clip-path: polygon(0 72%, 53% 47%, 38% 100%, 0 100%); }
.collage-item-4 { clip-path: polygon(57% 47%, 100% 42%, 100% 100%, 42% 100%); }

/* Efecto Hover: Flotacion de la pieza completa */
.collage-item:hover {
  transform: scale(1.04);
  z-index: 10;
}
.collage-item:hover img {
  transform: scale(1.1);
  filter: brightness(1.15);
}
`;

css += cleanCollageCss;

fs.writeFileSync('css/components.css', css);
console.log('Cleaned and re-applied collage CSS');
