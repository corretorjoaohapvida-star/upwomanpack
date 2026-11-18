(() => {
  'use strict';
  const track = document.querySelector('.gallery-track');
  const slides = [...document.querySelectorAll('.slide')];
  const dots = document.querySelector('.dots');
  const motion = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  let active = 0;
  function go(index) { track.scrollTo({left: ((index + slides.length) % slides.length) * track.clientWidth, behavior: motion}); }
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show photo ${index + 1}`);
    dot.setAttribute('aria-pressed', String(index === 0));
    dot.addEventListener('click', () => go(index));
    dots.append(dot);
  });
  track.addEventListener('scroll', () => {
    active = Math.round(track.scrollLeft / track.clientWidth);
    [...dots.children].forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === active)));
  }, {passive: true});
  document.querySelector('.prev').addEventListener('click', () => go(active - 1));
  document.querySelector('.next').addEventListener('click', () => go(active + 1));
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); go(active + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  const dialog = document.querySelector('#lightbox');
  const enlarged = dialog.querySelector('img');
  let previouslyFocused;
  document.querySelectorAll('.slide,.detail-photo').forEach(button => button.addEventListener('click', () => {
    previouslyFocused = button;
    const img = button.querySelector('img');
    enlarged.src = img.src.replace('.webp', '.png');
    enlarged.alt = img.alt;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }));
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; previouslyFocused?.focus({preventScroll: true}); });
  const config = window.CHRISTIAN_WOMAN_OFFER;
  document.querySelectorAll('.decline').forEach(link => {link.href = config.declineUrl;});
  const fallback = document.querySelector('.checkout-fallback');
  const target = document.querySelector('#hotmart-sales-funnel');
  if (!config.hotmartEnabled) {fallback.hidden = false; return;}
  const script = document.createElement('script');
  script.src = config.hotmartSdk;
  script.async = true;
  script.onload = () => {
    try {window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');}
    catch {fallback.hidden = false;}
  };
  script.onerror = () => { fallback.hidden = false; };
  document.head.append(script);
  const observer = new MutationObserver(() => {if(target.childElementCount) fallback.hidden = true;});
  observer.observe(target,{childList:true});
  setTimeout(() => {if(!target.childElementCount) fallback.hidden = false;}, 6500);
})();
