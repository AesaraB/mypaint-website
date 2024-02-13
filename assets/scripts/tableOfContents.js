const allHtags = wrappingElement.querySelectorAll(":scope > h1, :scope > h2");

// Intersection Observer Options
const options = {
    root: null,
    rootMargin: "0px",
    threshold: [1],
};

// Each Intersection Observer runs setCurrent
const observeHtags = new IntersectionObserver(setCurrent, options);

// Function that runs when the Intersection Observer fires
function setCurrent(e) {
    console.log(e);
    const allSectionLinks = document.querySelectorAll(".toc-Link");
    e.map(i => {
        if (i.isIntersecting === true) {
            for (link of allSectionLinks) {
					link.classList.remove("current")
			}
			document.querySelector(`a[href="#${i.target.id}"]`).classList.add("current");
		}
	})
}
