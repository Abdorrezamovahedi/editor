const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:0.15
});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});

let x=0,y=0;

document.addEventListener("mousemove",(e)=>{
x=e.clientX;
y=e.clientY;
});

function animate(){
document.body.style.backgroundPosition =
`${x/40}px ${y/40}px`;
requestAnimationFrame(animate);
}

animate();
