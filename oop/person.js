//Prototypal Inheritance -
//Person: myPerson --> Person.prototype --> Object.prototype --> null
class Person {
    constructor(firstName, lastName, age, likes=[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio = bio + ` ${this.firstName} likes ${like}.`;
        });

        return bio;
    }

    set fullName(fullName) {
        let nameArray = fullName.split(' ');
        this.firstName = nameArray[0];
        this.lastName = nameArray[1];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes=[]) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        //Mike is a...
        return `${this.fullName} is a ${this.position}.`;
    }

    yearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes=[]) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }

    getBio() {
        if(this.grade >= 70) {
            return `${this.firstName} is passing the class with a ${this.grade}!`;
        } else
            return `${this.firstName} is failing the class with a ${this.grade}!`;
    }

    updateGrade(amount) {
        return this.grade += amount;
    }
}

const stud = new Employee('mike', 'kozlowski', 25, 'Teacher');
console.log(stud.getBio());
console.log(stud.getBio());


/*
const myPerson = new PersonClass('mike', 'kozlowski', 25, ['bikes']);
console.log(myPerson);
console.log(myPerson.getBio());


const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
};

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`;
    });

    return bio;
};

Person.prototype.setName = function(fullName) {
    let nameArray = fullName.split(' ');
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
};

//any change made to the prototype will not get copied over - simply links to prototype
//not like java or c++
// Person.prototype.getBio = function() {
//     return 'Testing Testing!';
// };
*/


