import { updateUser, addCard } from "./api.js";
import {
  popupCard,
  hidePopup,
  popupProfileName,
  popupProfileStatus,
} from "./modal.js";
import { createCardElement, elementsEl } from "./card.js";
import { reloadPage } from "./utils.js";

const popupCardName = popupCard.querySelector('[name="place"]');
const popupCardImage = popupCard.querySelector('[name="image"]');
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");

function disableButton(element) {
  element.textContent = "Загрузка ...";
  element.disabled = true;
}

function enableButton(element, text) {
  element.textContent = text;
  element.disabled = false;
}

function handleCardFormSubmit(event) {
  event.preventDefault();
  const buttonSubmitElement = event.target.querySelector(
    "button[type='submit']"
  );
  const savedSubmitText = buttonSubmitElement.textContent;
  disableButton(buttonSubmitElement);
  addCard({
    link: popupCardImage.value,
    name: popupCardName.value,
  })
    .then((card) => {
      const cardElement = createCardElement(card);
      elementsEl.prepend(cardElement);
    })
    .finally(() => {
      event.target.reset();
      enableButton(buttonSubmitElement, savedSubmitText);
      hidePopup(event);
      reloadPage();
    });
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const buttonSubmitElement = event.target.querySelector(
    "button[type='submit']"
  );
  const savedSubmitText = buttonSubmitElement.textContent;
  disableButton(buttonSubmitElement);
  updateUser({
    name: popupProfileName.value,
    about: popupProfileStatus.value,
  })
    .then((user) => {
      profileNameElement.textContent = user.name;
      profileStatusElement.textContent = user.about;
    })
    .finally(() => {
      enableButton(buttonSubmitElement, savedSubmitText);
      hidePopup(event);
    });
}

export function initHandleFormSubmit() {
  const profileForm = document.forms["profile-form"];
  const cardForm = document.forms["card-form"];
  profileForm.addEventListener("submit", handleProfileFormSubmit);
  cardForm.addEventListener("submit", handleCardFormSubmit);
}
