const fs = require('fs');
let css = fs.readFileSync('css/sections/escuela.css', 'utf8');

const regexTitle = /\.pillar-title\s*\{[\s\S]*?\}/;
css = css.replace(regexTitle, `.pillar-title {
  font-family: Impact, 'Arial Black', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}`);

const regexKeywords = /\.pillar-keywords\s*\{[\s\S]*?\}/;
css = css.replace(regexKeywords, `.pillar-keywords {
  font-family: var(--font-body);
  color: #ffcc00;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 12px;
  letter-spacing: 0.5px;
}`);

const regexDesc = /\.pillar-desc\s*\{[\s\S]*?\}/;
css = css.replace(regexDesc, `.pillar-desc {
  font-family: var(--font-body);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}`);

const regexLine = /\.pillar-bottom-line\s*\{[\s\S]*?\}/;
css = css.replace(regexLine, `.pillar-bottom-line { display: none; }`);

fs.writeFileSync('css/sections/escuela.css', css);
console.log('Success!');
