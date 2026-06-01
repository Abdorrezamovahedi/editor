/* ========================= */
/* CORE SYSTEM */
/* ========================= */

const isMobile = window.innerWidth < 768;

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

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

console.log("Core Loaded");
/* ========================= */
/* PARTICLES SYSTEM */
/* ========================= */

const canvas=document.createElement("canvas");

canvas.id="particles";

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
isMobile ? 25 : 60;

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

for(const p of particles){

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>w)p.vx*=-1;
if(p.y<0||p.y>h)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle="rgba(0,255,255,.4)";
ctx.fill();

}

requestAnimationFrame(drawParticles);

}

drawParticles();

console.log("Particles Loaded");
/* ========================= */
/* GAMING EFFECTS */
/* ========================= */

if(!isMobile){

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

}

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
(x-rect.width/2)/20;

const rotateX=
(rect.height/2-y)/20;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

console.log("Gaming FX Loaded");
