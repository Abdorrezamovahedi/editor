/* Glitch */

const glitch=setInterval(()=>{

screen.style.transform=
`translate(${Math.random()*20-10}px,
${Math.random()*20-10}px)`;

screen.style.filter=
`brightness(${1+Math.random()*0.5})`;

},40);

/* Remove */

setTimeout(()=>{

clearInterval(glitch);

sound.pause();
sound.currentTime=0;

screen.style.transition="opacity .5s";

screen.style.opacity="0";

setTimeout(()=>{
screen.remove();
},500);

},2000);

});


/* =====================================
   YOUR ORIGINAL CODE
===================================== */

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

document.body.style.backgroundPosition=
`${e.clientX/30}px ${e.clientY/30}px`;

});
/* Glitch */

const glitch=setInterval(()=>{

screen.style.transform=
`translate(${Math.random()*20-10}px,
${Math.random()*20-10}px)`;

screen.style.filter=
`brightness(${1+Math.random()*0.5})`;

},40);

/* Remove */

setTimeout(()=>{

clearInterval(glitch);

sound.pause();
sound.currentTime=0;

screen.style.transition="opacity .5s";

screen.style.opacity="0";

setTimeout(()=>{
screen.remove();
},500);

},2000);

});


/* =====================================
   YOUR ORIGINAL CODE
===================================== */

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

document.body.style.backgroundPosition=
`${e.clientX/30}px ${e.clientY/30}px`;

});
