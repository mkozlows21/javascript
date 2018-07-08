//Prototypal Inheritance - 
class Hangman {
    constructor(word, numGuess) {
        this.word = word.toLowerCase().split('');
        this.guessedLetters = [];
        this.numGuess = numGuess;
        this.status = 'playing';
    }

    get puzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });

        return puzzle;
    }

    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== 'playing')
            return;

        if (isUnique) {
            this.guessedLetters.push(guess);
        }

        if (isUnique && isBadGuess) {
            this.numGuess--;
        }


        this.calculateStatus();
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.numGuess}`;
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`;
        } else {
            return 'Great work! You guessed the word!';
        }
    }

    calculateStatus() {
        //if all the guessed letters are in the array, every() will return true, otherwise false
        const finished = this.word.every((letter) => {
            //if every letter from word array is in guessedLetter array --> return true
            return this.guessedLetters.includes(letter) || letter === ' ';
        });

        if (this.numGuess === 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
}

/*
//constructor
const Hangman = function(word, numGuess) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.numGuess = numGuess;
    this.status = 'playing';
};

//prints current state of puzzle
Hangman.prototype.getPuzzle = function() {
    let puzzle = '';
    
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });

    return puzzle;
};


//user enters a letter to guess
//check if the letter is in the actual word 
Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    
    if(this.status !== 'playing') 
        return;

    if(isUnique) {
        this.guessedLetters.push(guess);
    }

    if(isUnique && isBadGuess) {
        this.numGuess--;
    }
    

    this.calculateStatus();
};

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.numGuess}`;
    } else if(this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}"`;
    } else {
        return 'Great work! You guessed the word!';
    } 
};

Hangman.prototype.calculateStatus = function() {
    //if all the guessed letters are in the array, every() will return true, otherwise false
    const finished = this.word.every((letter) => {
        //if every letter from word array is in guessedLetter array --> return true
        return this.guessedLetters.includes(letter);
    });

    if(this.numGuess === 0) {
        this.status = 'failed';
    } else if(finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
};
*/








