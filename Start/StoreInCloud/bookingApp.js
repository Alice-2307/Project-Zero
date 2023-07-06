let myForm = document.querySelector("form");
let Name = document.querySelector("#name");
let email = document.querySelector("#email");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    let Object_value = {
        Name: Name.value,
        Email: email.value,
    };
    axios.post("https://crudcrud.com/api/dcbf72540d0b4ce78ee71a2353fdae07/AppointmentDetails",Object_value)
         .then(result => console.log(result))
         .catch(err => console.log(err))
}

let itemsList = document.getElementById("items");

myForm.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();

    let NameData = `${Name.value}- `;
    let EmailData = email.value;

    let newElement = document.createElement("li");
    let subElement = document.createElement("span");

    newElement.className = "group-item";
    subElement.className = "sub-group-item";

    newElement.appendChild(document.createTextNode(NameData));
    newElement.appendChild(document.createTextNode(EmailData));

    newElement.id = email.value;
    subElement.id = Name.value;

    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");

    deleteBtn.className = "delete";
    editBtn.className = "edit";

    deleteBtn.appendChild(document.createTextNode("Delete"));
    editBtn.appendChild(document.createTextNode("Edit"));

    newElement.appendChild(deleteBtn);
    newElement.appendChild(editBtn);
    newElement.appendChild(subElement);
    itemsList.appendChild(newElement);
}

itemsList.addEventListener("click", deleteItem);

function deleteItem(e) {
    if (e.target.classList.contains("delete")) {
        let dlElement = e.target.parentElement;
        localStorage.removeItem(dlElement.id);
        itemsList.removeChild(dlElement);
    }
}
itemsList.addEventListener("click", editItem);

function editItem(e) {
    if (e.target.classList.contains("edit")) {
        let dlElement = e.target.parentElement;
        localStorage.removeItem(dlElement.id);
        Name.value = dlElement.lastChild.id;
        email.value = dlElement.id;
        itemsList.removeChild(dlElement);
    }
}