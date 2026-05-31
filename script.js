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

/* TRAIL PARTICLE */
if(Math.random() > 0.85){
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

setTimeout(()=>p.remove(),6000);
}

/* ================= SCREEN PARALLAX ================= */

let mx=0,my=0,cx=0,cy=0;

document.addEventListener("mousemove",(e)=>{
mx = e.clientX;
my = e.clientY;
});

function animate(){

cx += (mx-cx)*0.04;
cy += (my-cy)*0.04;

document.body.style.transform =
`translate(${cx/300}px,${cy/300}px)`;

requestAnimationFrame(animate);
}

animate();

/* ================= RANDOM GLITCH ================= */

setInterval(()=>{
const h = document.querySelector("h1");
if(h){
h.style.transform = `skew(${Math.random()*2-1}deg)`;
setTimeout(()=>h.style.transform="none",150);
}
},3000);
