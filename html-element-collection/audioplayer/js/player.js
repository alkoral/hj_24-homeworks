'use strict';

const songList = ['LA Chill Tour', 'This is it band', 'LA Fusion Jam'];
const player = document.getElementsByClassName('mediaplayer')[0];
const song = player.getElementsByTagName('audio')[0];
const btnPlayPause = player.getElementsByClassName('playstate')[0];
const btnStop = player.getElementsByClassName('stop')[0];
const btnNext = player.getElementsByClassName('next')[0];
const btnPrev = player.getElementsByClassName('back')[0];
const songTitle = player.getElementsByClassName('title')[0];
let i = 0;

function getCurrentSong() {
	song.src = `./mp3/${songList[i]}.mp3`;
	songTitle.title = `${songList[i]}`;
	player.classList.add('play');
	song.play();
}

btnNext.onclick = function() {
	if (i >= songList.length - 1) {
		i = 0;
	} else {
		i++;
	}
	if(player.classList.contains('play')) {
		getCurrentSong();
	} else {
		song.src = `./mp3/${songList[i]}.mp3`;
		songTitle.title = `${songList[i]}`;
	}
}

btnPrev.onclick = function() {
	if (i <= 0) {
		i = songList.length - 1;
	} else {
		i--;
	}
	if(player.classList.contains('play')) {
		getCurrentSong();
	} else {
		song.src = `./mp3/${songList[i]}.mp3`;
		songTitle.title = `${songList[i]}`;
	}
}

btnPlayPause.onclick = function() {
	if (!player.classList.contains('play')) {
		song.play();
		player.classList.add('play');
	} else {
		song.pause();
		player.classList.remove('play');
	}
};

btnStop.onclick = function() {
	song.pause();
	song.currentTime = 0;
	player.classList.remove('play');
}

song.onended = function() {
	player.classList.remove('play');
}