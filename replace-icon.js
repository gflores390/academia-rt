const fs = require('fs');
const newSvg = `<svg class="icon-ball" width="22" height="22" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18">
  <circle cx="128" cy="128" r="96"></circle>
  <polygon points="128 160 97.47 137.82 109.13 101.93 146.87 101.93 158.53 137.82 128 160"></polygon>
  <line x1="128" y1="160" x2="128" y2="224"></line>
  <line x1="97.47" y1="137.82" x2="36.72" y2="157.56"></line>
  <line x1="158.53" y1="137.82" x2="219.28" y2="157.56"></line>
  <line x1="109.13" y1="101.93" x2="71.53" y2="50.18"></line>
  <line x1="146.87" y1="101.93" x2="184.47" y2="50.18"></line>
</svg>`;

const files = ['index.html', 'revert-hero.js', 'fix-franja-icon.js'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/<svg class="icon-ball"[^>]*>[\s\S]*?<\/svg>/g, newSvg);
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
});
