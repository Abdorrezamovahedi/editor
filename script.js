/* =====================================
   HACK WARNING SCREEN
===================================== */

window.addEventListener("load", () => {

const screen = document.createElement("div");

screen.innerHTML = `
<div class="hack-warning">
    <h1>⚠ SYSTEM BREACH DETECTED ⚠</h1>
    <p>Accessing personal files...</p>
</div>
`;

screen.style.position = "fixed";
screen.style.top = "0";
screen.style.left = "0";
screen.style.width = "100%";
screen.style.height = "100%";
screen.style.background = "#000";
screen.style.color = "#ff0000";
screen.style.display = "flex";
screen.style.justifyContent = "center";
screen.style.alignItems = "center";
screen.style.flexDirection = "column";
screen.style.fontFamily = "monospace";
screen.style.fontSize = "2rem";
screen.style.zIndex = "999999";
screen.style.textAlign = "center";

document.body.appendChild(screen);

/* Sound */

const sound = new Audio(
"Tv-Noise-online-audio-converter.com_.mp3"
);

sound.volume = 1;

sound.play().catch(() => {
console.log("Audio blocked until user interaction.");
});

/* Glitch Effect */

const glitch = setInterval(() => {

screen.style.transform =
`translate(${Math.random()*20-10}px,
${Math.random()*20-10}px)`;

screen.style.filter =
`brightness(${1 + Math.random()*0.5})`;

}, 40);

/* Remove Warning */

setTimeout(() => {

clearInterval(glitch);

sound.pause();
sound.currentTime = 0;

screen.style.transition =
"opacity 0.5s ease";

screen.style.opacity = "0";

setTimeout(() => {
screen.remove();
}, 500);

}, 2000);

});

/* =====================================
   YOUR ORIGINAL CODE
===================================== */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el => {

observer.observe(el);

});

document.addEventListener("mousemove", (e) => {

document.body.style.backgroundPosition =
`${e.clientX / 30}px ${e.clientY / 30}px`;

});
