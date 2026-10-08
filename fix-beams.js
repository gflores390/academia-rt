const fs = require('fs');

// 1. Move HTML
let html = fs.readFileSync('index.html', 'utf8');

const regexBeams = /    <!-- SPORTS BEAMS \(PARALLAX DECO\) -->[\s\S]*?<\/div>\r?\n\r?\n/;
const match = html.match(regexBeams);

if (match) {
  html = html.replace(match[0], '');
  // Insert before container
  const marker = '<section class="section escuela" id="escuela" data-rail="Escuela">';
  html = html.replace(marker, marker + '\n\n' + match[0]);
  fs.writeFileSync('index.html', html);
  console.log('Moved HTML');
} else {
  console.log('No match for HTML');
}

// 2. Adjust CSS to position at screen edges
let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace('.beam-left { left: -50px; }', '.beam-left { left: -10vw; }');
css = css.replace('.beam-right { right: -50px; }', '.beam-right { right: -10vw; }');
css = css.replace('width: 350px;', 'width: clamp(200px, 20vw, 400px);');

// Make the beams a bit more visible (increase opacity and width)
css = css.replace('opacity: 0.8;', 'opacity: 1; z-index: 1;');
css = css.replace('opacity: 0.5;', 'opacity: 0.8; z-index: 1;');
css = css.replace('opacity: 0.7;', 'opacity: 0.9; z-index: 1;');

// Fix z-index of .escuela so beams aren't hidden behind backgrounds
css = css.replace('z-index: 0;', 'z-index: 1;');

fs.writeFileSync('css/components.css', css);
console.log('CSS updated');
