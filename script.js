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
