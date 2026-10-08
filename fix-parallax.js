const fs = require('fs');

// 1. Fix Parallax.js
let js = fs.readFileSync('js/parallax.js', 'utf8');
// Change: const section = el.closest('.section');
// To: const section = el.closest('section, header, .entrenamos-banner') || el.closest('body');
js = js.replace(/const section = el\.closest\('\.section'\);/g, "const section = el.closest('.section, header, .entrenamos-banner');");
fs.writeFileSync('js/parallax.js', js);
console.log('Fixed parallax.js');

// 2. Fix Hero Overflow
let css = fs.readFileSync('css/sections/hero.css', 'utf8');
// Move overflow: hidden from .hero to .hero-media
css = css.replace('.hero {\r\n  position: relative;\r\n  isolation: isolate;\r\n  overflow: hidden;', '.hero {\r\n  position: relative;\r\n  isolation: isolate;');
css = css.replace('.hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;', '.hero {\n  position: relative;\n  isolation: isolate;');

css = css.replace('.hero-media {\r\n  position: relative;\r\n  inset: auto;', '.hero-media {\r\n  position: absolute;\r\n  inset: 0;\r\n  overflow: hidden;');
css = css.replace('.hero-media {\n  position: relative;\n  inset: auto;', '.hero-media {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;');

// Because .hero-media was `position: relative; inset: auto; height: 100%`, it was in the flow. If I make it absolute, I need to make sure the hero keeps its height. 
// Actually, earlier it was:
/*
.hero {
  display: flex;
}
.hero-media { width: 100vw; height: 100%; ... }
*/
// Let's just restore `overflow: hidden` to .hero-media without changing position if it's already working, OR just add overflow: hidden.
