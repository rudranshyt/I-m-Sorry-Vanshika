const overlay = document.getElementById("overlay");
const main = document.querySelector(".main");
const audio = document.getElementById("sorryAudio");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const statusText = document.getElementById("statusText");
const subText = document.getElementById("subText");
const buttonGroup = document.querySelector(".button-group");

const sorryPhrases = [
  "Please!",
  "I'm Sorry",
  "Forgive me?",
  "Don't be mad",
  "Please please!",
];
let phraseIndex = 0;
let yesScale = 1;
let showerInterval;

overlay.addEventListener("click", () => {
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    main.style.display = "block";
    audio.play();
    startShower("Sorry!", "#ff4081");
  }, 500);
});

noBtn.addEventListener("click", () => {
  yesScale += 0.35;
  yesBtn.style.transform = `scale(${yesScale})`;

  noBtn.innerText = sorryPhrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % sorryPhrases.length;
});

yesBtn.addEventListener("click", () => {
  buttonGroup.classList.add("hidden");
  subText.classList.add("hidden");
  statusText.innerHTML = "YAY! I love you! ❤️";
  statusText.style.fontSize = "2.5rem";

  clearInterval(showerInterval);
  startShower("❤️", "#ff0000");
});

function createParticle(text, color) {
  const p = document.createElement("div");
  p.classList.add("confetti");
  p.innerText = text;
  p.style.color = color;
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = "-5vh";
  p.style.fontSize = Math.random() * 20 + 15 + "px";

  const duration = Math.random() * 3 + 2;
  p.style.animationDuration = duration + "s";

  document.body.appendChild(p);
  setTimeout(() => p.remove(), duration * 1000);
}

function startShower(text, color) {
  showerInterval = setInterval(() => createParticle(text, color), 150);
}
