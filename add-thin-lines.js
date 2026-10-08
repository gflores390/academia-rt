const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');

const leftBeamsHtml = `
        <div class="beam beam-blue-dark" data-speed="0.25"></div>
        <div class="beam beam-blue-light" data-speed="0.1"></div>
        <div class="beam beam-red" data-speed="0.35"></div>
        <!-- Lineas delgadas sin degradar -->
        <div class="beam beam-thin beam-thin-yellow" data-speed="0.45"></div>
        <div class="beam beam-thin beam-thin-white" data-speed="0.3"></div>
        <div class="beam beam-thin beam-thin-red" data-speed="0.2"></div>
`;

const rightBeamsHtml = `
        <div class="beam beam-blue-dark" data-speed="0.2"></div>
        <div class="beam beam-yellow" data-speed="0.4"></div>
        <div class="beam beam-blue-light" data-speed="0.15"></div>
        <!-- Lineas delgadas sin degradar -->
        <div class="beam beam-thin beam-thin-yellow" data-speed="0.35"></div>
        <div class="beam beam-thin beam-thin-white" data-speed="0.25"></div>
        <div class="beam beam-thin beam-thin-red" data-speed="0.45"></div>
`;

html = html.replace(/<div class="beam-group beam-left">[\s\S]*?<\/div>/, `<div class="beam-group beam-left">${leftBeamsHtml}      </div>`);
html = html.replace(/<div class="beam-group beam-right">[\s\S]*?<\/div>/, `<div class="beam-group beam-right">${rightBeamsHtml}      </div>`);

fs.writeFileSync('index.html', html);


// 2. UPDATE CSS
let css = fs.readFileSync('css/components.css', 'utf8');

const newCSS = `

/* ================== LINEAS DELGADAS SOLIDAS ================== */
.beam-thin {
  height: 450px;
  border-radius: 0;
  opacity: 0.8;
}

.beam-thin-yellow {
  background: #ffcc00;
  width: 2px;
  left: 60px;
  top: 80px;
}

.beam-thin-white {
  background: rgba(255, 255, 255, 0.7);
  width: 1px;
  left: 115px;
  top: -40px;
}

.beam-thin-red {
  background: #ff0033;
  width: 3px;
  left: -5px;
  top: 120px;
}

/* Espejo Lado Derecho */
.beam-right .beam-thin-yellow { left: auto; right: 60px; }
.beam-right .beam-thin-white { left: auto; right: 115px; }
.beam-right .beam-thin-red { left: auto; right: -5px; }
`;

if (!css.includes('.beam-thin-yellow')) {
  css += newCSS;
  fs.writeFileSync('css/components.css', css);
}

console.log('Added thin solid lines');
