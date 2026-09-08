const nav = document.getElementById('nav');
const btn = document.getElementById('menuBtn');
const spot = document.getElementById('spot');
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (btn) btn.onclick = () => nav.classList.toggle('open');
nav.querySelectorAll('a').forEach((a) => a.onclick = () => nav.classList.remove('open'));
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
if (fine && !reduce && spot) {
  window.addEventListener('mousemove', (e) => {
    spot.classList.add('on');
    spot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  }, { passive: true });
}
document.querySelectorAll('.card, .line, form').forEach((el) => {
  el.addEventListener('mouseenter', () => el.classList.add('lit'));
  el.addEventListener('mouseleave', () => el.classList.remove('lit'));
  el.addEventListener('touchstart', () => {
    document.querySelectorAll('.lit').forEach((n) => n.classList.remove('lit'));
    el.classList.add('lit');
  }, { passive: true });
});
