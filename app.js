let openModalBtn = document.querySelector(".openModalBtn");
let closeModalBtn = document.querySelector(".closeModalBtn");
let myModal = document.querySelector(".myModal");

function openModalBtnFunc() {
  myModal.style.display = "block";
}

function closeModalBtnFunc() {
  myModal.style.display = "none";
}

window.addEventListener("click", function (e) {
  if (e.target === myModal) {
    myModal.style.display = "none";
  }
});
