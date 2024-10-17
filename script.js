document.querySelector("button").addEventListener("click", function () {
  const flame = document.querySelector(".flame");
  flame.style.display = "none";
  setTimeout(() => {
    alert("🎉 Selamat ulang tahun! Semua Sayang Akuuu Semoga  harapanmu dan Tujuan Kamu semoga tercapai Satu Per Satu yaa! 🎂 I LOVE YOUUU ❤❤❤");
    flame.style.display = "block";
  }, 1000);
});

let isPlaying = true;
const audio = document.getElementById("birthdaySong");
const toggleMusicButton = document.getElementById("toggleMusic");

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    toggleMusicButton.textContent = "🔊 Play Music";
  } else {
    audio.play();
    toggleMusicButton.textContent = "🔊 Stop Music";
  }
  isPlaying = !isPlaying;
}
