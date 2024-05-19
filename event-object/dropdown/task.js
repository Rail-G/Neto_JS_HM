let valuesList = document.querySelector(" .dropdown__list")
let values = document.querySelector(".dropdown__value")
values.addEventListener('click', () => {
    valuesList.classList.add("dropdown__list_active");
})
let items = document.querySelectorAll(".dropdown__item")
let itemLink = document.querySelectorAll('.dropdown__link') 

function test(){
    return false
}
itemLink.forEach((item) => {
    // item.onclick = () => {return false}
    item.addEventListener('click', (event) => event.preventDefault())
})

items.forEach((item) => {
    item.addEventListener('click', () => {
        values.textContent = item.textContent
        valuesList.classList.remove("dropdown__list_active");
    })
})