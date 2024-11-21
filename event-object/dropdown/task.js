// JavaScript

// const valuesList = document.querySelector(" .dropdown__list")
// const values = document.querySelector(".dropdown__value")
// values.addEventListener('click', () => {
//     valuesList.classList.toggle("dropdown__list_active");
// })
// const items = document.querySelectorAll(".dropdown__item")


// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault()
//         values.textContent = item.textContent
//         valuesList.classList.remove("dropdown__list_active");
//     })
// })

// // Jquery
const valueList = $('.dropdown__list')
const values = $('.dropdown__value')
values.on('click', () => {
    valueList.toggleClass('dropdown__list_active')
})

const items = $('.dropdown__item')

items.each((_, item) => {
    $(item).on('click', (e) => {
        e.preventDefault()
        values.text($(item).text())
        valueList.removeClass("dropdown__list_active")
    })
})