/* Altimeter rail: the page read as a climb. Builds one stop per section,
   fills as you scroll, and marks the current section in the menu. */
(() => {
  const rail = document.getElementById('rail');
  const sections = [...document.querySelectorAll('[data-rail]')];
  if (!rail || !sections.length) return;

  const root = document.documentElement;
  const menuLinks = new Map([...document.querySelectorAll('.menu a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a]));

  const stops = sections.map((section, i) => {
    const stop = document.createElement('div');
    stop.className = 'rail-stop';
    stop.style.bottom = `${(i / (sections.length - 1)) * 100}%`;
    const label = document.createElement('span');
    label.textContent = section.dataset.rail;
    stop.append(label);
    rail.append(stop);
    return stop;
  });

  const update = () => {
    const max = root.scrollHeight - window.innerHeight;
    const climb = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    rail.style.setProperty('--climb', climb.toFixed(4));
    rail.classList.toggle('on', window.scrollY > window.innerHeight * .35);

    // Current section: the last one whose top has crossed the middle of the viewport.
    const mid = window.innerHeight * .5;
    let current = 0;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= mid) current = i; });
    stops.forEach((stop, i) => { stop.classList.toggle('done', i <= current); stop.classList.toggle('now', i === current); });

    rail.classList.toggle('on-light', sections[current].classList.contains('on-light'));
    menuLinks.forEach((link, id) => {
      if (id === sections[current].id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
