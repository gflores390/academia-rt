const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

css = css.replace(/linear-gradient\(to bottom, /g, 'linear-gradient(to top, ');

fs.writeFileSync('css/components.css', css);
console.log('Flipped gradients');
