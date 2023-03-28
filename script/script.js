const menuButton = document.querySelector(".header__icons_button");
const popup = document.querySelectorAll(".popup");
const closeButton = document.querySelector(".popup__button_img");
const body = document.querySelector(".body");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const link = card.querySelector(".card__title").getAttribute("href");
    location.href = link;
  });
});

menuButton.onclick = function () {
  menuButton.classList.toggle("active");
};
function openPopup(item) {
  body.classList.add("body_active");
  item.classList.add("popup_active");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup(item);
    }
  });
}
function closePopup(item) {
  item.classList.remove("popup_active");
  body.classList.remove("body_active");
  menuButton.classList.remove("active");
  document.removeEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && menuButton.classList.contains("active")) {
      closePopup(item);
    }
  });
}
popup.forEach((item) => {
  document.addEventListener("click", (evt) => {
    if (
      (evt.target === menuButton ||
        evt.target.classList.contains("header__icons_toggle")) &&
      !body.classList.contains("body_active")
    ) {
      openPopup(item);
    }
    if (
      (evt.target === menuButton ||
        evt.target.classList.contains("header__icons_toggle")) &&
      !menuButton.classList.contains("active")
    ) {
      closePopup(item);
    }
  });
});
