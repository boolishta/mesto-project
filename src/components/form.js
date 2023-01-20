import { addCard } from "./card.js";
import {
  popupCard,
  hidePopup,
  popupProfileName,
  popupProfileStatus,
} from "./modal.js";

const popupCardName = popupCard.querySelector('[name="place"]');
const popupCardImage = popupCard.querySelector('[name="image"]');
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");

function handleCardFormSubmit(event) {
  event.preventDefault();
  addCard({
    link: popupCardImage.value,
    name: popupCardName.value,
  });
  event.target.reset();
  hidePopup(event);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileNameElement.textContent = popupProfileName.value;
  profileStatusElement.textContent = popupProfileStatus.value;
  hidePopup(event);
}

export function initHandleFormSubmit() {
  const profileForm = document.forms["profile-form"];
  const cardForm = document.forms["card-form"];
  profileForm.addEventListener("submit", handleProfileFormSubmit);
  cardForm.addEventListener("submit", handleCardFormSubmit);
}
