//listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function(event) {
    console.log(event.target.value);
});