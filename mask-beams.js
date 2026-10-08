const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// Add mask-image to sports-beams to fade out edges smoothly
if (!css.includes('mask-image: linear-gradient')) {
  css = css.replace('.sports-beams {\r\n  position: absolute;\r\n  inset: 0;\r\n  pointer-events: none;\r\n  z-index: 1;\r\n  overflow: hidden; \r\n}', 
`.sports-beams {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden; 
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
}`);

  css = css.replace('.sports-beams {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  overflow: hidden; \n}', 
`.sports-beams {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden; 
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
}`);
}

// Adjust beams left and right so they don't stick out too much
// Reset beam heights to 400px since the mask handles fading now!
css = css.replace(/height: 800px; \/\* Largo suficiente/g, 'height: 450px; /* Largo suficiente');
css = css.replace(/height: 800px;/g, 'height: 450px;');

fs.writeFileSync('css/components.css', css);
console.log('Added mask-image to components.css');
