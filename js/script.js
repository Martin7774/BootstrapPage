document.addEventListener('DOMContentLoaded', function () {
	let nav = document.querySelector('.navbar');
	const link = document.querySelectorAll('.nav-link');
	const collapse = document.querySelector('.navbar-collapse');
	//const toggle = document.querySelector('.navbar-toggler');

	function addShadow() {
		if (window.scrollY >= 150) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	// function addShadowToggle() {
	// 	if (window.scrollY >= 150) {
	// 		nav.classList.add('shadow-bg');
	// 	} else {
	// 		nav.classList.remove('shadow-bg');
	// 	}
	// }

	window.addEventListener('scroll', addShadow);

	link.forEach((item) =>
		item.addEventListener('click', () => collapse.classList.remove('show'))
	);


});


