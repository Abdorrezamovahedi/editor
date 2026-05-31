/* ================= SCROLL REVEAL ================= */

const observer = new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
e.target.classList.add("flash");
}
});
},{threshold:0.2});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});


/* ================= CURSOR ================= */

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

if(Math.random() > 0.88){
createParticle(e.clientX,e.clientY);
}
});


/* ================= PARTICLES ================= */

function createParticle(x,y){
const p = document.createElement("div");
p.classList.add("particle");

p.style.left = x + "px";
p.style.top = y + "px";

document.body.appendChild(p);

setTimeout(()=>p.remove(),4000);
}


/* ================= SAFE PARALLAX (FIXED) ================= */

let mx=0,my=0,cx=0,cy=0;

document.addEventListener("mousemove",(e)=>{
mx = e.clientX;
my = e.clientY;
});

function animate(){

cx += (mx-cx)*0.05;
cy += (my-cy)*0.05;

/* ❌ NO BODY TRANSFORM (FIXED BUG) */
/* instead use CSS variables */
document.documentElement.style.setProperty("--mx", cx/50);
document.documentElement.style.setProperty("--my", cy/50);

requestAnimationFrame(animate);
}

animate();


/* ================= RANDOM GLITCH ================= */

setInterval(()=>{
const h = document.querySelector("h1");
if(h){
h.style.transform = `skew(${Math.random()*2-1}deg)`;
setTimeout(()=>h.style.transform="none",120);
}
},2500);


/* ================= ORBS ================= */

function createOrb(className){
const orb = document.createElement("div");
orb.classList.add("orb");
if(className) orb.classList.add(className);

orb.style.left = Math.random()*100 + "vw";
orb.style.top = Math.random()*100 + "vh";
orb.style.animationDuration = (12 + Math.random()*10) + "s";

document.body.appendChild(orb);
}

for(let i=0;i<5;i++){
createOrb(i%3===0 ? "purple" : i%3===1 ? "
