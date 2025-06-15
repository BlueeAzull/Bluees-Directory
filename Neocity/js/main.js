const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

music.volume = 0.3;

document.addEventListener("DOMContentLoaded", () => {
    const resume = () => {
        music.play();
        document.removeEventListener("click", startPlayback);
    };
    document.addEventListener("click", startPlayback);
});

toggleBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        toggleBtn.src = "../images/pause.png";
    } else {
        music.pause();
        toggleBtn.src = "../images/play.png";
    }
});