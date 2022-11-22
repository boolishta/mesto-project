function createPopupPictureElement(picture) {
	const popupPictureTemplate = document.querySelector('#popupPicture').content;
	const popupPictureElement = popupPictureTemplate.querySelector('.popup-picture').cloneNode(true);
	popupPictureElement.querySelector('.popup-picture__image').src = picture.src;;
	popupPictureElement.querySelector('figcaption').textContent = picture.figcaption;
	return popupPictureElement
}

function openPopupPicture(element) {
	element.classList.add('popup-picture_opened')
}

function removePopupPicture(event) {
	const popupPictureElement = event.target.closest('.popup-picture')
	popupPictureElement.classList.remove('popup-picture_opened')
	popupPictureElement.remove()
}

function initPopupPicture(event) {
	const imageSrc = event.target.src
	const figcaption = event.target.closest('.elements__figure').querySelector('.elements__name').textContent
	const popupPictureElement = createPopupPictureElement({ src: imageSrc, figcaption })
	document.body.appendChild(popupPictureElement)
	const popupPicture = document.querySelector('.popup-picture')
	const closeButton = document.querySelector('.popup-picture__close-button')
	closeButton.addEventListener('click', removePopupPicture)
	openPopupPicture(popupPicture)
}

export function initOpenPopupPictures() {
	const pictureElements = document.querySelectorAll('.elements__image')
	for (const pictureElement of pictureElements) {
		pictureElement.addEventListener('click', initPopupPicture)
	}
}