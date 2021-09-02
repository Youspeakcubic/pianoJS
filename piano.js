let player = document.getElementById('audioPlayer'); //gets the audio player from html.
let audioSource = document.getElementById('audioSource') // source element which we change to change piano sound.
document.addEventListener("keypress", function(event) { // The event listener waits for key press then checks which key was pressed and plays corresponding sound.
  if (event.keyCode == 90) {
    audioSource.src = "samples/C3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 88) {
    audioSource.src = "samples/D3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 67) {
    audioSource.src = "samples/E3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 86) {
    audioSource.src = "samples/F3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 66) {
    audioSource.src = "samples/G3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 78) {
    audioSource.src = "samples/A3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 77) {
    audioSource.src = "samples/B3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 83) {
    audioSource.src = "samples/Db3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 68) {
    audioSource.src = "samples/Eb3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 71) {
    audioSource.src = "samples/Gb3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 72) {
    audioSource.src = "samples/Ab3.ogg"
    player.load();
    player.play();
  } else if (event.keyCode == 74) {
    audioSource.src = "samples/Bb3.ogg"
    player.load();
    player.play();
  }
});
