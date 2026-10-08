/* Hero video: plays quietly behind the survey tint.
   Stays on the poster for reduced motion or data-saver, and pauses when the hero is off screen. */
(() => {
  const video = document.getElementById('hero-video');
  const hero = document.getElementById('inicio');
  if (!video || !hero) return;

  const connection = navigator.connection || {};
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches || connection.saveData) {
    video.remove();
    return;
  }

  video.addEventListener('playing', () => video.classList.add('ready'), { once: true });

  const play = () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); };
  play();

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) play(); else video.pause();
  }, { threshold: .05 }).observe(hero);

  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); else play(); });
})();
