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
  })
    .then((res) => {
      return res
        .json()
        .then((data) =>
          res.ok
            ? data
            : Promise.reject({ status: res.status, message: data.message })
        );
    })
    .catch(handleError);
}

function getInitialCards() {
  return handleFetch(`${config.baseUrl}/cards`);
}

function getUser() {
  return handleFetch(`${config.baseUrl}/users/me`);
}

function updateUser({ name, about }) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name,
      about,
    }),
  })
    .then((res) => {
      return res
        .json()
        .then((data) =>
          res.ok
            ? data
            : Promise.reject({ status: res.status, message: data.message })
        );
    })
    .catch(handleError);
}

function addCard({ name, link }) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name,
      link,
    }),
  })
    .then((res) => {
      return res
        .json()
        .then((data) =>
          res.ok
            ? data
            : Promise.reject({ status: res.status, message: data.message })
        );
    })
    .catch(handleError);
}

function removeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({ status: res.status, message: res.message });
    }
  });
}

function likesCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({ status: res.status, message: res.message });
    }
  });
}

function removeLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject({ status: res.status, message: res.message });
    }
  });
}

function updateAvatar(avatarLink) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
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

export {
  handleError,
  getInitialCards,
  getUser,
  updateUser,
  addCard,
  removeCard,
  likesCard,
  removeLike,
  updateAvatar,
};
