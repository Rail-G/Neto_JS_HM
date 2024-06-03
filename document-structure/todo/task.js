const inputForm = document.getElementById('task__input');
const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list')


for (let index = 0; index < (localStorage.getItem('length')); index++) {
    if (localStorage.getItem(`todo${index}`) !== null) {
        if (localStorage.getItem(`todo${index}`) !== null) {
            taskList.insertAdjacentHTML('afterbegin', `<div class="task" data-index=${index}><div class="task__title">${localStorage.getItem(`todo${index}`)}</div><a class="task__remove">×</a></div>`);
        } 
    } 
}

taskList.addEventListener('click', (e) => {
    const taske = e.target.closest('.task');
    const id = taske.getAttribute('data-index');
    localStorage.removeItem(`todo${id}`)
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

    let newIndex = 0;
    while (localStorage.getItem(`todo${newIndex}`) !== null) {
        newIndex++;
    }

    task.setAttribute('data-index', newIndex);
    localStorage.setItem(`todo${newIndex}`, inputForm.value)
    localStorage.setItem('length', localStorage.length)

    inputForm.value = '';

})

