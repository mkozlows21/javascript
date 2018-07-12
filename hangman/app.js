//primitive value: string, number, boolean, null, undefined - everything else is an object(arrays, functions) 

//Object: myObject --> Object.prototype --> null  <-- chain of events looking for a property
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null 
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

//HTTP
//Request - What do we want to do
//Response - contains information of what was actually done


const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');


window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
};

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    console.log(puzzle);
    render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

/* //asynchronous execution
getPuzzle().then((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(err);
}); */


/* getCountry('MX').then((data) => {
    console.log(`the capital of ${data.name} is ${data.capital}`);
}).catch((err) => {
    console.log(err);
}); */


/* getLocation().then((data) => {
    console.log(`Your ip address is ${data.ip}. You are located in ${data.city}, ${data.region} ${data.country}.`);
}).catch(error => {
    console.log(error);
}); */

//promise chaining --> using the data from the first API call in a second API
//we get the country code back from the first, then we use it to find info about the country
/* getLocation().then((data) => {
    return getCountry(data.country);
}).then((data) => {
    console.log(`The capital of ${data.name} is ${data.capital}`);
}).catch((error) => {
    console.log(error);
});

getCurrentCountry().then((data) => {
    console.log(data.name);
}).catch((err) => {
    console.log(err);
});
 */

// getLocation1().then((data) => {
//     console.log(`Your ip address is ${data.ip}. You are located in ${data.city}, ${data.region} ${data.country}.`);
// }, (error) => {
//     console.log(error);
// });

// getCountry('US').then((data) => {
//     console.log(`The capital of ${data.name} is ${data.capital}`);
// }, (err) => {
//     console.log(err);
// });


// //making API call using the Fetch API which returns a promise
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('You done fucked up');
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((err) => {
//     console.log(err);
// });


//async with callback function
// getCountryInfo('US', (error, countryInfo) => {
//     if(error) {
//         console.log(`Error: ${error}`);
//     } else {
//         console.log(countryInfo);
//     }
// });


/*
//override properties
//Object.prototype.hasOwnProperty = () => 'This is the new function';
//Object.prototype.someNewMethod = () => 'This is the added function';

//hasOwnProperty - will check if an object contains a property; returns true or false
console.log(product.someNewMethod());
console.log(product);
*/


/*
//CHALLENGE CODE FOR COUNTRY API
const countryCode = "US";
const request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', (event) => {
    //make sure we get a good status code and final state
    if(event.target.readyState === 4 && event.target.status === 200) {
        const data = JSON.parse(event.target.responseText);
        let country = data.find((countryID) => countryID.alpha2Code === countryCode);
        console.log(`${country.name} has a population of ${country.population}`);
        console.log(country.population);
        //if we make it to the final state but do not get the data, status code is wrong
        //we didn't just use else because there are 5 state changes before reaching final change where data is
    } else if(event.target.readyState === 4) {
        console.log('Something went wrong!');
    }
});
request1.open('GET', 'http://restcountries.eu/rest/v2/all');
request1.send();
*/