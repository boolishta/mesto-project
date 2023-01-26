import { apiConfig as config } from "./config";

function handleResponse(response) {
  return response
    .json()
    .then((data) =>
      response.ok
        ? data
        : Promise.reject({ status: response.status, message: data.message })
    );
}

function handleFetch(url, method = "GET") {
  return fetch(url, {
    method,
    headers: config.headers,
  }).then(handleResponse);
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
  }).then(handleResponse);
}

function addCard({ name, link }) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name,
      link,
    }),
  }).then(handleResponse);
}

function removeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
}

function likesCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(handleResponse);
}

function removeLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
}

function updateAvatar(avatarLink) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  }).then(handleResponse);
}

export {
  getInitialCards,
  getUser,
  updateUser,
  addCard,
  removeCard,
  likesCard,
  removeLike,
  updateAvatar,
};
