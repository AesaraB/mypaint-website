export { listenSwitchLang }

const rootElem = document.documentElement
const pageLang = rootElem.getAttribute("lang")
const langSelector = document.querySelector("#languageSelector")

let preferredLang = localStorage.getItem("preferredLang")

if (!preferredLang) {
	preferredLang = "en"
	localStorage.setItem("preferredLang", preferredLang)
}

async function switchLang(langSelector) {
	const newLang = await langSelector.target.value
	localStorage.setItem("preferredLang", newLang)
	if (newLang !== pageLang) {
		window.location = window.location.href.replace(`/${pageLang}/`, `/${newLang}/`)
	}
}

function listenSwitchLang() {
	if (langSelector) {
		langSelector.addEventListener("input", switchLang)
	}
}
