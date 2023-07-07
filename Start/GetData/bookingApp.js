let myForm = document.querySelector("form");
let Name = document.querySelector("#name");
let Email = document.querySelector("#email");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    let Object_value = {
        Name: Name.value,
        Email: Email.value,
    };
    axios.post("https://crudcrud.com/api/74110fe4e7594536bfe7cd3d5fd6d0ab/AppointmentDetails",Object_value)
         .then(result => console.log(result))
         .catch(err => console.log(err))
         ShowValue(Object_value);
}

window.addEventListener("DOMContentLoaded", Refresh)

function Refresh(){

    axios.get("https://crudcrud.com/api/74110fe4e7594536bfe7cd3d5fd6d0ab/AppointmentDetails")
         .then(result => {
            for(let i=0; i<result.data.length;i++){
                ShowValue(result.data[i]);
         }
        })  
         .catch(err => console.log(err))

}
function ShowValue(val){
    let Element = document.getElementById('items');
    let subElement = document.createElement('li');

     subElement.textContent = `${val.Name} - ${val.Email}`;
    
    let deleteBtn = document.createElement("input");
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () =>{
        Element.removeChild(subElement)

        axios.delete("https://crudcrud.com/api/74110fe4e7594536bfe7cd3d5fd6d0ab/AppointmentDetails/"+val._id)
             .then(result => console.log(result))
             .catch(err => console.log(err))
    }

    let editBtn = document.createElement("input");
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () =>{
        localStorage.removeItem(val.Email);
        Element.removeChild(subElement)

        document.getElementById('name').value = val.Name;
        document.getElementById('email').value = val.Email;
    }
    subElement.appendChild(deleteBtn);
    subElement.appendChild(editBtn);
    Element.appendChild(subElement);

}