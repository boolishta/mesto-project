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

function isValid(formElement, inputElement, data) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

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

function toggleButtonState(inputList, data) {
  const buttonElement = document.querySelector(data.submitButtonSelector);

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
      isValid(formElement, inputElement, data);
      toggleButtonState(inputList, data);
    });
  });
}

export function enableValidation(data) {
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, data);
  });
}
