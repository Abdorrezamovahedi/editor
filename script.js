/* =========================
   PART 1 LIGHTWEIGHT
========================= */

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");
observer.unobserve(entry.target);

}

});

},{threshold:0.15});

document.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));

/* CUSTOM CURSOR */

const cursor=document.createElement("div");
cursor.className="cursor";
document.body.appendChild(cursor);

let cx=0;
let cy=0;

let tx=0;
let ty=0;

document.addEventListener("mousemove",(e)=>{

tx=e.clientX;
ty=e.clientY;

});

function animateCursor(){

cx+=(tx-cx)*0.15;
cy+=(ty-cy)*0.15;

cursor.style.transform=
`translate(${cx}px,${cy}px)`;

requestAnimationFrame(
animateCursor
);

}

animateCursor();

/* MAGNETIC BUTTONS */

document.querySelectorAll(".btn")
.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const r=btn.getBoundingClientRect();

const x=
e.clientX-r.left-r.width/2;

const y=
e.clientY-r.top-r.height/2;

btn.style.transform=
`translate(${x*0.08}px,${y*0.08}px)`;

});

btn.addEventListener(
"mouseleave",
()=>btn.style.transform=""
);

});

/* 3D CARDS */

document.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const r=
card.getBoundingClientRect();

const x=
(e.clientX-r.left)/r.width;

const y=
(e.clientY-r.top)/r.height;

const rx=(0.5-y)*10;
const ry=(x-0.5)*10;

card.style.transform=
`perspective(1000px)
rotateX(${rx}deg)
rotateY(${ry}deg)`;

});

card.addEventListener(
"mouseleave",
()=>card.style.transform=""
);

});

/* HERO SCRAMBLE */

const heroTitle=
document.querySelector(".hero h1");

if(heroTitle){

const letters=
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const original=
heroTitle.textContent;

function scramble(){

let i=0;

const interval=
setInterval(()=>{

heroTitle.textContent=
original.split("")
.map((c,index)=>{

if(index<i) return original[index];

return letters[
Math.floor(
Math.random()*letters.length
)
];

}).join("");

if(i>=original.length)
clearInterval(interval);

i+=0.5;

},40);

}

window.addEventListener(
"load",
()=>setTimeout(scramble,500)
);

}

/* =========================
   PART 2 LIGHTWEIGHT
========================= */

/* HERO TYPING */

const heroText=
document.querySelector(".hero p");

if(heroText){

const text=
heroText.textContent;

heroText.textContent="";

let i=0;

(function type(){

if(i<text.length){

heroText.textContent+=
text.charAt(i);

i++;

setTimeout(type,35);

}

})();

}

/* MATRIX */

const canvas=
document.createElement("canvas");

canvas.id="matrix";

canvas.style.position="fixed";
canvas.style.inset="0";
canvas.style.zIndex="-3";
canvas.style.pointerEvents="none";

document.body.prepend(canvas);

const ctx=
canvas.getContext("2d");

const size=18;

let cols;
let drops;

function resize(){

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

cols=
Math.floor(canvas.width/size);

drops=
Array(cols).fill(1);

}

resize();

window.addEventListener(
"resize",
resize
);

const chars="01";

function draw(){

ctx.fillStyle=
"rgba(0,0,0,.15)";

ctx.fillRect(
0,0,
canvas.width,
canvas.height
);

ctx.fillStyle="#00ff88";
ctx.font=size+"px monospace";

for(let i=0;i<drops.length;i++){

const char=
chars[
Math.floor(
Math.random()*2
)
];

ctx.fillText(
char,
i*size,
drops[i]*size
);

if(
drops[i]*size>
canvas.height &&
Math.random()>0.98
){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(draw,80);

/* FLOATING ORBS */

for(let i=0;i<3;i++){

const orb=
document.createElement("div");

orb.className="orb";

orb.style.left=
Math.random()*100+"vw";

orb.style.top=
Math.random()*100+"vh";

document.body.appendChild(
orb
);

}

/* COUNTERS */

document.querySelectorAll(
"[data-count]"
).forEach(counter=>{

const target=
+counter.dataset.count;

let current=0;

const step=
target/80;

function update(){

current+=step;

if(current<target){

counter.textContent=
Math.floor(current);

requestAnimationFrame(
update
);

}else{

counter.textContent=
target;

}

}

update();

});

/* SMOOTH LINKS */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener(
"click",
e=>{

const target=
document.querySelector(
link.getAttribute("href")
);

if(!target) return;

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

});

});

/* =========================
   PART 3 FINAL
========================= */

/* LOGO GLITCH */

const logo=
document.querySelector(".logo");

if(logo){

setInterval(()=>{

logo.animate([
{
transform:"translateX(-2px)"
},
{
transform:"translateX(2px)"
},
{
transform:"translateX(0)"
}
],{
duration:120
});

},8000);

}

/* ENERGY WAVE */

document.addEventListener(
"click",
(e)=>{

const wave=
document.createElement("div");

wave.style.position="fixed";
wave.style.left=e.clientX+"px";
wave.style.top=e.clientY+"px";

wave.style.width="10px";
wave.style.height="10px";

wave.style.border=
"2px solid #00d9ff";

wave.style.borderRadius="50%";

wave.style.pointerEvents="none";

wave.style.zIndex="9999";

document.body.appendChild(
wave
);

wave.animate([
{
transform:
"translate(-50%,-50%) scale(.5)",
opacity:1
},
{
transform:
"translate(-50%,-50%) scale(12)",
opacity:0
}
],{
duration:700
});

setTimeout(
()=>wave.remove(),
700
);

});

/* HERO PARALLAX */

const hero=
document.querySelector(".hero");

if(hero){

document.addEventListener(
"mousemove",
(e)=>{

const x=
(window.innerWidth/2-e.clientX)
*0.01;

const y=
(window.innerHeight/2-e.clientY)
*0.01;

hero.style.transform=
`translate(${x}px,${y}px)`;

});

}

/* TITLE GLITCH */

document
.querySelectorAll(".title")
.forEach(title=>{

title.addEventListener(
"mouseenter",
()=>{

title.animate([
{
transform:
"translateX(-2px)"
},
{
transform:
"translateX(2px)"
},
{
transform:
"translateX(0)"
}
],{
duration:120
});

});

});

/* END */
