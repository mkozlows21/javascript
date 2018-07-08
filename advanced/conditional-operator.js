// const myAge = 27;
// //conditional operator
// const message = myAge >= 18 ? 'You can vote!' : "You cannot vote!";
// console.log(message);

const myAge = 25;

const showPage = () => {
    console.log('showing the page');
};

const showErrorPage = () => {
    console.log('Showing the error page');
};

myAge >= 21 ? showPage() : showErrorPage();

const team = ['Tyler', 'Mike', 'Chris', 'Alex'];
const msg = team.length <= 4 ? `Team Size: ${team.length}` : "Too many people on your team!";
console.log(msg);

console.log(team.length <= 4 ? `Team Size: ${team.length}` : "Too many people asshole!");