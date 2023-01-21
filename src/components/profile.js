const profileAvatarElement = document.querySelector(".profile__avatar");
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");

export function initProfile({ avatar, name, about }) {
  profileAvatarElement.src = avatar;
  profileNameElement.textContent = name;
  profileStatusElement.textContent = about;
}
