const todoListNode = document.getElementById('todo-list');
const todoDoneListNode = document.getElementById('todo-done-list');
const emptyNode = createEmptyNode();

const todos = []; // id , content, date
const doneList = [];

function addTask() {
    const textareaNode = document.getElementById('textarea');
    if (textareaNode.value.length) {
        createTodoTask(textareaNode.value);
        textareaNode.value = '';
    }
}

function createTodoTask(text) {
    const newId = generateID();
    const newTask = { id: newId, content: text, date: new Date() };
    todos.push(newTask);
    renderTodoTask(newTask);
    setTimer(setAlertToTask, newId);
    handleIfListIsEmpty();
}

function generateID() {
    let newId = 0;
    const list = [...todos, ...doneList];
    for (const task of list) {
        if (task.id === newId) newId += 1;
    }
    return newId;
}

function renderTodoTask(task) {
    const todoRowNode = document.createElement('div');
    const checkboxLabelNode = createCheckboxNode(task.id);
    const textInputNode = createTextInputNode(task.id, task.content);
    const saveBtnNode = createSaveBtnNode(task.id);
    const todoToolsNode = createTodoToolsNode(task.id);
    const dateEl = createDateNode(task);

    todoRowNode.classList.add('todo__row');
    todoRowNode.setAttribute('id', `todo-row--${task.id}`);
    todoRowNode.appendChild(checkboxLabelNode);
    todoRowNode.appendChild(textInputNode);
    todoRowNode.appendChild(dateEl);
    todoRowNode.appendChild(saveBtnNode);
    todoRowNode.appendChild(todoToolsNode);

    todoListNode.appendChild(todoRowNode);
}

function renderDoneTask(task) {
    const todoRowNode = document.createElement('div');
    const textNode = document.createElement('span');
    const imgDeleteNode = document.createElement('img');

    textNode.textContent = task.content;
    imgDeleteNode.src = './assets/icons/close.svg';
    imgDeleteNode.addEventListener('click', () => removeFromDoneList(task.id));

    todoRowNode.classList.add('todo__row');
    todoRowNode.setAttribute('id', `todo-done-row--${task.id}`);
    todoRowNode.appendChild(textNode);
    todoRowNode.appendChild(imgDeleteNode);

    todoDoneListNode.appendChild(todoRowNode);
    return todoRowNode;
}

function createCheckboxNode(id) {
    const checkboxInputNode = document.createElement('input');
    const checkboxLabelNode = document.createElement('label');
    checkboxInputNode.type = 'checkbox';
    checkboxInputNode.setAttribute('id', `checkbox--${id}`);
    checkboxLabelNode.setAttribute('for', `checkbox--${id}`);

    checkboxLabelNode.appendChild(checkboxInputNode);
    checkboxLabelNode.addEventListener('click', () => handleCheckboxClick(id));
    return checkboxLabelNode;
}

function createTextInputNode(id, text) {
    const textInputNode = document.createElement('input');
    textInputNode.type = 'text';
    textInputNode.placeholder = 'Buy Flowers';
    textInputNode.value = text;
    textInputNode.readOnly = true;
    textInputNode.setAttribute('id', `text-inputNode--${id}`);
    return textInputNode;
}

function createDateNode(task) {
    const dateString = formatDate(task.date);
    const dateNode = document.createElement('span');
    dateNode.classList.add('todo__date');
    dateNode.setAttribute('id', `date--${task.id}`);
    dateNode.textContent = dateString;
    return dateNode;
}

function createSaveBtnNode(id) {
    const saveBtnNode = document.createElement('span');
    saveBtnNode.classList.add('todo__button--save');
    saveBtnNode.setAttribute('id', `save--${id}`);
    saveBtnNode.addEventListener('click', () => handleSaveBtnClick(id));
    saveBtnNode.textContent = 'Сохранить';
    return saveBtnNode;
}

