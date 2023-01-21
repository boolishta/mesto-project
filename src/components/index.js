import { addInitialCards } from "./card.js";
import { initOpenPopups } from "./modal.js";
import { initHandleFormSubmit } from "./form.js";
import { enableValidation } from "./validate.js";
import { getInitialCards, getUser, handleError } from "./api.js";
import "../pages/index.css";
import { initProfile } from "./profile.js";

getInitialCards()
  .then((res) => addInitialCards(res))
  .catch((err) => handleError(err));
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
getUser()
  .then((user) => initProfile(user))
  .catch((err) => handleError(err));
