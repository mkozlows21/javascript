/*
//closure --> very, very basic
const myFunction = () => {
    const message = 'This is my message';
    const printMessage = () => {
        console.log(message);
    };
    return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage();
*/

//create counter
const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
};
const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());


//adder --> closures are pretty cool
const createAdder = (a) => {
    return (b) => {
        return a+b;
    };
};
const add10 = createAdder(10);
console.log(add10(10));
console.log(add10(-2));
const add100 = createAdder(100);
console.log(add100(100));

//video 110 --> Challenge
const createTipper = (baseTip) => {
    return (billAmount) => baseTip * billAmount;
};

//short way with arrow functions for closure
const createTip = (baseTip) => (billAmount) => baseTip * billAmount;

const tip20 = createTip(0.20);
console.log(tip20(100));