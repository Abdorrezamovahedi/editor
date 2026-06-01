/* =====================================
   RED HACKER PRANK SCREEN
===================================== */

window.addEventListener("load",()=>{

/* CSS */

const style=document.createElement("style");

style.innerHTML=`

.warning-screen{
position:fixed;
inset:0;
background:#000;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:hidden;
z-index:999999;
}

.binary-bg{
position:absolute;
inset:0;
color:#ff0000;
font-family:monospace;
font-size:18px;
line-height:18px;
opacity:.18;
white-space:pre-wrap;
word-break:break-all;
pointer-events:none;
user-select:none;
animation:binaryMove 3s linear infinite;
}

.warning-triangle{
font-size:220px;
color:#ff0000;
z-index:2;
text-shadow:
0 0 20px red,
0 0 40px red,
0 0 80px red,
0 0 120px red;
animation:pulse .25s infinite;
}

.warning-title{
font-size:72px;
font-weight:900;
letter-spacing:12px;
color:#ff0000;
z-index:2;
text-shadow:
4px 0 #fff,
-4px 0 red;
animation:glitch .08s infinite;
}

.warning-sub{
font-size:22px;
margin-top:15px;
letter-spacing:5px;
z-index:2;
color:#fff;
}

.warning-scan{
position:absolute;
width:100%;
height:4px;
background:red;
box-shadow:0 0 25px red;
animation:scan 1.2s linear infinite;
}

@keyframes pulse{
0%,100%{transform:scale(1);}
50%{transform:scale(1.12);}
}

@keyframes glitch{
0%{transform:translate(0);}
25%{transform:translate(-6px,2px);}
50%{transform:translate(6px,-2px);}
75%{transform:translate(-3px,1px);}
100%{transform:translate(0);}
}

@keyframes binaryMove{
from{transform:translateY(-50px);}
to{transform:translateY(50px);}
}

@keyframes scan{
from{top:-10px;}
to{top:100%;}
}

`;

document.head.appendChild(style);

/* Binary Background */

let binary="";

for(let i=0;i<4000;i++){
binary+=Math.random()>.5?"1":"0";
if(i%80===0) binary+="\n";
}

/* Screen */

const screen=document.createElement("div");

screen.className="warning-screen";

screen.innerHTML=`
<div class="binary-bg">${binary}</div>
<div class="warning-scan"></div>
<div class="warning-triangle">⚠</div>
<div class="warning-title">حمله سایبری</div>
<div class="warning-sub">wiohinhiwniuhiwniweugiuniuweiuhnijg8wegnuewihgewngiuewgueuyguwegewghneiusbguye nguyesgiusebgiusijkvniudhdgniokdsdbhgiojklseniukgnsdiuygeujkdngbujkdrgbviudbsgiubsriuhiohndriof</div>
`;

document.body.appendChild(screen);

/* Electronic Beeps */

try{

const ctx=new(window.AudioContext||window.webkitAudioContext)();

function beep(freq,time){

const osc=ctx.createOscillator();
const gain=ctx.createGain();

osc.type="square";
osc.frequency.value=freq;

osc.connect(gain);
gain.connect(ctx.destination);

gain.gain.value=.03;

osc.start();

setTimeout(()=>{
osc.stop();
},time);

}

beep(300,120);
setTimeout(()=>beep(600,120),150);
setTimeout(()=>beep(220,180),300);

}catch(e){}

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
