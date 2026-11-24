let arr = [];
function handleSubmit(event){
    event.preventDefault();

    let data = document.getElementById("task").value;
    arr.push(data);
    // console.log(arr);

    let ul = document.getElementById("list");
    ul.innerHTML = "";
    arr.map((val) => {
        let li = document.createElement("li");
        li.innerHTML = val;
        ul.appendChild(li);
        document.getElementById("task").value = "";
        li.addEventListener("click", ()=> {
            li.style.display = "none";
        })
    })
}
