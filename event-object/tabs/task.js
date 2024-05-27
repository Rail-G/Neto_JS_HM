let tabs = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content")

tabs.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.tab_active').classList.remove('tab_active')
        document.querySelector('.tab__content_active').classList.remove('tab__content_active')
        tabContent[index].classList.add('tab__content_active')
        item.classList.add("tab_active")

    })
})

