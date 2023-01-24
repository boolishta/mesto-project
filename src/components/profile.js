const profileAvatarElement = document.querySelector(".profile__avatar");
const profileNameElement = document.querySelector(".profile__name");
const profileStatusElement = document.querySelector(".profile__status");

export function initProfile(profile) {
  if (!profile) {
    return;
  }
  profileAvatarElement.src = profile.avatar;
  profileNameElement.textContent = profile.name;
  profileStatusElement.textContent = profile.about;
}
