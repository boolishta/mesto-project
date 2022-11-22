import { initialCards } from './initialCards.js'
import { handlePopup } from './popup.js'

function removeCardElement(event) {
	event.target.closest('li').remove()
}

function favoriteCardElement(event) {
	event.target.classList.toggle('elements__favorite-button_active')
}

function initProfileCards() {
	const cardElements = document.querySelectorAll('.elements__list>li');
	cardElements.forEach((card) => {
		const favoriteButton = card.querySelector('.elements__favorite-button');
		const removeButton = card.querySelector('.elements__remove-button')
		const imageElement = card.querySelector('.elements__image');
		favoriteButton.addEventListener('click', favoriteCardElement)
		removeButton.addEventListener('click', removeCardElement)
		imageElement.addEventListener('click', handlePopup)
	})
}

function createCardElement(card) {
	const cardTemplate = document.querySelector('#cardTemplate').content;
	const cardElement = cardTemplate.querySelector('li').cloneNode(true);
	const imageElement = cardElement.querySelector('.elements__image')
	imageElement.src = card.link;
	imageElement.alt = card.name;
	cardElement.querySelector('.elements__name').textContent = card.name;
	return cardElement
}

export function addPrependProfileCard(card) {
	const elementsEl = document.querySelector('.elements__list');
	const cardElement = createCardElement({ link: card.link, name: card.name })
	elementsEl.prepend(cardElement)
	initProfileCards()
}

export function addProfileCards() {
	const elementsEl = document.querySelector('.elements__list');

	initialCards.forEach((card) => {
		elementsEl.append(createCardElement(card));
	})
	initProfileCards()
}

