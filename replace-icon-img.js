const fs = require('fs');

// 1. Update index.html, revert-hero.js, fix-franja-icon.js to use an <img> tag instead of <svg>
const newImg = `<img class="icon-ball" src="assets/img/balon3d.png" alt="Balón" width="22" height="22" style="object-fit: contain;">`;

const files = ['index.html', 'revert-hero.js', 'fix-franja-icon.js'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/<svg class="icon-ball"[^>]*>[\s\S]*?<\/svg>/g, newImg);
    fs.writeFileSync(f, content);
    console.log('Updated HTML/JS ' + f);
  }
});

// 2. Update components.css to allow the <img> to spin just like the SVG did
const cssFile = 'css/components.css';
if (fs.existsSync(cssFile)) {
  let css = fs.readFileSync(cssFile, 'utf8');
  css = css.replace(/\.btn-pelota svg\.icon-ball/g, '.btn-pelota .icon-ball');
  css = css.replace(/\.btn-primary:hover svg:not\(\.icon-ball\)/g, '.btn-primary:hover svg:not(.icon-ball), .btn-primary:hover img:not(.icon-ball)');
  fs.writeFileSync(cssFile, css);
  console.log('Updated CSS ' + cssFile);
}
