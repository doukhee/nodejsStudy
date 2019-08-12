
/**
 * this is class person
 * function make class
 * @param {any} name 
 * @param {any} surname 
 * @param {any} age 
 */
function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.gerFullName = function(){
    return this.name + ' '+this.surname;
};

Person.older = function(person1, person2){
    /** if true return person1 false return person2 */
    return (person1.age >= person2.age)?person1:person2;
};

/**
 * class Make Person
 */
class PersonClass{
    /**
     * Creates an instance of PersonClass.
     * @param {any} name 
     * @param {any} surname 
     * @param {any} age 
     * 
     * @memberOf PersonClass
     */
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    /** It is getter  */
    get getName(){
        return this.name;
    }
    /** It is setter */
    set setName(name){
        this.name = name;
    }
    /** It is same prototype function(It is use not instance) */
    getFullName(){
        return this.name + " " + this.surname;
    }

    /** It is static function  */
    static older(person1, person2){
        return (person1.age >= person2.age)?person1:person2;
    }
};
/**
 * It is extend Person Class
 * 
 * @class PersonWithMiddleName
 * @extends {PersonClass}
 */
class PersonWithMiddleName extends PersonClass{
    constructor(name, middleName, surname, age){
        /** It is setting PersonClass */
        super(name, surname, age);
        this.middleName = middleName;
    }

    getFullName(){
        return this.name + ' '+this.middleName + ' ' +this.surname;
    }
}

const luciano = new PersonClass('Lociano', 'Mammino', 20);
console.log(luciano.getFullName());
console.log('getter :: ', luciano.getName);
const alan = new PersonClass('Alan', 'Turing', 105);
console.log(PersonClass.older(luciano, alan));

const alan2 = new PersonWithMiddleName('Alan', 'Mathison', 'Turing', 104);
console.log(alan2.getFullName());

