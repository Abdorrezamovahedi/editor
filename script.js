/* =========================
   PREMIUM EDITOR JS
   PART 1 OPTIMIZED
========================= */

/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

observer.unobserve(entry.target);

}

});

},{threshold:0.15});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

/* =========================
   SPOTLIGHT
========================= */

let mouseX = window.innerWidth/2;
let mouseY = window.innerHeight/2;

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});

function updateSpotlight(){

document.documentElement.style.setProperty(
"--spot-x",
mouseX + "px"
);

document.documentElement.style.setProperty(
"--spot-y",
mouseY + "px"
);

requestAnimationFrame(updateSpotlight);

}

updateSpotlight();

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{

cursorX = e.clientX;
cursorY = e.clientY;

});

function animateCursor(){

currentX += (cursorX-currentX)*0.18;
currentY += (cursorY-currentY)*0.18;

cursor.style.left = currentX + "px";
cursor.style.top = currentY + "px";

requestAnimationFrame(animateCursor);

}

animateCursor();

/* =========================
   OPTIMIZED NEON TRAIL
========================= */

let lastTrail = 0;

document.addEventListener(
"mousemove",
(e)=>{

const now = Date.now();

if(now-lastTrail < 35) return;

lastTrail = now;

const trail =
document.createElement("div");

trail.style.position="fixed";
trail.style.left=e.clientX+"px";
trail.style.top=e.clientY+"px";

trail.style.width="8px";
trail.style.height="8px";

trail.style.borderRadius="50%";

trail.style.background="#00d9ff";

trail.style.pointerEvents="none";

trail.style.zIndex="9998";

trail.style.boxShadow=
"0 0 10px #00d9ff";

document.body.appendChild(trail);

trail.animate([
{
transform:"scale(1)",
opacity:.7
},
{
transform:"scale(0)",
opacity:0
}
],{
duration:350,
easing:"ease-out"
});

setTimeout(()=>{
trail.remove();
},350);

});

/* =========================
   MAGNETIC BUTTONS
========================= */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

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

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translate(0,0)";

});

});

/* =========================
   3D PORTFOLIO CARDS
========================= */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX -
rect.left;

const y =
e.clientY -
rect.top;

const rotateY =
((x / rect.width)-0.5)*8;

const rotateX =
((y / rect.height)-0.5)*-8;

card.style.transform = `
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
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
Math.random()*
letters.length
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

},35);

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
40
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

},5000);

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
0 0 30px #00d9ff,
0 0 60px #7b00ff,
0 0 90px #ff00ff
`;

document.body.appendChild(
flash
);

flash.animate([
{
transform:"scale(0)"
},
{
transform:"scale(12)",
opacity:0
}
],{
duration:600
});

setTimeout(()=>{

flash.remove();

},600);

});

/* =========================
   PREMIUM EDITOR JS
   PART 2 OPTIMIZED
========================= */

/* =========================
   MATRIX RAIN
========================= */

const matrixCanvas =
document.createElement("canvas");

matrixCanvas.style.position="fixed";
matrixCanvas.style.top="0";
matrixCanvas.style.left="0";
matrixCanvas.style.width="100%";
matrixCanvas.style.height="100%";
matrixCanvas.style.zIndex="-3";
matrixCanvas.style.pointerEvents="none";

document.body.prepend(matrixCanvas);

const ctx =
matrixCanvas.getContext("2d");

function resizeMatrix(){

matrixCanvas.width =
window.innerWidth;

matrixCanvas.height =
window.innerHeight;

columns =
Math.floor(
matrixCanvas.width /
fontSize
);

drops =
Array(columns).fill(1);

}

const chars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 18;

let columns =
Math.floor(
window.innerWidth /
fontSize
);

let drops =
Array(columns).fill(1);

resizeMatrix();

window.addEventListener(
"resize",
resizeMatrix
);

