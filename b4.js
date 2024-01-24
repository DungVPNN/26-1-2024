let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
box1.addEventListener("input",sum);
box2.addEventListener("input",sum);
function sum(){
    box3.value = parseInt(box1.value) + parseInt(box2.value);
};