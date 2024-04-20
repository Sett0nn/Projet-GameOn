// DOM Elements
const qs=document.querySelector;
const qsa = document.querySelectorAll;

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
if (closeModalButton == null) throw new Error("No close button found");
if (conditionsAcceptedCheckbox == null) throw new Error("No checkbox found");


closeModalButton.addEventListener("click", closeModal);
firstNameInput.addEventListener("invalid", flashErrorMessage);
lastNameInput.addEventListener("invalid", flashErrorMessage);
emailInput.addEventListener("invalid", flashErrorMessage);
birthdateInput.addEventListener("invalid", flashErrorMessage);
quantityInput.addEventListener("invalid", flashErrorMessage);

    function flashErrorMessage(event) {
        const target = event.target;
        const parent = target.parentElement;


        parent.setAttribute("data-error", "wrong input");
        parent.setAttribute("data-error-visible", "true");
        setTimeout(removeErrorMessages, 2000);
    }

    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll("[data-error]");
        errorMessages.forEach((errorMessage) => {
            errorMessage.removeAttribute("data-error");
            errorMessage.removeAttribute("data-error-visible");
        });
    }

//     .forEach ((input) => {
//
//       input.addEventListener("invalid",(event) => {
//         console.log("input is invalid")
//       });
//
//   // event.preventDefault();
//   // firstNameInput.classList.add("error");
//   console.log("first name is invalid")
// });
conditionsAcceptedCheckbox.addEventListener("change", checkIfConditionAccepted);
  console.log("checkbox change");

modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));


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
    if (modalBackground == null) throw new Error("No modal background found");
    // modalBackground.classList.remove("active");
    modalBackground.classList.add("close");
    console.log("closeModal:", closeModal);
   if (closeModalButton == null ) throw new Error("no close button found");


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


