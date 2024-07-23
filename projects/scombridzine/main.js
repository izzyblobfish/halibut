/*


const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

const audioElement = document.querySelector("audio");

const track = audioContext.createMediaElementSource(audioElement);


track.connect(audioContext.destination);

const playButton = document.querySelector("button");


playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";

      playButton.className = "pause";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
      playButton.className = "play";
    }
  },
  false,
);

audioElement.addEventListener(
    "ended",
    () => {
      playButton.dataset.playing = "false";
    },
    false,
  );


const gainNode = audioContext.createGain();

track.connect(gainNode).connect(audioContext.destination);

const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  () => {
    gainNode.gain.value = volumeControl.value;
  },
  false,
);
*/


const player = document.getElementById("player");
const volumeSlider = document.getElementById("volume-slider");
const playPauseButton = document.getElementById("play");





playPauseButton.addEventListener("click", ()=>{
  if (player.paused) { // check if the player is paused
    player.play(); // Play the audio
    playPauseButton.className = "pause";
  } else {
    player.pause(); // Pause the audio
    playPauseButton.className = "play";
  }
});


volumeSlider.addEventListener("input", () => {
  player.volume = volumeSlider.value;
});

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}