const todos = [{
    text: 'Order dog food',
    completed: false
}, {
    text: 'Meet the parents',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}, {
    text: 'Dog school',
    completed: true
}];

const incompletes = todos.filter(function(todo) {
    return !todo.completed;
});

const summary = document.createElement('p');
summary.textContent = `You have ${incompletes.length} todos remaining`;
document.querySelector('#todos-left').appendChild(summary);

const filters = {
    searchText: ''
};

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });
    
    document.querySelector('#todos').innerHTML = '';

    incompleteTodos.forEach(function(item) {
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
    
    //access the todos array
    todos.push({
        text: task,
        completed: false
    });

    renderTodos(todos, filters);
    event.target.elements.text.value = '';
});

