let info = ['mike', 'Josh', 'tyler', 'alex', 'chris'];
let info2 = [];


//pass in the array of objects or you could pass in the name of the item to store along with the item
const saveToLocalStorage  = (name, item) => {
    //name - name of what we want to call it in local storage
    //JSON.stringify(item) - need to convert item to a JSON string, only way to store in local
    localStorage.setItem(name, JSON.stringify(item));
};

//get the item from local storage -> can pass in a name of what to retrieve 
const getLocalStorage = (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : [];
};

//pushes item onto info array
const addItem = (item) => {
    info.push(item);
    saveToLocalStorage('names', info);
    info2 = getLocalStorage('names');
};


let itemsList = document.querySelector('#items');
let list = document.createElement('ul');
itemsList.appendChild(list);

addItem('doogy houser');
addItem('finkleton');

info2.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});
