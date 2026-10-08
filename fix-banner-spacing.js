const fs = require('fs');

// 1. Remove the "01" watermark from index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<div class="entrenamos-bg-number"[^>]*>01<\/div>/g, '');
fs.writeFileSync('index.html', html);
console.log('Removed 01 watermark from index.html');

// 2. Remove margin-top and margin-bottom from .entrenamos-banner
let css = fs.readFileSync('css/components.css', 'utf8');
css = css.replace(/margin-top: 4rem;\r\n/g, 'margin-top: 0;\r\n');
css = css.replace(/margin-bottom: 2rem;\r\n/g, 'margin-bottom: 0;\r\n');
css = css.replace(/margin-top: 4rem;\n/g, 'margin-top: 0;\n');
css = css.replace(/margin-bottom: 2rem;\n/g, 'margin-bottom: 0;\n');
fs.writeFileSync('css/components.css', css);
console.log('Removed margins from .entrenamos-banner in components.css');
