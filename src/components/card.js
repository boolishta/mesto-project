import { handleCardClick } from "./modal.js";
import { removeCard } from "./api.js";

export const elementsEl = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#cardTemplate").content;

function handleCardRemove(cardId) {
  removeCard(cardId).then(() => location.reload());
}

function toggleLike(event) {
  event.target.classList.toggle("elements__favorite-button_active");
}

export function createCardElement({ cardId, name, link, likes, isOwner }) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const imageElement = cardElement.querySelector(".elements__image");
  const nameElement = cardElement.querySelector(".elements__name");
  const favoriteButton = cardElement.querySelector(
    ".elements__favorite-button"
  );
  const numberLikesElement = cardElement.querySelector(
    ".elements__number-likes"
  );
  imageElement.src = link;
  imageElement.alt = name;
  nameElement.textContent = name;
  numberLikesElement.textContent = likes;
  favoriteButton.addEventListener("click", toggleLike);
  imageElement.addEventListener("click", () => handleCardClick(name, link));

  if (isOwner) {
    const removeButton = document.createElement("button");
    removeButton.classList.add("elements__remove-button");
    removeButton.addEventListener("click", () => handleCardRemove(cardId));
    cardElement.appendChild(removeButton);
  }

  return cardElement;
}

export function addInitialCards(cards) {
  if (!cards) {
    return;
  }
  cards.forEach((card) => {
    elementsEl.append(createCardElement(card));
  });
}
