// const todos = [{
//     text: 'Order dog food',
//     completed: false
// }, {
//     text: 'Meet the parents',
//     completed: true
// }, {
//     text: 'Clean kitchen',
//     completed: false
// }, {
//     text: 'Exercise',
//     completed: false
// }, {
//     text: 'Dog school',
//     completed: true
// }];

let todos = [];

//check for existing data in local storage 
const todosJSON = localStorage.getItem('todos');
if(todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}
console.log(todos);

const filters = {
    searchText: '',
    hideCompleted: false
};

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        //not sure what this is doing exactly
        const searchTextMatched = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatched && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });
    
    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function(item) {
        const foundItem = document.createElement('p');
        foundItem.textContent = item.text;
        document.querySelector('#todos').appendChild(foundItem);
    });
};
renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', function(event) {
    filters.searchText = event.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function(event) {
    event.preventDefault(); //prevents full page refresh
    let task = event.target.elements.text.value;
    
    //access the todos array and push a new object
    todos.push({
        text: task,
        completed: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));


    renderTodos(todos, filters);
    event.target.elements.text.value = '';
});

document.querySelector("#hide-completed").addEventListener('change', function(event) {
    filters.hideCompleted = event.target.checked;
    renderTodos(todos, filters);
    console.log(filters.hideCompleted);
});