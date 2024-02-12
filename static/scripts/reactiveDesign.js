export { toggleMenu };

const rootElem = document.documentElement;

function toggleMenu() {
	rootElem.classList.toggle("asideOpen")
}
