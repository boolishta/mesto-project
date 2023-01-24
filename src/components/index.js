import { addInitialCards } from "./card.js";
import { initOpenPopups } from "./modal.js";
import { initHandleFormSubmit } from "./form.js";
import { enableValidation } from "./validate.js";
import { getInitialCards, getUser, handleError } from "./api.js";
import "../pages/index.css";
import { initProfile } from "./profile.js";

getUser().then((user) => {
  if (!user) {
    return;
  }
  initProfile(user);
  getInitialCards().then((data) => {
    if (!data) {
      return;
    }
    const cards = data.map((card) => ({
      cardId: card._id,
      name: card.name,
      link: card.link,
      likes: card.likes.length,
      isOwner: user._id === card.owner._id,
      isLiked: card.likes.some((item) => item._id === user._id),
    }));
    addInitialCards(cards);
  });
});
initOpenPopups();
initHandleFormSubmit();
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  fieldSelector: ".popup__field",
  fieldExcessClass: "popup__field_excess",
});
