function openPopup(element) {
	if (element) {
		element.closest('.popup').classList.add('popup_opened')
	}
}

function initPopupPicture(element) {
	if (!element) {
		return
	}
	const imageSrc = element.closest('.elements__image').src
	const figcaption = element.closest('.elements__figure').querySelector('.elements__name').textContent
	const popupPictureElement = document.querySelector('.popup__figure').closest('.popup')
	const imageElement = popupPictureElement.querySelector('.popup__image')
	imageElement.src = imageSrc
	imageElement.alt = figcaption
	popupPictureElement.querySelector('figcaption').textContent = figcaption
	return popupPictureElement
}

export function handlePopup(event) {
	const target = event.target
	let popupElement
	if (target.closest('.profile__edit-button')) {
		popupElement = document.querySelector('[name="editProfile"]')
	} else if (target.closest('.profile__add-button')) {
		popupElement = document.querySelector('[name="addCard"]')
	} else if (target.closest('.elements__image')) {
		popupElement = initPopupPicture(target)
	}
	openPopup(popupElement)
}

export function closePopup(event) {
	if (event) {
		event.target.closest('.popup').classList.remove('popup_opened')
	}
}

export function initOpenPopups() {
	const openProfilePopupButton = document.querySelector('.profile__edit-button')
	if (openProfilePopupButton) {
		openProfilePopupButton.addEventListener('click', handlePopup)
	}

	const openCardPopupButton = document.querySelector('.profile__add-button')
	if (openCardPopupButton) {
		openCardPopupButton.addEventListener('click', handlePopup)
	}
}