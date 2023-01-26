import { updateUser, addCard, updateAvatar } from "./api.js";
import {
  popupCard,
  hidePopup,
  popupProfileName,
  popupProfileStatus,
} from "./modal.js";
import { createCardElement, elementsEl } from "./card.js";
import { handleError, renderLoading, renderText } from "./utils.js";
import { disableButton, enableButton } from "./validate.js";

const popupCardName = popupCard.querySelector('[name="place"]');
const popupCardImage = popupCard.querySelector('[name="image"]');
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");
const profileAvatarElement = document.querySelector(".profile__avatar");
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const avatarForm = document.forms["avatar-form"];

function handleCardFormSubmit(event) {
  event.preventDefault();
  const buttonSubmitElement = event.target.querySelector(
    "button[type='submit']"
  );
  const savedSubmitText = buttonSubmitElement.textContent;
  disableButton(buttonSubmitElement);
  renderLoading(buttonSubmitElement);
  addCard({
    link: popupCardImage.value,
    name: popupCardName.value,
  })
    .then((card) => {
      const cardElement = createCardElement(card, true);
      elementsEl.prepend(cardElement);
      event.target.reset();
      enableButton(buttonSubmitElement, savedSubmitText);
      renderText(buttonSubmitElement, savedSubmitText);
      hidePopup(event);
    })
    .catch(handleError);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const buttonSubmitElement = event.target.querySelector(
    "button[type='submit']"
  );
  const savedSubmitText = buttonSubmitElement.textContent;
  disableButton(buttonSubmitElement);
  renderLoading(buttonSubmitElement);
  updateUser({
    name: popupProfileName.value,
    about: popupProfileStatus.value,
  })
    .then((user) => {
      if (!user) {
        return;
      }
      profileNameElement.textContent = user.name;
      profileStatusElement.textContent = user.about;
      enableButton(buttonSubmitElement, savedSubmitText);
      renderText(buttonSubmitElement, savedSubmitText);
      hidePopup(event);
    })
    .catch(handleError);
}

function handleAvatarFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(avatarForm);
  const buttonSubmitElement = event.target.querySelector(
    "button[type='submit']"
  );
  const savedSubmitText = buttonSubmitElement.textContent;
  disableButton(buttonSubmitElement);
  renderLoading(buttonSubmitElement);
  updateAvatar(formData.get("avatar"))
    .then((user) => {
      profileAvatarElement.src = user.avatar;
      enableButton(buttonSubmitElement, savedSubmitText);
      renderText(buttonSubmitElement, savedSubmitText);
      hidePopup(event);
    })
    .catch(handleError);
}

export function initHandleFormsSubmit() {
  profileForm.addEventListener("submit", handleProfileFormSubmit);
  cardForm.addEventListener("submit", handleCardFormSubmit);
  avatarForm.addEventListener("submit", handleAvatarFormSubmit);
}
