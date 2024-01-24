let ID = document.getElementById("id");
let Name = document.getElementById("name");
let Age = document.getElementById("age");
let Phone = document.getElementById("phone");
let Email = document.getElementById("email");
button.addEventListener("click", var1);
function var1(){
    let s1 = document.getElementById("1");
    let s2 = document.getElementById("2");
    let s3 = document.getElementById("3");
    let s4 = document.getElementById("4");
    let s5 = document.getElementById("5");
    if(ID.value.length === 6) {
        s1.textContent = "id hop le";
    }else{
        s1.textContent = " id gom 6 ky tu";
    }
    if(Name.value ===""){
        s2.textContent = "Ten khong de trong";
    }else{
        s2.textContent = " Ten hop le";
    }
    if(Age.value >= 18){
        s3.textContent ="Tuoi hop le";
    }else{
        s3.textContent ="Khong hop le";
    }
    if(Phone.value.length === 11){
        s4.textContent = "So hop le";
    }else{
        s4.textContent = "So khong hop le";
    }
    if(Email == "@" && Email ==""){
        s5.textContent ="Email hop le";
    }else{
        s5.textContent = " Khong hop le";
    }
}