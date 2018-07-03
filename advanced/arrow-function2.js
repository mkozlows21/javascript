//arguments only exist in regular functions, not arrow functions
const add = function(a,b) {
    return arguments[0] + arguments[1];
};
console.log(add(1,2,3,4));

//arrow function does not have access to 'this', so use regular functions
const car = {
    color: 'Red',
    //method definition syntax - remove colon and function keyword
    getSummary() {
        return `The car is ${this.color}`;
    }
};
console.log(car.getSummary());

//When creating arrow functions ask these questions:
// - Am I using the 'this' or 'arguments' keyword?
// - Am I returning single line? If so, short hand arrow function