function drawMatrix(){

ctx.fillStyle =
"rgba(0,0,0,0.12)";

ctx.fillRect(
0,
0,
matrixCanvas.width,
matrixCanvas.height
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
chars[
Math.floor(
Math.random()*
chars.length
)
];

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize >
matrixCanvas.height &&
Math.random() > .985
){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(
drawMatrix,
75
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
Math.random()*100+"vw";

orb.style.top =
Math.random()*100+"vh";

orb.style.animationDuration =
(15 + Math.random()*10)
+ "s";

document.body.appendChild(
orb
);

}

for(
let i=0;
i<4;
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
i<50;
i++
){

const star =
document.createElement("div");

star.style.position="fixed";
star.style.width="2px";
star.style.height="2px";

star.style.borderRadius="50%";

star.style.background="white";

star.style.left=
Math.random()*100+"vw";

star.style.top=
Math.random()*100+"vh";

star.style.opacity=
Math.random();

star.style.pointerEvents=
"none";

star.style.zIndex="-2";

document.body.appendChild(
star
);

star.animate([
{opacity:.2},
{opacity:1},
{opacity:.2}
],{
duration:
3000+
Math.random()*5000,
iterations:Infinity
});

}

/* =========================
   FLOATING PARTICLES
========================= */

function createParticle(){

const p =
document.createElement("div");

p.style.position="fixed";

p.style.width="4px";
p.style.height="4px";

p.style.borderRadius="50%";

p.style.background=
"#7b00ff";

p.style.left=
Math.random()*100+"vw";

p.style.bottom="-10px";

p.style.pointerEvents=
"none";

p.style.zIndex="-1";

document.body.appendChild(
p
);

p.animate([
{
transform:"translateY(0)"
},
{
transform:
"translateY(-120vh)"
}
],{
duration:
8000+
Math.random()*4000
});

setTimeout(()=>{

p.remove();

},12000);

}

setInterval(
createParticle,
1200
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
target / 100;

function update(){

current += speed;

if(
current < target
){

counter.textContent =
Math.floor(current);

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

/* =========================
   FLOATING EMOJIS
========================= */

const emojis =
["🔥","⚡","💎","🚀","🎮"];

setInterval(()=>{

const e =
document.createElement("div");

e.innerHTML =
emojis[
Math.floor(
Math.random()*
emojis.length
)
];

e.style.position="fixed";
e.style.left=
Math.random()*100+"vw";

e.style.bottom="-50px";

e.style.fontSize="24px";

e.style.pointerEvents=
"none";

e.style.zIndex="999";

document.body.appendChild(e);

e.animate([
{
transform:"translateY(0)"
},
{
transform:
"translateY(-100vh)"
}
],{
duration:9000
});

setTimeout(()=>{

e.remove();

},9000);

},5000);

/* =========================
   RANDOM CARD GLOW
========================= */

setInterval(()=>{

const cards =
document.querySelectorAll(
".card"
);

if(!cards.length) return;

const card =
cards[
Math.floor(
Math.random()*
cards.length
)
];

card.animate([
{
boxShadow:
"0 0 0px #00d9ff"
},
{
boxShadow:
"0 0 25px #00d9ff"
},
{
boxShadow:
"0 0 0px #00d9ff"
}
],{
duration:1200
});

},6000);

/* =========================
   TITLE PULSE
========================= */

document
.querySelectorAll(
".title"
)
.forEach(title=>{

setInterval(()=>{

title.animate([
{
transform:"scale(1)"
},
{
transform:"scale(1.03)"
},
{
transform:"scale(1)"
}
],{
duration:800
});

},7000);

});

/* =========================
   DOUBLE CLICK EXPLOSION
========================= */

document.addEventListener(
"dblclick",
(e)=>{

for(
let i=0;
i<12;
i++
){

const p =
document.createElement("div");

p.style.position="fixed";

p.style.left=
e.clientX+"px";

p.style.top=
e.clientY+"px";

p.style.width="5px";
p.style.height="5px";

p.style.borderRadius="50%";

p.style.background=
"#00d9ff";

p.style.pointerEvents=
"none";

document.body.appendChild(
p
);

const x =
(Math.random()-0.5)*300;

const y =
(Math.random()-0.5)*300;

p.animate([
{
transform:
"translate(0,0)"
},
{
transform:
`translate(${x}px,${y}px)`
}
],{
duration:1000
});

setTimeout(()=>{

p.remove();

},1000);

}

});

/* =========================
   RANDOM GLITCH TEXT
========================= */

setInterval(()=>{

const titles =
document.querySelectorAll(
"h1,.title"
);

if(!titles.length) return;

const t =
titles[
Math.floor(
Math.random()*
titles.length
)
];

t.animate([
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

},6000);

/* =========================
   PREMIUM EDITOR JS
   PART 3 ULTRA EFFECTS
========================= */

/* =========================
   SHOOTING STARS
========================= */

function createShootingStar(){

const star =
document.createElement("div");

star.style.position="fixed";
star.style.width="120px";
star.style.height="2px";

star.style.background=
"linear-gradient(90deg,#fff,transparent)";

star.style.left=
Math.random()*100+"vw";

star.style.top=
Math.random()*40+"vh";

star.style.pointerEvents="none";
star.style.zIndex="-1";

document.body.appendChild(star);

star.animate([
{
transform:
"translate(0,0) rotate(-25deg)",
opacity:1
},
{
transform:
"translate(-500px,500px) rotate(-25deg)",
opacity:0
}
],{
duration:1800
});

setTimeout(()=>{
star.remove();
},1800);

}

setInterval(
createShootingStar,
8000
);

/* =========================
   FLOATING 0 & 1
========================= */

function createBinary(){

const b =
document.createElement("div");

b.innerText =
Math.random()>0.5 ? "1" : "0";

b.style.position="fixed";

b.style.left=
Math.random()*100+"vw";

b.style.bottom="-30px";

b.style.color=
"rgba(0,255,120,.5)";

b.style.fontSize=
(12+Math.random()*20)+"px";

b.style.pointerEvents="none";

b.style.zIndex="-1";

document.body.appendChild(b);

b.animate([
{
transform:"translateY(0)"
},
{
transform:
"translateY(-120vh)"
}
],{
duration:
7000+
Math.random()*4000
});

setTimeout(()=>{
b.remove();
},11000);

}

setInterval(
createBinary,
1500
);

/* =========================
   CYBER FLASH
========================= */

setInterval(()=>{

document.body.animate([
{
filter:
"brightness(1)"
},
{
filter:
"brightness(1.15)"
},
{
filter:
"brightness(1)"
}
],{
duration:400
});

},15000);

/* =========================
   RANDOM LOGO GLOW
========================= */

const logo =
document.querySelector(".logo");

if(logo){

setInterval(()=>{

logo.animate([
{
filter:
"drop-shadow(0 0 5px #00d9ff)"
},
{
filter:
"drop-shadow(0 0 25px #ff00ff)"
},
{
filter:
"drop-shadow(0 0 5px #00d9ff)"
}
],{
duration:1200
});

},6000);

}

/* =========================
   MOUSE ENERGY WAVE
========================= */

document.addEventListener(
"click",
(e)=>{

const wave =
document.createElement("div");

wave.style.position="fixed";

wave.style.left=
e.clientX+"px";

wave.style.top=
e.clientY+"px";

wave.style.width="10px";
wave.style.height="10px";

wave.style.border=
"2px solid #00d9ff";

wave.style.borderRadius=
"50%";

wave.style.pointerEvents=
"none";

wave.style.zIndex=
"9999";

document.body.appendChild(wave);

wave.animate([
{
transform:
"translate(-50%,-50%) scale(0.5)",
opacity:1
},
{
transform:
"translate(-50%,-50%) scale(15)",
opacity:0
}
],{
duration:900
});

setTimeout(()=>{
wave.remove();
},900);

});

/* =========================
   PARALLAX HERO
========================= */

const hero =
document.querySelector(".hero");

document.addEventListener(
"mousemove",
(e)=>{

if(!hero) return;

const x =
(window.innerWidth/2-e.clientX)
*0.01;

const y =
(window.innerHeight/2-e.clientY)
*0.01;

hero.style.transform=
`translate(${x}px,${y}px)`;

});

/* =========================
   RANDOM REVIEW GLOW
========================= */

setInterval(()=>{

const reviews =
document.querySelectorAll(
".review"
);

if(!reviews.length) return;

const item =
reviews[
Math.floor(
Math.random()*
reviews.length
)
];

item.animate([
{
boxShadow:
"0 0 0px #00d9ff"
},
{
boxShadow:
"0 0 30px #00d9ff"
},
{
boxShadow:
"0 0 0px #00d9ff"
}
],{
duration:1200
});

},5000);

/* =========================
   CYBER TITLE GLITCH
========================= */

document
.querySelectorAll(
".title"
)
.forEach(title=>{

title.addEventListener(
"mouseenter",
()=>{

title.animate([
{
transform:
"translateX(-3px)"
},
{
transform:
"translateX(3px)"
},
{
transform:
"translateX(0)"
}
],{
duration:150
});

});

});

/* =========================
   RGB SCREEN SHIFT
========================= */

setInterval(()=>{

document.body.animate([
{
filter:
"hue-rotate(0deg)"
},
{
filter:
"hue-rotate(20deg)"
},
{
filter:
"hue-rotate(0deg)"
}
],{
duration:1000
});

},20000);

/* =========================
   CARD FLOAT BOOST
========================= */

document
.querySelectorAll(".card")
.forEach(card=>{

card.animate([
{
transform:
"translateY(0px)"
},
{
transform:
"translateY(-8px)"
},
{
transform:
"translateY(0px)"
}
],{
duration:
4000+
Math.random()*2000,
iterations:Infinity
});

});

/* =========================
   END OF PART 3
========================= */
