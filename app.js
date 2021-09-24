const getElement = (selector) => {
	const el = document.querySelector(selector);
	if (el) return el;
	throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement(".nav-toggle");
const links = getElement(".links");
const link = getElement(".link");
const navbar = document.querySelector("#nav");
const logo = document.querySelector("#logo");

// show sidebar
navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
});
links.addEventListener("click", function () {
	links.classList.remove("show-links");
});

// add fixed class to navbar
window.addEventListener("scroll", function () {
	if (window.pageYOffset > 80) {
		navbar.classList.add("navbar-fixed");
		logo.classList.add("logo-fixed");
		links.classList.add("links-fixed");
	} else {
		navbar.classList.remove("navbar-fixed");
		logo.classList.remove("logo-fixed");
		links.classList.remove("links-fixed");
	}
});
