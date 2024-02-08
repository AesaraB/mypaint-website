const rootElem = document.documentElement;
let currentTheme = localStorage.getItem("currentTheme")

if (!currentTheme) {
	currentTheme = "systemTheme"
	localStorage.setItem("currentTheme", currentTheme);
}

function rotateThemes() {
	switch (currentTheme) {
		case "systemTheme":
			currentTheme = "darkTheme"
			break;
		case "darkTheme":
			currentTheme = "lightTheme"
			break;
		case "lightTheme":
			currentTheme = "systemTheme"
			break;
	}
	localStorage.setItem("currentTheme", currentTheme);
}
function setTheme() {
	switch (currentTheme) {
		case "lightTheme":
			rootElem.classList.add("lightTheme");
			rootElem.classList.remove("darkTheme");
			rootElem.classList.remove("systemTheme");
			break;
		case "darkTheme":
			rootElem.classList.remove("lightTheme");
			rootElem.classList.add("darkTheme");
			rootElem.classList.remove("systemTheme");
			break;
		default:
			rootElem.classList.remove("lightTheme");
			rootElem.classList.remove("darkTheme");
			rootElem.classList.add("systemTheme");
			break;
	}
}

function themer() {
	rotateThemes();
	setTheme();
}

setTheme();
