
// Form Validation Process


const firstNameInput = document.getElementById("first");
const firstNameError = document.getElementById("firstNameError");
const lastNameInput = document.getElementById("last");
const lastNameError = document.getElementById("lastNameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birthdateInput = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");
const checkbox = document.getElementById("checkbox1");
const checkboxError = document.getElementById("checkboxError");
const quantityInput = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
const locationInputs = document.querySelectorAll('input[name="location"]');
const locationError = document.getElementById("locationError");


//Champs Prénom
firstNameInput.addEventListener("input", function() {
    validateName(firstNameInput, firstNameError);
});

function validateName(input, errorElement) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;
    if (!regex.test(input.value)) {
        errorElement.style.display = "block";
        input.classList.add("field-error");
        return false;
    } else {
        errorElement.style.display = "none";
        input.classList.remove("field-error");
        return true;
    }
}


 //Champs Nom
lastNameInput.addEventListener("input", function() {
    validateName(lastNameInput, lastNameError);
});



//Email

emailInput.addEventListener("input", function() {
    validateEmail(emailInput, emailError);
});

function validateEmail(input, errorElement) {
    const emailRegex = /^[A-Za-z]{1,}[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(input.value)) {
        errorElement.style.display = "block";
        input.classList.add("field-error");
        return false;
    } else {
        errorElement.style.display = "none";
        input.classList.remove("field-error");
        return true;
    }
}

//Validation date de naissance

birthdateInput.addEventListener("input", function() {
    validateBirthdate(birthdateInput, birthdateError);
});

function validateBirthdate(input, errorElement) {
    if (input.value === "") {
        errorElement.style.display = "block";
        input.classList.add("field-error");
        return false;
    } else {
        const birthdate = new Date(input.value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthdate.getFullYear();
        if (age > 100 || age < 12) {
            errorElement.style.display = "block";
            input.classList.add("field-error");
            return false;
        } else {
            errorElement.style.display = "none";
            input.classList.remove("field-error");
            return true;
        }
    }
}
// Nombre de tournois

quantityInput.addEventListener("input", function() {
    validateQuantity(quantityInput, quantityError);
});

function validateQuantity(input, errorElement) {
    if (input.value === "" || isNaN(input.value)) {
        errorElement.style.display = "block";
        input.classList.add("field-error");
        return false;
    } else {
        errorElement.style.display = "none";
        input.classList.remove("field-error");
        return true;
    }
}

// Location

locationInputs.forEach((input) => {
    input.addEventListener("input", function() {
        validateLocation(locationInputs, locationError);
    });
});


function validateLocation(locationInputs, errorElement) {
    let isLocationSelected = false;
    locationInputs.forEach((input) => {
        if (input.checked) {
            isLocationSelected = true;
        }
    });
    if (!isLocationSelected) {
        errorElement.style.display = "block";
        errorElement.classList.add("field-error");
        return false;
    } else {
        errorElement.style.display = "none";
        errorElement.classList.remove("field-error");
        return true;
    }
}



// event listeners post registration modal
testm.forEach((btn) => btn.addEventListener("click", launchM));
testclose.addEventListener("click", handleM); // Use addEventListener directly
btnfermer.addEventListener("click", handleM);

// launch post registration modal
function launchM() {
    testmodal.style.display = "block";
    testcontent.classList.remove("hide-modal");
}

// close  post registration modal
function handleM() {
    testcontent.classList.add("hide-modal");
    setTimeout(function () {
        testmodal.style.display = "none";
    }, 222); // timeout for a smoother effect
}




function validate() {
    const firstNameValid = validateName(firstNameInput, firstNameError);
    const lastNameValid = validateName(lastNameInput, lastNameError);
    const emailValid = validateEmail(emailInput, emailError);
    const birthdateValid = validateBirthdate(birthdateInput, birthdateError);
    const quantityValid = validateQuantity(quantityInput, quantityError);
    const locationValid = validateLocation(locationInputs, locationError);

    const isValid =
        firstNameValid &&
        lastNameValid &&
        emailValid &&
        birthdateValid &&
        quantityValid &&
        locationValid;

    if (isValid) {
        event.preventDefault();
        handleCloseModal();
        return true;
    } else {
        return false;
    }
}