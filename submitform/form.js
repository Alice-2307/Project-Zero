
let myForm = document.querySelector('form');
let Name = document.querySelector('#name');
let email = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);
    function onSubmit(e){
    e.preventDefault();
    // localStorage.setItem('Name', Name.value);
    //localStorage.setItem('Email', email.value);
    let key = email.value;
    let Object_value = {
        Name: Name.value,
        Email: email.value
    }
    let convert_toString = JSON.stringify(Object_value);
    console.log(localStorage.setItem(key, convert_toString));
    }    