const inputForm = document.getElementById('task__input');
const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list')
let count = 0;

for (let index = 0; index < (localStorage.length + count); index++) {
    if (localStorage.getItem(`item${index}`) !== null) {
        taskList.insertAdjacentHTML('afterbegin', `<div class="task" data-index=${index}>${localStorage.getItem(`item${index}`)}</div>`);
    } else {
        ++count;
    }
}


taskList.addEventListener('click', (e) => {
    const taske = e.target.closest('.task');
    const id = taske.getAttribute('data-index');
    localStorage.removeItem(`item${id}`)
    taske.remove();
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
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
    while (localStorage.getItem(`item${newIndex}`) !== null) {
        newIndex++;
    }

    task.setAttribute('data-index', newIndex);
    localStorage.setItem(`item${newIndex}`, task.innerHTML)

    inputForm.value = '';

})
