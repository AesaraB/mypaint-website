export { observeHeadings, saveDetailsState }

function saveDetailsState(asideDetails) {
	const detailsId = asideDetails.target.parentElement.id
	const detailsState = asideDetails.newState
	localStorage.setItem(`details-${detailsId}`, detailsState)
}

// Intersection Observer
const article = document.querySelector("article")
const headings = article.querySelectorAll(".title, h1, h2, h3")
const pageNavLinks = document.querySelectorAll("#pageNav a")

function setSelected(headingId) {
	for (const link of pageNavLinks) {
		link.classList.remove("selected")
	}
	if (headingId) {
		const pageNavLink = document.querySelector(`#pageNav a[href="#${headingId}"]`)
		const closestDetails = pageNavLink.closest("details")
		if ( closestDetails.getAttribute("open") == null) {
			closestDetails.querySelector("a").classList.add("selected")
		} else {
			pageNavLink.classList.add("selected")
		}
	}
}

function getIntersection(observed) {
	const hasSelected = () => {
		for (const pageNavLink of pageNavLinks) {
			if (pageNavLink.classList.contains("selected")) {
				return true
			}
		}
		return false
	}

	observed.map(i => {
		if (i.isIntersecting) {
			if (i.target.classList.contains("title")) {
				setSelected()
			} else {
				setSelected(i.target.id)
			}
		} else if (hasSelected() && i.boundingClientRect.y > 0) {
			const headingIndex = Array.prototype.indexOf.call(headings, i.target)
			if (headingIndex >= 2) {
				setSelected(headings[headingIndex - 1].id)
			} else {
				setSelected()
			}
		}
	})
}

function observeHeadings() {
	if (pageNavLinks.length > 0) {
		for (const heading of headings) {
			IntersectionObserver(getIntersection, {rootMargin: '0px 0px -99%'})
				.observe(heading)
		}
	}
}
