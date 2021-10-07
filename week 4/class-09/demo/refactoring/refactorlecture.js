
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
};

// instantiate a person object instance
let newPerson = new Person('Fred', 61);

// Example function to use a preson instance
function sayName(person) {
    let personName = person.getName(); // go ahead and get the name

    if (person.age >= 50) {
        return personName.toUpperCase();
    } else {
        return personName.toLowerCase();
    }
}

function sayNameRefactored(person) {
    let personName = person.getName(); // go ahead and get the name
    return person.age > 50 ? personName.toUpperCase() :  personName.toLowerCase();
}

// POE
console.log(sayName(newPerson));
console.log(sayNameRefactored(newPerson));
