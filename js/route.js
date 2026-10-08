/* Route: the altitude profile draws itself as the section scrolls through the viewport.
   Progress is spring-smoothed with a little overshoot so the line settles like a needle. */
(() => {
  const profile = document.getElementById('profile');
  if (!profile) return;

  const nodes = [...profile.querySelectorAll('.node')];
  const stages = [...document.querySelectorAll('.stages .stage')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let target = 0, value = 0, velocity = 0, raf = 0, last = 0;

  const readTarget = () => {
    const rect = profile.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when the profile's top reaches 80% of the viewport, 1 once most of it has scrolled in.
    target = Math.min(1, Math.max(0, (vh * .8 - rect.top) / (rect.height * .85)));
  };

  const paint = () => {
    profile.style.setProperty('--draw', value.toFixed(4));
    nodes.forEach((node, i) => {
      const isReached = value >= (i + 1) / nodes.length - .04;
      node.classList.toggle('reached', isReached);
      if (stages[i]) stages[i].classList.toggle('reached', isReached);
    });
  };

  const tick = (now) => {
    const dt = Math.min(.05, (now - last) / 1000 || .016);
    last = now;
    const stiffness = 90, damping = 13;
    velocity += ((target - value) * stiffness - velocity * damping) * dt;
    value += velocity * dt;
    paint();
    if (Math.abs(target - value) > .0008 || Math.abs(velocity) > .002) raf = requestAnimationFrame(tick);
    else { value = target; paint(); raf = 0; }
  };

  const onScroll = () => {
    readTarget();
    if (reduceMotion.matches) { value = target; paint(); return; }
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
