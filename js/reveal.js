/* Reveal elements marked with [data-reveal] as they enter the viewport */
(() => {
  const items = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: .12 });

  items.forEach(el => observer.observe(el));
})();
