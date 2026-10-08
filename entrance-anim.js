const fs = require('fs');
let css = fs.readFileSync('css/components.css', 'utf8');

const entranceAnim = `
@keyframes fragmentEnter {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.collage-item {
  animation: fragmentEnter 1s ease-out backwards;
}
.collage-item-1 { animation-delay: 0.1s; }
.collage-item-2 { animation-delay: 0.3s; }
.collage-item-3 { animation-delay: 0.5s; }
.collage-item-4 { animation-delay: 0.7s; }
`;

css += entranceAnim;
fs.writeFileSync('css/components.css', css);
console.log('Added entrance animation');
