//read existing notes from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes');
    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

//save the notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};

//remove a note from the list
const removeNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id;
    });

    if(noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
};

//Generates the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('span');
    const button = document.createElement('button');
    button.addEventListener('click', function(event) {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    //setup the remove note button
    button.textContent = 'x';
    noteEl.appendChild(button);

    //setup note title text
    if (note.title > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }

    noteEl.appendChild(textEl);

    return noteEl;
};


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

//Render application notes
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
        const noteElement = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteElement);
    });
};