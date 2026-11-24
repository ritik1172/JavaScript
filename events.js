function handleSubmit(event){
    //change the default behaviour of form(reload)
    event.preventDefault();

    //store the data of both the input fields in the variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    //select div
    let output = document.getElementById("output");

    //display data in div
    output.innerHTML = `<h1>Student Details</h1>
    <h2>${name}</h2>
    <h2>${email}</h2>`;
}