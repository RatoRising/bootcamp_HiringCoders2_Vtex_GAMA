// ENCAPSULAMETNO GET --------------------

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

}

let person = new Person ("Rato")
console.log(person.name)