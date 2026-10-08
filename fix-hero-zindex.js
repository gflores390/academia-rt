const fs = require('fs');

let css = fs.readFileSync('css/sections/hero.css', 'utf8');

// Ensure hero text is always above the background beams
css = css.replace('.hero-titulo {', '.hero-titulo {\n  position: relative;\n  z-index: 3;');
css = css.replace('.hero-content {', '.hero-content {\n  position: relative;\n  z-index: 3;');

fs.writeFileSync('css/sections/hero.css', css);
console.log('Updated hero text z-index');
