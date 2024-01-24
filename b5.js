const input = document.getElementById("text");
const button = document.getElementById("button");
let ul = document.getElementsByClassName("list");
button.addEventListener("click", listItem);
input.addEventListener("input", doimau);
function doimau(){
    input.style.backgroundColor = "white";
    if(input.value == ""){
        input.style.backgroundColor = "yellow";
    }
} 
function listItem(){
    let li = document.createElement("li");
    li.textContent = input.value;
    ul[0].appendChild(li);
    input.value = "";
    input.style.backgroundColor = "yellow";
}