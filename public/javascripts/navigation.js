window.onload = function(){

    console.log("test load");
    if(localStorage.length == 0){
    document.getElementById("loginBtn").innerHTML = "Login";
    
}  
else{
    document.getElementById("loginBtn").innerHTML = "Log Out";
}


if(document.title == "My Rentals"){
    document.getElementById("rentalLink").style = "font-weight: bold; font-size: 1.2em; font-color: black";
}

if(document.title == "My Account"){
    document.getElementById("myAccLink").style = "font-weight: bold; font-size: 1.2em; font-color: black";
}

if(document.title == "Rentals"){
    document.getElementById("mainLink").style = "font-weight: bold;font-size: 1.3em; font-color: black";
    let greeting = document.getElementById("greetingMessage");
    let greetingH1 = document.getElementById("userName");
        if(localStorage.length == 0){
            console.log("test load2");
           
            greeting.style.display="none";
        }  
        else{
            greeting.style.display="block";
            greetingH1.innerHTML = "Welcome" + " " + localStorage.getItem("Firstname") + "!";
        }
        
}


}


function logOut(){
    localStorage.clear();
}