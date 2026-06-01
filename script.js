/* =========================
   PREMIUM EDITOR JS
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

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const originalText =
heroTitle.innerText;

function scramble(){

let iteration = 0;

const interval = setInterval(()=>{

heroTitle.innerText = originalText
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

if(iteration >= originalText.length){

clearInterval(interval);

}

iteration += 0.5;

},30);

}

window.addEventListener("load",()=>{

setTimeout(scramble,500);

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

heroText.textContent += text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

setTimeout(typeWriter,700);

}

/* =========================
   FLOATING ORBS
========================= */

function createOrb(type){

const orb = document.createElement("div");

orb.classList.add("orb");

if(type){

orb.classList.add(type);

}

orb.style.left =
Math.random()*100 + "vw";

orb.style.top =
Math.random()*100 + "vh";

orb.style.animationDuration =
(12 + Math.random()*8) + "s";

document.body.appendChild(orb);

}

for(let i=0;i<4;i++){

createOrb(
i % 2 === 0
? "purple"
: "pink"
);

}

/* =========================
   COUNTER EFFECT
========================= */

document.querySelectorAll("[data-count]").forEach(counter=>{

const target =
parseInt(counter.dataset.count);

let current = 0;

const speed = target / 80;

function update(){

current += speed;

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

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

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
