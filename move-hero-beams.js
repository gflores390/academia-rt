const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The sports-beams block in the hero is right after hero-media
const regex = /<div class="sports-beams" aria-hidden="true" style="z-index: 10; opacity: 1;">[\s\S]*?(?=<!-- letra0:)/;

const beamsHtmlWithPos = `<div class="sports-beams" aria-hidden="true" style="z-index: 10; opacity: 1;">
          <div class="beam-group beam-left" style="top: -10%;">
            <div class="beam beam-blue-dark" data-speed="0.25"></div>
            <div class="beam beam-red" data-speed="0.35"></div>
            <div class="beam beam-thin beam-thin-yellow" data-speed="0.45"></div>
            <div class="beam beam-thin beam-thin-red" data-speed="0.2"></div>
          </div>
          <div class="beam-group beam-right" style="top: -20%;">
            <div class="beam beam-blue-dark" data-speed="0.2"></div>
            <div class="beam beam-yellow" data-speed="0.4"></div>
            <div class="beam beam-thin beam-thin-yellow" data-speed="0.35"></div>
            <div class="beam beam-thin beam-thin-red" data-speed="0.45"></div>
          </div>
        </div>
        `;

if (html.match(regex)) {
  html = html.replace(regex, beamsHtmlWithPos);
  fs.writeFileSync('index.html', html);
  console.log('Successfully adjusted inline styles for hero beams');
} else {
  console.log('Regex failed to match');
}
