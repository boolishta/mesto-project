import { switchPopup } from "./switchPopup.js";

export function initProfilePopup() {
	const openPopupButton = document.querySelector('.profile__edit-button')
	const closePopupButton = document.querySelector('.popup__close-button');
	if (!openPopupButton || !closePopupButton) {
		return
	}
	openPopupButton.addEventListener('click', () => {
		switchPopup()
	})
	closePopupButton.addEventListener('click', () => {
		switchPopup()
	})
}