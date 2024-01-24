let todoListDB = [
    {
        id:1,
        content: "Lam bai tap luc 8h",
        status: false,
    },
    {
        id:2,
        content: "Di hoc dung gio luc  7h50",
        status: false,
    },
    {
        id:3,
        content: " Gia thieu di bar",
        status: true,
    }
];

// const ul = document.getElementsByClassName("list")[0];
//  for(let index in todoListDB) {
//     let li = `<li class="list-item" id="${todoListDB[index].id}">
//         ${todoListDB[index].content};
//         <button> Delete</button>
//         <button> Edit</button>
//         </li>`;
//         ul.innerHTML = ul.innerHTML + li;
//  };


 for ( let index in todoListDB) {
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.id = todoListDB[index].id;
    li.innerText = todoListDB[index].content;
    //
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    let editBtn = document.createElement("button");
    editBtn.innerText ="Edit";
    //
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    //
    console.log(li);
    ul.appendChild(li);
 }




 addBtn.onclick = function (){
 let inputValue = input.value;
 let todoItems = {
    id: todoListDB[todoListDB.length-1].id + 1,
    content: imputvValue,
    status: false,
 };
 todoListDB.push(todoItems);
};