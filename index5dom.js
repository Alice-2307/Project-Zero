let formdata = document.getElementById('addForm');
let itemsList = document.getElementById('items');

formdata.addEventListener('submit', addItem);

itemsList.addEventListener('click', deleteItem);

function addItem(e){
    e.preventDefault();
  
    let newItem = `${document.getElementById('item').value} `;
    let newDescription = document.getElementById('description').value;

    let newElement = document.createElement('li');
   
    newElement.className = 'list-group-item';
    newElement.appendChild(document.createTextNode(newItem));
    newElement.appendChild(document.createTextNode(newDescription))

    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    
    deleteBtn.className = "btn-sm btn-danger float-right delete";
    editBtn.className = "btn-outline-primary float-right edit";


    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'))

    newElement.appendChild(deleteBtn);
    newElement.appendChild(editBtn);
    

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

let applyFilter = document.getElementById('filter');

applyFilter.addEventListener('keyup' ,filterItems);

function filterItems(e){

    let text = e.target.value.toLowerCase();

    let items = itemsList.getElementsByTagName('li');
   
    Array.from(items).forEach(function(item){
      let itemName = item.childNodes[0].textContent;
      let descItem = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || descItem.toLowerCase().indexOf(text)!=-1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
