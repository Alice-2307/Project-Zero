let items = document.getElementsByClassName('list-group-item');
console.log(items);
for(let i=0;i<items.length;i++){
    items[i].style.color = 'red';
}
items[1].style.color = 'green';

let tagname = document.getElementsByTagName('li');
console.log(tagname);
for(let i=0;i<tagname.length;i++){
    tagname[i].style.backgroundColor = 'yellow';
}