function verifyLogin(){
    let emailIn = document.getElementById("email");
    let email = emailIn.value;

    let passwordIn = document.getElementById("password");
    let password = passwordIn.value;

    let allowContinue = true;
    let warningMessage = "";

    if(email == ""){
        warningMessage+="> Email must be entered.\n";
        allowContinue = false;
    }
        
    if(password == ""){
        warningMessage+="> Passwords must be entered.\n"
        allowContinue = false;
    }

    if(allowContinue){
        loginConfirm();
    }
    else{
        alert(warningMessage);
    }

}

function loginConfirm(){
    //Update details through API
    window.location.href="/";

}
    