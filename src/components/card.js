import { handleCardClick } from "./modal.js";
import { removeCard, likesCard, removeLike } from "./api.js";
import { reloadPage } from "./utils.js";

export const elementsEl = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#cardTemplate").content;

function handleCardRemove(cardId) {
  removeCard(cardId).then(reloadPage);
}

function toggleLike(isLiked, cardId) {
  return isLiked ? removeLike(cardId) : likesCard(cardId);
}

export function createCardElement({
  cardId,
  name,
  link,
  likes,
  isOwner,
  isLiked,
}) {
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
  favoriteButton.addEventListener("click", () =>
    toggleLike(isLiked, cardId).then(reloadPage)
  );
  imageElement.addEventListener("click", () => handleCardClick(name, link));

  if (isOwner) {
    const removeButton = document.createElement("button");
    removeButton.classList.add("elements__remove-button");
    removeButton.addEventListener("click", () => handleCardRemove(cardId));
    cardElement.appendChild(removeButton);
  }

  if (isLiked) {
    const likeElement = cardElement.querySelector(".elements__favorite-button");
    likeElement.classList.add("elements__favorite-button_active");
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
