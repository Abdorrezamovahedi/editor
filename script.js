/* =========================
   CORE SYSTEM (OPTIMIZED)
========================= */

const isMobile = window.innerWidth < 768;

/* Reveal on scroll */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

console.log("Core Loaded");

/* =========================
   PARTICLES (OPTIMIZED CANVAS)
========================= */

const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

/* reduce particles for performance */
const particleCount = isMobile ? 20 : 45;

const particles = [];

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    size: Math.random() * 1.8 + 0.6
  });
}

let lastTime = 0;

function draw(t) {

  /* throttle for mobile */
  if (isMobile && t - lastTime < 33) {
    requestAnimationFrame(draw);
    return;
  }

  lastTime = t;

  ctx.clearRect(0, 0, w, h);

  for (let p of particles) {

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

    ctx.fillStyle = "rgba(0,255,255,0.35)";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

console.log("Particles Loaded");

/* =========================
   CURSOR GLOW (DESKTOP ONLY)
========================= */

if (!isMobile) {

  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";

    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

console.log("Cursor Loaded");

/* =========================
   3D CARDS (OPTIMIZED)
========================= */

document.querySelectorAll(".card").forEach(card => {

  let active = false;

  card.addEventListener("mousemove", (e) => {

    if (isMobile) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 25;
    const rotateX = (rect.height / 2 - y) / 25;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  });

});

console.log("Gaming FX Loaded ✔");
