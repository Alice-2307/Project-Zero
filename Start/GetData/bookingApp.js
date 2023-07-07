let myForm = document.querySelector("form");
let Name = document.querySelector("#name");
let Email = document.querySelector("#email");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let Object_value = {
        Name: Name.value,
        Email: Email.value,
    } 
        axios.post("https://crudcrud.com/api/6a0866505b504403936e53a066ab1160/AppointmentDetails",Object_value)
       .then(result => ShowValue(result.data))
       .catch(err => console.log(err))
   }

window.addEventListener("DOMContentLoaded", Refresh)

function Refresh(){

    axios.get("https://crudcrud.com/api/6a0866505b504403936e53a066ab1160/AppointmentDetails")
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
        crudDelete(val);
    }

    let editBtn = document.createElement("input");
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () =>{ 
        Element.removeChild(subElement)

        document.getElementById('name').value = val.Name;
        document.getElementById('email').value = val.Email;
        crudDelete(val);
    }
    subElement.appendChild(deleteBtn);
    subElement.appendChild(editBtn);
    Element.appendChild(subElement);

}

function crudDelete(v){
    axios.delete("https://crudcrud.com/api/6a0866505b504403936e53a066ab1160/AppointmentDetails/"+v._id)
             .then(result => console.log(result))
             .catch(err => console.log(err))
}