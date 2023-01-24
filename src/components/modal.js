const popupProfile = document.querySelector(".popup-profile");
export const popupProfileName = popupProfile.querySelector('[name="name"]');
export const popupProfileStatus = popupProfile.querySelector('[name="status"]');
export const popupCard = document.querySelector(".popup-card");
const popupPicture = document.querySelector(".popup-picture");
const popupFigcaptionElement = popupPicture.querySelector(".popup__figcaption");
const popupImageElement = popupPicture.querySelector(".popup__image");
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");
const openPopupButtonElements = document.querySelectorAll("[data-popup-name]");
const popupElements = document.querySelectorAll(".popup");

function closePopup(element) {
  if (!element) {
    return;
  }
  element.classList.remove("popup_opened");
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
  if (!element) {
    return;
  }
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function openPopupProfile() {
  popupProfileName.value = profileNameElement.textContent.trim();
  popupProfileStatus.value = profileStatusElement.textContent.trim();
  openPopup(popupProfile);
}

export function handleCardClick(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupFigcaptionElement.textContent = name;
  openPopup(popupPicture);
}

export function initOpenPopups() {
  openPopupButtonElements.forEach((element) => {
    const { popupName } = element.dataset;
    if (popupName === "profile") {
      element.addEventListener("click", openPopupProfile);
    } else {
      const popupElement = document.querySelector(`.popup-${popupName}`);
      element.addEventListener("click", () => openPopup(popupElement));
    }
  });

  popupElements.forEach((popup) => {
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
