/* 🔐 PASSWORD */
const PASSWORD = "sweety";
function unlock() {
  const val = document.getElementById("passInput").value;
  if (val === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("musicBtn").classList.remove("hidden");
  } else {
    alert("Hint: her nickname ❤️");
  }
}

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
const container = document.querySelector(".container");

/* ▶ START */
function startExperience() {
  music.play().catch(() => {});
  btn.style.display = "none";
  container.classList.remove("hidden");
  startTypewriter();
}

/* 💖 HINDI SHAYARI */
const text =
  "तुमसे मोहब्बत कोई सवाल नहीं है,\n" +
  "ये तो एक फैसला है…\n" +
  "जो मैंने दिल से नहीं,\n" +
  "रूह से किया है। ❤️";

let i = 0;
function startTypewriter() {
  const el = document.getElementById("loveText");
  if (i < text.length) {
    el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(startTypewriter, 60);
  } else {
    startSlider(); // shayari ke baad slider
  }
}

/* 🖼 SLIDER (ONLY img1 & img2, NO FULLSCREEN) */
const images = [
  "images/img1.jpg",
  "images/img2.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function startSlider() {
  slide.src = images[0];
  setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
  }, 3500);
}

/* 🌌 STARS */
const starsBox = document.querySelector(".stars");
for (let i = 0; i < 50; i++) {
  const star = document.createElement("span");
  star.style.width = star.style.height = Math.random() * 3 + "px";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  starsBox.appendChild(star);
}

/* 🌹 + ❤️ PETALS */
const petalBox = document.querySelector(".petals");
setInterval(() => {
  const petal = document.createElement("span");
  petal.innerHTML = Math.random() > 0.5 ? "🌹" : "❤️";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 3 + 5) + "s";
  petalBox.appendChild(petal);
  setTimeout(() => petal.remove(), 7000);
}, 400);
