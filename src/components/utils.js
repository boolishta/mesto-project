function handleError(err) {
  console.error(`Что то пошло не так: статус ${err.status}. ${err.message}`);
}

export { handleError };
