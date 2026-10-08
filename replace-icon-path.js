const fs = require('fs');

const oldImg = `assets/img/balon3d.png`;
const newImg = `assets/icons/iconpelota.png`;

const files = ['index.html', 'revert-hero.js', 'fix-franja-icon.js'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(new RegExp(oldImg, 'g'), newImg);
    fs.writeFileSync(f, content);
    console.log('Updated HTML/JS ' + f);
  }
});
