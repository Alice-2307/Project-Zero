
let myForm = document.querySelector('form');
let Name = document.querySelector('#name');
let email = document.querySelector('#email');


myForm.addEventListener('submit', onSubmit);
    function onSubmit(e){
    e.preventDefault();
    let key = email.value;
    let Object_value = {
        Name: Name.value,
        Email: email.value
    }
    let convert_toString = JSON.stringify(Object_value);
    console.log(localStorage.setItem(key, convert_toString));
    }    

    let itemsList = document.getElementById('items');

    myForm.addEventListener('submit', addItem);

    function addItem(e){
        e.preventDefault();

        let NameData = `${Name.value}- `;
        let EmailData = email.value;
        let newElement = document.createElement('li');
       
        newElement.className = 'group-item';
        newElement.appendChild(document.createTextNode(NameData));
        newElement.appendChild(document.createTextNode(EmailData))
        newElement.id = EmailData;
    
        let deleteBtn = document.createElement('button');
    
        deleteBtn.className = 'delete';
    
        deleteBtn.appendChild(document.createTextNode('Delete'));
    
        newElement.appendChild(deleteBtn);
    
        itemsList.appendChild(newElement);
      }

      itemsList.addEventListener('click', deleteItem);

      function deleteItem(e){
        if(e.target.classList.contains('delete')){
              let dlElement = e.target.parentElement
              localStorage.removeItem(dlElement.id);
              console.log(dlElement.id);
              itemsList.removeChild(dlElement);
          }
      }