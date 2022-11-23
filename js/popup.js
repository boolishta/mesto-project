const popupProfile = document.querySelector('.popup-profile');
export const popupProfileName = popupProfile.querySelector('[name="name"]');
export const popupProfileStatus = popupProfile.querySelector('[name="status"]');
export const popupCard = document.querySelector('.popup-card');
const popupPicture = document.querySelector('.popup-picture');
const openProfilePopupButton = document.querySelector('.profile__edit-button')
const openCardPopupButton = document.querySelector('.profile__add-button')
const popupFigcaptionElement = popupPicture.querySelector('.popup__figcaption');
const popupImageElement = popupPicture.querySelector('.popup__image')

function openPopup(element) {
	if (element) {
		element.classList.add('popup_opened')
	}
}

function openPopupProfile({ target }) {
	const profileElement = target.closest('.profile')
	popupProfileName.value = profileElement.querySelector('.profile__name').textContent.trim()
	popupProfileStatus.value = profileElement.querySelector('.profile__status').textContent.trim()
	openPopup(popupProfile)
}

function openPopupCard() {
	openPopup(popupCard)
}

export function closePopup({ target }) {
	target.closest('.popup').classList.remove('popup_opened')
}

export function openPopupPicture({ target }) {
	const pictureElement = target.closest('.elements__figure')
	const src = pictureElement.querySelector('.elements__image').src.trim()
	const figcaption = pictureElement.querySelector('.elements__name').textContent.trim()
	popupImageElement.src = src
	popupImageElement.alt = figcaption
	popupFigcaptionElement.textContent = figcaption
	openPopup(popupPicture)
}

export function initOpenPopups() {
	if (openProfilePopupButton) {
		openProfilePopupButton.addEventListener('click', openPopupProfile)
	}

	if (openCardPopupButton) {
		openCardPopupButton.addEventListener('click', openPopupCard)
	}
}
