const fs = require('fs');

let css = fs.readFileSync('css/components.css', 'utf8');

// Push beams outward globally so they don't overlap the text in any section
css = css.replace(/\.beam-left \{ \r\n  left: 0;/g, '.beam-left { \r\n  left: -8vw;');
css = css.replace(/\.beam-left \{ \n  left: 0;/g, '.beam-left { \n  left: -8vw;');

css = css.replace(/\.beam-right \{ \r\n  right: 0;/g, '.beam-right { \r\n  right: -8vw;');
css = css.replace(/\.beam-right \{ \n  right: 0;/g, '.beam-right { \n  right: -8vw;');

fs.writeFileSync('css/components.css', css);
console.log('Pushed beams outward globally');
