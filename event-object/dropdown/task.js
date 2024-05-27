const valuesList = document.querySelector(" .dropdown__list")
const values = document.querySelector(".dropdown__value")
values.addEventListener('click', () => {
    valuesList.classList.toggle("dropdown__list_active");
})
const items = document.querySelectorAll(".dropdown__item")


items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        values.textContent = item.textContent
        valuesList.classList.remove("dropdown__list_active");
    })
}) 