/*
//change - if field changes, take note
searchQuery.addEventListener('change', function(event) {
    console.log(event.target.value); //text is stored in .target.value;
});
*/

let notes = [];

//check for existing saved data
const notesJSON = localStorage.getItem('notes');
if(notesJSON !== null) {
    notes = JSON.parse(notesJSON);
}

console.log(notes);

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

//Create - C
//Update - U
//localStorage.setItem('location', 'Boston');

//Retrieve - R
// console.log(localStorage.getItem('location'));

//Delete - D
// localStorage.removeItem('location');

//Clear - removes all items in local storage
//localStorage.clear();

// const user = {
//     name: 'Mike',
//     age: 25
// };
// const usrJSON = JSON.stringify(user);
// console.log(usrJSON);
// localStorage.setItem('user', usrJSON);

//retrieve from local storage
// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(user.name);

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

        if(note.title > 0) {
            foundItem.textContent = note.title;
        } else {
            foundItem.textContent = 'Unnamed note';
        }
        
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

document.querySelector('#filter-by').addEventListener('change', function(event){
    console.log(event.target.value);
});

document.querySelector('#create-notes').addEventListener('click', function(event) {
    notes.push({
        title: '',
        body: ''
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
});


let area = document.querySelector('#filter-by');

for(let i = 0; i < 5; i++) {
    let newVal = document.createElement('option');
    newVal.textContent = i;
    area.appendChild(newVal);
}
