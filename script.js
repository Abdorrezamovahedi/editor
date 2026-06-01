/* =========================
   PREMIUM EDITOR JS
   ULTRA LIGHT VERSION
========================= */

const isMobile =
window.innerWidth < 768 ||
navigator.hardwareConcurrency <= 4;

/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");
observer.unobserve(entry.target);

}

});

},{threshold:0.15});

document.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));

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

(function type(){

if(i < text.length){

heroText.textContent +=
text.charAt(i);

i++;

setTimeout(type,35);

}

})();

}

/* =========================
   COUNTER EFFECT
========================= */

document
.querySelectorAll("[data-count]")
.forEach(counter=>{

const target =
parseInt(counter.dataset.count);

let current = 0;

const step =
target / 80;

function update(){

current += step;

if(current < target){

counter.textContent =
Math.floor(current);

requestAnimationFrame(update);

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
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener(
"click",
e=>{

const target =
document.querySelector(
link.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

/* =========================
   LOGO GLITCH
========================= */

const logo =
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

},10000);

}

/* =========================
   DESKTOP ONLY EFFECTS
========================= */

if(!isMobile){

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.createElement("div");

cursor.className =
"cursor";

document.body.appendChild(cursor);

let tx=0;
let ty=0;
let cx=0;
let cy=0;

document.addEventListener(
"mousemove",
e=>{

tx=e.clientX;
ty=e.clientY;

});

function animateCursor(){

cx += (tx-cx)*0.15;
cy += (ty-cy)*0.15;

cursor.style.transform =
`translate(${cx}px,${cy}px)`;

requestAnimationFrame(
animateCursor
);

}

animateCursor();

/* =========================
   MAGNETIC BUTTONS
========================= */

document
.querySelectorAll(".btn")
.forEach(btn=>{

btn.addEventListener(
"mousemove",
e=>{

const rect =
btn.getBoundingClientRect();

const x =
e.clientX -
rect.left -
rect.width/2;

const y =
e.clientY -
rect.top -
rect.height/2;

btn.style.transform =
`translate(${x*0.08}px,${y*0.08}px)`;

});

btn.addEventListener(
"mouseleave",
()=>{

btn.style.transform="";

});

});

/* =========================
   3D CARDS
========================= */

document
.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener(
"mousemove",
e=>{

const rect =
card.getBoundingClientRect();

const x =
(e.clientX-rect.left)
/ rect.width;

const y =
(e.clientY-rect.top)
/ rect.height;

const rotateX =
(0.5-y)*10;

const rotateY =
(x-0.5)*10;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform="";

});

});

/* =========================
   HERO PARALLAX
========================= */

const hero =
document.querySelector(".hero");

if(hero){

document.addEventListener(
"mousemove",
e=>{

const x =
(window.innerWidth/2
- e.clientX) * 0.01;

const y =
(window.innerHeight/2
- e.clientY) * 0.01;

hero.style.transform =
`translate(${x}px,${y}px)`;

});

}

/* =========================
   TEXT SCRAMBLE
========================= */

const heroTitle =
document.querySelector(
".hero h1"
);

if(heroTitle){

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const original =
heroTitle.textContent;

function scramble(){

let iteration = 0;

const interval =
setInterval(()=>{

heroTitle.textContent =
original
.split("")
.map((char,index)=>{

if(index < iteration)
return original[index];

return letters[
Math.floor(
Math.random() *
letters.length
)
];

})
.join("");

if(
iteration >=
original.length
){

clearInterval(interval);

}

iteration += 0.5;

},40);

}

setTimeout(
scramble,
500
);

}

/* =========================
   MATRIX RAIN
========================= */

const canvas =
document.createElement(
"canvas"
);

canvas.id="matrix";

canvas.style.position=
"fixed";

canvas.style.top="0";
canvas.style.left="0";

canvas.style.width="100%";
canvas.style.height="100%";

canvas.style.zIndex="-3";

canvas.style.pointerEvents=
"none";

document.body.prepend(
canvas
);

const ctx =
canvas.getContext("2d");

const fontSize = 18;

let columns;
let drops;

function resizeMatrix(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

columns =
Math.floor(
canvas.width /
fontSize
);

drops =
Array(columns).fill(1);

}

resizeMatrix();

window.addEventListener(
"resize",
resizeMatrix
);

function drawMatrix(){

ctx.fillStyle =
"rgba(0,0,0,.15)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle =
"#00ff88";

ctx.font =
fontSize +
"px monospace";

for(
let i=0;
i<drops.length;
i++
){

const text =
Math.random() > .5
? "0"
: "1";

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize >
canvas.height &&
Math.random() > .98
){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(
drawMatrix,
80
);

}

/* =========================
   END
========================= */
