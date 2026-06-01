/* =========================
   PREMIUM EDITOR JS
   PART 1
========================= */

/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

/* =========================
   SPOTLIGHT
========================= */

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(
"--spot-x",
e.clientX + "px"
);

document.documentElement.style.setProperty(
"--spot-y",
e.clientY + "px"
);

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove",(e)=>{

cursorX = e.clientX;
cursorY = e.clientY;

});

function animateCursor(){

cursor.style.left = cursorX + "px";
cursor.style.top = cursorY + "px";

requestAnimationFrame(animateCursor);

}

animateCursor();

/* =========================
   NEON TRAIL
========================= */

document.addEventListener(
"mousemove",
(e)=>{

const trail =
document.createElement("div");

trail.style.position="fixed";

trail.style.left=e.clientX+"px";

trail.style.top=e.clientY+"px";

trail.style.width="10px";

trail.style.height="10px";

trail.style.borderRadius="50%";

trail.style.background="#00d9ff";

trail.style.pointerEvents="none";

trail.style.zIndex="9998";

trail.style.boxShadow=
"0 0 15px #00d9ff";

document.body.appendChild(trail);

trail.animate([
{
transform:"scale(1)",
opacity:1
},
{
transform:"scale(0)",
opacity:0
}
],{
duration:500
});

setTimeout(()=>{
trail.remove();
},500);

});

/* =========================
   MAGNETIC BUTTONS
========================= */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect = btn.getBoundingClientRect();

const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;

btn.style.transform =
`translate(${x*0.12}px,${y*0.12}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "";

});

});

/* =========================
   PREMIUM EDITOR JS
   PART 2
========================= */

/* =========================
   3D PORTFOLIO CARDS
========================= */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5) * 12;

const rotateX =
((y / rect.height)-0.5) * -12;

card.style.transform = `
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "";

});

});

/* =========================
   TEXT SCRAMBLE
========================= */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const originalText =
heroTitle.innerText;

function scramble(){

let iteration = 0;

const interval = setInterval(()=>{

heroTitle.innerText =
originalText
.split("")
.map((char,index)=>{

if(index < iteration){

return originalText[index];

}

return letters[
Math.floor(
Math.random()*letters.length
)
];

})
.join("");

if(
iteration >=
originalText.length
){

clearInterval(interval);

}

iteration += 0.5;

},30);

}

window.addEventListener(
"load",
()=>{

setTimeout(
scramble,
500
);

});

}

/* =========================
   HERO TYPING EFFECT
========================= */

const heroText =
document.querySelector(".hero p");

if(heroText){

const text =
heroText.textContent;

heroText.textContent = "";

let i = 0;

function typeWriter(){

if(i < text.length){

heroText.textContent +=
text.charAt(i);

i++;

setTimeout(
typeWriter,
50
);

}

}

setTimeout(
typeWriter,
700
);

}

/* =========================
   RANDOM LOGO GLITCH
========================= */

setInterval(()=>{

const logo =
document.querySelector(".logo");

if(!logo) return;

logo.style.transform =
"translateX(4px)";

setTimeout(()=>{

logo.style.transform =
"translateX(-4px)";

},50);

setTimeout(()=>{

logo.style.transform="";

},100);

},3000);

/* =========================
   CLICK FLASH
========================= */

document.addEventListener(
"click",
(e)=>{

const flash =
document.createElement("div");

flash.style.position =
"fixed";

flash.style.left =
e.clientX + "px";

flash.style.top =
e.clientY + "px";

flash.style.width =
"10px";

flash.style.height =
"10px";

flash.style.borderRadius =
"50%";

flash.style.pointerEvents =
"none";

flash.style.zIndex =
"9999";

flash.style.boxShadow =
`
0 0 40px #00d9ff,
0 0 80px #7b00ff,
0 0 120px #ff00ff
`;

document.body.appendChild(
flash
);

flash.animate([
{
transform:"scale(0)"
},
{
transform:"scale(15)",
opacity:0
}
],{
duration:700
});

setTimeout(()=>{

flash.remove();

},700);

});

/* =========================
   PREMIUM EDITOR JS
   PART 3
========================= */

/* =========================
   MATRIX RAIN
========================= */

