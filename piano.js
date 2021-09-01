let player = document.getElementById('audioPlayer');
let audioSource = document.getElementById('audioSource')
document.addEventListener("keypress", function(event) {
		if (event.keyCode == 90) {
			audioSource.src = "samples/C3.ogg"
			player.load();
      player.play();
			console.log('z')
		}
    else if (event.keyCode == 88) {
			audioSource.src = "samples/D3.ogg"
			player.load();
			player.play();
      console.log('x');
    }
    else if (event.keyCode == 67) {
			audioSource.src = "samples/E3.ogg"
			player.load();
			player.play();
      console.log('c');
    }
    else if (event.keyCode == 86) {
			audioSource.src = "samples/F3.ogg"
			player.load();
			player.play();
      console.log('v');
    }
    else if (event.keyCode == 66) {
			audioSource.src = "samples/G3.ogg"
			player.load();
			player.play();
      console.log('b');
    }
    else if (event.keyCode == 78) {
			audioSource.src = "samples/A3.ogg"
			player.load();
			player.play();
      console.log('n');
    }
    else if (event.keyCode == 77) {
			audioSource.src = "samples/B3.ogg"
			player.load();
			player.play();
      console.log('m');
    }
		else if (event.keyCode == 83) {
			audioSource.src = "samples/Db3.ogg"
			player.load();
			player.play();
			console.log('s');
		}
		else if (event.keyCode == 68) {
			audioSource.src = "samples/Eb3.ogg"
			player.load();
			player.play();
			console.log('d');
		}
		else if (event.keyCode == 71) {
			audioSource.src = "samples/Gb3.ogg"
			player.load();
			player.play();
			console.log('g');
		}
		else if (event.keyCode == 72) {
			audioSource.src = "samples/Ab3.ogg"
			player.load();
			player.play();
			console.log('h');
		}
		else if (event.keyCode == 74) {
			audioSource.src = "samples/Bb3.ogg"
			player.load();
			player.play();
			console.log('j');
		}
});
