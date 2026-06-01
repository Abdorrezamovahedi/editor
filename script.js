/* =========================
   ULTRA FAKE SECURITY ALERT
========================= */

window.addEventListener("load",()=>{

const warning=document.createElement("div");

warning.className="warning-screen";

warning.innerHTML=`

<div class="warning-noise"></div>

<div class="warning-triangle">
⚠
</div>

<div class="warning-title">
ACCESS DENIED
</div>

<div class="warning-sub">
SECURITY BREACH DETECTED
</div>

<div class="warning-code">
SCANNING SYSTEM...
</div>

`;

document.body.appendChild(warning);

/* Random Glitch */

const glitch=setInterval(()=>{

warning.style.transform=
`translate(${Math.random()*20-10}px,
${Math.random()*20-10}px)`;

warning.style.filter=
`
brightness(${1+Math.random()*0.5})
contrast(${1+Math.random()*0.5})
`;

},40);

/* Fake loading text */

const texts=[
"SCANNING SYSTEM...",
"CHECKING FILES...",
"VERIFYING ACCESS...",
"DETECTING THREATS...",
"ACCESS BLOCKED!"
];

let i=0;

const txt=warning.querySelector(".warning-code");

const changer=setInterval(()=>{

i=(i+1)%texts.length;

txt.textContent=texts[i];

},350);

/* Remove after 2 sec */

setTimeout(()=>{

clearInterval(glitch);
clearInterval(changer);

warning.style.transition="opacity .5s";

warning.style.opacity="0";

setTimeout(()=>{

warning.remove();

},500);

},2000);

});


/* =========================
   ORIGINAL CODE
========================= */

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
