let validation = document.getElementById('envoie');
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


let listeBtnRadio = document.querySelectorAll("input[type=radio]")
for (let i = 0; i < listeBtnRadio.length; i++ ) {
    if (listeBtnRadio[i].checked) {
        console.log(listeBtnRadio[i].value)
    }
}