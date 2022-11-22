"use strict"

const iconMenu = document.querySelector('.navbar__icon');
const bodyMenu = document.querySelector('.navbar__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		bodyMenu.classList.toggle('_active');
	})
}

new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
