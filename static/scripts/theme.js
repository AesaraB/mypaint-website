// Declarations
const rootElem = document.documentElement;
let themeSwitch = (localStorage.getItem("themeSwitch") === "true")

// Colour theme
if (themeSwitch) {
	rootElem.classList.toggle("themeSwitch");
}

function colourThemer(button) {
	rootElem.classList.toggle("themeSwitch");
	if (!button) {
		themeSwitch = !themeSwitch;
		localStorage.setItem("themeSwitch", themeSwitch.toString());
	}
}
