function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");

	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

let currentDate = new Date();
let date = currentDate.getFullYear();
