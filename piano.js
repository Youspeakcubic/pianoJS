
let audioC = new Audio('sounds\203479__tesabob2001__c3.mp3')
audioC.type = 'audio/mp3'
document.addEventListener("keypress", function(event) {
		if (event.keyCode == 90) {
			console.log('z');
      audioC.play();
		}
    else if (event.keyCode == 88) {
      console.log('x');
    }
    else if (event.keyCode == 67) {
      console.log('c');
    }
    else if (event.keyCode == 86) {
      console.log('v');
    }
    else if (event.keyCode == 66) {
      console.log('b');
    }
    else if (event.keyCode == 78) {
      console.log('n');
    }
    else if (event.keyCode == 77) {
      console.log('m');
    }
});
