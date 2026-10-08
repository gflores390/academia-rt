const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// Increase beam height for smoother fades
css = css.replace(/height: 400px; \/\* Largo suficiente/g, 'height: 800px; /* Largo suficiente');
css = css.replace(/height: 450px;/g, 'height: 800px;');

// Change to symmetric gradients
css = css.replace(/background: linear-gradient\(to top, #0055ff 0%, transparent 80%\);/g, 'background: linear-gradient(to top, transparent 0%, #0055ff 50%, transparent 100%);');
css = css.replace(/background: linear-gradient\(to top, #00ccff 0%, transparent 70%\);/g, 'background: linear-gradient(to top, transparent 0%, #00ccff 50%, transparent 100%);');
css = css.replace(/background: linear-gradient\(to top, #ff0033 0%, transparent 85%\);/g, 'background: linear-gradient(to top, transparent 0%, #ff0033 50%, transparent 100%);');
css = css.replace(/background: linear-gradient\(to top, #ffcc00 0%, transparent 90%\);/g, 'background: linear-gradient(to top, transparent 0%, #ffcc00 50%, transparent 100%);');

// Thin lines also get symmetric gradients
css = css.replace(/background: #ffcc00;/g, 'background: linear-gradient(to top, transparent 0%, #ffcc00 50%, transparent 100%);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.7\);/g, 'background: linear-gradient(to top, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%);');
css = css.replace(/background: #ff0033;/g, 'background: linear-gradient(to top, transparent 0%, #ff0033 50%, transparent 100%);');

fs.writeFileSync('css/components.css', css);
console.log('Updated CSS with symmetric gradients');
