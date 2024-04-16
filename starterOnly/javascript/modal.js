// DOM Elements
const modalBackground = document.querySelector(".bground123");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  if (modalBackground == null) throw new Error("No modal background found") {
    modalBackground.style.display = "block";
  }
}

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
if (TopNavbar == null) throw new Error("No topnav found");
topNavbar.classList.toggle("responsive");