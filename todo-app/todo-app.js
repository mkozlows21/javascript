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