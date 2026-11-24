let arr = ["item1", "item2", "item3", "item4"];

arr.map((val) => {
      let li = document.createElement("li");
      li.innerHTML = val;
      let ul = document.getElementById("list");
      ul.appendChild(li);
})