import { handleCardClick } from "./modal.js";

export const elementsEl = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#cardTemplate").content;

function removeCard(event) {
  event.target.closest(".elements__item").remove();
}

function toggleLike(event) {
  event.target.classList.toggle("elements__favorite-button_active");
}

export function createCardElement({ name, link, likes }) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const imageElement = cardElement.querySelector(".elements__image");
  const nameElement = cardElement.querySelector(".elements__name");
  const favoriteButton = cardElement.querySelector(
    ".elements__favorite-button"
  );
  const removeButton = cardElement.querySelector(".elements__remove-button");
  const numberLikesElement = cardElement.querySelector(
    ".elements__number-likes"
  );
  imageElement.src = link;
  imageElement.alt = name;
  nameElement.textContent = name;
  numberLikesElement.textContent = likes;
  favoriteButton.addEventListener("click", toggleLike);
  removeButton.addEventListener("click", removeCard);
  imageElement.addEventListener("click", () => handleCardClick(name, link));

  return cardElement;
}

export function addInitialCards(cards) {
  if (!cards) {
    return;
  }
  cards.forEach((card) => {
    elementsEl.append(
      createCardElement({
        name: card.name,
        link: card.link,
        likes: card.likes.length,
      })
    );
  });
}
