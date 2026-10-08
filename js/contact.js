/* Contact: one place to set the club's WhatsApp number and message.
   Every [data-wa] link is built from this. Leave `number` empty until the club confirms it:
   the link then opens WhatsApp with the message ready and lets the visitor pick the chat. */
(() => {
  const CONFIG = {
    number: '',   // digits only with country code, e.g. '59171234567' (Bolivia +591)
    message: 'Hola, quiero una clase de prueba en Nuevas Estrellas.'
  };

  const href = `https://wa.me/${CONFIG.number.replace(/\D/g, '')}?text=${encodeURIComponent(CONFIG.message)}`;
  document.querySelectorAll('[data-wa]').forEach((link) => {
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
  });
})();
