
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
        loginConfirm(email, password);
    }
    else{
        alert(warningMessage);
    }

}

function loginConfirm(email, password){
    //Update details through API
    httpGet(email, password);

}
    
function httpGet(email, password)
{

    console.log(email + " " + password);

    const options = {
        method: 'GET',
        mode: 'no-cors'
      };

    
    fetch("http://localhost:3000/api/members/login/" + email + "/p/" + password, options).then((response) => (response.json())).then((responseData) => {
       
        if(responseData[0].Email == email && responseData[0].Password == password){
            localStorage.setItem("Firstname", responseData[0].Forename);
            localStorage.setItem("Lastname",responseData[0].Lastname)
            localStorage.setItem("Phone", responseData[0].Phone)
            localStorage.setItem("Email",responseData[0].Email)
            localStorage.setItem("Password",responseData[0].Password)
            localStorage.setItem("CardDetails",responseData[0].CardDetails)
            localStorage.setItem("ExpireDate", responseData[0].ExpireDate)
            localStorage.setItem("CCV", responseData[0].CCV)
            window.location.href = "http://localhost:3000";
            
        }
        else{
            alert("Username or password were incorrect, pelase try again");
        }
    })



   
    

    /*var Http = new XMLHttpRequest();
    Http.open( "GET", "localhost:3000/api/members/login/" + email + "/p/" + password, true ); // false for synchronous request
    console.log("COnnection opened")
    Http.send( null );
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }*/
}