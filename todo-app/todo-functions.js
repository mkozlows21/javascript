//Get data from localStorage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};

//save the notes to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

//render application todos
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        //not sure what this is doing exactly
        const searchTextMatched = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatched && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = generateSummaryDOM(incompleteTodos);
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function (item) {
        const foundItem = generateTodoDOM(item);
        document.querySelector('#todos').appendChild(foundItem);
    });
};

const generateTodoDOM = function(todo) {
    const foundItem = document.createElement('p');
    foundItem.textContent = todo.text;

    return foundItem;
};

const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;

    return summary;
};