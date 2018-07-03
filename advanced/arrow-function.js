//shorthand syntax - simple functions with one line that returns something
// name of function, arguments list, arrow, return statement with out 'return'
const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
};

const people = [{
    name: 'mike',
    age: 25
}, {
    name: 'alex',
    age: 23
}, {
    name: 'chris',
    age: 34
}];

//regular function
const under30 = people.filter(function(person) {
    return person.age < 30;
});
//arrow function for callback instead
const under30Again = people.filter((person) => person.age < 30);
//challenge
const age25 = people.filter((person) => person.age === 25);



