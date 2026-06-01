/* ========================= */
/* GAMING ANIMATION SYSTEM */
/* ========================= */

/* Reveal On Scroll */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});


/* ========================= */
/* SMOOTH PARALLAX */
/* ========================= */

window.addEventListener("scroll",()=>{

const scrollY = window.scrollY;

document.querySelectorAll(".hero img").forEach(img=>{

img.style.transform =
`translateY(${scrollY * 0.15}px)`;

});

});


/* ========================= */
/* FLOATING ORBS */
/* ========================= */

for(let i=0;i<12;i++){

const orb=document.createElement("div");

orb.className="orb";

orb.style.left=Math.random()*100+"vw";

orb.style.top=Math.random()*100+"vh";

orb.style.animationDuration=
10+Math.random()*15+"s";

orb.style.opacity=
0.1+Math.random()*0.2;

document.body.appendChild(orb);

}


/* ========================= */
/* PARTICLES */
/* ========================= */

const canvas=document.createElement("canvas");

canvas.id="particles";

document.body.prepend(canvas);

const ctx=canvas.getContext("2d");

let w,h;

function resize(){

w=canvas.width=window.innerWidth;

h=canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[];

const maxParticles =
window.innerWidth < 768 ? 40 : 80;

for(let i=0;i<maxParticles;i++){

particles.push({

x:Math.random()*w,

y:Math.random()*h,

vx:(Math.random()-0.5)*0.3,

vy:(Math.random()-0.5)*0.3,

size:Math.random()*2+1

});

}

function animateParticles(){

ctx.clearRect(0,0,w,h);

particles.forEach(p=>{

p.x+=p.vx;

p.y+=p.vy;

if(p.x<0||p.x>w)p.vx*=-1;

if(p.y<0||p.y>h)p.vy*=-1;

ctx.beginPath();

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle="rgba(0,255,255,0.5)";

ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();


/* ========================= */
/* MOUSE GLOW */
/* ========================= */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* ========================= */
/* 3D CARDS */
/* ========================= */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/15;

const rotateX=(rect.height/2-y)/15;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


/* ========================= */
/* SMOOTH SCROLL */
/* ========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});


/* ========================= */
/* AUTO FADE HERO */
/* ========================= */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

const value=1-window.scrollY/500;

hero.style.opacity=Math.max(value,0);

});


/* ========================= */
/* FPS OPTIMIZATION */
/* ========================= */

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

requestAnimationFrame(()=>{

ticking=false;

});

ticking=true;

}

});


console.log("Gaming Effects Loaded 🚀");