const matrixCanvas =
document.createElement("canvas");

matrixCanvas.style.position =
"fixed";

matrixCanvas.style.top = "0";

matrixCanvas.style.left = "0";

matrixCanvas.style.width = "100%";

matrixCanvas.style.height = "100%";

matrixCanvas.style.zIndex = "-3";

matrixCanvas.style.pointerEvents =
"none";

document.body.prepend(
matrixCanvas
);

const ctx =
matrixCanvas.getContext("2d");

function resizeMatrix(){

matrixCanvas.width =
window.innerWidth;

matrixCanvas.height =
window.innerHeight;

}

resizeMatrix();

window.addEventListener(
"resize",
resizeMatrix
);

const chars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 16;

let columns =
Math.floor(
matrixCanvas.width /
fontSize
);

let drops =
Array(columns).fill(1);

function drawMatrix(){

ctx.fillStyle =
"rgba(0,0,0,0.08)";

ctx.fillRect(
0,
0,
matrixCanvas.width,
matrixCanvas.height
);

ctx.fillStyle =
"#00ff88";

ctx.font =
fontSize + "px monospace";

for(
let i = 0;
i < drops.length;
i++
){

const text =
chars[
Math.floor(
Math.random() *
chars.length
)
];

ctx.fillText(
text,
i * fontSize,
drops[i] * fontSize
);

if(
drops[i] *
fontSize >
matrixCanvas.height &&
Math.random() > 0.975
){

drops[i] = 0;

}

drops[i]++;

}

}

setInterval(
drawMatrix,
40
);

/* =========================
   FLOATING ORBS
========================= */

function createOrb(type){

const orb =
document.createElement("div");

orb.classList.add("orb");

if(type){

orb.classList.add(type);

}

orb.style.left =
Math.random()*100 +
"vw";

orb.style.top =
Math.random()*100 +
"vh";

orb.style.animationDuration =
(12 + Math.random()*8)
+ "s";

document.body.appendChild(
orb
);

}

for(
let i=0;
i<6;
i++
){

createOrb(
i % 2 === 0
? "purple"
: "pink"
);

}

/* =========================
   STARS
========================= */

for(
let i=0;
i<120;
i++
){

const star =
document.createElement("div");

star.style.position =
"fixed";

star.style.width =
"2px";

star.style.height =
"2px";

star.style.borderRadius =
"50%";

star.style.background =
"white";

star.style.left =
Math.random()*100 +
"vw";

star.style.top =
Math.random()*100 +
"vh";

star.style.opacity =
Math.random();

star.style.pointerEvents =
"none";

star.style.zIndex =
"-2";

document.body.appendChild(
star
);

star.animate([
{
opacity:.2
},
{
opacity:1
},
{
opacity:.2
}
],{

duration:
1000 +
Math.random()*4000,

iterations:
Infinity

});

}

/* =========================
   FLOATING PARTICLES
========================= */

function createParticle(){

const p =
document.createElement("div");

p.style.position =
"fixed";

p.style.width =
"4px";

p.style.height =
"4px";

p.style.borderRadius =
"50%";

p.style.background =
"#7b00ff";

p.style.left =
Math.random()*100 +
"vw";

p.style.bottom =
"-10px";

p.style.pointerEvents =
"none";

p.style.zIndex =
"-1";

document.body.appendChild(
p
);

p.animate([
{
transform:
"translateY(0)"
},
{
transform:
"translateY(-120vh)"
}
],{

duration:
6000 +
Math.random()*5000

});

setTimeout(()=>{

p.remove();

},12000);

}

setInterval(
createParticle,
300
);

/* =========================
   COUNTER EFFECT
========================= */

document
.querySelectorAll(
"[data-count]"
)
.forEach(counter=>{

const target =
parseInt(
counter.dataset.count
);

let current = 0;

const speed =
target / 80;

function update(){

current += speed;

if(
current < target
){

counter.textContent =
Math.floor(
current
);

requestAnimationFrame(
update
);

}else{

counter.textContent =
target;

}

}

update();

});

/* =========================
   SMOOTH NAV LINKS
========================= */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{

link.addEventListener(
"click",
(e)=>{

const target =
document.querySelector(
link.getAttribute(
"href"
)
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
