/* 🎵 Music */
const music = document.getElementById("bgMusic");
let played = false;

function playMusic() {
  if (!played) {
    music.play();
    played = true;
  }
}

/* 💖 Shayari Typewriter */
const text =
  "तुमसे मोहब्बत कोई सवाल नहीं है,\n" +
  "ये तो एक फैसला है…\n" +
  "जो मैंने दिल से नहीं,\n" +
  "रूह से किया है। ❤️";

let i = 0;
const speed = 55;

function typeText() {
  if (i < text.length) {
    document.getElementById("loveText").innerHTML +=
      text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}
typeText();

/* 🖼 Image Slider */
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];
let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 2800);

/* 🌌 Stars */
const starsBox = document.querySelector(".stars");
for (let i = 0; i < 70; i++) {
  const star = document.createElement("span");
  star.style.width = star.style.height = Math.random() * 3 + "px";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  starsBox.appendChild(star);
}

/* 🌹 Rose Petals */
const petalBox = document.querySelector(".petals");
setInterval(() => {
  const petal = document.createElement("span");
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 3 + 5) + "s";
  petalBox.appendChild(petal);
  setTimeout(() => petal.remove(), 7000);
}, 450);
