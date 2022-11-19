export function switchPopup() {
	const popupElement = document.querySelector('.popup')

	if (!popupElement) {
		return
	}

	const POPUP_OPENED_SELECTOR = 'popup_opened'

	if (popupElement.classList.contains(POPUP_OPENED_SELECTOR)) {
		popupElement.classList.remove(POPUP_OPENED_SELECTOR);
	} else {
		popupElement.classList.add(POPUP_OPENED_SELECTOR);
	}
}