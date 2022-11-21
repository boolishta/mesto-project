function openPopup(event) {
	const buttonElement = event.target
	let formElement
	if (buttonElement.className.includes('profile__edit-button')) {
		formElement = document.querySelector('[name="editProfile"]')
	} else if (buttonElement.className.includes('profile__add-button')) {
		formElement = document.querySelector('[name="addCard"]')
	}

	if (formElement) {
		formElement.closest('.popup').classList.add('popup_opened')
	}
}

export function closePopup(event) {
	event.target.closest('.popup').classList.remove('popup_opened')
}

export function initOpenPopups() {
	const openProfilePopupButton = document.querySelector('.profile__edit-button')
	openProfilePopupButton.addEventListener('click', openPopup)

	const openCardPopupButton = document.querySelector('.profile__add-button')
	openCardPopupButton.addEventListener('click', openPopup)
}
