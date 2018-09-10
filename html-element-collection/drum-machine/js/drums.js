'use strict';

const drums = document.getElementsByClassName('drum-kit__drum');
for (let key of drums) {
	key.onclick = function() {
		const sound = key.getElementsByTagName('audio')[0];
		sound.currentTime = 0;
		sound.play();
	}
}
