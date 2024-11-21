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


// GPT 3.5 solve 

// const form = $('#signin__form');
// const welcome = $('#welcome');
// const xhr = $.ajax({
//     beforeSend: function(xhr) {
//         xhr.responseType = 'json';
//     }
// });

// function createUser(data) {
//     localStorage.setItem('user_id', data);
// }

// function getUser(data) {
//     const user = localStorage.getItem('user_id');
//     if (!user) {
//         createUser(data);
//     }
//     welcome.find('#user_id').text(data);
//     $('#signin').removeClass('signin_active');
//     welcome.addClass('welcome_active');
// }

// function getLoginedUser() {
//     const loginedUser = localStorage.getItem('user_id');
//     if (loginedUser) {
//         getUser(loginedUser);
//     }
// }

// getLoginedUser();

// form.on('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(form[0]);
//     $.ajax({
//         url: 'https://students.netoservices.ru/nestjs-backend/auth',
//         type: 'POST',
//         data: formData,
//         success: function(data) {
//             data.success === true ? getUser(data.user_id) : alert('Неверный логин/пароль');
//         },
//         error: function() {
//             alert('Ошибка соединения. Повторите запрос позже');
//         }
//     });
//     form[0].reset();
// });
