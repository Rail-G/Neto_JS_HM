const inputForm = document.getElementById('task__input');
const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list')

let todoItem = JSON.parse(localStorage.getItem('todoItem'))
if (Object.is(todoItem, null)) {
    todoItem = {}
}

for (let index = 0; index < (todoItem.length); index++) {
    taskList.insertAdjacentHTML('afterbegin', `<div class="task" data-index=${index}><div class="task__title">${todoItem[index]}</div><a class="task__remove">×</a></div>`);
}

taskList.addEventListener('click', (e) => {
    const taske = e.target.closest('.task')
    const taskTitle = taske.querySelector('.task__title');
    const text = taskTitle.textContent;
    let items = JSON.parse(localStorage.getItem('todoItem'));
    const existingItemIndex = items.indexOf(text);
    console.log(items.indexOf(text))
    if (existingItemIndex !== -1) {
        items.splice(existingItemIndex, 1);
        console.log(items)
    }
    localStorage.setItem(`todoItem`, JSON.stringify(items))
    taske.remove();
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (inputForm.value.trim() == '') {
        alert('Пустое значение не добавлю')
        return
    }
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskCloseBtn = document.createElement('a');

    task.classList.add('task');
    taskTitle.classList.add('task__title');
    taskCloseBtn.classList.add('task__remove');
    taskCloseBtn.textContent = '×';

    taskTitle.textContent = inputForm.value;

    task.appendChild(taskTitle);
    task.appendChild(taskCloseBtn);
    taskList.insertAdjacentElement('afterbegin', task);

    let todoItems = JSON.parse(localStorage.getItem('todoItem')) || [];
    todoItems.push(inputForm.value);
    localStorage.setItem(`todoItem`, JSON.stringify(todoItems));


    inputForm.value = '';

})


