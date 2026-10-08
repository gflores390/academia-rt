const fs = require('fs');

// 1. Update HTML
let html = fs.readFileSync('index.html', 'utf8');

const oldHtml = `<div class="entrenamos-frame-img">
              <img src="assets/img/coach_training_new.jpg" alt="Entrenamiento en Nuevas Estrellas" loading="lazy">
            </div>`;

const newHtml = `<div class="entrenamos-collage">
              <div class="collage-item collage-item-1">
                <img src="assets/img/alto_football_1.jpg" alt="Niños de El Alto jugando" loading="lazy">
              </div>
              <div class="collage-item collage-item-2">
                <img src="assets/img/alto_football_2.jpg" alt="Niña de El Alto jugando" loading="lazy">
              </div>
              <div class="collage-item collage-item-3">
                <img src="assets/img/alto_football_3.jpg" alt="Partido de jóvenes en El Alto" loading="lazy">
              </div>
              <div class="collage-item collage-item-4">
                <img src="assets/img/alto_football_4.jpg" alt="Niño celebrando gol" loading="lazy">
              </div>
            </div>`;

html = html.replace(oldHtml, newHtml);
fs.writeFileSync('index.html', html);
console.log('Updated HTML with collage');

// 2. Update CSS
let css = fs.readFileSync('css/components.css', 'utf8');

const newCss = `
/* Collage de 4 imagenes para Entrenamos */
.entrenamos-collage {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  aspect-ratio: 4 / 3;
  position: relative;
  z-index: 5;
}
.collage-item {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.1);
}
.collage-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
/* Posiciones asimetricas para dar toque de diseño moderno */
.collage-item-1 { top: 20px; }
.collage-item-2 { top: -10px; }
.collage-item-3 { top: -20px; }
.collage-item-4 { top: 10px; }

/* Efecto Hover: Flotacion */
.collage-item:hover {
  transform: translateY(-12px) scale(1.05) !important;
  box-shadow: 0 25px 50px rgba(0,0,0,0.7);
  z-index: 10;
  border-color: #ffcc00;
}
.collage-item:hover img {
  transform: scale(1.15);
}
`;

css += '\n' + newCss;
fs.writeFileSync('css/components.css', css);
console.log('Added collage CSS to components.css');
