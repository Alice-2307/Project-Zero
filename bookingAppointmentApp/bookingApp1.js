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
        axios.post("http://localhost:5000/addData",Object_value)
       .then(result => {
        console.log(result.data.userData);
        ShowValue(result.data.userData)
       })
       .catch(err => console.log(err))
   }

window.addEventListener("DOMContentLoaded", Refresh)

function Refresh(){

    axios.get("http://localhost:5000/getData")
         .then(result => {
            for(let i=0; i<result.data.getAlluserData.length;i++){
                ShowValue(result.data.getAlluserData[i]);
         }
        })  
         .catch(err => console.log(err))
}
function ShowValue(val){
    let Element = document.getElementById('items');
    let subElement = document.createElement('li');

    subElement.textContent = `${val.name} - ${val.email}`;
    
    let deleteBtn = document.createElement("input");
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';

    deleteBtn.onclick = () =>{
        Element.removeChild(subElement)
        Delete(val);
    }

    let editBtn = document.createElement("input");
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () =>{ 
        Element.removeChild(subElement)

        document.getElementById('name').value = val.name;
        document.getElementById('email').value = val.email;
        Delete(val);
    }
    subElement.appendChild(deleteBtn);
    subElement.appendChild(editBtn);
    Element.appendChild(subElement);

}

function Delete(v){
    axios.delete(`http://localhost:5000/deleteData/${v.id}`)
             .then(result => console.log(result))
             .catch(err => console.log(err))
}