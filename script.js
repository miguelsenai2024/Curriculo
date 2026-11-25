// Full-screen slides: wheel / keys / swipe / links move between sections.
// The current slide's items drift up and fade out, the next slide's items rise in.
const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dots a')];
const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const counterNow = document.querySelector('.counter-now');
const counterBar = document.querySelector('.counter-bar i');
const bgLayers = [...document.querySelectorAll('.bg-layer')];
const ITEMS = '.eyebrow, h1, h2, .lead, .btn, .body, .rows > li, .stack, .showcase, .timeline > li, .certs > li, .mail, .socials, .foot';
const LEAVE_MS = 380;   // old slide's exit before the new one starts
const LOCK_MS = 1150;   // input lock so one wheel flick = one slide

slides.forEach((slide) => {
  slide.querySelectorAll(ITEMS).forEach((el, i) => {
    el.classList.add('anim');
    el.style.setProperty('--i', Math.min(i, 12));
  });
});

let current = -1;
let locked = false;

function setDirection(slide, dir, phase) {
  // phase "from": where entering items start; "to": where leaving items go
  const down = (phase === 'from') === (dir > 0);
  slide.style.setProperty('--' + phase, down ? '48px' : '-48px');
  slide.style.setProperty('--mask-' + phase, down ? '105%' : '-105%');
}

function show(index, dir) {
  const next = slides[index];
  next.classList.add('prep');            // jump to the start position without animating
  setDirection(next, dir, 'from');
  next.scrollTop = dir > 0 ? 0 : next.scrollHeight;
  void next.offsetWidth;
  next.classList.remove('prep');
  next.classList.add('active');

  current = index;
  bgLayers.forEach((l) => l.classList.toggle('on', l.dataset.bg === next.dataset.bg)); // cross-fade the slide's photo
  dots.forEach((d, i) => d.setAttribute('aria-current', i === index));
  navLinks.forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + next.id));
  counterNow.textContent = String(index + 1).padStart(2, '0');
  counterBar.style.setProperty('--p', (index + 1) / slides.length);
  history.replaceState(null, '', '#' + next.id);
}

function go(index) {
  if (locked || index === current || index < 0 || index >= slides.length) return;
  locked = true;
  const dir = index > current ? 1 : -1;
  const old = slides[current];
  setDirection(old, dir, 'to');
  old.classList.add('leaving');
  old.classList.remove('active');
  setTimeout(() => show(index, dir), LEAVE_MS);
  setTimeout(() => { old.classList.remove('leaving'); locked = false; }, LOCK_MS);
}

// A slide taller than the screen scrolls normally first; we only change slide at its edges.
function atEdge(dir) {
  const s = slides[current];
  return dir > 0 ? s.scrollTop + s.clientHeight >= s.scrollHeight - 2 : s.scrollTop <= 2;
}

window.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaY) < 12) return;
  const dir = e.deltaY > 0 ? 1 : -1;
  if (locked || atEdge(dir)) {
    e.preventDefault();
    go(current + dir);
  }
}, { passive: false });

window.addEventListener('keydown', (e) => {
  if (e.key === 'Home') return go(0);
  if (e.key === 'End') return go(slides.length - 1);
  const dir = ['ArrowDown', 'PageDown', ' '].includes(e.key) ? 1 : ['ArrowUp', 'PageUp'].includes(e.key) ? -1 : 0;
  if (dir && atEdge(dir)) { e.preventDefault(); go(current + dir); }
});

let touchY = null;
window.addEventListener('touchstart', (e) => { touchY = e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchend', (e) => {
  if (touchY === null) return;
  const dy = touchY - e.changedTouches[0].clientY;
  touchY = null;
  const dir = dy > 0 ? 1 : -1;
  if (Math.abs(dy) > 50 && atEdge(dir)) go(current + dir);
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const index = slides.findIndex((s) => '#' + s.id === a.getAttribute('href'));
    if (index === -1) return;
    e.preventDefault();
    go(index);
  });
});

// Project demos: each browser frame cycles through its screenshots, only while its slide is on screen.
const SHOT_MS = 3400;
document.querySelectorAll('.screens').forEach((box, k) => {
  const shots = [...box.querySelectorAll('img')];
  const steps = [...box.querySelectorAll('.steps span')];
  const slide = box.closest('.slide');
  let n = 0;
  const paint = () => {
    shots.forEach((s, i) => s.classList.toggle('on', i === n));
    steps.forEach((s, i) => { s.classList.toggle('done', i < n); s.classList.remove('on'); });
    void box.offsetWidth; // restart the progress fill
    steps[n].classList.add('on');
  };
  box.style.setProperty('--shot', SHOT_MS + 'ms');
  paint();
  setTimeout(() => setInterval(() => {
    if (!slide.classList.contains('active')) return;
    n = (n + 1) % shots.length;
    paint();
  }, SHOT_MS), k * (SHOT_MS / 2)); // offset the two demos so they don't flip together
});

// start on the slide named in the URL, if any
show(Math.max(0, slides.findIndex((s) => '#' + s.id === location.hash)), 1);
