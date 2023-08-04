const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

console.log(arr.map(array => {
    if(array==' '){
        array = 'empty string';
    }
    return array;
}))
