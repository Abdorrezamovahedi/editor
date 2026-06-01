/* =========================
   WARNING GLITCH SCREEN
========================= */

window.addEventListener("load",()=>{

const warning=document.createElement("div");

warning.innerHTML=`
<div style="
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
gap:20px;
">

<div style="
font-size:120px;
color:red;
text-shadow:0 0 30px red;
animation:pulse .2s infinite;
">
⚠
</div>

<h1 style="
color:#ff0000;
font-family:monospace;
font-size:42px;
text-align:center;
text-shadow:0 0 20px red;
">
WARNING
</h1>

<p style="
color:white;
font-family:monospace;
font-size:18px;
text-align:center;
">
Loading Security Protocol...
</p>

</div>
`;

warning.style.cssText=`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:black;
z-index:999999;
overflow:hidden;
`;

/* صدا */

const sound = new Audio(
"Tv-Noise-online-audio-converter.com_.mp3"
);

sound.volume = 1;

document.body.appendChild(warning);

/* تلاش برای پخش صدا */

sound.play().catch(()=>{
console.log("Browser blocked autoplay audio");
});

/* گلیچ */

const flash=setInterval(()=>{

warning.style.background=
Math.random()>0.5
? "#220000"
: "#000000";

warning.style.transform=
`translate(
${Math.random()*20-10}px,
${Math.random()*20-10}px
)`;

warning.style.filter=
`brightness(${1+Math.random()*1})
contrast(${1+Math.random()*2})`;

},40);

/* حذف بعد از 2 ثانیه */

setTimeout(()=>{

clearInterval(flash);

sound.pause();
sound.currentTime=0;

warning.style.transition=
"opacity .5s ease";

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
