let todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};


renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', (event) => {
    filters.searchText = event.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', (event) => {
    event.preventDefault(); //prevents full page refresh
    let task = event.target.elements.text.value;
    
    //access the todos array and push a new object
    todos.push({
        id: uuidv4(),
        text: task,
        completed: false
    });
    //save the array of todos in local storage as a string when submit button is clicked
    saveTodos(todos);

    renderTodos(todos, filters);
    event.target.elements.text.value = '';
});

document.querySelector("#hide-completed").addEventListener('change', (event) => {
    filters.hideCompleted = event.target.checked;
    renderTodos(todos, filters);
    console.log(filters.hideCompleted);
});