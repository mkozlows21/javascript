//read existing notes from localStorage
let notes = getSavedNotes();

//gets updated every time the input on the form is changed
//every time the renderNotes() function is called
const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

//call the function once to display all the todos
renderNotes(notes, filters);

//every time this gets new input, it calls the renderNotes() function
//This takes from the input field and changes the 'filters' object property 'searchText'
//searchText is the text being searched by the user
document.querySelector('#search-text').addEventListener('input',(event) => {
    //this sets the filter object to the most current input
    filters.searchText = event.target.value;
    //calls the function for each input
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (event) => {
    filters.sortBy = event.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#create-notes').addEventListener('click', (event) => {
    const id = uuidv4();
    const timeStamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    });
    saveNotes(notes);
    location.assign(`edit.html#${id}`);
});

window.addEventListener('storage', (event) => {
    if(event.key === 'notes') {
        notes = JSON.parse(event.newValue);
        renderNotes(notes, filters);
    }
});

// const now = moment();
// const oct = moment('2018-06-20');
// console.log(now.toString());
// console.log(oct.toString());
// console.log(now.format("MMMM Do YYYY"));
// console.log(now.toObject());
// const timeStamp = now.valueOf();
// console.log(timeStamp);
// console.log(moment(timeStamp).format("MMMM Do YYYY"));
