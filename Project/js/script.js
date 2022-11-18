"use strict"

const iconMenu = document.querySelector('.navigation__icon');
const bodyMenu = document.querySelector('.navigation__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		bodyMenu.classList.toggle('_active');
	})
}