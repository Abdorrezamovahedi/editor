/* ================= SCROLL ANIMATION ================= */

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

/* ================= MOUSE PARALLAX ================= */

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{
mouseX = e.clientX;
mouseY = e.clientY;
});

function animate(){

currentX += (mouseX - currentX) * 0.05;
currentY += (mouseY - currentY) * 0.05;

document.body.style.transform =
`translate(${currentX/250}px, ${currentY/250}px)`;

requestAnimationFrame(animate);
}

animate();
