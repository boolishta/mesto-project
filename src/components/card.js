import { initialCards } from "./initialCards.js"; // TODO: карточки получать из бека
import { openPopupPicture } from "./modal.js";

const elementsEl = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#cardTemplate").content;

function removeCard(event) {
  event.target.closest(".elements__item").remove();
}

function favoriteCard(event) {
  event.target.classList.toggle("elements__favorite-button_active");
}

function createCardElement(card) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const imageElement = cardElement.querySelector(".elements__image");
  const nameElement = cardElement.querySelector(".elements__name");
  const favoriteButton = cardElement.querySelector(
    ".elements__favorite-button"
  );
  const removeButton = cardElement.querySelector(".elements__remove-button");
  imageElement.src = card.link;
  imageElement.alt = card.name;
  nameElement.textContent = card.name;
  favoriteButton.addEventListener("click", favoriteCard);
  removeButton.addEventListener("click", removeCard);
  imageElement.addEventListener("click", openPopupPicture);

  return cardElement;
}

export function addPrependProfileCard(card) {
  const cardElement = createCardElement({ link: card.link, name: card.name });
  elementsEl.prepend(cardElement);
}

export function addProfileCards() {
  initialCards.forEach((card) => {
    elementsEl.append(createCardElement(card));
  });
}
