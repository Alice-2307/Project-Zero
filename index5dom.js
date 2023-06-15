let formdata = document.getElementById('addForm');
let itemsList = document.getElementById('items');

formdata.addEventListener('submit', addItem);

itemsList.addEventListener('click', deleteItem);

function addItem(e){
    e.preventDefault();
  
    let newItem = document.getElementById('item').value;

    let newElement = document.createElement('li');
   
    newElement.className = 'list-group-item';
   
    newElement.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    
    deleteBtn.className = "btn-sm btn-danger float-right delete";
    editBtn.className = "btn-outline-primary float-right edit";


    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'))

    newElement.appendChild(editBtn);
    newElement.appendChild(deleteBtn);
    

    itemsList.appendChild(newElement);
  }

  function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          let dlElement = e.target.parentElement;
          itemsList.removeChild(dlElement);
        }
      }
  }

