const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeButton = document.querySelector('#remove-note');
const dateElement = document.querySelector("#last-edit");
const createButton = document.querySelector('#create-note');
const noteID = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteID);

if(!note) {
    location.assign('index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdit(notes.updatedAt);

titleElement.addEventListener('input', (event) => {
    note.title = event.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = `Last Edited: ${moment(note.updatedAt).fromNow()}`;
    saveNotes(notes);
});

bodyElement.addEventListener('input', (event) => {
    note.body = event.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = `Last Edited: ${moment(note.updatedAt).fromNow()}`;
    saveNotes(notes);
});

removeButton.addEventListener('click', (event) => {
    removeNote(noteID);
    saveNotes(notes);
    location.assign('index.html');
});

createButton.addEventListener('click', (event) => {
    location.assign('index.html');
});

window.addEventListener('storage', (event) => {
    if(event.key === 'notes') {
        notes = JSON.parse(event.newValue);
    }
    let note = notes.find((note) =>  note.id === noteID);

    if (!note) {
        location.assign('index.html');
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = `Last Edited: ${moment(note.updatedAt).fromNow()}`;
});

//use this to set the page title
document.title = 'hello';

//always forget this
//console.dir(document); To open up the document dom
//console.log(event);


