const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome')
const xhr = new XMLHttpRequest();

function createUser(data) {
    localStorage.setItem('user_id', data)
}

function getUser(data) {
    const user = localStorage.getItem('user_id');
    if (!user) {
        createUser(data)
    }
    welcome.querySelector('#user_id').textContent = data
    document.getElementById('signin').classList.remove('signin_active')
    welcome.classList.add('welcome_active')
}

function getLoginedUser() {
    const loginedUser = localStorage.getItem('user_id')
    if (loginedUser) {
        getUser(loginedUser)
    }
}

getLoginedUser()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    xhr.responseType = 'json'
    xhr.send(formData)
    form.reset()
})

xhr.addEventListener('load', () => {
    const data = xhr.response
    data.success === true ? getUser(data.user_id) : alert('Неверный логин/пароль')
})

xhr.addEventListener('error', () => {
    alert('Ошибка соединения. Повторите запрос позже')
})