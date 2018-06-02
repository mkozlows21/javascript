/*
//change - if field changes, take note
searchQuery.addEventListener('change', function(event) {
    console.log(event.target.value); //text is stored in .target.value;
});
*/

const notes = [{
    title: "my next trip",
    body: "I would like to go somewhere"
}, {
    title: "Habits to work on",
    body: "Pretty much every single thing"
}, {
    title: "Office modifications",
    body: "Get a new chair that doesn't suck"
}];

/*********How the filter function works*********************************************************
 * the function is run to display all the current todos
 * the eventlistener on the form is listening for input
 * the filters object with property 'searchText' is updated every time a new key is pressed
 * renderNotes() is then run
 * It uses the filter function to return an array of items that include() the search term
 * once the filter method returns, everything in the #notes div is cleared
 * we then run through each element in the filtered array and add them to the #notes div
 * rinse repeat
 ***********************************************************************************************/

//gets updated every time the input on the form is changed
//every time the renderNotes() function is called
const filters = {
    searchText: ''
};

//Creates a function for real time filtering
const renderNotes = function (notes, filters) {
    //uses filter method which returns an array of matching text
    //const inputID = document.querySelector('#search-text');
    const filteredNotes = notes.filter(function (note) {
        //returns text if it includes the searchText from the filter object
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    //will clear everything each time new input is entered
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const foundItem = document.createElement('p');
        foundItem.textContent = note.title;
        document.querySelector('#notes').appendChild(foundItem);
    });
};

//call the function once to display all the todos
renderNotes(notes, filters);

//every time this gets new input, it calls the renderNotes() function
//This takes from the input field and changes the 'filters' object property 'searchText'
//searchText is the text being searched by the user
document.querySelector('#search-text').addEventListener('input', function (event) {
    //this sets the filter object to the most current input
    filters.searchText = event.target.value;
    //calls the function for each input
    renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = event.target.elements.firstName.value;
    console.log(name);
    event.target.elements.firstName.value = '';
});