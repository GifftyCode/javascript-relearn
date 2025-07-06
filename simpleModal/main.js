const openModalBtnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = modalElement.querySelector(".modal__content");
const modalOverlay = document.querySelector(".modal__overlay");

openModalBtnElement.addEventListener("click", () => {
  modalElement.classList.add("open");
  modalOverlay.classList.add("open");
});

modalContentElement.addEventListener("click", () => {
  modalElement.classList.remove("open");
  modalOverlay.classList.remove("open");
});

modalOverlay.addEventListener("click", () => {
  modalElement.classList.remove("open");
  modalOverlay.classList.remove("open");
});
