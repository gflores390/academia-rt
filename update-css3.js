const fs = require('fs');
let css = fs.readFileSync('css/sections/escuela.css', 'utf8');

// 1. Remove the gradient
const regexGradient = /\.pillar-bg-wrap::after\s*\{[\s\S]*?\}/;
css = css.replace(regexGradient, `.pillar-bg-wrap::after { display: none; }`);

// 2. Make sure .pillar-title is strictly white
const regexTitle = /\.pillar-title\s*\{[\s\S]*?\}/;
css = css.replace(regexTitle, `.pillar-title {
  font-family: Impact, 'Arial Black', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  color: #ffffff !important;
  margin: 0 0 8px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}`);

// 3. Update the heading span color (COMPETIR) to yellow
const regexHeadingSpan = /\.pillars-heading\s+span\s*\{[\s\S]*?\}/;
css = css.replace(regexHeadingSpan, `.pillars-heading span {
  color: #FFE600;
}`);

// Just to be safe, make the base heading strictly white
const regexHeading = /\.pillars-heading\s*\{[\s\S]*?\}/;
css = css.replace(regexHeading, `.pillars-heading {
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.7rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: .02em;
  color: #ffffff !important;
}`);

fs.writeFileSync('css/sections/escuela.css', css);
console.log('Success!');
