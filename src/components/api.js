const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-19",
  headers: {
    authorization: "b3b90783-5e30-43b5-83b7-945cc82b0f88",
    "Content-Type": "application/json",
  },
};

function handleError(err) {
  console.error(`Что то пошло не так: статус ${err.status}. ${err.message}`);
}

function handleFetch(url, method = "GET") {
  return fetch(url, {
    method,
    headers: config.headers,
  }).then((res) => {
    return res
      .json()
      .then((data) =>
        res.ok
          ? data
          : Promise.reject({ status: res.status, message: data.message })
      );
  });
}

function getInitialCards() {
  return handleFetch(`${config.baseUrl}/cards`);
}

function getUser() {
  return handleFetch(`${config.baseUrl}/users/me`);
}

export { handleError, getInitialCards, getUser };
