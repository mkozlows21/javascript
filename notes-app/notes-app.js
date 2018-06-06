//read existing notes from localStorage
const notes = getSavedNotes();

//gets updated every time the input on the form is changed
//every time the renderNotes() function is called
const filters = {
    searchText: ''
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
    saveNotes(notes);
    renderNotes(notes, filters);
});