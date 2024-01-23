const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	rootElem.classList.add("mobileLayout");
}
