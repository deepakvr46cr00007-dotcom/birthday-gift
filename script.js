// ===========================
// PREMIUM BIRTHDAY WEBSITE
// Part 1
// ===========================

const startBtn = document.getElementById("startBtn");
const hero = document.querySelector(".hero");

const blowBtn = document.getElementById("blowBtn");
const flames = document.querySelectorAll(".flame");

const giftBtn = document.getElementById("giftBtn");
const surprise = document.getElementById("surprise");

const typing = document.getElementById("typing");
const countdown = document.getElementById("countdown");
const musicBtn = document.getElementById("musicBtn");

// --------------------------
// Start Celebration
// --------------------------

startBtn.addEventListener("click", () => {

hero.style.opacity = "0";

setTimeout(() => {

hero.style.display = "none";

window.scrollTo({
top: document.getElementById("countdownSection").offsetTop,
behavior:"smooth"
});

},800);

});


// --------------------------
// Love Letter Typing
// --------------------------

const message =
`Happy Birthday Divya ❤️

You are one of the most beautiful people I've ever known.

May your smile always stay bright,
your dreams come true,
and your life be filled with happiness.

Thank you for making every moment special.

Happy Birthday once again.

❤️ With Love,
Deepak`;

let index = 0;

function typeLetter(){

if(index < message.length){

typing.innerHTML += message.charAt(index);

index++;

setTimeout(typeLetter,45);

}

}

setTimeout(typeLetter,1200);


// --------------------------
// Gift Box
// --------------------------

giftBtn.addEventListener("click",()=>{

surprise.style.display="block";

giftBtn.innerHTML="🎉 Surprise Opened";

giftBtn.disabled=true;

});


// --------------------------
// Blow Candles
// --------------------------

blowBtn.addEventListener("click",()=>{

flames.forEach(f=>{

f.style.opacity="0";

});

blowBtn.innerHTML="🎉 Happy Birthday Divya!";

});


// --------------------------
// Countdown
// --------------------------

function updateCountdown(){

const birthday = new Date("August 2, 2026 00:00:00");

const now = new Date();

const diff = birthday-now;

if(diff<=0){

countdown.innerHTML=
"🎉 HAPPY BIRTHDAY DIVYA ❤️ 🎉";

return;

}

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(
(diff%(1000*60*60*24))/(1000*60*60)
);

const minutes=Math.floor(
(diff%(1000*60*60))/(1000*60)
);

const seconds=Math.floor(
(diff%(1000*60))/1000
);

countdown.innerHTML=
`${days} Days
${hours} Hours
${minutes} Minutes
${seconds} Seconds`;

}

updateCountdown();

setInterval(updateCountdown,1000);


// --------------------------
// Background Music
// --------------------------

const music=new Audio("birthday.mp3");

music.loop=true;

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

playing=true;

}
else{

music.pause();

musicBtn.innerHTML="🎵 Play Music";

playing=false;

}

});
// =========================================
// FIREWORKS ANIMATION
// =========================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 2;
        this.color = color;
        this.speedX = (Math.random() - 0.5) * 10;
        this.speedY = (Math.random() - 0.5) * 10;
        this.alpha = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.015;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

function createFirework(x, y) {

    const colors = [
        "#ff3c8d",
        "#ffd700",
        "#00ffff",
        "#00ff99",
        "#ff4444",
        "#ffffff",
        "#7d5fff"
    ];

    for (let i = 0; i < 70; i++) {

        particles.push(
            new Particle(
                x,
                y,
                colors[Math.floor(Math.random() * colors.length)]
            )
        );

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

        particle.update();
        particle.draw();

        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(() => {

    createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.5
    );

}, 1200);

// =========================================
// FLOATING HEARTS
// =========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let y = window.innerHeight;

    const move = setInterval(() => {

        y -= 2;

        heart.style.top = y + "px";

        heart.style.transform =
            `translateX(${Math.sin(y / 30) * 20}px)`;

        if (y < -100) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}

setInterval(createHeart, 800);

// =========================================
// GIFT OPEN EFFECT
// =========================================

const giftBox = document.querySelector(".gift-box");

if(giftBox){

giftBtn.addEventListener("click",()=>{

giftBox.classList.add("open");

});

}

// =========================================
// AUTO FIREWORKS AFTER CANDLES
// =========================================

blowBtn.addEventListener("click",()=>{

for(let i=0;i<8;i++){

setTimeout(()=>{

createFirework(

Math.random()*canvas.width,

Math.random()*canvas.height/2

);

},i*350);

}

});

// =========================================
// END OF PART 2
// =========================================