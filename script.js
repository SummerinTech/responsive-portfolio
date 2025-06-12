function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");

	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

function setDate() {
	let currentDate = new Date();
	let date = currentDate.getFullYear();
	let dateText = document.querySelector(".date");
	dateText.innerHTML = date;
}

setDate();
