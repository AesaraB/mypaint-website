import { switchTheme } from "./theme.js"
import { toggleMenu } from "./reactiveDesign.js"
import { observeHeadings, saveDetailsState } from "./aside.js"

const themeButton = document.querySelector("#themeButton")
if (themeButton) {
	themeButton.addEventListener('click', switchTheme)
}
document.getElementById("headerNavMenu").addEventListener('click', toggleMenu)

const asideDetailsList = document.querySelectorAll("aside nav > details")
for (const asideDetails of asideDetailsList) {
	asideDetails.addEventListener("toggle", saveDetailsState)
}

observeHeadings()
