function handleSubmit(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let output = document.getElementById("output");
    
    if(name=="" || email=="" || password=="" || confirmPassword==""){
        output.innerHTML = "All fields are required !";
        output.style.color = "red";
        return;
    }
    if(password != confirmPassword){
        output.innerHTML = "Password should match !";
        output.style.color = "red";
        return;
    }
    if(password.length < 8){
        output.innerHTML = "Password should contain equal or more than  8 digits !";
        output.style.color = "red";
        return;
    }
    output.innerHTML = "Registration succesfull";
    output.style.color = "green";

}