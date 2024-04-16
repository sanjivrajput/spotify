var audio = document.getElementById("myAudio");
var volumeSlider = document.getElementById("volumeSlider");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

  // Attach an event listener to play, next and previous
  play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play()
        play.src = "img/pause.svg"
    }
    else {
        audio.pause()
        play.src = "img/play.svg"
    }
})

