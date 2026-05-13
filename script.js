const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const moreButton = document.querySelector("[data-more]");
const moreText = document.querySelector(".more-text");
const form = document.querySelector(".contact-form");

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

moreButton.addEventListener("click", () => {
  const isHidden = moreText.hasAttribute("hidden");
  if (isHidden) {
    moreText.removeAttribute("hidden");
    moreButton.textContent = "Свернуть";
  } else {
    moreText.setAttribute("hidden", "");
    moreButton.textContent = "Читать подробнее";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  button.textContent = "Заявка подготовлена";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = "Отправить заявку";
    button.disabled = false;
  }, 2400);
});
