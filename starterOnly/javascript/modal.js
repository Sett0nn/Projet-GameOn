// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");

// launch modal event
if (modalBackground == null) throw new Error("No modal background found");


// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// closeModalButton.addEventListener("click", closeModalButton)

function closeModal() {
  if (closeModalButton == null ) throw new Error("no close button found")
  modalBackground.classList.remove("active");
}


function launchModal() {
  if (modalBackground == null) throw new Error("No modal background found")
    modalBackground.classList.add("active");
}

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
if (TopNavbar == null) throw new Error("No topnav found");
topNavbar.classList.toggle("responsive");
}