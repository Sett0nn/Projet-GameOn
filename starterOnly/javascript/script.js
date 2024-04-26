let validation = document.getElementById('envoie');

// validation form

//Champs Prénom

let prenom = document.getElementById("first");
let errorPrenom = document.getElementById('erreurPrenom')
let prenomValid= /^("^[a-z]+$");/


 function validate(event){
    console.log("enter in validate function with prenom.value=", prenom.value);
     if (prenom.value === ""){
         console.log("enter in first if");
         // event.preventDefault();

         errorPrenom.textContent = "Merci de renseigner votre prénom";
         // valid = false;
     } else if (prenomValid.test(prenom.value) == false) {
         // event.preventDefault();0
         errorPrenom.textContent = "Format du prénom non valide";
         // valid = false;
     } else {
         errorPrenom.textContent = "";
     }
 }


 //Champs Nom

 let nom = document.getElementById("last")
let errorNom = document.getElementById('erreurNom')
let nomValid= /^("^[a-z]+$");/

function validate(event){
    if (nom.value === ""){

        errorNom.textContent = "Merci de renseigner votre nom";
    } else if (nomValid.test(nom.value) == false){
        errorNom.textContent = "Format du nom non valide";
        } else {
        errorNom.textContent = "";
    }
}

//Email

let email = document.getElementById("email")
let errorMail = document.getElementById('errorEmail')

function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("adresse mail valide!");
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("Vous avez entrez une adresse mail invalide!");
        document.form1.text1.focus();
        return false;
    }
}

//Validation date de naissance



        function ValidDate(day) {
            var pattern = new RegExp(/^\d{2}-\d{2}-\d{4}$/);
            return pattern.test(day);
}

    let listeBtnRadio = document.querySelectorAll("input[type=radio]")
    for (let i = 0; i < listeBtnRadio.length; i++) {
        if (listeBtnRadio[i].checked) {
            console.log(listeBtnRadio[i].value)
        }
}




// validation.addEventListener("click", valider);