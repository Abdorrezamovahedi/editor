/* ========================= */
/* CORE SYSTEM */
/* ========================= */

const isMobile = window.innerWidth < 768;

/* Reveal Animation */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

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

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

});

});

/* Optimized Scroll System */

let scrollYPos=0;
let ticking=false;

function updateEffects(){

const heroImg=document.querySelector(".hero img");

if(heroImg){

heroImg.style.transform=
`translateY(${scrollYPos*0.12}px)`;

}

ticking=false;

}

window.addEventListener("scroll",()=>{

scrollYPos=window.scrollY;

if(!ticking){

requestAnimationFrame(updateEffects);

ticking=true;

}

});

/* ========================= */
/* PARTICLES SYSTEM */
/* ========================= */

const canvas=document.createElement("canvas");

canvas.id="particles";

canvas.style.position="fixed";
canvas.style.inset="0";
canvas.style.pointerEvents="none";
canvas.style.zIndex="-10";

document.body.prepend(canvas);

const ctx=canvas.getContext("2d");

let w,h;

function resizeCanvas(){

w=canvas.width=window.innerWidth;
h=canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

const particles=[];

const particleCount=
isMobile ? 30 : 70;

for(let i=0;i<particleCount;i++){

particles.push({

x:Math.random()*w,
y:Math.random()*h,

vx:(Math.random()-0.5)*0.25,
vy:(Math.random()-0.5)*0.25,

size:Math.random()*2+1

});

}

function drawParticles(){

ctx.clearRect(0,0,w,h);

for(let p of particles){

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>w)p.vx*=-1;
if(p.y<0||p.y>h)p.vy*=-1;

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle=
"rgba(0,255,255,.5)";

ctx.fill();

}

requestAnimationFrame(
drawParticles
);

}

drawParticles();

/* Floating Orbs */

const orbCount=
isMobile ? 6 : 12;

for(let i=0;i<orbCount;i++){

const orb=document.createElement("div");

orb.className="orb";

orb.style.left=
Math.random()*100+"vw";

orb.style.top=
Math.random()*100+"vh";

orb.style.opacity=
0.1+Math.random()*0.2;

orb.style.animationDuration=
12+Math.random()*10+"s";

document.body.appendChild(orb);

}

console.log("Particles Loaded");

/* ========================= */
/* GAMING EFFECTS */
/* ========================= */

/* Mouse Glow */

if(!isMobile){

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left=
e.clientX+"px";

glow.style.top=
e.clientY+"px";

}
);

}

/* 3D Cards */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

if(isMobile) return;

const rect=
card.getBoundingClientRect();

const x=
e.clientX-rect.left;

const y=
e.clientY-rect.top;

const rotateY=
(x-rect.width/2)/18;

const rotateX=
(rect.height/2-y)/18;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

}
);

});

/* Random Glow */

setInterval(()=>{

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="120px";
glow.style.height="120px";

glow.style.left=
Math.random()*100+"vw";

glow.style.top=
Math.random()*100+"vh";

glow.style.borderRadius="50%";

glow.style.background=
"rgba(0,255,255,.15)";

glow.style.filter=
"blur(40px)";

glow.style.pointerEvents="none";

glow.style.zIndex="-5";

document.body.appendChild(glow);

setTimeout(()=>{

glow.remove();

},2000);

},2500);

console.log("Gaming FX Loaded");


console.log("Core Loaded");
