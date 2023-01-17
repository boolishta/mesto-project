function showInputError(formElement, inputElement, errorMessage, data) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(data.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(data.errorClass);
}

function hideInputError(formElement, inputElement, data) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(data.inputErrorClass);
  errorElement.classList.remove(data.errorClass);
  errorElement.textContent = "";
}

function setCustomValidityMessage(inputElement) {
  const { patternMismatch, valueMissing, tooShort, tooLong } =
    inputElement.validity;
  const { patternMismatchError, valueMissingError, tooShortError } =
    inputElement.dataset;

  if (patternMismatch) {
    inputElement.setCustomValidity(patternMismatchError);
  } else if (valueMissing) {
    inputElement.setCustomValidity(valueMissingError);
  } else if (tooShort || tooLong) {
    inputElement.setCustomValidity(tooShortError);
  } else {
    inputElement.setCustomValidity("");
  }
}

function isValid(formElement, inputElement, data) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      data
    );
  } else {
    hideInputError(formElement, inputElement, data);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(formElement, inputList, data) {
  const buttonElement = formElement.querySelector(data.submitButtonSelector);

  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(data.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(data.inactiveButtonClass);
  }
}

function setEventListeners(formElement, data) {
  const inputList = Array.from(
    formElement.querySelectorAll(data.inputSelector)
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      setCustomValidityMessage(inputElement);
      isValid(formElement, inputElement, data);
      toggleButtonState(formElement, inputList, data);
    });
  });
}

export function enableValidation(data) {
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, data);
  });
}
