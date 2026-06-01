// SMOOTH REVEAL
const observer = new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
}
});
},{threshold:0.15});

document.querySelectorAll("section").forEach(el=>{
observer.observe(el);
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(a=>{
a.addEventListener("click",e=>{
e.preventDefault();
document.querySelector(a.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// SIMPLE PARTICLES (LIGHT VERSION)
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let w,h;
function resize(){
w=canvas.width=innerWidth;
h=canvas.height=innerHeight;
}
resize();
window.addEventListener("resize",resize);

const particles = Array.from({length:40},()=>({
x:Math.random()*w,
y:Math.random()*h,
vx:(Math.random()-0.5)*0.3,
vy:(Math.random()-0.5)*0.3
}));

function draw(){
ctx.clearRect(0,0,w,h);

for(let p of particles){
p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>w)p.vx*=-1;
if(p.y<0||p.y>h)p.vy*=-1;

ctx.fillStyle="rgba(0,217,255,0.4)";
ctx.fillRect(p.x,p.y,2,2);
}

requestAnimationFrame(draw);
}
draw();
