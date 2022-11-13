
let firstNameIn = document.getElementById("firstName");
firstNameIn.value = localStorage.Firstname

let lastNmaeIn = document.getElementById("lastName");
lastNmaeIn.value = localStorage.Lastname

let passwordIn = document.getElementById("password");
passwordIn.value = localStorage.Password
    
let confPasswordIn = document.getElementById("confPassword");
confPasswordIn.value = localStorage.Password

let emailIn = document.getElementById("email");
emailIn.value = localStorage.Email

let phoneIn = document.getElementById("phone");
phoneIn.value = localStorage.Phone

let cnumIn = document.getElementById("cnum");
cnumIn.value = localStorage.CardDetails

let cExpIn = document.getElementById("cExp");
cExpIn.value = localStorage.ExpireDate
let cvvIn = document.getElementById("ccv");
cvvIn.value = localStorage.Email

function verifyUpdate(){

    
    let firstName = firstNameIn.value;
    
    let lastname = lastNmaeIn.value;

    let password = passwordIn.value;
        
    let confPassword = confPasswordIn.value;
  
    let email = emailIn.value;
    
    let phone = phoneIn.value;        
    
    let cnum = cnumIn.value;        
    
    let cExp = cExpIn.value;        
    
    let cvv = cvvIn.value;

    let warningMessage = "Please fix the following before continuting\n";
    let allowContinue = true;

    if(firstName == "" || lastname == ""){
        warningMessage+="> First and last names must be entered.\n";
        allowContinue = false;
    }
        
    if(password != confPassword){
        warningMessage+="> Passwords must match.\n"
        allowContinue = false;
    }

    if(email == ""){
        warningMessage+="> Email must be entered.\n"
        allowContinue = false;
    }

    if(phone == ""){
        warningMessage+="> Phone must be entered.\n"
        allowContinue = false;
    }

    if(allowContinue){
        updateDetails();
    }
    else{
        alert(warningMessage);
    }

        
}

function updateDetails(){
    //Update details through API
    alert("Your account details have been updated");

}

