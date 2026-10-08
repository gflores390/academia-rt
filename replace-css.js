const fs = require('fs');
let css = fs.readFileSync('css/sections/escuela.css', 'utf8');

const newCSS = `/* =========================================================
   LA ESCUELA
   Diseño premium — Academia de Fútbol
========================================================= */

.escuela {
  padding-block: clamp(55px, 7vw, 90px);
  background: #00163B;
  position: relative;
  overflow: hidden;
}

.pillars-header {
  width: 100%;
  max-width: 820px;
  margin: 0 auto 48px;
  padding-top: 12px;
  text-align: center;
}

.pillars-heading {
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.7rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: .02em;
  color: #ffffff;
}

.pillars-heading span {
  color: #ffffff;
}

.pillars-intro {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.65;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
}

.pillars-strip {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
  background: transparent;
  padding: 8px 20px 25px;
}

@media (max-width: 900px) {
  .pillars-strip { grid-template-columns: 1fr; max-width: 500px; }
}

.pillar-col {
  position: relative;
  background: #00163B;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform .35s var(--ease-out);
  border: 2px solid transparent;
}

.pillar-col:hover {
  transform: translateY(-4px);
}

.card-blue { border-color: #0066ff; box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3); }
.card-yellow { border-color: #ffcc00; box-shadow: 0 4px 20px rgba(255, 204, 0, 0.3); }
.card-red { border-color: #ff0033; box-shadow: 0 4px 20px rgba(255, 0, 51, 0.3); }

.pillar-bg-wrap {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.pillar-bg-wrap::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 120px;
  background: linear-gradient(to top, #00163B, transparent);
  pointer-events: none;
}

.pillar-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pillar-content-overlay {
  padding: 0 24px 30px;
  margin-top: -50px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pillar-icon-wrap {
  position: relative;
  width: 76px;
  height: 86px;
  margin: 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-hex {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: #00163B;
  stroke: #ffffff;
  stroke-width: 4px;
}

.card-blue .pillar-hex { stroke: #0066ff; }
.card-yellow .pillar-hex { stroke: #ffcc00; }
.card-red .pillar-hex { stroke: #ff0033; }

.pillar-symbol {
  position: relative;
  z-index: 2;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.pillar-symbol svg { width: 28px; height: 28px; stroke-width: 2.2; }

.pillar-text-content {
  text-align: left;
}

.pillar-title {
  font-family: Impact, 'Arial Black', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.pillar-keywords {
  font-family: var(--font-body);
  color: #ffcc00;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 12px;
  letter-spacing: 0.5px;
}

.pillar-desc {
  font-family: var(--font-body);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}
`;

const startIndex = css.indexOf('/* =========================================================\r\n   LA ESCUELA');
let endIndex = css.indexOf('/* =========================================================\r\n   2. BANNER: ENTRENAMOS PARA COMPETIR');

if (endIndex === -1) {
    endIndex = css.indexOf('/* =========================================================\n   2. BANNER: ENTRENAMOS PARA COMPETIR');
}
if (endIndex === -1) {
    // try finding BANNER in css
    endIndex = css.indexOf('2. BANNER');
    endIndex = css.lastIndexOf('/*', endIndex);
}

if (startIndex !== -1 && endIndex !== -1) {
  const newCss = css.substring(0, startIndex) + newCSS + '\n\n' + css.substring(endIndex);
  fs.writeFileSync('css/sections/escuela.css', newCss);
  console.log('Success!');
} else {
  console.log('Failed to find CSS markers');
}
