// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");
const conditionsAcceptedCheckbox = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");


if (modalBackground == null) throw new Error("No modal background found");
if (conditionsAcceptedCheckbox == null) throw new Error("No checkbox found");
conditionsAcceptedCheckbox.addEventListener("change", checkIfConditionAccepted);
  console.log("checkbox change");

modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButton.addEventListener("click", closeModalButton)

function checkIfConditionAccepted(event) {
  if (submitButton == null) throw new Error("No submit button found");
  const isChecked = event.target.checked;
  console.log("isChecked", isChecked);
  // if (!isChecked) {
  //   submitButton.setAttribute("disabled", "true");
  // } else {
  //   submitButton.setAttribute("disabled")
  if (isChecked) return submitButton.removeAttribute("disabled");
  submitButton.setAttribute("disabled", "true")
}

function closeModal() {
  if (closeModalButton == null ) throw new Error("no close button found")
  modalBackground.classList.remove("active");
}


function launchModal() {
  if (modalBackground == null) throw new Error("No modal background found")
    modalBackground.classList.add("active");
  modalBackground.style.display = ("block");
}

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
if (topNavbar == null) throw new Error("No topnav found");
topNavbar.classList.toggle("responsive");
}


