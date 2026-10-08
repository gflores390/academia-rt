const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const additionalBeams = `
            <div class="beam beam-thin beam-thin-blue" data-speed="0.38"></div>
            <div class="beam beam-thin beam-thin-yellow-2" data-speed="0.22"></div>`;

html = html.replace(/(<div class="beam-group[^>]*>)/g, `$1${additionalBeams}`);

fs.writeFileSync('index.html', html);
console.log('Added 2 extra thin beams to every group');
