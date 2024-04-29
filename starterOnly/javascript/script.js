
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
const locationInputs = document.querySelectorAll('input[name="location"]');
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




