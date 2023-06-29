const list = document.querySelector('.list-group');

const form = document.getElementById('form');

const text = document.getElementById('Text');

const amount = document.getElementById('Amount');

const category = document.querySelector('.form-select');


form.addEventListener("submit", addExpense);
list.addEventListener("click", deleteExpense);
list.addEventListener("click", editExpense);

function addExpense(e){
    e.preventDefault();
   
    let key = text.value;
    let Object_value = {
        Category: category.value,
        Amount: amount.value,
    };
    let convert_toString = JSON.stringify(Object_value);
    console.log(localStorage.setItem(key, convert_toString));

    let addText = text.value;
    let addAmount = amount.value;
    let cateValue = category.value;

    let addElement = document.createElement("li");
    let divElement = document.createElement("div");
    let spanElement = document.createElement("span");
    addElement.classList.add("list-group-item");
    addElement.id = text.value;
    divElement.id = amount.value;
    spanElement.id = category.value;
    addElement.appendChild(document.createTextNode(addText));
    divElement.appendChild(document.createTextNode(addAmount));
    spanElement.appendChild(document.createTextNode(cateValue));


    addElement.appendChild(divElement);
    addElement.appendChild(spanElement);

    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    deleteBtn.classList.add('delete-btn');
    editBtn.classList.add("edit-btn");

    deleteBtn.appendChild(document.createTextNode("x"));
    editBtn.appendChild(document.createTextNode("Edit"));
    addElement.appendChild(deleteBtn);
    addElement.appendChild(editBtn);
    list.appendChild(addElement);
}

function deleteExpense(e) {
    if (e.target.classList.contains("delete-btn")) {
        let dlElement = e.target.parentElement;
        localStorage.removeItem(dlElement.id);
        list.removeChild(dlElement);
    }
}
function editExpense(e) {
    if (e.target.classList.contains("edit-btn")) {
        let dlElement = e.target.parentElement;
        localStorage.removeItem(dlElement.id);
        text.value = dlElement.id;
        amount.value = dlElement.childNodes[1].id;
        category.value = dlElement.childNodes[2].id;
        list.removeChild(dlElement);
    }
}