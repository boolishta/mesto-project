import { updateUser } from "./api.js";
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
  const buttonSubmitElement = event.target.querySelector(
    "button[type='submit']"
  );
  const savedSubmitText = buttonSubmitElement.textContent;
  buttonSubmitElement.textContent = "Загрузка ...";
  buttonSubmitElement.disabled = true;
  updateUser({
    name: popupProfileName.value,
    about: popupProfileStatus.value,
  })
    .then((user) => {
      profileNameElement.textContent = user.name;
      profileStatusElement.textContent = user.about;
    })
    .finally(() => {
      hidePopup(event);
      buttonSubmitElement.textContent = savedSubmitText;
      buttonSubmitElement.disabled = false;
    });
}

export function initHandleFormSubmit() {
  const profileForm = document.forms["profile-form"];
  const cardForm = document.forms["card-form"];
  profileForm.addEventListener("submit", handleProfileFormSubmit);
  cardForm.addEventListener("submit", handleCardFormSubmit);
}
