"use strict"

const body = document.body;
const iconMenu = document.querySelector('.navbar__icon');
const bodyMenu = document.querySelector('.navbar__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_active');
		bodyMenu.classList.toggle('_active');
		body.classList.toggle('_active');
	})
}

const modalButton = document.querySelector('.modal-button');
const modalButton1 = document.querySelector('.modal-button1');
const modalCross = document.querySelector('.modal__window-cross');
const modal = document.querySelector('.modal');
if (modalButton) {
	modalButton.addEventListener("click", function (e) {
		modal.classList.toggle('_active');
		body.classList.toggle('_active');
	});
}
if (modalButton1) {
	modalButton1.addEventListener("click", function (e) {
		modal.classList.toggle('_active');
		body.classList.toggle('_active');
	});
	if (modalCross) {
		modalCross.addEventListener("click", function (e) {
			modal.classList.toggle('_active');
			body.classList.toggle('_active');
		});
	}
}

new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

let today = new Date();
let options = {
	hour: 'numeric',
	minute: 'numeric',
};
let time = today.toLocaleDateString('en-US', options);
console.log(time);
