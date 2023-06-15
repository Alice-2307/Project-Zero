
let myForm = document.querySelector('form');
let Name = document.querySelector('#name');
let email = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);
    function onSubmit(e){
    e.preventDefault();
    localStorage.setItem('Name', Name.value);
    localStorage.setItem('Email', email.value);
    }    
