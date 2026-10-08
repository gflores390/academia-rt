const fs = require('fs');
let css = fs.readFileSync('css/sections/escuela.css', 'utf8');

css = css.replace(/\.pillar-col\s*\{[^}]+\}/, `.pillar-col {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 420px;
  transition: transform .35s var(--ease-out);
}`);

css = css.replace(/\.card-blue\s*\{[^}]+\}/, '');
css = css.replace(/\.card-yellow\s*\{[^}]+\}/, '');
css = css.replace(/\.card-red\s*\{[^}]+\}/, '');

css = css.replace(/\.pillar-bg-wrap\s*\{[^}]+\}/, `.pillar-bg-wrap {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}`);

css = css.replace(/\.pillar-bg-wrap::after\s*\{[^}]+\}/, `.pillar-bg-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 22, 59, 0.95) 0%, rgba(0, 22, 59, 0.4) 50%, transparent 100%);
  pointer-events: none;
}`);

css = css.replace(/\.pillar-content-overlay\s*\{[^}]+\}/, `.pillar-content-overlay {
  padding: 30px 24px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
}`);

fs.writeFileSync('css/sections/escuela.css', css);
console.log('Success!');
