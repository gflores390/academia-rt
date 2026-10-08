const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');

const correctBeams = `    <!-- SPORTS BEAMS (PARALLAX DECO) -->
    <div class="sports-beams" aria-hidden="true">
      <div class="beam-group beam-left">
        <div class="beam beam-blue-dark" data-speed="0.25"></div>
        <div class="beam beam-red" data-speed="0.35"></div>
        <div class="beam beam-thin beam-thin-yellow" data-speed="0.45"></div>
        <div class="beam beam-thin beam-thin-red" data-speed="0.2"></div>
      </div>
      <div class="beam-group beam-right">
        <div class="beam beam-blue-dark" data-speed="0.2"></div>
        <div class="beam beam-yellow" data-speed="0.4"></div>
        <div class="beam beam-thin beam-thin-yellow" data-speed="0.35"></div>
        <div class="beam beam-thin beam-thin-red" data-speed="0.45"></div>
      </div>
    </div>`;

const regex = /    <!-- SPORTS BEAMS \(PARALLAX DECO\) -->[\s\S]*?(?=      <div class="container">)/;
html = html.replace(regex, correctBeams + '\n\n');
fs.writeFileSync('index.html', html);


// 2. UPDATE CSS
let css = fs.readFileSync('css/components.css', 'utf8');

// Desalinear los grupos (uno más arriba, otro más abajo)
css = css.replace('.beam-group {\r\n  position: absolute;\r\n  top: 30%;', '.beam-group {\r\n  position: absolute;');
css = css.replace('.beam-group {\n  position: absolute;\n  top: 30%;', '.beam-group {\n  position: absolute;');

css = css.replace('.beam-left { \r\n  left: 0; \r\n}', '.beam-left { \r\n  left: 0;\r\n  top: 45%; \r\n}');
css = css.replace('.beam-left { \n  left: 0; \n}', '.beam-left { \n  left: 0;\n  top: 45%; \n}');

css = css.replace('.beam-right { \r\n  right: 0; \r\n}', '.beam-right { \r\n  right: 0;\r\n  top: 15%; \r\n}');
css = css.replace('.beam-right { \n  right: 0; \n}', '.beam-right { \n  right: 0;\n  top: 15%; \n}');

fs.writeFileSync('css/components.css', css);
console.log('Done');
