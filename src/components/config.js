const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-19",
  headers: {
    authorization: "b3b90783-5e30-43b5-83b7-945cc82b0f88",
    "Content-Type": "application/json",
  },
};

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  fieldSelector: ".popup__field",
  fieldExcessClass: "popup__field_excess",
};

export { apiConfig, validationConfig };
