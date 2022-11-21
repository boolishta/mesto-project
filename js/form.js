import { closePopup } from './popup.js'
import { addPrependProfileCard } from './profileCards.js'

function handleFormSubmit(event) {
	event.preventDefault();
	const formElement = event.target
	const formName = formElement.getAttribute('name')

	if (formName === 'editProfile') {
		const nameInput = formElement.querySelector('.popup__control[name="name"]')
		const jobInput = formElement.querySelector('.popup__control[name="status"]')
		const nameElement = document.querySelector('.profile__name')
		const jobElement = document.querySelector('.profile__status')
		nameElement.textContent = nameInput.value
		jobElement.textContent = jobInput.value
	} else if (formName === 'addCard') {
		const nameInput = formElement.querySelector('.popup__control[name="name"]')
		const imageInput = formElement.querySelector('.popup__control[name="image"]')
		addPrependProfileCard({ link: imageInput.value, name: nameInput.value })
	}
	closePopup(event)
}


export function initHandleFormSubmit() {
	const popupElements = document.querySelectorAll('.popup')
	for (const popupElement of popupElements) {
		const formElement = popupElement.querySelector('form')
		const closePopupButton = popupElement.querySelector('.popup__close-button')
		closePopupButton.addEventListener('click', closePopup)
		formElement.addEventListener('submit', handleFormSubmit)
	}
}
