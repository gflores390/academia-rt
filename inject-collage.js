const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const newCollage = `<div class="entrenamos-collage">
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

// Replace the image inside entrenamos-frame-img with the new collage
// The regex accounts for any whitespace/newlines
const regex = /(<div class="entrenamos-frame-img">)\s*<img[^>]*>\s*(<\/div>)/i;

if (regex.test(html)) {
  html = html.replace(regex, `$1\n${newCollage}\n$2`);
  fs.writeFileSync('index.html', html);
  console.log('Successfully injected collage!');
} else {
  console.log('Regex failed to match. Current entrenamos-frame-img might be modified already.');
}
