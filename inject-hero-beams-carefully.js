const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const beamsHtml = `
        <!-- SPORTS BEAMS (PARALLAX DECO) -->
        <div class="sports-beams" aria-hidden="true" style="z-index: 0; opacity: 0.8;">
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
        </div>
`;

// Insert the beams right after the hero-media closing div
const target = '<div class="hero-media" data-parallax-hero aria-hidden="true">\n            <img class="hero-bg-img" src="assets/img/banner_1919x900.png" alt="" decoding="async">\n          </div>';
const replacement = target + '\n' + beamsHtml;

if (html.includes(target)) {
  html = html.replace(target, replacement);
  fs.writeFileSync('index.html', html);
  console.log('Successfully injected beams into hero');
} else {
  console.log('Target string not found in index.html, trying alternative regex...');
  const match = html.match(/<div class="hero-media"[^>]*>[\s\S]*?<\/div>/);
  if (match) {
    html = html.replace(match[0], match[0] + '\n' + beamsHtml);
    fs.writeFileSync('index.html', html);
    console.log('Successfully injected beams into hero with regex');
  } else {
    console.log('Failed to find hero media');
  }
}
