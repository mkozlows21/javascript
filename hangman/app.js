//primitive value: string, number, boolean, null, undefined - everything else is an object(arrays, functions) 

//Object: myObject --> Object.prototype --> null  <-- chain of events looking for a property
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null 
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

const game1 = new Hangman('fuck boi', 3);
puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;
console.log(game1.puzzle);
console.log(game1.numGuess);
console.log(game1.status);

window.addEventListener('keypress', function (event) {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
    console.log(game1.status);
});

/*
//override properties
//Object.prototype.hasOwnProperty = () => 'This is the new function';
//Object.prototype.someNewMethod = () => 'This is the added function';

//hasOwnProperty - will check if an object contains a property; returns true or false
console.log(product.someNewMethod());
console.log(product);
*/