function createTodoToolsNode(id) {
    const imgEditNode = document.createElement('img');
    const imgDeleteNode = document.createElement('img');
    const todoToolsNode = document.createElement('div');

    imgEditNode.src = './assets/icons/edit.svg';
    imgDeleteNode.src = './assets/icons/close.svg';

    imgEditNode.setAttribute('id', `edit--${id}`);
    imgDeleteNode.setAttribute('id', `delete--${id}`);

    imgEditNode.addEventListener('click', () => handleEditBtnClick(id));
    imgDeleteNode.addEventListener('click', () => removeFromTodoList(id));

    todoToolsNode.classList.add('todo__tools');
    todoToolsNode.setAttribute('id', `todo-tools--${id}`);
    todoToolsNode.appendChild(imgEditNode);
    todoToolsNode.appendChild(imgDeleteNode);

    return todoToolsNode;
}

function handleSaveBtnClick(id) {
    const inputNode = document.getElementById(`text-inputNode--${id}`);
    const todoRowNode = document.getElementById(`todo-row--${id}`);
    const dateNode = document.getElementById(`date--${id}`);
    const newText = inputNode.value;
    const modifiedTask = modifyToDoList(id, newText);
    dateNode.textContent = formatDate(modifiedTask.date);
    todoRowNode.classList.remove('disabled');
    inputNode.readOnly = true;
}

function modifyToDoList(selectedId, newText) {
    return todos.reduce((acc, obj) => {
        if (obj.id === selectedId) {
            obj.content = newText;
            obj.date = new Date();
            return obj;
        }
    }, {});
}

function handleCheckboxClick(id) {
    const todoRowNode = document.getElementById(`todo-row--${id}`);
    const deletedTask = removeTaskFromList(id, todos);
    const doneTaskNode = renderDoneTask(deletedTask);
    todoListNode.removeChild(todoRowNode);
    doneList.push(deletedTask);
    todoDoneListNode.appendChild(doneTaskNode);
    handleIfListIsEmpty();
}

function handleEditBtnClick(id) {
    const inputNode = document.getElementById(`text-inputNode--${id}`);
    const todoRowNode = document.getElementById(`todo-row--${id}`);
    todoRowNode.classList.add('disabled');
    inputNode.readOnly = false;
}

function removeFromTodoList(id) {
    const todoRowNode = document.getElementById(`todo-row--${id}`);
    todoListNode.removeChild(todoRowNode);
    removeTaskFromList(id, todos);
    handleIfListIsEmpty();
}

function removeFromDoneList(id) {
    const todoDoneRowNode = document.getElementById(`todo-done-row--${id}`);
    todoDoneListNode.removeChild(todoDoneRowNode);
    removeTaskFromList(id, doneList);
    handleIfListIsEmpty();
}

function removeTaskFromList(taskId, list) {
    return list.reduce((acc, obj, index) => {
        if (obj.id === taskId) {
            const task = { ...obj };
            list.splice(index, 1);
            return task;
        }
    }, {});
}

function handleIfListIsEmpty() {
    const isEmpty = isListEmpty();
    const isEmptyDivExist = todoListNode.contains(emptyNode);
    if (isEmpty) {
        todoListNode.appendChild(emptyNode);
    } else {
        if (isEmptyDivExist) todoListNode.removeChild(emptyNode);
    }
}

function createEmptyNode() {
    const emptyNode = document.createElement('div');
    emptyNode.textContent = '🤙🏿 Well Done You Completed All Tasks';
    emptyNode.classList.add('empty-list');
    return emptyNode;
}

function isListEmpty() {
    return !todos.length;
}

function setAlertToTask(targetId) {
    for (const task of todos) {
        if (task.id === targetId) alert(task.content);
    }
}

function setTimer(callback, ...args) {
    setTimeout(() => callback(...args), 10000);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = date.toLocaleString('en', { month: 'long' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day} ${month} ${year} ${hours}:${minutes}`;
}

window.addEventListener('load', () => {
    handleIfListIsEmpty();
});
