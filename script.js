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

/* ========================= */
/* EXTRA BACKGROUND EFFECTS */
/* ========================= */

/* Neon Stars */

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.style.position="fixed";
star.style.width=Math.random()*3+1+"px";
star.style.height=star.style.width;

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.background="#00ffff";
star.style.borderRadius="50%";

star.style.boxShadow=
"0 0 10px #00ffff,0 0 20px #00ffff";

star.style.pointerEvents="none";
star.style.zIndex="-2";

star.animate([
{opacity:0.2},
{opacity:1},
{opacity:0.2}
],{
duration:2000+Math.random()*5000,
iterations:Infinity
});

document.body.appendChild(star);

}


/* ========================= */
/* FLOATING CYBER SQUARES */
/* ========================= */

for(let i=0;i<15;i++){

const square=document.createElement("div");

square.style.position="fixed";
square.style.width="20px";
square.style.height="20px";

square.style.border=
"1px solid rgba(0,255,255,.3)";

square.style.left=Math.random()*100+"vw";
square.style.top=Math.random()*100+"vh";

square.style.transform=
`rotate(${Math.random()*360}deg)`;

square.style.zIndex="-2";

square.style.pointerEvents="none";

square.animate([
{
transform:`translateY(0px) rotate(0deg)`
},
{
transform:`translateY(-150px) rotate(360deg)`
}
],{

duration:15000+Math.random()*10000,
iterations:Infinity

});

document.body.appendChild(square);

}


/* ========================= */
/* CYBER LINES */
/* ========================= */

for(let i=0;i<10;i++){

const line=document.createElement("div");

line.style.position="fixed";
line.style.width="1px";
line.style.height="100vh";

line.style.left=Math.random()*100+"vw";

line.style.background=
"linear-gradient(transparent,#00ffff,transparent)";

line.style.opacity=".15";

line.style.pointerEvents="none";

line.style.zIndex="-3";

document.body.appendChild(line);

line.animate([
{
transform:"translateY(-100%)"
},
{
transform:"translateY(100%)"
}
],{

duration:4000+Math.random()*4000,
iterations:Infinity

});

}


/* ========================= */
/* RANDOM GLOW FLASHES */
/* ========================= */

setInterval(()=>{

const flash=document.createElement("div");

flash.style.position="fixed";

flash.style.left=
Math.random()*100+"vw";

flash.style.top=
Math.random()*100+"vh";

flash.style.width="150px";
flash.style.height="150px";

flash.style.borderRadius="50%";

flash.style.background=
"rgba(0,255,255,.15)";

flash.style.filter=
"blur(50px)";

flash.style.pointerEvents="none";

flash.style.zIndex="-4";

document.body.appendChild(flash);

flash.animate([
{opacity:0},
{opacity:1},
{opacity:0}
],{
duration:2500
});

setTimeout(()=>{

flash.remove();

},2500);

},1000);


/* ========================= */
/* FLOATING TRIANGLES */
/* ========================= */

for(let i=0;i<12;i++){

const triangle=document.createElement("div");

triangle.style.position="fixed";

triangle.style.width="0";
triangle.style.height="0";

triangle.style.borderLeft="10px solid transparent";
triangle.style.borderRight="10px solid transparent";
triangle.style.borderBottom=
"18px solid rgba(123,0,255,.3)";

triangle.style.left=
Math.random()*100+"vw";

triangle.style.top=
Math.random()*100+"vh";

triangle.style.pointerEvents="none";

triangle.style.zIndex="-2";

triangle.animate([
{
transform:"translateY(0px) rotate(0deg)"
},
{
transform:"translateY(-200px) rotate(720deg)"
}
],{

duration:12000+Math.random()*8000,
iterations:Infinity

});

document.body.appendChild(triangle);

}


/* ========================= */
/* AMBIENT COLOR SHIFT */
/* ========================= */

const ambient=document.createElement("div");

ambient.style.position="fixed";
ambient.style.inset="0";

ambient.style.pointerEvents="none";

ambient.style.background=
"radial-gradient(circle at center, rgba(123,0,255,.08), transparent 70%)";

ambient.style.mixBlendMode="screen";

ambient.style.zIndex="-5";

document.body.appendChild(ambient);

let hue=0;

function ambientAnimation(){

hue+=0.2;

ambient.style.filter=
`hue-rotate(${hue}deg)`;

requestAnimationFrame(
ambientAnimation
);

}

ambientAnimation();


/* ========================= */
/* CYBER ORBS */
/* ========================= */

for(let i=0;i<8;i++){

const orb=document.createElement("div");

orb.style.position="fixed";

orb.style.width="200px";
orb.style.height="200px";

orb.style.borderRadius="50%";

orb.style.background=
"radial-gradient(circle, rgba(0,255,255,.15), transparent)";

orb.style.left=
Math.random()*100+"vw";

orb.style.top=
Math.random()*100+"vh";

orb.style.filter="blur(30px)";

orb.style.pointerEvents="none";

orb.style.zIndex="-6";

orb.animate([
{
transform:"translate(0,0)"
},
{
transform:`translate(
${Math.random()*300-150}px,
${Math.random()*300-150}px
)`
}
],{

duration:15000+Math.random()*10000,
direction:"alternate",
iterations:Infinity

});

document.body.appendChild(orb);

}

console.log("Ultra Background Effects Loaded 🚀");
