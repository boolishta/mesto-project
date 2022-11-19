import { switchPopup } from './switchPopup.js';

function handleFormSubmit(evt) {
	evt.preventDefault();
	const nameInput = document.querySelector('.popup__control[name="name"]')
	const jobInput = document.querySelector('.popup__control[name="status"]')
	const nameElement = document.querySelector('.profile__name')
	const jobElement = document.querySelector('.profile__status')
	if (!nameInput || !jobInput || !nameElement || !jobElement) {
		return
	}
	nameElement.textContent = nameInput.value
	jobElement.textContent = jobInput.value
	switchPopup()
}

export function initHandleFormSubmit() {
	const formElement = document.querySelector('form[name="editProfile"]')

	if (formElement) {
		formElement.addEventListener('submit', handleFormSubmit);
	}
}