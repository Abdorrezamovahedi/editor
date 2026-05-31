const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

document.addEventListener("mousemove",(e)=>{

document.body.style.backgroundPosition =
`${e.clientX/30}px ${e.clientY/30}px`;

});

