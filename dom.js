// console.dir(document);
// console.log(document.all);
// document.all[10].textContent="hello";

// let headertitle = document.getElementById('header-title');
// headertitle.textContent = 'hello';
// let mainheader = document.getElementById('main-header')
// mainheader.style.borderBottom = 'solid 3px #000';

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[0].style.fontWeight = 'bold';
// items[1].style.color = 'green';

let items  = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}