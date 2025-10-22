// Smooth scroll between sections
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animation (fade in effect)
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

// Scroll to top button
const toTop = document.createElement('button');
toTop.textContent = '↑';
toTop.classList.add('scrollTop');
document.body.appendChild(toTop);

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Dark / Light mode toggle
const darkToggle = document.createElement('button');
darkToggle.textContent = '☾';
darkToggle.classList.add('darkToggle');
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('darkMode');
  darkToggle.textContent = document.body.classList.contains('darkMode') ? '☀' : '☾';
});
const title = document.getElementById("title");

let glow = 0;
let growing = true;

function glowEffect() {
  if (growing) {
    glow += 0.5;
    if (glow >= 20) growing = false;
  } else {
    glow -= 0.5;
    if (glow <= 0) growing = true;
  }

  title.style.textShadow = `
    0 0 ${glow}px red,
    0 0 ${glow * 2}px red,
    0 0 ${glow * 3}px red
  `;

  requestAnimationFrame(glowEffect);
}

glowEffect();
