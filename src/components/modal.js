const popupProfile = document.querySelector(".popup-profile");
export const popupProfileName = popupProfile.querySelector('[name="name"]');
export const popupProfileStatus = popupProfile.querySelector('[name="status"]');
export const popupCard = document.querySelector(".popup-card");
const popupPicture = document.querySelector(".popup-picture");
const openProfilePopupButton = document.querySelector(".profile__edit-button");
const openCardPopupButton = document.querySelector(".profile__add-button");
const popupFigcaptionElement = popupPicture.querySelector(".popup__figcaption");
const popupImageElement = popupPicture.querySelector(".popup__image");
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");

function closePopup(element) {
  if (element) {
    element.classList.remove("popup_opened");
  }
  document.removeEventListener("keydown", closeByEscape);
}

export function hidePopup({ target }) {
  closePopup(target.closest(".popup"));
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openPopup(element) {
  if (element) {
    element.classList.add("popup_opened");
  }
  document.addEventListener("keydown", closeByEscape);
}

function openPopupProfile() {
  popupProfileName.value = profileNameElement.textContent.trim();
  popupProfileStatus.value = profileStatusElement.textContent.trim();
  openPopup(popupProfile);
}

function openPopupCard() {
  openPopup(popupCard);
}

export function handleCardClick(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupFigcaptionElement.textContent = name;
  openPopup(popupPicture);
}

export function initOpenPopups() {
  if (openProfilePopupButton) {
    openProfilePopupButton.addEventListener("click", openPopupProfile);
  }

  if (openCardPopupButton) {
    openCardPopupButton.addEventListener("click", openPopupCard);
  }

  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        closePopup(popup);
      }
      if (evt.target.classList.contains("popup__close-button")) {
        closePopup(popup);
      }
    });
  });
}
