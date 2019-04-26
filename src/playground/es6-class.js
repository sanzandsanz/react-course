class Person{
    constructor(name = 'sanjay', age = 0){
        this.name = name,
        this.age = age
    }
    getName(){
        return 'Hi.. I am ' + this.name;
    }
}


class Student extends Person{

}


const sanjay = new Person();
console.log(sanjay.getName());

const purnima = new Student('purnima', 25);
console.log(purnima.getName());

