/* ================= MATRIX BACKGROUND ================= */

const canvas = document.createElement("canvas");
canvas.id = "matrix";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize",()=>{

resizeCanvas();

columns = Math.floor(canvas.width/fontSize);

drops = [];

for(let i=0;i<columns;i++){
drops[i] = 1;
}

});

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*";
const fontSize = 14;

let columns = Math.floor(canvas.width/fontSize);

let drops = [];

for(let i=0;i<columns;i++){
drops[i] = 1;
}

function matrix(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ffee";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text =
letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(
text,
i * fontSize,
drops[i] * fontSize
);

if(
drops[i] * fontSize > canvas.height &&
Math.random() > 0.975
){
drops[i] = 0;
}

drops[i]++;
}

requestAnimationFrame(matrix);

}

matrix();

/* ================= SCROLL REVEAL ================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");
entry.target.classList.add("flash");

}

});

},{threshold:0.2});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

/* ================= CUSTOM CURSOR ================= */

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

if(Math.random() > 0.88){

createParticle(
e.clientX,
e.clientY
);

}

});

/* ================= PARTICLES ================= */

function createParticle(x,y){

const p = document.createElement("div");

p.classList.add("particle");

p.style.left = x + "px";
p.style.top = y + "px";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},4000);

}

/* ================= SAFE PARALLAX ================= */

let mx = 0;
let my = 0;

let cx = 0;
let cy = 0;

document.addEventListener("mousemove",(e)=>{

mx = e.clientX;
my = e.clientY;

});

function animate(){

cx += (mx-cx)*0.05;
cy += (my-cy)*0.05;

document.documentElement.style.setProperty(
"--mx",
cx/50
);

document.documentElement.style.setProperty(
"--my",
cy/50
);

requestAnimationFrame(animate);

}

animate();

/* ================= RANDOM GLITCH ================= */

setInterval(()=>{

const h = document.querySelector(".hero h1");

if(h){

h.style.transform =
`skew(${Math.random()*2-1}deg)`;

setTimeout(()=>{

h.style.transform = "none";

},120);

}

},2500);

/* ================= FLOATING ORBS ================= */

function createOrb(className){

const orb = document.createElement("div");

orb.classList.add("orb");

if(className){

orb.classList.add(className);

}

orb.style.left =
Math.random()*100 + "vw";

orb.style.top =
Math.random()*100 + "vh";

orb.style.animationDuration =
(12 + Math.random()*10) + "s";

document.body.appendChild(orb);

}

for(let i=0;i<6;i++){

createOrb(

i%3===0
? "purple"
: i%3===1
? "pink"
: ""

);

}

/* ================= CARD 3D EFFECT ================= */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5) * 20;

const rotateX =
((y / rect.height)-0.5) * -20;

card.style.transform = `
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "";

});

});

/* ================= BUTTON EFFECT ================= */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

document.body.style.filter =
"hue-rotate(180deg)";

setTimeout(()=>{

document.body.style.filter =
"none";

},500);

});

});

/* ================= HERO TYPING EFFECT ================= */

const heroText =
document.querySelector(".hero p");

if(heroText){

const original =
heroText.textContent;

heroText.textContent = "";

let i = 0;

function typeWriter(){

if(i < original.length){

heroText.textContent +=
original.charAt(i);

i++;

setTimeout(typeWriter,60);

}

}

typeWriter();

}
