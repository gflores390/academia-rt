const fs = require('fs');
let css = fs.readFileSync('css/components.css', 'utf8');

// The original was: clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
// We change it to a parallelogram where the right edge is slanted at the same angle as the left.
// If top left is 15% and bottom left is 0%, the slant is 15% difference.
// So top right is 100% and bottom right is 85%.
const oldClip = 'clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);';
const newClip = 'clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);';

css = css.split(oldClip).join(newClip);

// Media query update
const oldMediaClip = 'clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);';
const newMediaClip = 'clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);'; // In mobile we can just use the same or slightly adjusted
css = css.split(oldMediaClip).join(newMediaClip);

fs.writeFileSync('css/components.css', css);
console.log('Parallelogram clip-path updated.');
