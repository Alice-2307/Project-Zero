const student = {
    name: "happy",
    age: 25,
    data: function(){
        console.log(`My Name is ${this.name} & I am ${this.age} years old`)
    }
}

student.data();