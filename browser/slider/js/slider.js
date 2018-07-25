'use strict';

const imgArray = ['airmax', 'airmax-jump','airmax-on-foot','airmax-playground','airmax-top-view'];
const slider = document.getElementById('slider');
const imgPrefix = 'png';
slider.src = 'i/' + imgArray[0] + '.' + imgPrefix;
let num = 1;

function slideShow() {
	if (num === imgArray.length) {
		num = 0;
	}
	slider.src = 'i/' + imgArray[num] + '.' + imgPrefix;
	num += 1;
}

setInterval(slideShow, 5000);