import { handleCardClick } from "./modal.js";
import { removeCard, likesCard, removeLike } from "./api.js";
import { handleError } from "./utils.js";

export const elementsEl = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#cardTemplate").content;

function handleCardRemove(cardId, target) {
  removeCard(cardId)
    .then(() => target.closest(".elements__item").remove())
    .catch(handleError);
}

function toggleLike(target, cardId, numberLikesElement) {
  if (target.classList.contains("elements__favorite-button_active")) {
    return removeLike(cardId).then((res) => {
      numberLikesElement.textContent = res.likes.length;
      target.classList.remove("elements__favorite-button_active");
    });
  } else {
    return likesCard(cardId).then((res) => {
      numberLikesElement.textContent = res.likes.length;
      target.classList.add("elements__favorite-button_active");
    });
  }
}

function setEventListeners(
  card,
  favoriteButton,
  numberLikesElement,
  imageElement
) {
  favoriteButton.addEventListener("click", ({ target }) => {
    toggleLike(target, card._id, numberLikesElement).catch(handleError);
  });

  imageElement.addEventListener("click", () =>
    handleCardClick(card.name, card.link)
  );
}

export function createCardElement(card, isOwner, isLiked = false) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const imageElement = cardElement.querySelector(".elements__image");
  const nameElement = cardElement.querySelector(".elements__name");
  const removeButton = cardElement.querySelector(".elements__remove-button");
  const favoriteButton = cardElement.querySelector(
    ".elements__favorite-button"
  );
  const numberLikesElement = cardElement.querySelector(
    ".elements__number-likes"
  );
  imageElement.src = card.link;
  imageElement.alt = card.name;
  nameElement.textContent = card.name;
  numberLikesElement.textContent = card.likes.length;

  if (isOwner) {
    removeButton.addEventListener("click", ({ target }) =>
      handleCardRemove(card._id, target)
    );
  } else {
    removeButton.setAttribute("hidden", "true");
  }

  if (isLiked) {
    const likeElement = cardElement.querySelector(".elements__favorite-button");
    likeElement.classList.add("elements__favorite-button_active");
  }

  setEventListeners(card, favoriteButton, numberLikesElement, imageElement);

  return cardElement;
}

export function addInitialCards(cards, userID) {
  if (!cards) {
    return;
  }
  cards.forEach((card) => {
    const isOwner = card.owner._id === userID;
    const isLiked = card.likes.some((item) => item._id === userID);

    elementsEl.append(createCardElement(card, isOwner, isLiked));
  });
}
