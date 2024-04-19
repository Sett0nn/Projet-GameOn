// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");
const conditionsAcceptedCheckbox = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const cityInput = document.querySelector('input[name="location"]');

if (lastNameInput == null) throw new Error("No lastName inputs found");
if (emailInput == null) throw new Error("No email inputs found");
if (birthdateInput == null) throw new Error("No birthdate inputs found");
if (quantityInput == null) throw new Error("No quantity inputs found");
if (cityInput == null) throw new Error("No city inputs found");
if (firstNameInput == null) throw new Error("No firstname inputs found");
if (modalBackground == null) throw new Error("No modal background found");
if (conditionsAcceptedCheckbox == null) throw new Error("No checkbox found");

[firstNameInput,
  lastNameInput,
    emailInput,
    birthdateInput,
    quantityInput,].forEach ((input) => {

      input.addEventListener("invalid",(event) => {
        console.log("input is invalid")
      });

  // event.preventDefault();
  // firstNameInput.classList.add("error");
  console.log("first name is invalid")
});
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


