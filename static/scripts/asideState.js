export { saveDetailsState }

function saveDetailsState(asideDetails) {
	const detailsId = asideDetails.target.parentElement.id
	const detailsState = asideDetails.newState
	localStorage.setItem(`details-${detailsId}`, detailsState);
}
