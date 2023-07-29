var acc = document.getElementsByClassName("benefits-item");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

	});
}

var acc = document.getElementsByClassName("faq-item");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

	});
}


const counters = document.querySelectorAll('.number-animation');
const speed = 59000;

counters.forEach(counter => {
	const animate = () => {
		const value = +counter.getAttribute('number');
		const data = +counter.innerText;

		if (value < 5 && data < 4) {
			const time = value / speed;


			counter.innerText = Math.ceil(data + time);
			setTimeout(animate, 1000);

			return
		}

		if (data < value) {

			const time = value / speed;


			counter.innerText = Math.ceil(data + time);
			setTimeout(animate, 300);
		} else {
			counter.innerText = value;
		}



	}

	const nav = document.querySelector('header')
	function scrollHeader() {
		// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
		if (this.scrollY >= 8000) {
			animate()
			console.log('hhhhh')
		} else {
			return
		}
	}
	window.addEventListener('scroll', scrollHeader)


});





const swiper = new Swiper('.testemonials__container', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
	breakpoints: {

		800: {
			slidesPerView: 2,
		},
	},
});
const swiper2 = new Swiper('.benfswiper-container', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
	breakpoints: {

		800: {
			slidesPerView: 1.5,
		},
	},
});


const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__nav');

headerBurger.addEventListener('click', function () {
	headerMenu.classList.toggle("active")
	headerBurger.classList.toggle("active")
})