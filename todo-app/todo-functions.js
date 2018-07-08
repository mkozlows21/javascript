//Get data from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch(e) {
        return [];
    }
};

//save the notes to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

//render application todos
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        //not sure what this is doing exactly
        const searchTextMatched = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatched && hideCompletedMatch;
    });


    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    document.querySelector('#todos').innerHTML = '';

    const summary = generateSummaryDOM(incompleteTodos);
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach((item) => {
        const foundItem = generateTodoDOM(item);
        document.querySelector('#todos').appendChild(foundItem);
    });
};

const removeTodo = function(id) {
    const todoIndex = todos.findIndex((todo) =>todo.id === id);

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};

//works the same as what i did just not a function
const toggleTodo = function(todoID) {
    const todo = todos.find((todo) => todo.id === todoID);

    if(todo) {
        todo.completed = !todo.completed;
    }
};


const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div');
    const button = document.createElement('input');
    button.setAttribute('type', 'checkbox');
    const foundItem = document.createElement('span');
    const removeButton = document.createElement('button');

    button.checked = todo.completed;
    button.addEventListener('change', (event) => {
        if(todo.completed)
            todo.completed = false;
        else
            todo.completed = true;

        saveTodos(todos);
        renderTodos(todos, filters);
    });

    removeButton.addEventListener('click', (event)=> {
        console.log(todo.id);
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    removeButton.textContent = 'x';
    
    todoElement.appendChild(button);
    foundItem.textContent = todo.text;
    todoElement.appendChild(foundItem);
    todoElement.appendChild(removeButton);

    return todoElement;
};

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;

    return summary;
};