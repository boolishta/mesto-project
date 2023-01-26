function handleError(err) {
  console.error(`Что то пошло не так: статус ${err.status}. ${err.message}`);
}

function renderLoading(element) {
  element.textContent = "Загрузка ...";
}

function renderText(element, text) {
  element.textContent = text;
}

export { handleError, renderLoading, renderText };
