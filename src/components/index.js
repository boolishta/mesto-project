import { addProfileCards } from "./card.js";
import { initOpenPopups } from "./modal.js";
import { initHandleFormSubmit } from "./form.js";
import { enableValidation } from "./validate.js";
import "../pages/index.css";

addProfileCards();
initOpenPopups();
initHandleFormSubmit();
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
