import "../pages/index.css";
import { addInitialCards } from "./card.js";
import { initOpenPopups } from "./modal.js";
import { initHandleFormsSubmit } from "./form.js";
import { enableValidation } from "./validate.js";
import { getInitialCards, getUser } from "./api.js";
import { initProfile } from "./profile.js";
import { validationConfig } from "./config.js";
import { handleError } from "./utils.js";

getUser()
  .then((user) => {
    initProfile(user);
    getInitialCards()
      .then((data) => {
        addInitialCards(data, user._id);
      })
      .catch(handleError);
  })
  .catch(handleError);
initOpenPopups();
initHandleFormsSubmit();
enableValidation(validationConfig);
