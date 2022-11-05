function verifyUpdate(){

    let firstNameIn = document.getElementById("firstName");
    let firstName = firstNameIn.value;

    let lastNmaeIn = document.getElementById("lastName");
    let lastname = lastNmaeIn.value;

    let passwordIn = document.getElementById("password");
    let password = passwordIn.value;
    
    let confPasswordIn = document.getElementById("confPassword");
    let confPassword = confPasswordIn.value;

    let emailIn = document.getElementById("email");
    let email = emailIn.value;

    let phoneIn = document.getElementById("phone");
    let phone = phoneIn.value;        

    let cnumIn = document.getElementById("cnum");
    let cnum = cnumIn.value;
        
    let cExpIn = document.getElementById("cExp");
    let cExp = cExpIn.value;
        
    let cvvIn = document.getElementById("ccv");
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