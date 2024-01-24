let input = document.getElementById("text");
input.addEventListener("input",texts);
function texts(){
    let div = document.getElementById("text2");
    div.textContent = text.value;
    console.log(div.textContent);
}