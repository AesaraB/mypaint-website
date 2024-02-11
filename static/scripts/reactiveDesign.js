export { toggleMenu };

const aside = document.querySelector("aside")

function toggleMenu() {
	aside.classList.toggle("asideOpen")
}
