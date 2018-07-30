'use strict';

const dropMenu = document.getElementsByClassName('wrapper-dropdown')[0];

dropMenu.onclick = function () {
	dropMenu.classList.toggle('active');
}
