const rootElem = document.documentElement;
let currentTheme = localStorage.getItem("currentTheme")

if (!currentTheme) {
	currentTheme = "systemTheme"
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

setTheme();

function setDetailsState() {
	const elems = document.querySelectorAll("aside nav")
	for (const elem of elems) {
		const id = elem.id;
		const storageKey = `details-${id}`;
		if (localStorage.getItem(storageKey) !== "closed") {
			document.querySelector(`#${id} > details`).setAttribute("open", "");
		}
	} 
}

function openDetailsChildren() {
	const elem = document.querySelector(`#pageNav a[href="${location.hash}"]`);
	console.log(elem)
	if (elem) {
		elem.closest("details").setAttribute("open", "");
	}
}

addEventListener("DOMContentLoaded", (event) => {
	setDetailsState();
	openDetailsChildren();
});
