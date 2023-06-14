let itemslist = document.querySelector('#items');
console.log(itemslist.parentElement);
//parentElement
itemslist.parentElement.style.backgroundColor = 'yellow';

//lastElementChild
itemslist.lastElementChild.style.color = 'red';

//lastchild
console.log(itemslist.lastChild);

//firstElementChild
itemslist.firstElementChild.style.backgroundColor = 'pink';

//firstchild
console.log(itemslist.firstChild);

//nextSibling
console.log(itemslist.nextSibling);

//nextElementSibling
console.log(itemslist.nextElementSibling);

//previousSibling
console.log(itemslist.previousSibling);

//previousElementSibling
console.log(itemslist.previousElementSibling);
itemslist.previousElementSibling.style.color = 'purple';

//createElement

let newElement = document.createElement('div');

//setAttribute
newElement.setAttribute('title', 'Hello div')
console.log(newElement);

//createtesxtnode
let textnode = document.createTextNode('HEllo');


//appendchild
newElement.appendChild(textnode);

// add HEllo word before Item Lister
let first = document.querySelector('header .container');
let second = document.querySelector('header h1');
first.insertBefore(textnode, second);


// add HEllo word before Item 1
let newtextnode = document.createTextNode('HEllo')
let firstitem = document.querySelector('body .list-group');
let seconditem = document.querySelector('.list-group-item:nth-child(1)');

firstitem.insertBefore(newtextnode, seconditem);

