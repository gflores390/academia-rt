/* Parallax: banners drift slower than the page, and the hero footage lags behind the scroll.
   Offsets are written to --py / transform; nothing moves for reduced-motion visitors. */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const banners = [...document.querySelectorAll('[data-parallax]')].map((el) => ({
    el,
    img: el.querySelector('img'),
    speed: parseFloat(el.dataset.parallax) || .15
  }));
  const heroMedia = document.querySelector('[data-parallax-hero]');
  const beams = [...document.querySelectorAll('.beam')].map((el) => ({ el, speed: parseFloat(el.dataset.speed) || 0.2 }));
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const update = () => {
    const vh = window.innerHeight;


    beams.forEach(({ el, speed }) => {
      const section = el.closest('.section, header, .entrenamos-banner');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      const offset = (rect.top - vh / 2) * -speed;
      el.style.setProperty('--py', `${offset.toFixed(1)}px`);
    });

    banners.forEach(({ el, img, speed }) => {
      const rect = el.parentElement.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      // Distance of the section's centre from the viewport's centre, scaled and limited to the spare image height.
      const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
      const spare = rect.height * .13;
      img.style.setProperty('--py', `${clamp(offset, -spare, spare).toFixed(1)}px`);
    });

    if (heroMedia && window.scrollY < vh * 1.2) {
      heroMedia.style.transform = `translate3d(0, ${(window.scrollY * .28).toFixed(1)}px, 0)`;
    }
  };

  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
