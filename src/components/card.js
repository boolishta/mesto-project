import { initialCards } from "./initialCards.js";
import { handleCardClick } from "./modal.js";

const elementsEl = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#cardTemplate").content;

function removeCard(event) {
  event.target.closest(".elements__item").remove();
}

function toggleLike(event) {
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
  favoriteButton.addEventListener("click", toggleLike);
  removeButton.addEventListener("click", removeCard);
  imageElement.addEventListener("click", () =>
    handleCardClick(card.name, card.link)
  );

  return cardElement;
}

export function addCard(card) {
  const cardElement = createCardElement({ link: card.link, name: card.name });
  elementsEl.prepend(cardElement);
}

export function addInitialCards() {
  initialCards.forEach((card) => {
    elementsEl.append(createCardElement(card));
  });
}
