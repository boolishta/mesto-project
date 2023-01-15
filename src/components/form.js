import { addPrependProfileCard } from "./card.js";
import {
  popupCard,
  closePopup,
  popupProfileName,
  popupProfileStatus,
} from "./modal.js";

const popupElements = document.querySelectorAll(".popup");
const popupCardName = popupCard.querySelector('[name="name"]');
const popupCardImage = popupCard.querySelector('[name="image"]');
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");

function handleCardFormSubmit(event) {
  event.preventDefault();
  addPrependProfileCard({
    link: popupCardImage.value,
    name: popupCardName.value,
  });
  event.target.reset();
  closePopup(event);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileNameElement.textContent = popupProfileName.value;
  profileStatusElement.textContent = popupProfileStatus.value;
  closePopup(event);
}

export function initHandleFormSubmit() {
  for (const popupElement of popupElements) {
    const closePopupButton = popupElement.querySelector(".popup__close-button");
    const formElement = popupElement.querySelector("form");
    closePopupButton.addEventListener("click", closePopup);
    if (popupElement.classList.contains("popup-profile")) {
      formElement.addEventListener("submit", handleProfileFormSubmit);
    } else if (popupElement.classList.contains("popup-card")) {
      formElement.addEventListener("submit", handleCardFormSubmit);
    }
  }
}
