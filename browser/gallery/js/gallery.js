'use strict';

const imgArray = ['breuer-building', 'guggenheim-museum', 'headquarters', 'IAC', 'new-museum'];
const imgPrefix = 'jpg';
const currentPhoto = document.getElementById('currentPhoto');
const btnNext = document.getElementById('nextPhoto');
const btnPrev = document.getElementById('prevPhoto');
currentPhoto.src = 'i/' + imgArray[0] + '.' + imgPrefix;
let num = 0;

function showCurrentPhoto() {
	currentPhoto.src = 'i/' + imgArray[num] + '.' + imgPrefix;
};

function nextPhoto() {
	if (num >= (imgArray.length - 1)) {
		num = 0;
	} else {
		num += 1;
	}
};

function prevPhoto() {
	if (num <= 0) {
		num = imgArray.length - 1;
	} else {
		num -= 1;
	}
};

btnNext.onclick = function() {
	nextPhoto();
	showCurrentPhoto();
//	showCurrentPhoto(nextPhoto());
};

btnPrev.onclick = function() {
	prevPhoto();
	showCurrentPhoto();
//	showCurrentPhoto(prevPhoto());
};

// оффтоп: пример с листанием стрелками с клавиатуры подсмотрел здесь:
// http://cleanjs.ru/articles/fotogalereya-tovarov-dlya-internet-magazina.html

document.addEventListener('keydown', function(key) {
	let keyCode = key.which;
	if (keyCode === 39) {
		nextPhoto();
		showCurrentPhoto();
//		showCurrentPhoto(nextPhoto());
	} else if (keyCode === 37) {
		prevPhoto();
		showCurrentPhoto();
//		showCurrentPhoto(prevPhoto());
	} else {
		return;
	}
});

/* Замечание преподавателя: 
Отлично, Александр.
В третьем задании не стоило делать вот так:
		showCurrentPhoto(prevPhoto());
тут создается ощущение, что функция showCurrentPhoto принимает аргумент, но это не так. Лучше разбить на две строки:
		prevPhoto();
		showCurrentPhoto();
 */
